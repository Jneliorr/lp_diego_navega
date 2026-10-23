// Native WebGL: a domain-warped, layered light field. No image or video textures.
export function createGoldenMist(canvas) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' })
  if (!gl) { canvas.hidden = true; return () => {} }
  const vertex = `attribute vec2 a_position; void main(){gl_Position=vec4(a_position,0.,1.);}`
  const fragment = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_pointer;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){
      vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
      return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
    }
    float fbm(vec2 p){float v=0.;float a=.5;mat2 m=mat2(.8,-.6,.6,.8);
      for(int i=0;i<4;i++){v+=a*noise(p);p=m*p*2.03+vec2(3.1,1.7);a*=.5;}return v;
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/u_resolution;
      vec2 p=(uv-.5)*vec2(u_resolution.x/u_resolution.y,1.);
      float t=u_time*.035;
      p+=u_pointer*.035;
      vec2 q=vec2(fbm(p*1.15+vec2(t,-t*.6)),fbm(p*1.1+vec2(3.7,-t*.8)));
      vec2 r=vec2(fbm(p*1.1+q*1.8+vec2(1.7,t*.4)),fbm(p*1.05+q*1.6+vec2(8.3,-t*.5)));
      float field=fbm(p*1.1+r*1.8+vec2(t*.2,0.));
      float light=smoothstep(.21,.8,field);
      float bloom=exp(-length((p-vec2(.12,.05))*vec2(.85,1.25))*1.35);
      vec3 color=mix(vec3(.068,.079,.061),vec3(.43,.365,.23),light*.83);
      color+=vec3(.17,.115,.042)*bloom*(.35+field);
      float vignette=1.-smoothstep(.1,1.25,length(p*vec2(.65,1.)));
      color*=.62+.38*vignette;
      color+=(hash(gl_FragCoord.xy)-.5)*.011;
      gl_FragColor=vec4(color,1.);
    }`
  function compile(type, code) {
    const shader = gl.createShader(type); gl.shaderSource(shader, code); gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader))
    return shader
  }
  let program, vs, fs
  try {
    vs = compile(gl.VERTEX_SHADER, vertex); fs = compile(gl.FRAGMENT_SHADER, fragment)
    program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program))
  } catch (error) { console.warn('WebGL indisponível:', error.message); canvas.hidden = true; return () => {} }
  gl.useProgram(program)
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  const resolution = gl.getUniformLocation(program, 'u_resolution'), time = gl.getUniformLocation(program, 'u_time'), pointer = gl.getUniformLocation(program, 'u_pointer')
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  let frame, visible = true, lost = false, started = performance.now(), last = 0, mx = 0, my = 0, px = 0, py = 0
  function resize() {
    const rect = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5)
    canvas.width = Math.max(1, Math.round(rect.width*dpr*.8)); canvas.height = Math.max(1,Math.round(rect.height*dpr*.8))
    gl.viewport(0,0,canvas.width,canvas.height)
  }
  function draw(now) {
    if (visible && !document.hidden && !lost && now-last>32) {
      px+=(mx-px)*.025; py+=(my-py)*.025
      gl.uniform2f(resolution,canvas.width,canvas.height); gl.uniform1f(time,reduced.matches?0:(now-started)/1000); gl.uniform2f(pointer,px,py)
      gl.drawArrays(gl.TRIANGLES,0,6); last=now
    }
    if (!reduced.matches && visible && !document.hidden && !lost) frame=requestAnimationFrame(draw)
  }
  function restart(){cancelAnimationFrame(frame);draw(performance.now())}
  function move(e){mx=e.clientX/innerWidth-.5;my=.5-e.clientY/innerHeight}
  const sizeObserver=new ResizeObserver(()=>{resize();restart()});sizeObserver.observe(canvas)
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;restart()});observer.observe(canvas)
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;cancelAnimationFrame(frame);canvas.hidden=true})
  document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',restart)
  window.addEventListener('pointermove',move,{passive:true});resize();restart()
  return ()=>{cancelAnimationFrame(frame);sizeObserver.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',restart);reduced.removeEventListener('change',restart);window.removeEventListener('pointermove',move);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs)}
}
