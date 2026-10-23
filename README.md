# Dr. Diego Navega — landing page

Proposta comercial em **Vite + Tailwind CSS 4**, com JavaScript nativo e WebGL/GLSL. Conteúdo genérico autorizado para apresentação ao cliente e posterior validação.

## Executar

```bash
npm install
npm run dev
```

O servidor abre em `http://127.0.0.1:5173`. Para gerar os arquivos estáticos:

```bash
npm run build
npm run preview
```

O resultado fica em `dist/`, pronto para hospedagem estática. Node.js 20.19+ ou 22.12+.

## Recursos

- Abertura com monograma vetorial, fade-in e fade-out, em aproximadamente 2 segundos.
- Hero em duas colunas, com fotografia oficial e névoa dourada calculada em WebGL nativo. O shader usa ruído em camadas, domain warping, vinheta e granulação discreta; não utiliza vídeos, partículas ou gradientes CSS como substituto.
- Header fixo, menu mobile e borda que indica o progresso de leitura.
- Entradas ao rolar, com respeito a `prefers-reduced-motion`.
- Serviços em painéis acessíveis, com troca da imagem de apoio.
- Comparador de antes/depois operável por toque, mouse e teclado.
- Avaliações e galeria em colunas estilo Pinterest; filtros e visualizador com navegação e fechamento por Escape.
- Reel real hospedado localmente, com controles de reprodução no visualizador.
- Mapa incorporado, link de rotas, telefone e CTAs de WhatsApp.
- WebGL com resolução limitada e pausa quando o hero está fora da tela ou a aba está oculta. Fundo sólido como fallback se WebGL não estiver disponível.

## Editar conteúdo

- `src/content.js`: telefone, WhatsApp, links, nota, avaliações, serviços e itens da galeria.
- `src/main.js`: estrutura HTML e textos institucionais.
- `src/style.css`: paleta, composição e estilos responsivos. Tailwind é integrado pelo plugin oficial do Vite; utilitários podem ser usados junto aos estilos da composição.
- `src/webgl.js`: shader e ciclo de renderização.
- `public/images/`: fotos e vídeo, mantidos localmente para evitar links temporários de CDN.

## Referências e validação do cliente

Referências consultadas em 23/10/2026:

- Instagram: https://www.instagram.com/drdiegonavega/
- Apresentação oficial: https://bio.site/dr.diegonavega
- Google Maps: https://www.google.com/maps/place/?q=place_id:ChIJozsJWbeZ7ZkRiTnqRnoY99s
- Reel: https://www.instagram.com/drdiegonavega/reel/DVhIzbREZZS/

O Instagram confirma lentes em resina, endodontia e CRO/RJ 48217. Telefone e endereço foram conferidos na ficha do Google e o WhatsApp também na apresentação oficial. O monograma foi redesenhado em SVG a partir da identidade visível na clínica e nas publicações; pode ser substituído pelo arquivo vetorial oficial.

**Clareamento, implantes/próteses, ortodontia e prevenção são sugestões genéricas para a proposta**, e precisam ser validados antes da versão definitiva. O texto institucional é uma composição para a apresentação; não afirma tempo de atuação, formação adicional ou uma história empresarial não verificada.

O Google exibia 5,0 e 23 avaliações. Somente três relatos completos estavam disponíveis sem login: Adelaine Cardoso, Juliana Anastácio e Daniel Manhães. Foram transcritos com os nomes reais; o botão leva às demais avaliações no Google. Não há avaliações fictícias nem sincronização automática. Para adicionar os outros relatos, inclua os textos fornecidos pelo cliente no array `reviews`.

Fotos e vídeo foram obtidos dos perfis públicos indicados pelo usuário. Para a entrega definitiva, confirmar com o cliente os serviços, textos, identidade e materiais que serão usados.

## Verificações

Build de produção, revisão visual desktop/mobile e testes no navegador para menu, filtros, painéis, lightbox, comparador e player de vídeo.
