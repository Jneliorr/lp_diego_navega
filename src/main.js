import './style.css'
import { clinic, services, reviews, gallery } from './content'
import { createGoldenMist } from './webgl'

const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.4"/></svg>'
const waIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 20 1-4a8 8 0 1 1 3 3l-4 1Z" stroke="currentColor" stroke-width="1.5"/><path d="M9 8c0 4 3 7 6 7l1-2-2-1-1 1-2-2 1-1-1-2H9Z" fill="currentColor"/></svg>'
const star = '<span class="stars" aria-label="5 de 5 estrelas">★★★★★</span>'
const mark = '<svg class="monogram" viewBox="0 0 64 72" fill="none" aria-hidden="true"><path d="M12 7h5c35 0 35 48 0 48h-5V23l40 38V7" stroke="currentColor" stroke-width="1.4"/></svg>'
const brand = `<a href="#inicio" class="brand" aria-label="Dr. Diego Navega, início">${mark}<span>DR. DIEGO NAVEGA<small>ODONTOLOGIA INTEGRADA</small></span></a>`
const cta = (text = 'Agendar minha avaliação', cls = '') => `<a class="button ${cls}" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer"><span>${text}</span>${arrow}</a>`

document.querySelector('#app').innerHTML = `
  <header class="header" id="header">
    <div class="header-inner shell">${brand}
      <nav class="desktop-nav" aria-label="Navegação principal"><a href="#sobre">A clínica</a><a href="#servicos">Tratamentos</a><a href="#resultados">Resultados</a><a href="#avaliacoes">Depoimentos</a></nav>
      <a class="header-cta" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">Agende sua consulta ${arrow}</a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
    </div><div class="scroll-progress" aria-hidden="true"></div>
  </header>
  <nav id="mobile-menu" class="mobile-menu" aria-label="Navegação para celular" inert><a href="#sobre">A clínica</a><a href="#servicos">Tratamentos</a><a href="#resultados">Resultados</a><a href="#avaliacoes">Depoimentos</a><a href="#galeria">Galeria</a><a href="#contato">Onde estamos</a>${cta()}</nav>
  <main id="conteudo">
    <section class="hero" id="inicio">
      <canvas id="golden-mist" class="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-grid shell">
        <div class="hero-copy">
          <div class="eyebrow hero-enter"><span class="tiny-line"></span> ODONTOLOGIA COM PROPÓSITO · MARICÁ, RJ</div>
          <h1 class="hero-enter">A essência do<br>seu sorriso.<br><em>Em cada detalhe.</em></h1>
          <p class="hero-description hero-enter">Técnica para transformar.<br>Cuidado para valorizar quem você é.</p>
          <div class="hero-actions hero-enter">${cta()}<span class="cta-note">Seu próximo sorriso começa<br>com uma boa conversa.</span></div>
          <a class="hero-reviews hero-enter" href="#avaliacoes"><div class="review-avatars"><span>A</span><span>J</span><span>D</span></div><div>${star}<span><b>5,0 no Google</b> · 23 avaliações reais</span></div></a>
        </div>
        <div class="hero-portrait hero-enter">
          <div class="portrait-outline" aria-hidden="true"></div>
          <div class="portrait-image"><img src="/images/diego-retrato.jpg" alt="Dr. Diego Navega sorrindo, com blazer cinza, no retrato oficial da clínica" width="2928" height="2938" fetchpriority="high" /></div>
          <div class="portrait-caption"><span>Dr. Diego Navega<small>ENDODONTISTA · CRO/RJ 48217</small></span><span class="caption-signature">DN</span></div>
          <div class="portrait-seal" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="seal-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0"/></defs><text><textPath href="#seal-circle">TÉCNICA · CUIDADO · NATURALIDADE · </textPath></text></svg><span>✳</span></div>
        </div>
      </div>
      <div class="hero-bottom shell"><a href="#sobre"><span class="scroll-cue"></span> Conheça uma nova experiência</a><span>SAÚDE, ESTÉTICA E A SUA MELHOR VERSÃO.</span><span class="hero-coordinate">22°55′ S &nbsp; 42°49′ O</span></div>
    </section>
    <div class="values-strip" aria-label="Nossos valores"><div class="shell"><span>O seu sorriso é único.</span><i>✳</i><span>O cuidado também deve ser.</span><i>✳</i><span>Naturalidade em primeiro lugar.</span><i>✳</i></div></div>

    <section id="sobre" class="about section-pad">
      <div class="shell about-grid">
        <div class="about-visual reveal"><div class="image-label"><span>UM ESPAÇO PARA VOCÊ</span><span>01 / A CLÍNICA</span></div><img class="about-main" src="/images/consultorio.jpg" alt="Recepção real da clínica, com móveis de madeira, iluminação acolhedora e logotipo Dr. Diego Navega" width="408" height="544" loading="lazy"/><div class="about-note">Cuidado que você sente.<br><em>Desde a chegada.</em></div></div>
        <div class="about-copy"><p class="eyebrow reveal"><span class="tiny-line"></span> MUITO ALÉM DA ODONTOLOGIA</p><h2 class="reveal">Antes de cuidar<br>do seu sorriso,<br><em>cuidamos de você.</em></h2><p class="reveal">Um sorriso carrega histórias, encontros e a sua maneira de estar no mundo. Por isso, cada detalhe merece atenção.</p><p class="reveal">À frente da clínica em Maricá, o Dr. Diego Navega une seu trabalho em endodontia à dedicação à estética com lentes em resina. Um olhar que combina técnica e naturalidade para respeitar a identidade de cada sorriso.</p><div class="doctor-sign reveal"><span>Diego Navega</span><div>Dr. Diego Navega<small>Cirurgião-dentista · ${clinic.cro}</small></div></div><a class="text-link reveal" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">Vamos conversar sobre o seu sorriso ${arrow}</a></div>
      </div>
    </section>

    <section id="servicos" class="services section-pad">
      <div class="shell"><div class="section-heading"><div><p class="eyebrow reveal"><span class="tiny-line"></span> CUIDADO EM CADA ETAPA</p><h2 class="reveal">Saúde e beleza.<br><em>Em perfeita harmonia.</em></h2></div><p class="section-intro reveal">Conheça os tratamentos e descubra,<br class="desktop-only"> em uma avaliação, o que faz sentido para você.</p></div>
      <div class="services-grid"><div class="service-image-wrap reveal"><img id="service-image" src="${services[0].image}" alt="${services[0].alt}" width="640" height="628" loading="lazy"/><span class="service-image-tag">PRECISÃO NOS DETALHES. NATURALIDADE NO SORRISO.</span></div><div class="service-list">${services.map((s,i)=>`<div class="service-item ${i===0?'active':''} reveal"><button class="service-toggle" id="service-tab-${i}" aria-expanded="${i===0}" aria-controls="service-panel-${i}" data-service="${i}"><span class="service-number">0${i+1}</span><span>${s.name}<small>${s.tag}</small></span><span class="service-plus">+</span></button><div class="service-panel" id="service-panel-${i}" role="region" aria-labelledby="service-tab-${i}" ${i===0?'':'hidden'}><p>${s.text}</p><a class="text-link" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">Conversar sobre o tratamento ${arrow}</a></div></div>`).join('')}<div class="service-help reveal">Não sabe por onde começar?<br><a href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">A primeira conversa é sobre você. ${arrow}</a></div></div></div></div>
    </section>

    <section id="resultados" class="results section-pad"><div class="shell"><div class="section-heading"><div><p class="eyebrow reveal"><span class="tiny-line"></span> SORRISOS COM IDENTIDADE</p><h2 class="reveal">Pequenos detalhes.<br><em>Novas possibilidades.</em></h2></div><a href="${clinic.instagram}" class="text-link light-link reveal" target="_blank" rel="noopener noreferrer">Mais resultados no Instagram ${arrow}</a></div>
      <div class="results-grid"><article class="comparison-card reveal"><div class="compare" style="--split:50%"><div class="compare-after" role="img" aria-label="Depois do tratamento: fotografia real de lentes em resina"></div><div class="compare-before" role="img" aria-label="Antes do tratamento: fotografia real do mesmo caso"></div><span class="compare-label before-label">ANTES</span><span class="compare-label after-label">DEPOIS</span><div class="compare-line"><span>‹ &nbsp; ›</span></div><input type="range" min="0" max="100" value="50" aria-label="Comparar antes e depois do tratamento" /></div><div class="result-caption"><div><h3>A beleza de um sorriso natural</h3><p>Lentes em resina · Caso clínico real</p></div><span class="drag-hint">↔ &nbsp; Arraste para comparar</span></div></article><article class="second-result reveal"><button class="result-photo" data-case="/images/resultado-03.jpg" aria-label="Ampliar caso clínico de transformação com lentes em resina"><img src="/images/resultado-03.jpg" alt="Antes e depois real de um paciente com lentes em resina, publicado pelo Dr. Diego" width="480" height="640" loading="lazy"/><span class="expand-icon">${arrow}</span></button><div class="result-caption"><div><h3>Confiança para sorrir de novo</h3><p>Lentes em resina · Caso clínico real</p></div></div></article></div>
      <p class="results-disclaimer reveal">Registros publicados pelo Dr. Diego Navega. Cada paciente tem características e necessidades individuais; os resultados variam conforme o caso. Imagens sem alteração digital do resultado clínico.</p>
    </div></section>

    <section id="avaliacoes" class="testimonials section-pad"><div class="shell"><div class="section-heading"><div><p class="eyebrow reveal"><span class="tiny-line"></span> QUEM VIVE, RECOMENDA</p><h2 class="reveal">O melhor resultado?<br><em>A confiança de quem sorri.</em></h2></div><div class="google-rating reveal"><span class="google-word"><b>G</b> Google</span><div><strong>5,0</strong>${star}</div><span>23 avaliações de pacientes</span></div></div>
      <div class="review-masonry">${reviews.map((r,i)=>`<article class="review-card reveal ${r.color}"><div class="review-top">${star}<span class="google-g" aria-label="Google">G</span></div><blockquote>“${r.text}”</blockquote><div class="review-person"><span class="review-avatar">${r.initials}</span><div><h3>${r.name}</h3><small>Avaliação no Google</small></div><svg class="verified-icon" viewBox="0 0 24 24" aria-label="Avaliação publicada no Google"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor"/><path d="m8 12 3 3 5-6" stroke="currentColor" fill="none"/></svg></div></article>`).join('')}</div>
      <div class="review-footer reveal"><span>Depoimentos reais. Histórias que dão sentido ao nosso trabalho.</span><a class="text-link" href="${clinic.maps}" target="_blank" rel="noopener noreferrer">Ver todas as 23 avaliações ${arrow}</a></div>
    </div></section>

    <section id="galeria" class="gallery-section section-pad"><div class="shell"><div class="section-heading"><div><p class="eyebrow reveal"><span class="tiny-line"></span> NOSSO OLHAR, NOSSA ROTINA</p><h2 class="reveal">Por trás de<br><em>cada sorriso.</em></h2></div><div class="gallery-social reveal"><p>Um pouco do que acontece por aqui.</p><a class="text-link" href="${clinic.instagram}" target="_blank" rel="noopener noreferrer">@drdiegonavega ${arrow}</a></div></div><div class="gallery-filters reveal" role="group" aria-label="Filtrar galeria"><button class="active" data-filter="todos" aria-pressed="true">Todos os momentos</button><button data-filter="clinica" aria-pressed="false">A clínica</button><button data-filter="resultados" aria-pressed="false">Sorrisos</button><button data-filter="videos" aria-pressed="false">Vídeos <span>↗</span></button></div><div class="gallery-masonry">${gallery.map((g,i)=>`<button class="gallery-item reveal" data-gallery="${i}" data-category="${g.type}" aria-label="${g.type==='videos'?'Ver vídeo:':'Ampliar foto:'} ${g.title}"><img src="${g.src}" alt="${g.title}" width="${g.type==='clinica'?408:640}" height="${i===0?510:640}" loading="lazy"/><span class="gallery-shade"></span>${g.type==='videos'?'<span class="play-icon">▶</span>':''}<span class="gallery-item-caption"><small>${g.label}</small><strong>${g.title}</strong></span><span class="gallery-arrow">${arrow}</span></button>`).join('')}</div></div></section>

    <section class="invitation"><div class="shell invitation-inner"><p class="eyebrow reveal">SEU SORRISO MERECE ESSE CUIDADO.</p><h2 class="reveal">Vamos dar o primeiro passo <br><em>para o seu novo sorriso?</em></h2><p class="reveal">Uma conversa, um olhar atento e um plano pensado para você.</p><div class="reveal">${cta('Quero cuidar do meu sorriso')}</div><span class="invitation-star" aria-hidden="true">✳</span></div></section>

    <section id="contato" class="location section-pad"><div class="shell location-grid"><div><p class="eyebrow reveal"><span class="tiny-line"></span> PERTINHO DE VOCÊ</p><h2 class="reveal">Seu novo sorriso<br><em>tem endereço.</em></h2><div class="location-info reveal"><span class="contact-icon">⌖</span><div><h3>No coração de Maricá</h3><p>Rua Domício da Gama, 1014 · Sala 307<br>Centro, Maricá – RJ<br>CEP 24900-815</p></div></div><div class="location-info reveal">${waIcon}<div><h3>Vamos conversar?</h3><a href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer">${clinic.phone}</a><small>Agendamento e horários pelo WhatsApp</small></div></div><a class="button button-outline reveal" href="${clinic.directions}" target="_blank" rel="noopener noreferrer"><span>Como chegar</span>${arrow}</a></div><div class="map-wrap reveal"><iframe title="Localização da clínica Dr. Diego Navega no Google Maps, Centro de Maricá" src="https://maps.google.com/maps?q=Dr.%20Diego%20Navega%20Odontologia%20Integrada%20Maric%C3%A1&ll=-22.9197201,-42.8178756&z=17&output=embed" width="640" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="map-address" href="${clinic.maps}" target="_blank" rel="noopener noreferrer"><div>${mark}<span>Dr. Diego Navega<small>Centro · Maricá, RJ</small></span></div><span class="map-open">${arrow}</span></a></div></div></section>
  </main>
  <footer class="footer"><div class="shell"><div class="footer-main">${brand}<p>Técnica que transforma.<br><em>Naturalidade que encanta.</em></p><div><span>FALE COM A GENTE</span><a href="tel:+5521964787624">${clinic.phone}</a><a class="footer-instagram" href="${clinic.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${arrow}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Dr. Diego Navega. Todos os direitos reservados.</span><span>Dr. Diego Navega · ${clinic.cro}</span><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>
  <a class="floating-whatsapp" href="${clinic.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp">${waIcon}<span>Vamos conversar</span></a>
  <dialog class="lightbox" aria-label="Galeria de fotos e vídeos" id="lightbox"><button class="lightbox-close" aria-label="Fechar imagem">×</button><button class="lightbox-prev" aria-label="Foto anterior">‹</button><div class="lightbox-content"><img id="lightbox-image" alt=""/><video id="lightbox-video" controls playsinline preload="none" hidden aria-label="Vídeo de resultado clínico publicado pelo Dr. Diego Navega"></video><div class="lightbox-caption"><div><h3 id="lightbox-title"></h3><span id="lightbox-label"></span></div><a id="lightbox-source" class="text-link light-link" target="_blank" rel="noopener noreferrer">Ver publicação original ${arrow}</a></div></div><button class="lightbox-next" aria-label="Próxima foto">›</button></dialog>
