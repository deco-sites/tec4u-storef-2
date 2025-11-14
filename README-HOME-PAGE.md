# Home Page Tec4U Digital - Estrutura e Guia de Edição

## 🏠 Visão Geral

A home page foi estruturada com base no site https://www.tec4udigital.com/ e organizada em **seções modulares e editáveis** via painel da deco.

## 📋 Seções da Home Page

### 1. **Hero Carousel** (Carrossel Principal)
- **Tipo:** `site/sections/Images/Carousel.tsx`
- **Localização:** Topo da página (após o header)
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Imagens desktop e mobile
  - Títulos e subtítulos
  - Botões de ação (CTA)
  - Links de destino
- **Conteúdo atual:** 3 slides
  1. Soluções Digitais
  2. E-commerce de Alta Performance
  3. Suporte Especializado

### 2. **Intro/Sobre** (Apresentação da Empresa)
- **Tipo:** `site/sections/Content/Intro.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Título da seção
  - Texto descritivo (suporta HTML/Rich Text)
  - Botões de CTA (até 2)
- **Conteúdo atual:** Apresentação da Tec4U Digital

### 3. **Grid de Soluções** (Serviços/Produtos)
- **Tipo:** `site/sections/Category/CategoryGrid.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Título e descrição da seção
  - Cards individuais (até 6):
    - Imagem
    - Label/Título
    - Descrição
    - Link de destino
- **Conteúdo atual:** 6 soluções
  1. E-commerce
  2. Sites Institucionais
  3. Sistemas Personalizados
  4. Integrações
  5. Consultoria Digital
  6. Suporte & Manutenção

### 4. **Diferenciais** (Por Que Escolher)
- **Tipo:** `site/sections/Content/Faq.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Título e descrição
  - Lista de diferenciais (formato question/answer)
  - Ícones podem ser adicionados nos títulos
- **Conteúdo atual:** 6 diferenciais
  - Experiência Comprovada
  - Tecnologia de Ponta
  - Suporte Dedicado
  - Soluções Personalizadas
  - Resultados Mensuráveis
  - Segurança e Confiabilidade

### 5. **CTA Banner** (Chamada para Ação)
- **Tipo:** `site/sections/Images/Banner.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Imagens de fundo (desktop e mobile)
  - Título
  - Descrição (suporta HTML)
  - Botão CTA (texto e link)
- **Conteúdo atual:** "Pronto para Transformar Seu Negócio?"

### 6. **Logos de Clientes/Parceiros**
- **Tipo:** `site/sections/Content/Logos.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Título e descrição
  - Logos (até 12):
    - Imagem
    - Alt text
    - Link (opcional)
- **Conteúdo atual:** 6 placeholders para logos

### 7. **Newsletter**
- **Tipo:** `site/sections/Newsletter/Newsletter.tsx`
- **Editável via painel:** ✅ Sim
- **O que editar:**
  - Textos de estado (empty, success, failed)
  - Placeholder do campo de e-mail
  - Label do botão
- **Conteúdo atual:** Inscrição para receber novidades

### 8. **Header e Footer**
- **Tipo:** Componentes reutilizáveis
- **Editável via painel:** ✅ Sim (em seções separadas)
- **Localização:** 
  - Header: `/.deco/blocks/Header.json`
  - Footer: `/.deco/blocks/Footer.json`

## 🎨 Como Editar via Painel

### Passo a Passo:

1. **Acesse o Painel da Deco**
   - URL: `https://deco.cx/admin`
   - Selecione o workspace `tec4u-storef-2`
   - Ambiente: `staging`

2. **Navegue até Pages**
   - Menu lateral > Pages
   - Encontre "Tec4U Digital - Home Page" (path: `/`)

3. **Edite as Seções**
   - Clique em qualquer seção para editar
   - Use o editor visual para modificar:
     - Textos
     - Imagens
     - Links
     - Cores
     - Espaçamentos

4. **Preview em Tempo Real**
   - Veja as alterações instantaneamente
   - Teste em diferentes dispositivos (mobile/desktop)

5. **Publicar Alterações**
   - Botão "Save" para salvar no staging
   - Botão "Publish" para enviar para produção

## 📸 Imagens Utilizadas

