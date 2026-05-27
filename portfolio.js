/* ═══════════════════════════════════════════════
   ANDREY MIRANDA — Portfolio JS
═══════════════════════════════════════════════ */
/* ─── TWEAKS CONFIG ─────────────────────────── */
const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "gridSpeed": 0.55,
  "gridOpacity": 0.09,
  "cursorLag": 0.11,
  "heroVP": 0.28
}/*EDITMODE-END*/;
let T = { ...TWEAKS_DEFAULTS };

/* ─── WORK SECTION CONFIG ────────────────────── */
const WORK = {
  gridGap:    6,
  lbAnimDur:  0.52,
  lbAnimEase: 'power3.inOut',
  lbSlideOut: '-40%',
  lbSlideOutV: '-38%',
  lbScaleOut:  0.97,
};

const FORMAT_MAP = {
  '9x16': '9:16', '9:16': '9:16', 'story': '9:16', 'stories': '9:16',
  '16x9': '16:9', '16:9': '16:9',
  '4x5':  '4:5',  '4:5':  '4:5',  'feed':  '4:5',
  '1x1':  '1:1',  '1:1':  '1:1',  'square': '1:1',
};

const FRAME_CLASS = {
  '9:16': 'lb-frame--phone',
  '4:5':  'lb-frame--post',
  '16:9': 'lb-frame--wide',
  '1:1':  'lb-frame--square',
};
const FRAME_DEFAULT = 'lb-frame--post';

/* ─── i18n ──────────────────────────────────── */
const LANG = {
  pt: {
    'nav.work':        'Trabalhos',
    'nav.process':     'Processo',
    'nav.about':       'Sobre',
    'nav.blog':        'Blog',
    'nav.contact':     'Contato',

    'hero.tag1':       'Sports Designer',
    'hero.tag2':       'Motorsport · Futebol · Esports',
    'hero.line1':      'O que',
    'hero.line2':      'vamos',
    'hero.line3':      'criar hoje?',
    'hero.desc':       'Designer gráfico com quase 10 anos criando para marcas que exigem o máximo.',
    'hero.cta':        'Ver trabalhos →',
    'hero.available':  'Disponível para projetos',

    'clients.label':   'Clientes',

    'work.label':      'Trabalhos Selecionados',
    'work.t1':         'Trabalho',
    'work.t2':         'selecionado.',
    'work.lightbox':   'Ver no Behance →',

    'process.label':   'Processo',
    'process.t1':      'Como',
    'process.t2':      'trabalho.',
    'process.body':    '<p>Bons projetos não aparecem do nada. Alguém teve que levar a sério, desde a primeira conversa até o arquivo final. Cada detalhe que parece pequeno acaba aparecendo no resultado, pra bem ou pra mal. Ignorar isso é uma escolha, e geralmente uma ruim.</p><p>Quando um projeto chega, ele vira prioridade. Não porque é obrigação, mas porque é a única forma de fazer direito. Se algo não saiu como deveria, o caminho é trabalhar até ficar bom, não entregar pela metade e torcer pra ninguém notar. Lealdade ao projeto não é um diferencial, é só o padrão mínimo.</p><p>No fim, design é resolução de problema. Pode ser bonito, pode ter impacto, mas se não resolve o que precisa resolver, não serve. Essa é a parte que importa.</p>',

    'about.label':     'Sobre',
    'about.t1':        'Quase 10 anos',
    'about.t2':        'de design.',
    'about.p1':        'Design não aparece do nada, e designer também não. Comecei cedo, no Brasil, sem muito plano, só vontade. Quase 10 anos depois, estou trabalhando remotamente para a WePlay em Londres, produzindo visual para esportes e esports em escala global. Não foi sorte, foi escolha atrás de escolha.',
    'about.p2html':    'Paralelamente, atendo clientes freelance pela Europa e Américas. O esporte é onde me sinto em casa porque lá ninguém aceita mediano. A distância nunca foi obstáculo. O esforço compensa.',
    'about.s1':        'Projetos',
    'about.s2':        'Anos',
    'about.s3':        'Continentes',

    'blog.label':      'Blog',
    'blog.t1':         'O que',
    'blog.t2':         'eu penso.',
    'blog.read':       'Ler →',

    'contact.label':   'Contato',
    'contact.t1':      'Tem um',
    'contact.t2':      'projeto?',
    'contact.desc':    'Se chegou até aqui, provavelmente tem algo em mente. Me conta.',
    'contact.name':    'Nome',
    'contact.email':   'E-mail',
    'contact.msg':     'Mensagem',
    'contact.ph.name': 'Seu nome completo',
    'contact.ph.email':'seu@email.com',
    'contact.ph.msg':  'Me conta sobre seu projeto...',
    'contact.submit':  'Enviar mensagem',
    'contact.sending': 'Enviando...',
    'contact.ok':      '✓ Mensagem enviada! Entrarei em contato em breve.',
    'contact.err':     'Erro ao enviar. Tente novamente.',
    'form.err.name':   'Por favor, informe seu nome.',
    'form.err.email':  'Por favor, informe um e-mail válido.',
    'form.err.msg':    'Por favor, escreva sua mensagem.',
    'footer.copy':     '© 2026 Andrey Miranda',
    'footer.top':      '↑ Voltar ao topo',
    'lightbox.close':  'Fechar',
    'lightbox.prev':   '←',
    'lightbox.next':   '→',
    'ph.photo':        'foto do designer',
    'ph.project':      'imagem do projeto',
    'ph.blog':         'imagem do artigo',
  },
  en: {
    'nav.work':        'Work',
    'nav.process':     'Process',
    'nav.about':       'About',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    // Hero
    'hero.tag1':       'Sports Designer',
    'hero.tag2':       'Motorsport · Football · Esports',
    'hero.line1':      'What are we',
    'hero.line2':      'creating',
    'hero.line3':      'today?',
    'hero.desc':       'Graphic designer with almost 10 years creating for brands that demand the best.',
    'hero.cta':        'See work →',
    'hero.available':  'Available for projects',

    'clients.label':   'Clients',

    // Work
    'work.label':      'Selected Work',
    'work.t1':         'Selected',
    'work.t2':         'work.',
    'work.lightbox':   'View on Behance →',

    // Process
    'process.label':   'Process',
    'process.t1':      'How I',
    'process.t2':      'work.',
    'process.body':    '<p>Good projects don\'t appear out of nowhere. Someone had to take it seriously, from the first conversation to the final file. Every detail that seems small ends up showing in the result, for better or worse. Ignoring that is a choice, and usually a bad one.</p><p>When a project comes in, it becomes a priority. Not because it\'s an obligation, but because it\'s the only way to do it right. If something didn\'t turn out as it should, the path is to work until it\'s good, not deliver halfway and hope no one notices. Loyalty to the project isn\'t a differentiator, it\'s just the minimum standard.</p><p>In the end, design is problem-solving. It can be beautiful, it can have impact, but if it doesn\'t solve what needs to be solved, it doesn\'t work. That\'s the part that matters.</p>',

    // About — real story, human voice
    'about.label':     'About',
    'about.t1':        'Almost 10 years',
    'about.t2':        'of design.',
    'about.p1':        'Design doesn\'t appear out of nowhere, and neither do designers. I started early, in Brazil, without much of a plan, just drive. Almost 10 years later, I work remotely for WePlay in London, producing visuals for sports and esports at a global scale. It wasn\'t luck, it was one choice after another.',
    'about.p2html':    'On the side, I work with freelance clients across Europe and the Americas. Sport is where I feel at home because no one there accepts mediocre. Distance has never been an obstacle. The effort pays off.',
    'about.s1':        'Projects',
    'about.s2':        'Years',
    'about.s3':        'Continents',

    // Blog
    'blog.label':      'Blog',
    'blog.t1':         'What',
    'blog.t2':         'I think.',
    'blog.read':       'Read →',

    // Contact
    'contact.label':   'Contact',
    'contact.t1':      'Got a',
    'contact.t2':      'project?',
    'contact.desc':    'If you made it this far, you probably have something in mind. Let\'s talk.',
    'contact.name':    'Name',
    'contact.email':   'E-mail',
    'contact.msg':     'Message',
    'contact.ph.name': 'Your full name',
    'contact.ph.email':'your@email.com',
    'contact.ph.msg':  'Tell me about your project...',
    'contact.submit':  'Send message',
    'contact.sending': 'Sending...',
    'contact.ok':      '✓ Message sent! I\'ll get back to you soon.',
    'contact.err':     'Error sending. Please try again.',
    'form.err.name':   'Please enter your name.',
    'form.err.email':  'Please enter a valid email.',
    'form.err.msg':    'Please write your message.',
    'footer.copy':     '© 2026 Andrey Miranda',
    'footer.top':      '↑ Back to top',
    'lightbox.close':  'Close',
    'lightbox.prev':   '←',
    'lightbox.next':   '→',
    'ph.photo':        'designer photo',
    'ph.project':      'project image',
    'ph.blog':         'article image',
  }
};

