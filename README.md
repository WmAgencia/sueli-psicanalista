# Sueli Boni — Site Oficial

Site institucional de **Sueli Boni** — Psicanalista, Mentora e Terapeuta das Emoções.

Stack: HTML + CSS + JS puro (sem dependências). Deploy: Vercel.

## Estrutura
```
index.html      — página única, HTML semântico (SEO/OG incluídos)
css/style.css   — design system editorial (paleta neutra + vinho sutil)
js/main.js      — WhatsApp config, reveal on scroll, menu mobile
robots.txt · sitemap.xml · assets/fotos/
```

## Antes de publicar
1. **Fotos**: adicionar as fotografias reais em `assets/fotos/` e substituir os
   `.placeholder-photo` por `<img>` com `loading="lazy"` e alt text.
2. **WhatsApp**: em `js/main.js`, trocar `WHATSAPP_NUMBER = "55XXXXXXXXXXX"`
   pelo número real — todos os CTAs `[data-wa]` passam a apontar ao wa.me.
3. **Domínio**: ajustar `sueliboni.com.br` no canonical/OG/sitemap se diferente.
4. **Sobre**: preencher o bloco provisório da seção Sobre com a trajetória real.
5. **Depoimentos**: seção pronta (comentada no HTML) para ativar quando houver
   depoimentos reais.

## Princípio
Nenhuma informação é inventada. Todo conteúdo não fornecido está estruturado
como espaço claramente marcado para substituição.
