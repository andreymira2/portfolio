# COPY DO SITE — Andrey Miranda Portfolio
> Arquivo de referência para edição de textos. Cada bloco mostra onde editar no código.
> **PT** = Português · **EN** = Inglês

---

## PÁGINA (Head)
> Editar em `index.html`, linhas `<title>` e `<meta name="description">`

```
Título da aba:    Andrey Miranda — Designer Gráfico
Meta description: Andrey Miranda — Designer gráfico com quase 10 anos criando para marcas que exigem o máximo.
```

---

## NAVEGAÇÃO
> Editar em `portfolio.js` → objeto `LANG`, chaves `nav.*`

| Chave          | PT          | EN      |
|----------------|-------------|---------|
| nav.work       | Trabalhos   | Work    |
| nav.process    | Processo    | Process |
| nav.about      | Sobre       | About   |
| nav.blog       | Blog        | Blog    |
| nav.contact    | Contato     | Contact |

**Logo** (estático, `index.html`): `AM.`

---

## HERO
> Editar em `portfolio.js` → objeto `LANG`, chaves `hero.*`

### Tags (pílulas acima do título)
| Chave          | PT                             | EN                              |
|----------------|--------------------------------|---------------------------------|
| hero.tag1      | Sports Designer                | Sports Designer                 |
| hero.tag2      | Motorsport · Futebol · Esports | Motorsport · Football · Esports |
| hero.available | Disponível para projetos       | Available for projects          |

> Nota: "Disponível para projetos" deve ter destaque visual diferenciado (cor, ponto verde). Já implementado no CSS.

### Título principal (3 linhas)
| Chave       | PT            | EN              |
|-------------|---------------|-----------------|
| hero.line1  | O que         | What are we     |
| hero.line2  | vamos         | creating        |
| hero.line3  | criar hoje?   | today?          |

### Subtexto e CTA
| Chave     | PT                                                                         | EN                                                                        |
|-----------|----------------------------------------------------------------------------|---------------------------------------------------------------------------|
| hero.desc | Designer gráfico com quase 10 anos criando para marcas que exigem o máximo. | Graphic designer with almost 10 years creating for brands that demand the best. |
| hero.cta  | Ver trabalhos →                                                            | See work →                                                                |

---

## SEÇÃO — CLIENTES
> Editar em `portfolio.js` → objeto `LANG`, chave `clients.label`

| Chave          | PT       | EN      |
|----------------|----------|---------|
| clients.label  | Clientes | Clients |

**Nomes dos clientes** (estático, `index.html`):
Emirates · PSG · WePlay · Iron Dames · Nascar Brasil · UAE Tour · Asian Tour · Leipert · Xstadium · ECA · Fach Auto Tech · Heberth · Just Authentic

---

## SEÇÃO — TRABALHOS
> Editar em `portfolio.js` → objeto `LANG`, chaves `work.*`

| Chave         | PT                     | EN                |
|---------------|------------------------|-------------------|
| work.label    | Trabalhos Selecionados | Selected Work     |
| work.t1       | Trabalho               | Selected          |
| work.t2       | selecionado.           | work.             |
| work.lightbox | Ver no Behance →       | View on Behance → |

---

## PROJETOS (Cards + Lightbox)
> Editar em `portfolio.js` → array `PROJECTS`
> Cada projeto tem: `title`, `cat` (categoria), `desc` (descrição longa), `url` (link Behance)

---

### Projeto 01 — Motorsport Clients
**Categoria**
- PT: Motorsport Design
- EN: Motorsport Design

**Descrição**
- PT: Conteúdo visual para equipes de GT motorsport — Fach Auto Tech (ADAC GT Masters) e Herberth Motorsport. Composições para redes sociais e materiais de temporada na Europa.
- EN: Visual content for GT motorsport teams — Fach Auto Tech (ADAC GT Masters) and Herberth Motorsport. Compositions for social media and season materials across Europe.

**URL:** https://www.behance.net/gallery/213524895/Project-for-Leipert-Motorsports

---

### Projeto 02 — XStadium — WePlay
**Categoria**
- PT: Esports & Sports Media
- EN: Esports & Sports Media

**Descrição**
- PT: Design para a plataforma XStadium de transmissão esportiva em VR — NHL, FIFA Club World Cup, US Open e IndyCar. Conteúdo para distribuição global em Meta Quest.
- EN: Design for XStadium sports VR streaming platform — NHL, FIFA Club World Cup, US Open and IndyCar. Content for global distribution on Meta Quest.

**URL:** https://www.behance.net/andreymirandaa

---

### Projeto 03 — Emirates
**Categoria**
- PT: Brand Partnership
- EN: Brand Partnership

**Descrição**
- PT: Materiais visuais para a parceria Emirates × WePlay — Dubai World Cup, FA Cup Final, NBA All-Star e SailGP. Design que une identidade de marca com impacto esportivo.
- EN: Visual materials for the Emirates × WePlay partnership — Dubai World Cup, FA Cup Final, NBA All-Star and SailGP. Design that bridges brand identity with sports impact.

