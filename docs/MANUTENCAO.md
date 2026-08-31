# Guia de Manutenção — Site Sueli Boni

> Para Wesley, equipe da Consecom ou a própria Sueli manter o site sem dor de cabeça.

## Sumário

- [Tarefas Comuns](#tarefas-comuns)
- [Atualizar o número de WhatsApp](#atualizar-o-número-de-whatsapp)
- [Trocar fotos](#trocar-fotos)
- [Adicionar/editar perguntas do FAQ](#adicionareditar-perguntas-do-faq)
- [Adicionar um novo pilar](#adicionar-um-novo-pilar)
- [Atualizar Instagram/links sociais](#atualizar-instagramlinks-sociais)
- [Publicar uma mudança](#publicar-uma-mudança)

---

## Tarefas Comuns

### Atualizar o número de WhatsApp

Edite: `js/main.js`

```js
const WHATSAPP_NUMBER = "5521964565206";  // 55 + DDD + número
```

Todos os botões e links `[data-wa]` apontam automaticamente para esse número.

---

### Trocar fotos

As fotos ficam em `assets/fotos/`. Para trocar mantendo o mesmo nome:

| Arquivo | Uso no site | Dimensões sugeridas |
|---------|-------------|---------------------|
| `sueli-hero.jpg` | Hero principal | 1000×1792 (retrato) |
| `sueli-sobre.jpg` | Seção "Sobre" | 1000×1792 (retrato) |
| `sueli-ig.jpg` | Card Instagram | 1000×1792 (retrato) |
| `auriculo.jpg` | (extra) Foto de auriculoterapia | qualquer |

Basta substituir o arquivo com o mesmo nome. O site detecta automaticamente.

---

### Adicionar/editar perguntas do FAQ

Edite: `index.html` → procure por `<div class="faq__list">`.

Copie o bloco de uma pergunta existente e adapte:

```html
<div class="faq-item reveal">
  <button class="faq-item__q" aria-expanded="false" aria-controls="faq-aX" id="faq-qX">
    <span>Sua pergunta aqui?</span>
    <span class="faq-item__icon" aria-hidden="true"></span>
  </button>
  <div class="faq-item__a" id="faq-aX" role="region" aria-labelledby="faq-qX">
    <p>Sua resposta aqui.</p>
  </div>
</div>
```

Substitua `X` por um número sequencial único.

> 💡 **Dica:** Adicione também no Schema.org JSON-LD (FAQPage) para que o Google mostre como rich snippet.

---

### Adicionar um novo pilar

Edite: `index.html` → procure por `<div class="pillars__grid">`.

Copie um `<article class="pillar">` existente e adapte:

```html
<article class="pillar reveal">
  <span class="pillar__num" aria-hidden="true">04</span>
  <span class="pillar__icon" aria-hidden="true">
    <!-- SVG do ícone aqui -->
  </span>
  <h3>Nome do Pilar</h3>
  <p>Descrição breve do que é.</p>
  <span class="pillar__arrow" aria-hidden="true">→</span>
</article>
```

Atualize o número para o próximo sequencial.

---

### Atualizar Instagram/links sociais

Edite: `index.html` → procure por `sueli_psicanalista`.

Onde aparece:
- Hero (não tem link direto)
- Seção Instagram (botão "Seguir")
- Footer (Instagram + WhatsApp)
- Schema.org JSON-LD (sameAs)

---

### Publicar uma mudança

1. Faça suas alterações localmente
2. Teste abrindo `index.html` no navegador (use servidor local: `python -m http.server`)
3. Commit e push:
   ```bash
   git add .
   git commit -m "feat: descrição da mudança"
   git push origin main
   ```
4. Deploy automático (se GitHub Integration estiver ativa) ou manual via Vercel CLI:
   ```bash
   vercel --prod
   ```

---

## Estrutura de arquivos

```
/
├── index.html              Página principal
├── privacidade.html        Política de Privacidade (LGPD)
├── 404.html                Página de erro 404
├── css/style.css           Estilos (Design System completo)
├── js/main.js              Interações JS
├── manifest.json           PWA manifest
├── sw.js                   Service Worker
├── robots.txt              SEO
├── sitemap.xml             Mapa do site
├── vercel.json             Configurações Vercel
├── assets/
│   └── fotos/              Fotos (otimizar antes de subir)
├── docs/                   Documentação
└── README.md               Apresentação
```

---

## Identidade Visual — Tokens

Sempre que adicionar/modifique cores, use as variáveis CSS já definidas:

```css
:root {
  --pine:        #0E1812;   /* Verde-pinho profundo */
  --pine-2:      #16241C;
  --pine-3:      #1F3226;
  --ivory:       #F4EEE2;   /* Marfim */
  --paper:       #FAF6ED;   /* Fundo claro */
  --cream:       #F1E9D9;
  --sand:        #E5D9C3;
  --line:        #D9CCB2;
  --ink:         #1E2419;   /* Texto principal */
  --muted:       #6E6A5B;
  --brass:       #B0854E;   /* Latão (accents) */
  --brass-soft:  #D4A574;
}
```

---

## Boas práticas

1. **Imagens:** Sempre otimize antes de subir (TinyPNG, Squoosh). JPG ≤ 200KB.
2. **Commits:** Mensagens curtas e descritivas. Use `feat:`, `fix:`, `refactor:`, `chore:` como prefixo.
3. **Não commitar:**
   - `.env.local` (já está no .gitignore)
   - Arquivos temporários
4. **Testar sempre localmente** antes de fazer push.
5. **Backup:** GitHub é o backup. Mas mantenha uma cópia local em `~/SEGUNDO-CEREBRO/sueli-psicanalista`.

---

## Contato de emergência

Se algo quebrar e você não souber resolver:
- Wesley (Consecom) — whats 15 98181-7336
- Vercel status: https://vercel-status.com
