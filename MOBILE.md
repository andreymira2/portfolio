# MOBILE.md — Manual do Sistema Mobile

> Como o sistema mobile funciona, quais variáveis existem,
> e como **não quebrá-lo** quando você edita o site.

---

## TL;DR

- **Breakpoint principal:** `≤700px` (mobile cinema)
- **Breakpoint intermediário:** `601px–900px` (tablet)
- **Breakpoint pequeno:** `≤380px` (iPhone SE / Mini)
- **Landscape mobile:** `≤900px + altura ≤500px`
- Sistema mobile **redefine variáveis CSS** dentro de `@media (max-width: 700px)`. Use sempre as variáveis. Nunca hardcode `1.5rem` quando existe `var(--container-pad)`.

---

## Arquitetura

Existem 4 blocos `@media` que importam:

| Bloco | Localização | Função |
|---|---|---|
| Tablet (601-900px) | `portfolio.css` final | Ajusta spacing, traz fotos do Process/About de volta |
| **Mobile (≤700px)** | `portfolio.css` final | **O sistema principal** — sobrescreve variáveis, redesenha Hero/Work/About |
| Landscape | `portfolio.css` final | Ajustes pra iPhone deitado |
| Mobile pequeno (≤380px) | `portfolio.css` final | Padding tighter, fontes menores |

Eles ficam **no final do arquivo** propositalmente — pra ganhar a cascata de qualquer regra desktop.

---

## Variáveis CSS — A API do mobile

Definidas em `:root` (desktop) e **sobrescritas** dentro de `@media (max-width: 700px) { :root { ... } }`. Use-as em vez de valores fixos.

### Spacing scale
| Var | Desktop | Mobile (≤700px) | Quando usar |
|---|---|---|---|
| `--sp-2xl` | `11rem` | `4rem` | Padding vertical de section |
| `--sp-xl` | `7rem` | `3rem` | Section headers, grupos grandes |
| `--sp-lg` | `4rem` | `2.25rem` | Bloco padrão |
| `--sp-md` | `2rem` | `1.5rem` | Gaps internos |

### Layout
| Var | Desktop | Mobile | Quando usar |
|---|---|---|---|
| `--container-pad` | (clamp na .container) | `1.5rem` (→ `1rem` em ≤380px) | Padding horizontal de qualquer container mobile |
| `--header-h` | `68px` | `68px` | Offset top pra fixed header |
| `--hero-h` | `100vh` | `100dvh` | Altura do hero |
| `--hero-pad-x` | `clamp(1.5rem, 5vw, 5rem)` | `1.5rem` | Padding horizontal do hero |
| `--hero-pad-b` | `clamp(3rem, 6vw, 5rem)` | `2.25rem` | Padding bottom do hero |
| `--hero-min-h` | — | `580px` | Min-height do hero (não estourar em landscape) |

### Work cards
| Var | Desktop | Mobile | Quando usar |
|---|---|---|---|
| `--work-card-h` | `auto` (aspect-ratio) | `85dvh` | Altura do card no grid |
| `--work-card-min-h` | — | `520px` | Min-height pra não comprimir |
| `--work-meta-pos` | `relative` | `absolute` | Posição da meta (título + caption) |

### Safe area (iPhone notch / home indicator)
| Var | Valor | Quando usar |
|---|---|---|
| `--mobile-safe-top` | `env(safe-area-inset-top, 0px)` | Padding top de elementos absolutos perto do topo |
| `--mobile-safe-bot` | `env(safe-area-inset-bottom, 0px)` | Padding bottom de elementos absolutos perto do bottom |

Sempre que posicionar algo no canto superior/inferior em mobile, adicione `var(--mobile-safe-top)` / `var(--mobile-safe-bot)`. Senão a Dynamic Island / barra de gestos esconde seu elemento.

---

## Regras de Ouro

### 1. **Não invente novos breakpoints**
Use os 4 existentes. Cada novo breakpoint exige atualizar esta doc e testar landscape/portrait em 3 devices.

### 2. **Use `dvh` em vez de `vh` em mobile**
`100vh` em iOS Safari conta a barra de URL (vira tela cortada na primeira interação). `100dvh` ajusta dinamicamente. Sempre prefira `dvh`, com fallback `vh` se precisar suportar browsers antigos:
```css
height: 100vh;
height: 100dvh;  /* sobrescreve no browser que suporta */
```

### 3. **Touch targets ≥ 44×44px**
Apple guideline. Todos os botões clicáveis em mobile precisam ter pelo menos 44px de área tocável. Use padding pra atingir o mínimo se o elemento visual for menor.

### 4. **`touch-action: manipulation` em elementos clicáveis**
Elimina o delay de 300ms de "double-tap to zoom" em iOS. Use em qualquer botão/link/area clicável mobile-first.

### 5. **`font-size: 1rem` (16px) em inputs**
iOS dá zoom automático em inputs com font-size <16px. Já está no `.form-input` mobile rule.

### 6. **`-webkit-overflow-scrolling: touch`** em containers scrolláveis horizontais (já no `.hero__eyebrow`).

### 7. **Esconda elementos pesados, não os "encolha"**
Animações decorativas, parallax, cursor custom, tweaks panel — tudo deveria ter `@media (hover: none)` ou check de viewport pra sumir em touch. Performance + clareza.