**URL:** https://www.behance.net/andreymirandaa

---

### Projeto 04 — PSG × Qatar Airways
**Categoria**
- PT: Football Design
- EN: Football Design

**Descrição**
- PT: Campanha visual para o PSG no FIFA Club World Cup 2025 e "Champions d'Europe", criada para distribuição multi-formato em redes sociais. Arte dourada representando o clube no maior palco do futebol.
- EN: Visual campaign for PSG at the 2025 FIFA Club World Cup and "Champions d'Europe", created for multi-format social media distribution. Golden artwork representing the club on football's biggest stage.

**URL:** https://www.behance.net/andreymirandaa

---

### Projeto 05 — Iron Dames — Motorsport
**Categoria**
- PT: Event Design
- EN: Event Design

**Descrição**
- PT: Campanha "Duelling in the Dunes" para a Iron Dames no Qatar 1812 em Doha. Composição multi-formato: 16:9, 9:16 e 4:5 para cobertura completa nas redes sociais.
- EN: "Duelling in the Dunes" campaign for Iron Dames at the Qatar 1812 in Doha. Multi-format composition: 16:9, 9:16 and 4:5 for full social media coverage.

**URL:** https://www.behance.net/andreymirandaa

---

### Projeto 06 — Iron Dames — Equestrian
**Categoria**
- PT: Equestrian Design
- EN: Equestrian Design

**Descrição**
- PT: Série de posters para a Iron Dames Equestrian — temporada completa do circuito mundial de hipismo: Xangai, Paris, Londres, Madri, Roma e Nova York. Identidade visual consistente para cada cidade.
- EN: Poster series for Iron Dames Equestrian — full season of the world equestrian circuit: Shanghai, Paris, London, Madrid, Rome and New York. Consistent visual identity for each city.

**URL:** https://www.behance.net/andreymirandaa

---

### Projeto 07 — UAE Tour — Cycling
**Categoria**
- PT: Cycling Design
- EN: Cycling Design

**Descrição**
- PT: Design para o UAE Tour — Giro d'Italia, Tour de France, conteúdo especial para Tadej Pogačar e campanhas de temporada. Visual que capta a velocidade e o drama do ciclismo de elite.
- EN: Design for UAE Tour — Giro d'Italia, Tour de France, special content for Tadej Pogačar and season campaigns. Visuals that capture the speed and drama of elite cycling.

**URL:** https://www.behance.net/andreymirandaa

---

## SEÇÃO — PROCESSO
> Editar em `portfolio.js` → objeto `LANG` (título) + texto livre na seção

### Título da seção
| Chave         | PT       | EN      |
|---------------|----------|---------|
| process.label | Processo | Process |
| process.t1    | Como     | How I   |
| process.t2    | trabalho. | work.  |

### Texto (parágrafo único — substituir o formato de steps atual)
> Esta seção foi reformulada de lista de etapas para texto corrido com filosofia de trabalho.

**PT:**
Bons projetos não aparecem do nada. Alguém teve que levar a sério, desde a primeira conversa até o arquivo final. Cada detalhe que parece pequeno acaba aparecendo no resultado, pra bem ou pra mal. Ignorar isso é uma escolha, e geralmente uma ruim.

Quando um projeto chega, ele vira prioridade. Não porque é obrigação, mas porque é a única forma de fazer direito. Se algo não saiu como deveria, o caminho é trabalhar até ficar bom, não entregar pela metade e torcer pra ninguém notar. Lealdade ao projeto não é um diferencial, é só o padrão mínimo.

No fim, design é resolução de problema. Pode ser bonito, pode ter impacto, mas se não resolve o que precisa resolver, não serve. Essa é a parte que importa.

**EN:**
Good projects don't appear out of nowhere. Someone had to take it seriously, from the first conversation to the final file. Every detail that seems small ends up showing in the result, for better or worse. Ignoring that is a choice, and usually a bad one.

When a project comes in, it becomes a priority. Not because it's an obligation, but because it's the only way to do it right. If something didn't turn out as it should, the path is to work until it's good, not deliver halfway and hope no one notices. Loyalty to the project isn't a differentiator, it's just the minimum standard.

In the end, design is problem-solving. It can be beautiful, it can have impact, but if it doesn't solve what needs to be solved, it doesn't work. That's the part that matters.

---

## SEÇÃO — SOBRE
> Editar em `portfolio.js` → objeto `LANG`, chaves `about.*`

### Título
| Chave        | PT            | EN                  |
|--------------|---------------|---------------------|
| about.label  | Sobre         | About               |
| about.t1     | Quase 10 anos | Almost 10 years     |
| about.t2     | de design.    | of design.          |