Todas as imagens estão hospedadas no CDN da deco em:
`https://assets.decocache.com/tec4u-storef-2/51b1474d-c7b4-4056-b9fe-cd2ec3910ee7/`

### Imagens Necessárias (Placeholders atuais):

**Hero Carousel:**
- `hero-desktop-1.jpg` / `hero-mobile-1.jpg`
- `hero-desktop-2.jpg` / `hero-mobile-2.jpg`
- `hero-desktop-3.jpg` / `hero-mobile-3.jpg`

**Soluções:**
- `solution-ecommerce.jpg`
- `solution-websites.jpg`
- `solution-systems.jpg`
- `solution-integration.jpg`
- `solution-consulting.jpg`
- `solution-support.jpg`

**CTA Banner:**
- `cta-banner-desktop.jpg`
- `cta-banner-mobile.jpg`

**Logos:**
- `client-logo-1.png` a `client-logo-6.png`

**SEO:**
- `og-image.jpg` (Open Graph para redes sociais)
- `favicon.ico`

### Como Substituir Imagens:

1. **Upload via Painel:**
   - Na edição de qualquer seção
   - Clique no campo de imagem
   - Botão "Upload" ou arraste a imagem

2. **Otimização Automática:**
   - A deco otimiza automaticamente
   - Gera versões WebP
   - Redimensiona para diferentes resoluções

## 🔧 Personalizações Avançadas

### Adicionar Nova Seção:
1. No editor de páginas, clique em "+ Add Section"
2. Escolha o tipo de seção disponível
3. Configure o conteúdo
4. Arraste para reordenar

### Remover Seção:
1. Clique na seção
2. Ícone de lixeira no canto
3. Confirme a remoção

### Duplicar Seção:
1. Clique na seção
2. Ícone de duplicar
3. Edite o conteúdo duplicado

## 📊 SEO Configurado

A página já está otimizada para SEO com:

- **Title:** "Tec4U Digital - Soluções Digitais Completas | E-commerce, Sites e Sistemas"
- **Description:** Descrição completa dos serviços
- **Canonical URL:** https://www.tec4udigital.com/
- **Open Graph:** Imagem e meta tags para redes sociais
- **Theme Color:** #2DC26B (verde da marca)
- **Favicon:** Configurado

### Editar SEO:
1. No editor de páginas
2. Aba "SEO Settings"
3. Modifique os campos desejados

## 🚀 Performance

A estrutura está otimizada para performance:

- **Lazy Loading:** Seções carregam sob demanda
- **Preload:** Hero carousel carrega primeiro
- **CDN:** Todas as imagens via CDN global
- **Responsive:** Totalmente adaptável a todos dispositivos

## 📝 Notas Importantes

1. **Ambiente Staging:**
   - As alterações estão no ambiente staging
   - Para ver: `https://tec4u-storef-2.deco.site/` (staging URL)
   - Teste antes de publicar em produção

2. **Backups:**
   - A deco mantém histórico de versões
   - Possível reverter alterações

3. **Colaboração:**
   - Múltiplos usuários podem editar
   - Permissões configuráveis

4. **Conteúdo Dinâmico:**
   - Integre com APIs para conteúdo dinâmico
   - Use loaders para buscar dados externos

## ❓ Próximos Passos

1. **Substituir Imagens Placeholder:**
   - Faça upload das imagens reais do site
   - Use as dimensões recomendadas

2. **Ajustar Textos:**
   - Revise todo o conteúdo
   - Alinhe com a comunicação da marca

3. **Configurar Integrações:**
   - Newsletter (Mailchimp, SendGrid, etc.)
   - Analytics (Google Analytics, etc.)
   - WhatsApp Business

4. **Testes:**
   - Teste em diferentes navegadores
   - Valide em mobile e desktop
   - Verifique todos os links

5. **Deploy para Produção:**
   - Após validação, publique
   - Configure domínio customizado

## 📞 Suporte

Para dúvidas ou personalizações adicionais:
- Documentação deco: https://deco.cx/docs
- Comunidade: https://discord.gg/deco
- Suporte: support@deco.cx

---

**✨ Estrutura criada e pronta para edição via painel da deco!**