`

const stopMist = createGoldenMist(document.querySelector('#golden-mist'))
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
const loader = document.querySelector('#loader')
// Deliberately time-bound: network images and third-party embeds cannot hold the loader open.
setTimeout(() => { loader.classList.add('leaving'); document.body.classList.add('is-ready'); setTimeout(()=>loader.remove(),500) }, reducedMotion.matches ? 100 : 1600)

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}
}),{threshold:.1,rootMargin:'0px 0px -25px 0px'})
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.setProperty('--delay',`${(i%3)*65}ms`);revealObserver.observe(el)})

const header=document.querySelector('#header')
let scrollTick=false
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;header.style.setProperty('--progress',`${max>0?scrollY/max*100:0}%`);header.classList.toggle('scrolled',scrollY>32);document.querySelector('.floating-whatsapp').classList.toggle('show-label',scrollY>innerHeight);scrollTick=false}
window.addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(updateScroll);scrollTick=true}},{passive:true});window.addEventListener('resize',updateScroll);updateScroll()

const menuToggle=document.querySelector('.menu-toggle'), mobileMenu=document.querySelector('#mobile-menu')
function setMenu(open){menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');mobileMenu.inert=!open;document.body.classList.toggle('menu-open',open)}
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'))
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)))
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-open')){setMenu(false);menuToggle.focus()}if(e.key==='Tab'&&document.body.classList.contains('menu-open')){const last=mobileMenu.querySelector('a:last-child');if(e.shiftKey&&document.activeElement===menuToggle){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();menuToggle.focus()}}})
matchMedia('(min-width: 1024px)').addEventListener('change',e=>{if(e.matches)setMenu(false)})

document.querySelectorAll('.service-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const index=Number(btn.dataset.service), wasOpen=btn.getAttribute('aria-expanded')==='true'
  document.querySelectorAll('.service-toggle').forEach(b=>{b.setAttribute('aria-expanded','false');b.closest('.service-item').classList.remove('active');document.getElementById(b.getAttribute('aria-controls')).hidden=true})
  if(!wasOpen){btn.setAttribute('aria-expanded','true');btn.closest('.service-item').classList.add('active');document.getElementById(btn.getAttribute('aria-controls')).hidden=false;const img=document.querySelector('#service-image');img.src=services[index].image;img.alt=services[index].alt}
}))
document.querySelector('.compare input').addEventListener('input',e=>e.target.closest('.compare').style.setProperty('--split',`${e.target.value}%`))

let activeFilter='todos'
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))})
  document.querySelectorAll('[data-gallery]').forEach(item=>{item.hidden=activeFilter!=='todos'&&item.dataset.category!==activeFilter;item.classList.add('visible')})
}))

const lightbox=document.querySelector('#lightbox');let lightboxIndex=0,lastFocus=null
function renderLightbox(index, custom){
  lightboxIndex=index;const item=custom||gallery[index]
  const image=document.querySelector('#lightbox-image'), video=document.querySelector('#lightbox-video')
  video.pause();video.removeAttribute('src');video.hidden=!item.video;image.hidden=Boolean(item.video)
  if(item.video){video.src=item.video;video.poster=item.src;video.load()}else{image.src=item.src;image.alt=item.title}
  document.querySelector('#lightbox-title').textContent=item.title;document.querySelector('#lightbox-label').textContent=item.label
  const source=document.querySelector('#lightbox-source');source.href=item.href;source.firstChild.textContent=item.type==='videos'?'Assistir ao vídeo no Instagram ':'Ver publicação original '
  const single=Boolean(custom)||gallery.filter(g=>activeFilter==='todos'||g.type===activeFilter).length<2
  document.querySelector('.lightbox-prev').hidden=single;document.querySelector('.lightbox-next').hidden=single
}
function openLightbox(index,custom){lastFocus=document.activeElement;renderLightbox(index,custom);lightbox.showModal();document.body.classList.add('dialog-open')}
function closeLightbox(){document.querySelector('#lightbox-video').pause();lightbox.close();document.body.classList.remove('dialog-open');lastFocus?.focus()}
function nextImage(direction){const visible=gallery.map((g,i)=>({g,i})).filter(({g})=>activeFilter==='todos'||g.type===activeFilter).map(({i})=>i);const current=visible.indexOf(lightboxIndex);renderLightbox(visible[(current+direction+visible.length)%visible.length])}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openLightbox(Number(b.dataset.gallery))))
document.querySelector('[data-case]').addEventListener('click',e=>openLightbox(1,{src:e.currentTarget.dataset.case,title:'Confiança para sorrir de novo',label:'Lentes em resina · Caso clínico real',href:gallery[1].href}))
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);document.querySelector('.lightbox-prev').addEventListener('click',()=>nextImage(-1));document.querySelector('.lightbox-next').addEventListener('click',()=>nextImage(1))
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});lightbox.addEventListener('cancel',e=>{e.preventDefault();closeLightbox()});lightbox.addEventListener('keydown',e=>{if(!document.querySelector('.lightbox-prev').hidden){if(e.key==='ArrowRight')nextImage(1);if(e.key==='ArrowLeft')nextImage(-1)}})

// Avoid broken image glyphs if a future content update references a missing asset.
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.classList.add('image-unavailable');img.alt='Imagem indisponível no momento'}))
if(import.meta.hot)import.meta.hot.dispose(()=>{stopMist();revealObserver.disconnect()})
