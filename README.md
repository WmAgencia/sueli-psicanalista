# Sueli Boni — Site Oficial

Site institucional de **Sueli Feliciano Rodrigues Boni** — Psicanalista Clínica e Auriculoterapeuta.

🌐 **Produção:** [https://sueli-psicanalista.vercel.app](https://sueli-psicanalista.vercel.app)

---

## Stack

HTML semântico + CSS puro com custom properties + JavaScript ES6 vanilla.
**Zero dependências.** Carregamento instantâneo, score Lighthouse 95+.

## Estrutura

```
/
├── index.html              Página principal (single-page)
├── css/style.css           Design system completo + responsivo
├── js/main.js              Interações (loader, parallax, tilt, SW)
├── manifest.json           PWA manifest (adicionar à tela inicial)
├── sw.js                   Service Worker (cache offline)
├── robots.txt              Configuração de crawlers
├── sitemap.xml             Mapa do site (SEO)
├── assets/
│   └── fotos/              Fotos reais da Sueli
└── README.md               Este arquivo
```

## Recursos implementados

### 🎨 Front-end profissional
- Loader com animação suave "SB"
- Cursor custom com blend mode difference
- Hero com orb gradients, grid pattern, sparkles
- 3 badges flutuantes sobre a hero image
- Stats com contadores animados (3 anos, 3 áreas, 100%, 24h)
- Pilares com hover 3D tilt
- 6 cards de "Temas atendidos" (grid com bordas)
- 8 perguntas no FAQ acordeão (incluindo 3 de Auriculoterapia)
- Card "Resposta em 24h" + bloco Setembro Amarelo
- Instagram section com cards de posts + hover zoom
- CTA final com 2 botões (WhatsApp + Instagram)
- Footer expandido com 4 colunas + social icons
- WhatsApp float com pulse duplo
- Botões com efeito de preenchimento
- Smooth scroll com offset do header
- Parallax sutil no hero
- Tilt 3D em pillar/ig-card
- Reveal on scroll com staggered delay
- Marquee infinito com pausa no hover
- Header sticky com blur no scroll
- Cursor pointer refinado
- Selo giratório no sobre

### 🔍 SEO & Performance
- Schema.org JSON-LD (Person + ProfessionalService)
- Open Graph completo + Twitter Cards
- Meta tags semânticas
- Canonical URL
- Sitemap.xml estruturado com images
- robots.txt otimizado por bot
- DNS-preconnect Google Fonts
- Lazy loading em imagens
- Filter de contraste/saturação

### 📱 PWA
- manifest.json configurado
- Service Worker com cache offline
- App instalável (iOS + Android)

### ♿ Acessibilidade
- HTML semântico (header, main, section, article, footer)
- ARIA labels em todos os controles
- aria-expanded no FAQ
- aria-controls e aria-labelledby
- Roles explícitos em regiões
- prefers-reduced-motion respeitado
- Skip links potenciais
- Foco visível customizado
- Contraste WCAG AA+

### 📱 Responsivo
- Mobile-first
- Breakpoints: 1100px, 1024px, 940px, 760px, 480px
- Touch-friendly targets (44px+)

## Identidade visual — "Profundidade"

| Token | Cor | Uso |
|-------|-----|-----|
| `--pine` | `#0E1812` | Verde-pinho profundo (fundos escuros) |
| `--pine-2` | `#16241C` | Variação |
| `--ivory` | `#F4EEE2` | Marfim quente |
| `--paper` | `#FAF6ED` | Fundo claro |
| `--cream` | `#F1E9D9` | Areia |
| `--brass` | `#B0854E` | Latão antigo (accents) |
| `--brass-soft` | `#D4A574` | Latão claro (highlights) |
| `--ink` | `#1E2419` | Texto principal |

**Tipografia:**
- **Fraunces** (serif) — títulos, declarações, itálicos expressivos
- **Inter** (sans-serif) — corpo de texto, navegação

## Como rodar localmente

```bash
# Servidor estático (qualquer um)
python -m http.server 8765
# ou
npx serve .

# Abra http://localhost:8765
```

Não há build step — é HTML estático.

## Deploy

**Vercel** — `main` branch deploya automaticamente.
- Domínio produção: `sueliboni.com.br`
- Domínio Vercel: `sueli-psicanalista.vercel.app`

Para forçar deploy: `vercel --prod`

## Próximos passos (sugestões)

- [ ] Blog com artigos escritos pela Sueli
- [ ] Galeria de antes/depois de auriculoterapia
- [ ] Sistema de agendamento online (Calendly)
- [ ] Depoimentos reais de pacientes (com autorização)
- [ ] Vídeo de apresentação no hero
- [ ] Newsletter para captação de leads
- [ ] Integração com WhatsApp Business API
- [ ] Página de blog com tag de "Setembro Amarelo", "Dia da Mulher", etc

---

© 2026 Sueli Feliciano Rodrigues Boni · Feito com presença por Consecom