### 8. **Mobile NÃO é desktop encolhido**
Se for replicar a mesma estrutura mas menor → tá fazendo errado. Mobile pode (e deve) ter UX diferente: stack vertical, gestures, fullscreen views.

---

## Adicionar Nova Coisa

### Novo projeto (em `PROJECTS[]`)
1. Definir `cardAspect` (forma do card) e `cardFormat` (formato das imagens no cycle)
2. Adicionar `formats: ['9:16', '4:5', …]` correspondente a cada imagem em `images: []`
3. Sistema mobile vai **automaticamente**:
   - Forçar 85dvh de altura
   - Pôr o título overlay no bottom
   - Mostrar bars + counter
   - Pan animations no Ken Burns

### Nova seção no `index.html`
1. Use `section` element + `.container` interno — padding vertical herda das vars
2. Se tiver imagem importante: NÃO esconda em mobile (já cometi esse erro com About/Process)
3. Headings já são responsivos via `clamp()` — só verifique se o mínimo não é grande demais (h1 vai até 4.5rem em mobile, h2 até 3.75rem)
4. Se tiver grid lateral (texto + foto): em mobile vira coluna única, foto vai PRIMEIRO (visual hook)
5. Stats / numeric content: em mobile vira **lista vertical**, número grande à esquerda, label à direita

### Novo CTA / botão
1. Use `var(--container-pad)` pro alinhamento
2. Padding mínimo: `0.95em 1.5em` (44px de altura)
3. Se for floating bottom-right: respeite `var(--mobile-safe-bot)`

### Nova interação touch
1. **Tap** → ativar via `<a>` link ou click handler
2. **Hold (>180ms)** → estado modificado (ex: pausar cycle no card)
3. **Swipe horizontal (>60px)** → navegar (próx/anterior)
4. **Swipe vertical down (>100px)** → fechar modal
5. **Touchmove cancela hold** — sempre. Senão pausa quando user só queria scrollar

Veja `initWorkCycle()` em `portfolio.js` como exemplo do touch hold completo, com `freezeBar()` / `resumeBar()` pra manter a animação sincronizada.

---

## Bugs comuns + soluções

| Sintoma | Causa | Fix |
|---|---|---|
| Hero "corta" no iPhone | Usou `100vh` em vez de `100dvh` | Trocar pra `100dvh` |
| Tap demora 300ms | Sem `touch-action: manipulation` | Adicionar no botão/link |
| Input zoom no iOS | font-size <16px | Forçar `font-size: 1rem` |
| Bar do card desincronizada após hold | Não tem `freezeBar()`/`resumeBar()` | Ver `portfolio.js` |
| Galeria/lightbox pinch zoom quebra swipe | Não checa `e.touches.length` | `if (e.touches.length !== 1) return` |
| Conteúdo cortado embaixo do notch | Sem safe-area-inset | `padding-bottom: calc(2rem + var(--mobile-safe-bot))` |
| Scroll-snap quebra anchor links | Usou `mandatory` em vez de `proximity` | Trocar pra `proximity` |
| Elemento fixo no canto sobreposto pela Dynamic Island | Sem safe-area-inset top | `top: var(--mobile-safe-top)` |

---

## Onde tá cada coisa

### `portfolio.css`
- Variáveis: linhas ~10-35 (desktop) e ~720-770 (mobile sobrescreve)
- Bloco mobile principal: `@media (max-width: 700px)` perto do final
- Landscape: `@media (max-width: 900px) and (orientation: landscape) and (max-height: 500px)`
- Mobile pequeno: `@media (max-width: 380px)` no final

### `portfolio.js`
- `initWorkCycle()` — touch handlers (touchstart/touchmove/touchend/touchcancel) com freeze/resume da bar

### `projeto.html`
- CSS mobile inline (dentro do `<style>` da página): `@media (max-width: 700px)`
- Swipe gesture no cinema lightbox: dentro de `ensureLightbox()`
- Hint da galeria i18n: via `data-hint` attribute setado em `renderProject()`

---

## Testar antes de subir

Checklist mínimo:

- [ ] iPhone (Safari) portrait — hero renderiza full, work cards 85dvh
- [ ] iPhone landscape — hero não estoura
- [ ] iPad portrait (768px) — usa rules de tablet, não mobile
- [ ] Android Chrome — touch handlers funcionam
- [ ] DevTools 320×568 (iPhone SE 1ª gen) — não quebra nada
- [ ] Anchor links do menu (#trabalhos, #processo) — funcionam mesmo com scroll-snap
- [ ] Cinema lightbox em mobile — swipe horizontal navega, swipe down fecha, pinch zoom não trava
- [ ] Hold num work card — pausa o cycle, solta resume
- [ ] Stats no About — lista vertical com linhas separadoras
- [ ] Galeria do projeto — aspect-ratio cap funciona (sem scrolls absurdos)

---

## Quando mudar isso

Se você mudar qualquer dos seguintes, **atualize esta doc**:

- Breakpoints
- Variáveis em `:root` ou no mobile override
- Threshold de hold (180ms), swipe horizontal (60px) ou vertical (100px)
- Padding/margem que seja "padrão" do mobile

Se mudar **apenas valores visuais** (cores, fontes, espaçamentos pontuais) — não precisa atualizar a doc.
