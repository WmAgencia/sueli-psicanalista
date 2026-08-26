# Sueli Boni — Site Oficial

Site institucional de **Sueli Boni** — Psicanalista, Mentora e Terapeuta das Emoções.

Stack: HTML + CSS + JS puro (sem dependências). Deploy: Vercel.

## Identidade visual — "Profundidade"

- **Paleta**: verde-pinho profundo (`#132019`) · marfim quente (`#F4EEE2`) · latão antigo (`#B0854E`)
- **Tipografia**: Fraunces (títulos, itálicos expressivos) + Manrope (textos)
- **Motivos**: ✳ asterisco, círculos concêntricos (camadas da psique), selo circular giratório, grão de papel, arcos
- **Interações**: reveal on scroll, barra de progresso de leitura, marquee, acordeão FAQ, link ativo no menu

## Estrutura
```
index.html      — página única, HTML semântico (SEO/OG incluídos)
css/style.css   — design system completo com tokens em :root
js/main.js      — WhatsApp config, reveals, FAQ, menu mobile, nav ativa
robots.txt · sitemap.xml · assets/fotos/
```

## Antes de publicar
1. **Fotos**: já inseridas em `assets/fotos/` — `sueli-hero.jpg` (hero),
   `sueli-sobre.jpg` (sobre) e `sueli-ig-1.jpg` (tile do Instagram).
   Para trocar, basta substituir os arquivos mantendo os nomes.
2. **WhatsApp**: em `js/main.js`, trocar `WHATSAPP_NUMBER = "55XXXXXXXXXXX"`
   pelo número real — todos os CTAs `[data-wa]` passam a apontar ao wa.me.
3. **Domínio**: ajustar `sueliboni.com.br` no canonical/OG/sitemap se diferente.
4. **Sobre**: o texto atual é evocativo e seguro; complementar com trajetória,
   formação e especializações reais quando fornecidas.
5. **Depoimentos**: adicionar nova seção quando houver depoimentos reais.

## Princípio
Nenhuma informação verificável é inventada (sem registros, instituições ou anos
de experiência fictícios). O conteúdo não fornecido permanece marcado no HTML.