### Parágrafos
**Parágrafo 1**
- PT: Design não aparece do nada, e designer também não. Comecei cedo, no Brasil, sem muito plano, só vontade. Quase 10 anos depois, estou trabalhando remotamente para a WePlay em Londres, produzindo visual para esportes e esports em escala global. Não foi sorte, foi escolha atrás de escolha.
- EN: Design doesn't appear out of nowhere, and neither do designers. I started early, in Brazil, without much of a plan, just drive. Almost 10 years later, I work remotely for WePlay in London, producing visuals for sports and esports at a global scale. It wasn't luck, it was one choice after another.

**Parágrafo 2**
- PT: Paralelamente, atendo clientes freelance pela Europa e Américas. O esporte é onde me sinto em casa porque lá ninguém aceita mediano. A distância nunca foi obstáculo. O esforço compensa.
- EN: On the side, I work with freelance clients across Europe and the Americas. Sport is where I feel at home because no one there accepts mediocre. Distance has never been an obstacle. The effort pays off.

### Stats
| Número | Chave    | PT          | EN          |
|--------|----------|-------------|-------------|
| 50+    | about.s1 | Projetos    | Projects    |
| 10+    | about.s2 | Anos        | Years       |
| 3      | about.s3 | Continentes | Continents  |

### Tags de habilidade
> Estático em `index.html`

Sports Design · Motorsport · Football Design · Photo Manipulation · Poster Design · Social Media · Motion Design · Photoshop · Illustrator

---

## SEÇÃO — BLOG
> Placeholders — não editar até ter conteúdo real.

| Chave      | PT        | EN       |
|------------|-----------|----------|
| blog.label | Blog      | Blog     |
| blog.t1    | O que     | What     |
| blog.t2    | eu penso. | I think. |
| blog.read  | Ler →     | Read →   |

---

## SEÇÃO — CONTATO
> Editar em `portfolio.js` → objeto `LANG`, chaves `contact.*`

### Título e descrição
| Chave         | PT          | EN        |
|---------------|-------------|-----------|
| contact.label | Contato     | Contact   |
| contact.t1    | Tem um      | Got a     |
| contact.t2    | projeto?    | project?  |
| contact.desc  | Se chegou até aqui, provavelmente tem algo em mente. Me conta. | If you made it this far, you probably have something in mind. Let's talk. |

### Formulário
| Chave           | PT                           | EN                            |
|-----------------|------------------------------|-------------------------------|
| contact.name    | Nome                         | Name                          |
| contact.email   | E-mail                       | E-mail                        |
| contact.msg     | Mensagem                     | Message                       |
| contact.ph.name | Seu nome completo            | Your full name                |
| contact.ph.email| seu@email.com                | your@email.com                |
| contact.ph.msg  | Me conta sobre seu projeto...| Tell me about your project... |
| contact.submit  | Enviar mensagem              | Send message                  |
| contact.sending | Enviando...                  | Sending...                    |
| contact.ok      | ✓ Seu cliente de e-mail foi aberto — envie o e-mail para concluir. | ✓ Your email client just opened — send the email to complete. |
| contact.err     | Erro ao enviar. Tente novamente. | Error sending. Please try again. |

### Mensagens de erro
| Chave          | PT                                   | EN                           |
|----------------|--------------------------------------|------------------------------|
| form.err.name  | Por favor, informe seu nome.         | Please enter your name.      |
| form.err.email | Por favor, informe um e-mail válido. | Please enter a valid email.  |
| form.err.msg   | Por favor, escreva sua mensagem.     | Please write your message.   |

### Links sociais
> Estático em `index.html`

- Instagram: https://www.instagram.com/andreymirandadesigner/
- Behance: https://www.behance.net/andreymirandaa
- LinkedIn: https://www.linkedin.com/in/andrey-miranda-a0bb9a1b4/

---

## RODAPÉ
| Chave       | PT                    | EN                    |
|-------------|-----------------------|-----------------------|
| footer.copy | © 2026 Andrey Miranda | © 2026 Andrey Miranda |
| footer.top  | Voltar ao topo        | Back to top           |

---

## COMO EDITAR

### Textos bilíngues
Abrir `portfolio.js` e localizar a chave no objeto `LANG`:
```javascript
'hero.line1': 'O que',       // PT
'hero.line1': 'What are we', // EN
```

### Sobre e Processo
Ambos são parágrafos longos. Editar as chaves `about.p1`, `about.p2html`, e o array `STEPS` em `portfolio.js`.

> Nota: A seção Processo foi reformulada para texto corrido. Se o código ainda usar o array STEPS com 4 etapas, o conteúdo precisará ser adaptado para um formato de parágrafo único na estrutura HTML.

### Projetos
Abrir `portfolio.js` e localizar o array `PROJECTS`. Cada projeto tem `desc: { pt: '...', en: '...' }`.

### Skill tags, stats e links sociais
Estáticos em `index.html`.