let currentLang = localStorage.getItem('am_lang') || 'pt';
let blogPage    = 0;
const BLOG_PER_PAGE = 3;

function t(key) { return LANG[currentLang][key] || key; }

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('am_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = LANG[lang][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = LANG[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = LANG[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.l === lang);
  });

  // Re-render dynamic sections
  renderProjects();
  renderProcess();
  renderBlog();

  // Notify other pages (e.g. projeto.html) about language change
  window.dispatchEvent(new CustomEvent('amlangchange', { detail: lang }));
}

/* ─── DATA ───────────────────────────────────── */
const PROJECTS = [
  {
    num: '01', wide: false, gallery: false, aspect: '4/5', cardAspect: '4 / 5', cardFormat: '4:5', slug: 'motorsports', slideDir: 'h',
    cat:   { pt: 'Motorsport Design', en: 'Motorsport Design' },
    title: 'Motorsport Clients',
    caption: { pt: 'GT Motorsport — Fach Auto Tech & Herberth Motorsport.', en: 'GT Motorsport — Fach Auto Tech & Herberth Motorsport.' },
    cover: 'assets/projects/Motorsports/ADAC - R1 - FAT - Feed.jpg',
    images: [
      'assets/projects/Motorsports/ADAC - R1 - FAT - Feed.jpg',
      'assets/projects/Motorsports/HM_Circuit Barcelona_4x5.jpg',
      'assets/projects/Motorsports/ADAC - R4 - FAT - Feed.jpg',
      'assets/projects/Motorsports/ADAC - R6 - FAT - Feed.jpg',
      'assets/projects/Motorsports/HM_24HSpa_4x5.jpg',
      'assets/projects/Motorsports/New Year Fach 9x16.jpg',
    ],
    formats: ['4:5','4:5','4:5','4:5','4:5','9:16'],
    desc: { pt: 'Conteúdo visual para equipes de GT motorsport — Fach Auto Tech (ADAC GT Masters) e Herberth Motorsport. Composições cinematográficas para redes sociais e materiais de temporada na Europa.', en: 'Visual content for GT motorsport teams — Fach Auto Tech (ADAC GT Masters) and Herberth Motorsport. Cinematic compositions for social media and season materials across Europe.' },
    url: 'https://www.behance.net/gallery/213524895/Project-for-Leipert-Motorsports'
  },
  {
    num: '02', wide: false, gallery: false, aspect: '4/5', cardAspect: '4 / 5', cardFormat: '4:5', slug: 'xstadium', slideDir: 'h',
    cat:   { pt: 'Esports & Sports Media', en: 'Esports & Sports Media' },
    title: 'XStadium — WePlay',
    caption: { pt: 'Transmissão esportiva em VR — NHL, FIFA, US Open, IndyCar.', en: 'Sports VR streaming — NHL, FIFA, US Open, IndyCar.' },
    cover: 'assets/projects/Xtadium/XStadium_NHL in 180 VR 4x5.psd.jpg',
    images: [
      'assets/projects/Xtadium/XStadium_NHL in 180 VR 4x5.psd.jpg',
      'assets/projects/Xtadium/Club World Cup Immersive Highlights_4x5.jpg',
      'assets/projects/Xtadium/XStadium_US Open 4x5.jpg',
      'assets/projects/Xtadium/XStadium_Indy Car is in 180 VR 4x5.jpg',
    ],
    formats: ['4:5','4:5','4:5','4:5'],
    desc: { pt: 'Design para a plataforma XStadium de transmissão esportiva em VR — NHL, FIFA Club World Cup, US Open e IndyCar. Conteúdo para distribuição global em Meta Quest.', en: 'Design for XStadium sports VR streaming platform — NHL, FIFA Club World Cup, US Open and IndyCar. Content for global distribution on Meta Quest.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
  {
    num: '03', wide: false, gallery: false, aspect: '4/5', cardAspect: '9 / 16', cardFormat: '9:16', slug: 'emirates', slideDir: 'h',
    cat:   { pt: 'Brand Partnership', en: 'Brand Partnership' },
    title: 'Emirates',
    caption: { pt: 'Emirates × WePlay — Dubai, FA Cup, NBA, SailGP.', en: 'Emirates × WePlay — Dubai, FA Cup, NBA, SailGP.' },
    cover: 'assets/projects/Emirates/Emirates 3.jpg',
    images: [
      'assets/projects/Emirates/Emirates 3.jpg',
      'assets/projects/Emirates/WePlay_Emirates_FA Cup 2-2.jpg',
      'assets/projects/Emirates/NBA Test 10.jpg',
      'assets/projects/Emirates/SailGP_Winner.jpg',
    ],
    formats: ['9:16','9:16','9:16','9:16'],
    desc: { pt: 'Materiais visuais para a parceria Emirates × WePlay — cobrindo Dubai World Cup (corrida de cavalos), FA Cup Final, NBA All-Star e SailGP. Design que une elegância da marca com impacto esportivo.', en: 'Visual materials for the Emirates × WePlay partnership — covering Dubai World Cup (horse racing), FA Cup Final, NBA All-Star and SailGP. Design bridging brand elegance with sports impact.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
  {
    num: '04', wide: false, gallery: false, aspect: '4/5', cardAspect: '9 / 16', cardFormat: '9:16', slug: 'psg', slideDir: 'h',
    cat:   { pt: 'Football Design', en: 'Football Design' },
    title: 'PSG × Qatar Airways',
    caption: { pt: 'Campanha no FIFA Club World Cup 2025 e Champions d\'Europe.', en: 'Campaign for the FIFA Club World Cup 2025 and Champions d\'Europe.' },
    cover: 'assets/projects/PSG/PSG_Club world Cup 9x16.jpg',
    images: [
      'assets/projects/PSG/PSG_Club world Cup 16x9.jpg',
      'assets/projects/PSG/PSG_Club world Cup 9x16.jpg',
      'assets/projects/PSG/PSG_Club world Cup 1x1.jpg',
      "assets/projects/PSG/Champions d'Europe FR 9x16.jpg",
      "assets/projects/PSG/Champions d'Europe FR 1x1.jpg",
    ],
    formats: ['16:9','9:16','1:1','9:16','1:1'],
    desc: { pt: 'Campanha visual para o PSG no FIFA Club World Cup 2025 e "Champions d\'Europe" — criada para distribuição multi-formato em redes sociais. Arte dourada e cinematográfica representando o clube no maior palco do futebol.', en: 'Visual campaign for PSG at the 2025 FIFA Club World Cup and "Champions d\'Europe" — created for multi-format social media distribution. Golden cinematic artwork representing the club on football\'s biggest stage.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
  {
    num: '05', wide: true, gallery: false, aspect: '16/7', cardAspect: '16 / 9', cardFormat: '16:9', cardFormatExtras: ['4:5'], slug: 'iron-dames-motorsport', slideDir: 'h',
    cat:   { pt: 'Event Design', en: 'Event Design' },
    title: 'Iron Dames — Motorsport',
    caption: { pt: '"Duelling in the Dunes" — Iron Dames no Qatar 1812, Doha.', en: '"Duelling in the Dunes" — Iron Dames at Qatar 1812, Doha.' },
    cover: 'assets/projects/Iron Dames Motorsport/Doha Racing_Riders x Drivers 16x9.jpg',
    images: [
      'assets/projects/Iron Dames Motorsport/Doha Racing_Riders x Drivers 16x9.jpg',
      'assets/projects/Iron Dames Motorsport/Doha Racing_Riders x Drivers 9x16.jpg',
      'assets/projects/Iron Dames Motorsport/Doha Racing_Riders x Drivers 4x5.jpg',
      'assets/projects/Iron Dames Motorsport/Doha Racing 4x5.jpg',
    ],
    formats: ['16:9','9:16','4:5','4:5'],
    desc: { pt: 'Campanha "Duelling in the Dunes" para a Iron Dames — equipe feminina de endurance no WEC — para o Qatar 1812 em Doha. Composição multi-formato: 16:9, 9:16 e 4:5 para cobertura total nas redes sociais.', en: '"Duelling in the Dunes" campaign for Iron Dames — women\'s endurance team in the WEC — for the Qatar 1812 in Doha. Multi-format composition: 16:9, 9:16 and 4:5 for full social media coverage.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
  {
    num: '06', wide: false, gallery: true, aspect: '4/5', cardAspect: '4 / 5', cardFormat: '4:5', slug: 'iron-dames-equestrian', slideDir: 'v',
    cat:   { pt: 'Equestrian Design', en: 'Equestrian Design' },
    title: 'Iron Dames — Equestrian',
    caption: { pt: 'Hipismo mundial — Shanghai, Paris, Londres, Madri, Roma, NY.', en: 'World equestrian — Shanghai, Paris, London, Madrid, Rome, NY.' },
    cover: 'assets/projects/Iron Dames Equestrian/Shangahi Creative Artwork.jpg',
    images: [
      'assets/projects/Iron Dames Equestrian/Shangahi Creative Artwork.jpg',
      'assets/projects/Iron Dames Equestrian/ID_Event Announcement Static_Paris.jpg',
      'assets/projects/Iron Dames Equestrian/ID_Event Announcement Static_London.jpg',
      'assets/projects/Iron Dames Equestrian/ID_Event Announcement Static_Madrid.jpg',
      'assets/projects/Iron Dames Equestrian/ID_Event Announcement Static_Rome.jpg',
      'assets/projects/Iron Dames Equestrian/ID_Event Teaser Static_London.jpg',
      'assets/projects/Iron Dames Equestrian/NY_Teaser.jpg',
    ],
    formats: ['4:5','4:5','4:5','4:5','4:5','4:5','4:5'],
    desc: { pt: 'Série de posters de evento para a Iron Dames Equestrian — temporada completa do circuito mundial de hipismo: Xangai, Paris, Londres, Madri, Roma e Nova York. Identidade visual consistente com composições cinematográficas para cada cidade.', en: 'Event poster series for Iron Dames Equestrian — full season of the world equestrian circuit: Shanghai, Paris, London, Madrid, Rome and New York. Consistent visual identity with cinematic compositions for each city.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
  {
    num: '07', wide: false, gallery: false, aspect: '4/5', cardAspect: '4 / 5', cardFormat: '4:5', slug: 'uae-tour', slideDir: 'v',
    cat:   { pt: 'Cycling Design', en: 'Cycling Design' },
    title: 'UAE Tour — Cycling',
    caption: { pt: 'Giro, Tour de France, Tadej Pogačar — temporada UAE Tour.', en: 'Giro, Tour de France, Tadej Pogačar — UAE Tour season.' },
    cover: "assets/projects/Uae Tour/Giro D'Italia - Start of Giro.jpg",
    images: [
      "assets/projects/Uae Tour/Giro D'Italia - Start of Giro.jpg",
      'assets/projects/Uae Tour/Start of Tour de France.jpg',
      'assets/projects/Uae Tour/Tadej Pogacar bday.jpg',
      "assets/projects/Uae Tour/Giro D'Italia Woman - Start of Giro.jpg",
      'assets/projects/Uae Tour/SAocial Concept V1-2.jpg',
      'assets/projects/Uae Tour/Social Concept V1.jpg',
    ],
    formats: ['4:5','4:5','4:5','4:5','4:5','4:5'],
    desc: { pt: 'Design de redes sociais para o UAE Tour — cobrindo Giro d\'Italia, Tour de France, conteúdo especial para Tadej Pogačar e campanhas de temporada. Visual que capta a velocidade e drama do ciclismo de elite.', en: 'Social media design for UAE Tour — covering Giro d\'Italia, Tour de France, special content for Tadej Pogačar and season campaigns. Visuals that capture the speed and drama of elite cycling.' },
    url: 'https://www.behance.net/andreymirandaa'
  },
];

const STEPS = [
  {
    num: '01',
    title: { pt: 'Brief', en: 'Brief' },
    desc:  { pt: 'Entendo o projeto, a marca, o público e os objetivos. Quanto mais contexto você trouxer, melhor o resultado final.', en: 'Understanding the project, brand, audience and objectives. The more context you bring, the better the final result.' }
  },
  {
    num: '02',
    title: { pt: 'Conceito', en: 'Concept' },
    desc:  { pt: 'Mood board, referências visuais e direção criativa. Definimos o caminho antes de produzir uma linha.', en: 'Mood board, visual references and creative direction. We define the path before producing a single line.' }
  },
  {
    num: '03',
    title: { pt: 'Execução', en: 'Execution' },
    desc:  { pt: 'Produção do design em Photoshop e Illustrator. Foco total em qualidade cinemática, detalhes e consistência visual.', en: 'Design production in Photoshop and Illustrator. Full focus on cinematic quality, details and visual consistency.' }
  },
  {
    num: '04',
    title: { pt: 'Entrega', en: 'Delivery' },
    desc:  { pt: 'Revisões, arquivos finais em todos os formatos necessários e handoff completo. Você sai com tudo pronto para usar.', en: 'Revisions, final files in all required formats and complete handoff. You leave with everything ready to use.' }
  },
];

const POSTS = [
  {
    date: { pt: 'Abr 2026', en: 'Apr 2026' },
    title: { pt: 'Designers vs. IA: por que eu não estou preocupado', en: 'Designers vs. AI: why I\'m not worried' },
    excerpt: { pt: 'Todo mês surge uma nova ferramenta que vai "substituir designers". Mas o diferencial nunca foi o software — é o olhar treinado para o que funciona visualmente.', en: 'Every month there\'s a new tool that\'s going to "replace designers." But the edge was never the software — it\'s the trained eye for what actually works.' },
    url: 'https://www.linkedin.com/posts/andrey-miranda-a0bb9a1b4_every-month-theres-a-new-tool-thats-going-share-7453541098813046784-6tIU/',
    img: 'assets/blog/designers-vs-ai.jpg',
  },
  {
    date: { pt: 'Dez 2025', en: 'Dec 2025' },
    title: { pt: 'Monday night under the lights — Miami Invitational', en: 'Monday night under the lights — Miami Invitational' },
    excerpt: { pt: 'Por dentro da identidade visual completa do Miami Invitational: da motion a cada peça estática que levou o torneio ao próximo nível ao lado de Carlos Alcaraz.', en: 'Inside the full visual identity of the Miami Invitational: from motion to every static piece that elevated the tournament alongside Carlos Alcaraz.' },
    url: 'https://www.linkedin.com/posts/andrey-miranda-a0bb9a1b4_monday-night-under-the-lights-at-the-miami-activity-7407092823780438016-g-zp',
    img: 'assets/blog/miami-fonseca.jpg',
  },
  {
    date: { pt: 'Nov 2025', en: 'Nov 2025' },
    title: { pt: 'WePlay × Miami Invitational — identidade, mídia paga e ticketing', en: 'WePlay × Miami Invitational — identity, paid media & ticketing' },
    excerpt: { pt: 'Transformamos um estádio de baseball de Miami numa arena de tênis de alto nível. Alcaraz, Fonseca, Raducanu e Anisimova em campo — e toda a identidade visual e estratégia de mídia por trás disso.', en: 'We turned a Miami baseball stadium into a world-class tennis arena. Alcaraz, Fonseca, Raducanu and Anisimova on court — with the full visual identity and media strategy behind it.' },
    url: 'https://www.linkedin.com/posts/weplayco_want-to-see-the-worlds-best-tennis-players-activity-7389665168495894528-LvcO',
    img: 'assets/blog/weplay-miami.jpg',
  },
  {
    date: { pt: 'Out 2025', en: 'Oct 2025' },
    title: { pt: 'Experimentando pintura a óleo no sports design', en: 'Experimenting with oil painting texture in sports design' },
    excerpt: { pt: 'Me deparei com esse estilo em alguns designers e precisei testar. O resultado virou peças para US Open e FIFA Club World Cup dentro do XStadium VR.', en: 'I came across this style in a few designers\' work and had to try it. The result ended up as pieces for the US Open and FIFA Club World Cup inside XStadium VR.' },
    url: 'https://www.linkedin.com/posts/andrey-miranda-a0bb9a1b4_i-came-across-this-style-in-a-few-designers-activity-7382020616670851072-MtyG',
    img: 'assets/blog/oil-painting.jpg',
  },
  {
    date: { pt: 'Ago 2025', en: 'Aug 2025' },
    title: { pt: 'XStadium chega ao Reino Unido no Meta Quest', en: 'XStadium launches in the UK on Meta Quest' },
    excerpt: { pt: 'A WePlay entra como parceira oficial de marketing do XStadium no Reino Unido: experiências imersivas de VR com Wimbledon, X Games e PSG na temporada europeia.', en: 'WePlay becomes the official marketing partner for XStadium\'s UK launch: immersive VR experiences featuring Wimbledon, X Games and PSG\'s European season.' },
    url: 'https://www.linkedin.com/posts/weplayco_xtadium-launches-in-the-uk-as-the-official-ugcPost-7361775119200919554-_IPL',
    img: 'assets/blog/xtadium-uk.jpg',
  },
  {
    date: { pt: 'Jun 2025', en: 'Jun 2025' },
    title: { pt: 'PSG conquista a Champions League Feminina — impacto global', en: 'PSG wins the Women\'s Champions League — global impact' },
    excerpt: { pt: '3,3 milhões de novos seguidores, 2 bilhões de impressões e +1.000% de views no Instagram em uma semana. Estratégia de conteúdo localizada em 10 países para o maior momento do clube.', en: '3.3M new followers, 2 billion impressions and +1,000% Instagram views in one week. Localized content strategy across 10 countries for the club\'s biggest moment.' },
    url: 'https://www.linkedin.com/posts/paris-saint-germain_psg-uwcl-psgimpact-ugcPost-7338132141215506432-lgVg',
    img: 'assets/blog/psg-impact.png',
  },
];

/* ─── FORMAT DETECTION ───────────────────────── */
function detectImageFormat(imgPath, projectAspect) {
  const name = imgPath.toLowerCase();
  for (const [token, fmt] of Object.entries(FORMAT_MAP)) {
    if (name.includes(token)) return fmt;
  }
  if (projectAspect) {
    const norm = projectAspect.replace('/', ':');
    if (FRAME_CLASS[norm]) return norm;
  }
  return '4:5';
}

function lbGetFormat(projIdx, imgIdx) {
  const p = PROJECTS[projIdx];
  if (p.formats && p.formats[imgIdx]) return p.formats[imgIdx];
  const path = (p.images || [])[imgIdx] || p.cover || '';
  return detectImageFormat(path, p.aspect);
}

/* ─── RENDER: PROJECTS (v2) ───────────────────
   Cada card é uma "tela" cinética: cycle automático
   pelas imagens do projeto, bars de progresso estilo
   Stories. Click → página dedicada projeto.html?p=slug.
─────────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('workGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    // Filtrar imagens pelo formato do card: só as que batem entram no cycle.
    // cardFormat = formato principal (ex: '4:5'). cardFormatExtras = formatos
    // secundários aceitáveis (ex: ['1:1']). Se sobrar < 2 ainda, fallback pra todas.
    const allImgs = (p.images && p.images.length ? p.images : [p.cover]).filter(Boolean);
    let imgs = allImgs;
    if (p.cardFormat && p.formats && p.formats.length === allImgs.length) {
      const accepted = [p.cardFormat, ...(p.cardFormatExtras || [])];
      const matched = allImgs.filter((_, i) => accepted.includes(p.formats[i]));
      if (matched.length >= 2) imgs = matched;
    }
    const total = imgs.length;
    const ar = p.cardAspect || '4 / 5';
    const wideCls = p.wide ? ' work-item--wide' : '';

    const slides = imgs.map((src, i) => {
      const fmt = (p.formats && p.formats.length === allImgs.length)
        ? p.formats[allImgs.indexOf(src)]
        : null;
      // Detecta se essa imagem vai ser cropada no card e em qual eixo
      let panCls = '';
      if (fmt && p.cardFormat) {
        const aspectNum = s => { const [w, h] = s.split(':').map(Number); return w / h; };
        const cardAR = aspectNum(p.cardFormat);
        const imgAR  = aspectNum(fmt);
        if (Math.abs(imgAR - cardAR) > 0.02) {
          // imgAR > cardAR: imagem mais larga proporcional → cover cropa laterais → pan horizontal
          // imgAR < cardAR: imagem mais alta proporcional → cover cropa top/bottom → pan vertical
          panCls = imgAR > cardAR ? ' work-item__slide--pan-x' : ' work-item__slide--pan-y';
        }
      }
      return `<img class="work-item__slide${i === 0 ? ' is-active' : ''}${panCls}" src="${src}" alt="${p.title} \u2014 ${i + 1}" loading="lazy" decoding="async">`;
    }).join('');

    const bars = imgs.map((_, i) => `<span class="work-item__bar${i === 0 ? ' is-active' : ''}"><span class="work-item__bar-fill" data-bar="${i}"></span></span>`).join('');

    const caption = (p.caption && p.caption[currentLang]) || p.cat[currentLang];

    return `
    <article class="work-item${wideCls}" data-slug="${p.slug}" style="--ar: ${ar};">
      <a class="work-item__media" href="projeto.html?p=${p.slug}" aria-label="${p.title}">
        <div class="work-item__bars" aria-hidden="true">${bars}</div>
        <div class="work-item__inner">${slides}</div>
        <div class="work-item__hover" aria-hidden="true">
          <span class="work-item__hover-cta">${currentLang === 'pt' ? 'Ver projeto' : 'View project'}</span>
          <span class="work-item__counter" data-counter><span data-counter-cur>01</span>/<span data-counter-tot>${String(total).padStart(2, '0')}</span></span>
        </div>
      </a>
      <div class="work-item__meta">
        <h3 class="work-item__title">${p.title}</h3>
        <p class="work-item__caption">${caption}</p>
      </div>
    </article>`;
  }).join('');

  bindCursorHover(grid.querySelectorAll('.work-item__media'));
  initWorkCycle();
  initWorkParallax();
}

/* ─── RENDER: PROCESS ────────────────────────── */
function renderProcess() {
  const el = document.getElementById('processSteps');
  if (!el) return;
  el.innerHTML = `<div class="process__body">${t('process.body')}</div>`;
}

/* ─── RENDER: BLOG ───────────────────────────── */
function renderBlog() {
  const el = document.getElementById('blogGrid');
  if (!el) return;
  const start = blogPage * BLOG_PER_PAGE;
  const page  = POSTS.slice(start, start + BLOG_PER_PAGE);
  el.innerHTML = page.map(p => `
    <article class="blog-card">
      <a href="${p.url || '#'}" class="blog-card__image-wrap" target="_blank" rel="noopener noreferrer">
        ${p.img
          ? `<img src="${p.img}" alt="${p.title[currentLang]}" loading="lazy" decoding="async">`
          : `<div class="ph"><span class="ph__label">${t('ph.blog')}</span></div>`}
      </a>
      <div class="blog-card__body">
        <span class="blog-card__date">${p.date[currentLang]}</span>
        <h3 class="blog-card__title"><a href="${p.url || '#'}" target="_blank" rel="noopener noreferrer">${p.title[currentLang]}</a></h3>
        <p class="blog-card__excerpt">${p.excerpt[currentLang]}</p>
        <a href="${p.url || '#'}" class="blog-card__link" target="_blank" rel="noopener noreferrer">${t('blog.read')}</a>
      </div>
    </article>
  `).join('');
  updateBlogNav();
}

function updateBlogNav() {
  const prevBtn = document.getElementById('blogPrev');
  const nextBtn = document.getElementById('blogNext');
  const counter = document.getElementById('blogNavCounter');
  if (!prevBtn || !nextBtn) return;
  const totalPages = Math.ceil(POSTS.length / BLOG_PER_PAGE);
  prevBtn.disabled = blogPage === 0;
  nextBtn.disabled = blogPage >= totalPages - 1;
  if (counter) counter.textContent = `${blogPage + 1} / ${totalPages}`;
}

function renderBlogAnimated(dir) {
  const el = document.getElementById('blogGrid');
  if (!el || typeof gsap === 'undefined') { renderBlog(); return; }
  gsap.to(el, {
    opacity: 0, x: dir * 28, duration: 0.18, ease: 'power2.in',
    onComplete: () => {
      renderBlog();
      gsap.fromTo(el,
        { opacity: 0, x: -dir * 28 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  });
}

function initBlogNav() {
  const totalPages = Math.ceil(POSTS.length / BLOG_PER_PAGE);
  if (totalPages <= 1) return;
  const grid = document.getElementById('blogGrid');
  if (!grid || document.getElementById('blogNav')) return;
  const nav = document.createElement('div');
  nav.className = 'blog__nav';
  nav.id = 'blogNav';
  nav.innerHTML = `
    <span class="blog__nav-counter" id="blogNavCounter">1 / ${totalPages}</span>
    <div class="blog__nav-btns">
      <button class="blog__nav-btn" id="blogPrev" aria-label="Posts anteriores">←</button>
      <button class="blog__nav-btn" id="blogNext" aria-label="Próximos posts">→</button>
    </div>`;
  grid.parentNode.insertBefore(nav, grid);
  document.getElementById('blogPrev').addEventListener('click', () => {
    if (blogPage > 0) { blogPage--; renderBlogAnimated(-1); }
  });
  document.getElementById('blogNext').addEventListener('click', () => {
    if (blogPage < totalPages - 1) { blogPage++; renderBlogAnimated(1); }
  });
  updateBlogNav();
}

/* ─── HERO CANVAS ────────────────────────────── */
let heroCanvasRaf = null; // exposed for cancellation

function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  let offset = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';
    ctx.scale(dpr, dpr);
    W = cssW;
    H = cssH;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const vx = W / 2;
    const vy = H * T.heroVP;

    // Radial perspective lines
    const rays = 16;
    for (let i = 0; i <= rays; i++) {
      const t = i / rays;
      const angle = Math.PI * t;
      const ex = vx + Math.cos(angle) * W * 1.6;
      const ey = vy + Math.sin(angle) * H * 1.4;
      const alpha = T.gridOpacity * Math.sin(Math.PI * t) * 1.4;
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Horizontal lines moving toward viewer
    const hLines = 14;
    for (let i = 0; i < hLines; i++) {
      const raw = ((i / hLines) + offset) % 1;
      const perspective = Math.pow(raw, 1.8);
      const y = vy + (H - vy) * perspective;
      if (y < vy) continue;
      const fraction = (y - vy) / (H - vy);
      const hw = fraction * W * 0.82;
      const alpha = T.gridOpacity * fraction * 1.6;
      ctx.beginPath();
      ctx.moveTo(vx - hw, y);
      ctx.lineTo(vx + hw, y);
      ctx.strokeStyle = `rgba(255,255,255,${Math.min(alpha, T.gridOpacity * 1.8).toFixed(3)})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Subtle horizontal scan line
    const scanY = (Date.now() * 0.00015) % 1;
    const sy = vy + (H - vy) * scanY;
    const sfrac = (sy - vy) / (H - vy);
    const shw = sfrac * W * 0.82;
    ctx.beginPath();
    ctx.moveTo(vx - shw, sy);
    ctx.lineTo(vx + shw, sy);
    ctx.strokeStyle = `rgba(255,255,255,${(T.gridOpacity * sfrac * 2.5).toFixed(3)})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    offset = (offset + 0.0003 * T.gridSpeed) % 1;
    heroCanvasRaf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

/* ─── CUSTOM CURSOR ──────────────────────────── */
let ringX = 0, ringY = 0;
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring || window.matchMedia('(hover:none)').matches) return;

  let mx = 0, my = 0, raf;

  const darkEls = () => [
    document.getElementById('header'),
    document.getElementById('hero'),
    document.getElementById('sobre'),
    document.getElementById('processo'),
    document.querySelector('.clients'),
    document.querySelector('.footer'),
    document.querySelector('.lightbox'),
  ].filter(Boolean);

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    if (!raf) raf = requestAnimationFrame(animRing);
    const el = document.elementFromPoint(mx, my);
    const inDark = darkEls().some(s => s && s.contains(el));
    document.body.classList.toggle('cursor-light', inDark);
  });

  function animRing() {
    ringX += (mx - ringX) * T.cursorLag;
    ringY += (my - ringY) * T.cursorLag;
    ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
    raf = null;
    if (Math.abs(mx - ringX) > 0.05 || Math.abs(my - ringY) > 0.05) {
      raf = requestAnimationFrame(animRing);
    }
  }

  document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
  bindCursorHover(document.querySelectorAll('a, button, .skill-tag'));
}

function bindCursorHover(els) {
  const ring = document.getElementById('cursor-ring');
  if (!ring) return;
  els.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });
}

/* ─── LIGHTBOX ───────────────────────────────── */
let lbCurrentIdx = 0;
let lbImgIdx     = 0;
let lbAnimating  = false;

/* Animate to a new image within the current project */
function lbGoToImage(newIdx, instant) {
  const p    = PROJECTS[lbCurrentIdx];
  const imgs = p.images || [];
  if (newIdx < 0 || newIdx >= imgs.length || newIdx === lbImgIdx) return;

  const dir    = newIdx > lbImgIdx ? 1 : -1;
  const isH    = (p.slideDir || 'h') !== 'v';
  const viewer = document.querySelector('.lb__viewer');
  if (!viewer) return;
  if (lbAnimating && !instant) return;
  lbAnimating = true;

  const oldImg = viewer.querySelector('.lb__img');
  const newImg = document.createElement('img');
  newImg.className    = 'lb__img';
  newImg.alt          = p.title;
  newImg.src          = imgs[newIdx];
  newImg.decoding     = 'async';
  viewer.appendChild(newImg);

  const done = () => {
    oldImg?.remove();
    lbImgIdx    = newIdx;
    lbAnimating = false;
    // Update frame class to match new image format
    const newFmt   = lbGetFormat(lbCurrentIdx, newIdx);
    const newFrame = FRAME_CLASS[newFmt] || FRAME_DEFAULT;
    const viewerEl = document.querySelector('.lb__viewer');
    if (viewerEl) viewerEl.className = 'lb__viewer ' + newFrame;
    // Update thumbs
    document.querySelectorAll('.lb__thumb').forEach((btn, i) => {
      btn.classList.toggle('lb__thumb--active', i === newIdx);
      if (i === newIdx) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
    });
  };

  if (instant || typeof gsap === 'undefined') {
    oldImg?.remove(); lbImgIdx = newIdx; lbAnimating = false; return;
  }

  if (isH) {
    // Slide horizontal — new image pushes in from the side
    gsap.set(newImg, { x: dir > 0 ? '100%' : '-100%' });
    gsap.to(oldImg,  { x: dir > 0 ? '-38%' : '38%', opacity: 0.25, duration: 0.55, ease: 'power3.inOut' });
    gsap.to(newImg,  { x: '0%', duration: 0.55, ease: 'power3.inOut', onComplete: done });
  } else {
    // Slide vertical — new image rises/drops into view
    gsap.set(newImg, { y: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.97 });
    gsap.to(oldImg,  { y: dir > 0 ? '-35%' : '35%', opacity: 0, scale: 0.97, duration: 0.48, ease: 'power3.inOut' });
    gsap.to(newImg,  { y: '0%', opacity: 1, scale: 1, duration: 0.52, ease: 'power3.out', delay: 0.06, onComplete: done });
  }
}

function openLightbox(projIdx, imgIdx) {
  if (imgIdx === undefined) imgIdx = 0;
  lbCurrentIdx = projIdx;
  lbImgIdx     = imgIdx;
  lbAnimating  = false;

  const p    = PROJECTS[projIdx];
  const imgs = p.images || [];

  // Info panel
  document.getElementById('lbNum').textContent     = p.num;
  document.getElementById('lbCat').textContent     = p.cat[currentLang];
  document.getElementById('lbTitle').textContent   = p.title;
  document.getElementById('lbDesc').textContent    = p.desc[currentLang];
  document.getElementById('lbLink').href           = p.url;
  document.getElementById('lbLink').textContent    = t('work.lightbox');
  document.getElementById('lbCounter').textContent = `${projIdx + 1} / ${PROJECTS.length}`;

  if (imgs.length > 0) {
    const fmt        = lbGetFormat(projIdx, imgIdx);
    const frameClass = FRAME_CLASS[fmt] || FRAME_DEFAULT;

    const filmstripHtml = imgs.length > 1 ? `
      <div class="lb__filmstrip">
        ${imgs.map((src, i) => {
          const fmtThumb = lbGetFormat(projIdx, i);
          return `<button class="lb__thumb${i === imgIdx ? ' lb__thumb--active' : ''}" data-idx="${i}" data-fmt="${fmtThumb}" aria-label="Imagem ${i + 1}">
            <img src="${src}" alt="" loading="lazy" decoding="async">
          </button>`;
        }).join('')}
      </div>` : '';

    document.getElementById('lbMedia').innerHTML = `
      <div class="lb__stage">
        <div class="lb__viewer ${frameClass}">
          <img class="lb__img" src="${imgs[imgIdx]}" alt="${p.title}" loading="eager" decoding="async">
        </div>
      </div>
      ${filmstripHtml}`;

    document.querySelectorAll('.lb__thumb').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        lbGoToImage(parseInt(btn.dataset.idx, 10));
      });
    });
  } else {
    document.getElementById('lbMedia').innerHTML =
      `<div class="ph ph--dark" style="height:100%"><span class="ph__label ph__label--dark">${t('ph.project')} — ${p.title}</span></div>`;
  }

  document.getElementById('lbBackdrop').classList.add('is-open');
  document.getElementById('lightbox').classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightbox').focus();
}

function closeLightbox() {
  document.getElementById('lbBackdrop').classList.remove('is-open');
  document.getElementById('lightbox').classList.remove('is-open');
  document.body.style.overflow = '';
  lbAnimating = false;
}

function navLightbox(dir) {
  lbCurrentIdx = (lbCurrentIdx + dir + PROJECTS.length) % PROJECTS.length;
  openLightbox(lbCurrentIdx);
}

function initLightbox() {
  const closeBtn = document.getElementById('lbClose');
  const backdrop = document.getElementById('lbBackdrop');
  const lightbox = document.getElementById('lightbox');
  if (!closeBtn || !backdrop || !lightbox) return; // não existe nesta página

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  // lbPrev/lbNext navigate between PROJECTS
  document.getElementById('lbPrev').addEventListener('click', () => navLightbox(-1));
  document.getElementById('lbNext').addEventListener('click', () => navLightbox(1));
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('is-open')) return;
    if (e.key === 'Escape') { closeLightbox(); return; }
    const imgs = (PROJECTS[lbCurrentIdx].images || []);
    // Arrow keys navigate images first, then spill to next project
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (lbImgIdx > 0) lbGoToImage(lbImgIdx - 1);
      else navLightbox(-1);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (lbImgIdx < imgs.length - 1) lbGoToImage(lbImgIdx + 1);
      else navLightbox(1);
    }
  });
  bindCursorHover(document.querySelectorAll('#lightbox button, #lightbox a'));
}

/* ─── MOBILE MENU ────────────────────────────── */
function initMobileMenu() {
  const btn  = document.querySelector('.nav__menu-btn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('is-active');
    btn.setAttribute('aria-expanded', open);
    menu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('is-active');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
}

/* ─── LANG TOGGLE ────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.querySelectorAll('.lang-toggle__opt').forEach(opt => {
      opt.addEventListener('click', () => applyLang(opt.dataset.l));
    });
  });
}

/* ─── SCROLL: HEADER + PROGRESS ─────────────── */
function initHeader() {
  const header = document.getElementById('header');
  const root   = document.documentElement;
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
    // Scroll progress bar
    const max = root.scrollHeight - root.clientHeight;
    if (max > 0) root.style.setProperty('--scroll-progress', (window.scrollY / max).toFixed(4));
  }, { passive: true });
}

/* ─── WORK CYCLE — auto-play das imagens ──────
   Cada card faz cycle automático pelas suas imagens,
   com progress bars estilo Stories. Acelera no hover,
   pausa quando fora do viewport, respeita reduced-motion.
─────────────────────────────────────────────── */
const _workCycles = new WeakMap();

function initWorkCycle() {
  // Cleanup ciclos antigos (no caso de re-render via lang change)
  document.querySelectorAll('.work-item').forEach(item => {
    const old = _workCycles.get(item);
    if (old) { clearTimeout(old.timer); old.io?.disconnect(); }
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SLOW = 5200;   // ms por imagem em estado normal
  const FAST = 1700;   // ms por imagem no hover

  document.querySelectorAll('.work-item').forEach(item => {
    const slides = item.querySelectorAll('.work-item__slide');
    const bars   = item.querySelectorAll('.work-item__bar-fill');
    const counterCur = item.querySelector('[data-counter-cur]');
    if (slides.length < 2) return;

    let idx = 0;
    let timer = null;
    let isHover = false;
    let isVisible = false;

    function paint() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      // Bar parent ganha .is-active (glow); is-done = passou; sem class = futuro
      item.querySelectorAll('.work-item__bar').forEach((bar, i) => {
        bar.classList.toggle('is-active', i === idx);
      });
      // Reset todas as bars: completas até idx-1, vazias depois
      bars.forEach((b, i) => {
        b.style.transition = 'none';
        b.style.width = i < idx ? '100%' : '0%';
      });
      // Força reflow para que a próxima transition seja aplicada
      if (bars[idx]) {
        void bars[idx].offsetWidth;
        const dur = isHover ? FAST : SLOW;
        bars[idx].style.transition = `width ${dur}ms linear`;
        bars[idx].style.width = '100%';
      }
      // Counter slide-up suave
      if (counterCur) {
        const newVal = String(idx + 1).padStart(2, '0');
        if (counterCur.textContent !== newVal) {
          counterCur.classList.add('is-changing');
          setTimeout(() => {
            counterCur.textContent = newVal;
            counterCur.classList.remove('is-changing');
          }, 180);
        }
      }
    }

    function schedule() {
      clearTimeout(timer);
      if (!isVisible || reduced) return;
      const dur = isHover ? FAST : SLOW;
      timer = setTimeout(() => {
        idx = (idx + 1) % slides.length;
        paint();
        schedule();
      }, dur);
    }

    item.addEventListener('mouseenter', () => { isHover = true; paint(); schedule(); });
    item.addEventListener('mouseleave', () => { isHover = false; paint(); schedule(); });

    // ─── TOUCH: hold pausa, soltar resume ──────
    // - Tap rápido (<180ms) NÃO pausa — deixa o link <a> navegar
    // - Scroll (touchmove) cancela o hold antes de pausar
    // - Pausa freeza a bar visualmente; resume continua do ponto
    let touchHoldTimer = null;
    let isTouchPaused = false;
    let pauseStartedAt = 0;
    let barTimeAtPause = 0;  // ms já decorridos da bar atual

    function freezeBar() {
      const activeBar = bars[idx];
      if (!activeBar) return;
      const computed = getComputedStyle(activeBar).width;
      activeBar.style.transition = 'none';
      activeBar.style.width = computed;
    }
    function resumeBar() {
      const activeBar = bars[idx];
      if (!activeBar) return;
      const container = activeBar.parentElement;
      const fullW = container.clientWidth;
      const currentW = parseFloat(getComputedStyle(activeBar).width);
      const pctDone = Math.min(1, currentW / fullW);
      const dur = isHover ? FAST : SLOW;
      const remaining = Math.max(50, dur * (1 - pctDone));
      void activeBar.offsetWidth;
      activeBar.style.transition = `width ${remaining}ms linear`;
      activeBar.style.width = '100%';
      // Próxima troca de slide acontece quando a bar terminar
      clearTimeout(timer);
      timer = setTimeout(() => {
        idx = (idx + 1) % slides.length;
        paint();
        schedule();
      }, remaining);
    }

    item.addEventListener('touchstart', () => {
      touchHoldTimer = setTimeout(() => {
        isTouchPaused = true;
        clearTimeout(timer);
        freezeBar();
      }, 180);
    }, { passive: true });

    item.addEventListener('touchmove', () => {
      // Scroll detectado: cancela o hold (evita pausar acidentalmente)
      clearTimeout(touchHoldTimer);
    }, { passive: true });

    item.addEventListener('touchend', () => {
      clearTimeout(touchHoldTimer);
      if (isTouchPaused) {
        isTouchPaused = false;
        resumeBar();
      }
    }, { passive: true });

    item.addEventListener('touchcancel', () => {
      clearTimeout(touchHoldTimer);
      if (isTouchPaused) {
        isTouchPaused = false;
        resumeBar();
      }
    }, { passive: true });

    const io = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) { paint(); schedule(); }
      else clearTimeout(timer);
    }, { threshold: 0.3 });
    io.observe(item);

    _workCycles.set(item, { timer, io });

    // Pintura inicial (estado parado, bar 0 começa a preencher quando ficar visível)
    paint();
  });
}

/* ─── WORK PARALLAX — magnetic inverso ───────
   Imagem se desloca SUTILMENTE na direção oposta ao cursor
   dentro do card, criando profundidade. rAF-throttled.
─────────────────────────────────────────────── */
function initWorkParallax() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.work-item').forEach(item => {
    const inner = item.querySelector('.work-item__inner');
    if (!inner) return;

    let raf = null;
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;
    const MAX_X = 10; // px
    const MAX_Y = 8;

    function loop() {
      curX += (targetX - curX) * 0.16;
      curY += (targetY - curY) * 0.16;
      inner.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0) scale(${Math.abs(curX) + Math.abs(curY) > 0.5 ? 1.025 : 1})`;
      if (Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }

    function start() {
      if (!raf) raf = requestAnimationFrame(loop);
    }

    item.addEventListener('mousemove', e => {
      const r = item.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;   // -0.5..0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      targetX = -nx * 2 * MAX_X;
      targetY = -ny * 2 * MAX_Y;
      start();
    });

    item.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      start();
    });
  });
}

/* ─── SCROLL: ANCHOR ─────────────────────────── */
function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ─── GSAP ANIMATIONS ────────────────────────── */
function initAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero__line', { y: '105%', duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.1 });
  gsap.from('.hero__eyebrow', { opacity: 0, y: 18, duration: 0.9, ease: 'power3.out', delay: 0.15 });
  gsap.from('.hero__bottom',  { opacity: 0, y: 22, duration: 0.9, ease: 'power3.out', delay: 0.55 });
  gsap.from('.hero__scroll-hint', { opacity: 0, duration: 1, ease: 'power2.out', delay: 1.1 });
  gsap.to('.hero__cutout', { opacity: 1, duration: 2.0, ease: 'power2.out', delay: 0.4 });
  gsap.from('.hero__tool', { opacity: 0, scale: 0.55, y: 10, duration: 0.55, stagger: { amount: 0.75, from: 'random' }, ease: 'back.out(2.5)', delay: 1.5 });

  // Client logos stagger
  gsap.utils.toArray('.client-logo').forEach((logo, i) => {
    gsap.fromTo(logo,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.65,
        ease: 'power3.out',
        delay: i * 0.06,
        scrollTrigger: { trigger: '.clients__grid', start: 'top 85%', once: true }
      }
    );
  });

  // Section labels
  gsap.utils.toArray('.section-label').forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 88%' }, opacity: 0, y: 14, duration: 0.7, ease: 'power3.out' });
  });

  // Title line reveals
  gsap.utils.toArray('.title-line').forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el.closest('.section-title') || el, start: 'top 85%' }, y: '105%', duration: 1.0, ease: 'power4.out', delay: 0.05 });
  });

  // Work items — clip-path reveal + meta stagger (entrance sofisticada)
  gsap.utils.toArray('.work-item').forEach((card, i) => {
    const media = card.querySelector('.work-item__media');
    const meta  = card.querySelectorAll('.work-item__title, .work-item__caption');
    const baseDelay = (i % 2) * 0.08;

    if (media) {
      gsap.fromTo(media,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.15, ease: 'power4.out',
          delay: baseDelay,
          scrollTrigger: { trigger: card, start: 'top 90%', once: true } }
      );
    }
    if (meta.length) {
      gsap.from(meta,
        { opacity: 0, y: 18, duration: 0.75, ease: 'power3.out',
          delay: baseDelay + 0.35, stagger: 0.08,
          scrollTrigger: { trigger: card, start: 'top 88%', once: true } }
      );
    }
  });

  // Process body text reveal
  ScrollTrigger.create({
    trigger: '#processSteps',
    start: 'top 88%',
    once: true,
    onEnter: () => gsap.fromTo('#processSteps',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    )
  });

  // Process photo — clip reveal from bottom (same style as About)
  const processImg = document.querySelector('.process__photo-wrap');
  if (processImg) {
    gsap.fromTo(processImg,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', scrollTrigger: { trigger: processImg, start: 'top 80%' }, duration: 1.4, ease: 'power4.inOut' }
    );
  }

  // About image — same clip-path reveal as Process (top-down wipe), fires earlier
  const aboutImg = document.querySelector('.about__image-wrap');
  if (aboutImg) {
    gsap.fromTo(aboutImg,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', scrollTrigger: { trigger: aboutImg, start: 'top 88%', once: true }, duration: 1.1, ease: 'power4.inOut' }
    );
  }

  // About content — onEnter approach (prevents opacity:0 stuck), staggered
  gsap.utils.toArray('.about__title, .about__text, .about__stats, .about__skills').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => gsap.fromTo(el,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.05 }
      )
    });
  });

  // Blog cards
  gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 92%' }, opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', delay: i * 0.1 });
  });

  // Contact
  gsap.utils.toArray('.contact__desc, .contact__socials, .contact__right').forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 88%' }, opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' });
  });

  // Counters
  document.querySelectorAll('.stat__number').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter() {
        const obj = { val: 0 };
        gsap.to(obj, { val: target, duration: 1.6, ease: 'power2.out', onUpdate() { el.textContent = Math.round(obj.val); } });
      }
    });
  });

  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width  / 2;
      const y = e.clientY - r.top  - r.height / 2;
      gsap.to(btn, { x: x * 0.28, y: y * 0.28, duration: 0.45, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

/* ─── CONTACT FORM ───────────────────────────── */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearErrors();
    const name = form.querySelector('#cfName');
    const email = form.querySelector('#cfEmail');
    const msg   = form.querySelector('#cfMsg');
    const btn   = document.getElementById('cfSubmit');
    const succ  = document.getElementById('cfSuccess');
    let err = false;
    if (!name.value.trim())  { showErr('cfNameErr', t('form.err.name'));  name.classList.add('has-error');  err = true; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr('cfEmailErr', t('form.err.email')); email.classList.add('has-error'); err = true; }
    if (!msg.value.trim())   { showErr('cfMsgErr',   t('form.err.msg'));   msg.classList.add('has-error');   err = true; }
    if (err) return;
    btn.classList.add('is-loading'); btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/mvzydayj', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    name.value.trim(),
          email:   email.value.trim(),
          message: msg.value.trim()
        })
      });
      if (res.ok) {
        succ.classList.add('is-visible');
        form.reset();
      } else {
        alert(currentLang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Please try again.');
      }
    } catch {
      alert(currentLang === 'pt' ? 'Erro de conexão. Tente novamente.' : 'Connection error. Please try again.');
    }
    btn.classList.remove('is-loading'); btn.disabled = false;
  });
  form.querySelectorAll('.form-input').forEach(inp => {
    inp.addEventListener('input', () => {
      inp.classList.remove('has-error');
      const errEl = document.getElementById(inp.id + 'Err');
      if (errEl) { errEl.textContent = ''; errEl.classList.remove('is-visible'); }
    });
  });
  function showErr(id, msg) { const el = document.getElementById(id); if (el) { el.textContent = msg; el.classList.add('is-visible'); } }
  function clearErrors() { form.querySelectorAll('.form-error').forEach(el => { el.textContent=''; el.classList.remove('is-visible'); }); form.querySelectorAll('.form-input').forEach(el => el.classList.remove('has-error')); }
}

/* ─── LOADER ─────────────────────────────────── */
function runLoader() {
  const name = document.querySelector('.loader__name');
  const bar  = document.querySelector('.loader__bar');
  const loader = document.getElementById('loader');
  if (!name || !bar || !loader) { initAnimations(); return; }

  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ onComplete() {
      loader.style.display = 'none';
      initAnimations();
    }});
    tl.to(name, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' })
      .to(bar,  { width: '100%', duration: 1.0, ease: 'power2.inOut' }, '-=0.25')
      .to(loader, { yPercent: -100, duration: 0.85, ease: 'power3.inOut', delay: 0.2 });
  } else {
    loader.style.display = 'none';
    initAnimations();
  }
}

/* ─── TWEAKS PANEL ───────────────────────────── */
function initTweaks() {
  window.addEventListener('message', e => {
    if (e.data?.type === '__activate_edit_mode')   document.getElementById('tweaksPanel').style.display = 'block';
    if (e.data?.type === '__deactivate_edit_mode') document.getElementById('tweaksPanel').style.display = 'none';
  });
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');

  const sliders = {
    twkGridSpeed:   v => { T.gridSpeed = parseFloat(v); },
    twkGridOpacity: v => { T.gridOpacity = parseFloat(v); },
    twkCursorLag:   v => { T.cursorLag = parseFloat(v); },
  };
  Object.entries(sliders).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      fn(el.value);
      const key = id.replace('twk','').replace(/([A-Z])/g, (_, c) => c.toLowerCase());
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [id]: parseFloat(el.value) } }, '*');
    });
  });
}

/* ─── BOOT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderProjects();
  renderProcess();
  renderBlog();
  initBlogNav();

  // Apply saved language
  applyLang(currentLang);

  // Init modules
  initHeroCanvas();
  initCursor();
  initLightbox();
  initMobileMenu();
  initLangToggle();
  initHeader();
  initAnchors();
  initContact();
  initTweaks();
  runLoader();
});
