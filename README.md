# DECODE - Website Corporativo

Um website moderno e responsivo desenvolvido em React com TypeScript e Tailwind CSS, apresentando uma empresa de tecnologia com design interativo e microinterações elegantes.

## 🚀 Características

### Design Moderno
- **Interface Limpa**: Design minimalista e profissional
- **Gradientes Vibrantes**: Uso de gradientes azul-roxo para elementos visuais
- **Tipografia Elegante**: Hierarquia visual clara e legível
- **Microinterações**: Animações suaves e efeitos hover interativos

### Responsividade Completa
- **Desktop**: Layout otimizado para telas grandes (1200px+)
- **Tablet**: Adaptação perfeita para tablets (768px - 1199px)
- **Mobile**: Interface otimizada para smartphones (até 767px)
- **Breakpoints Personalizados**: Ajustes específicos para diferentes dispositivos

### Navegação Intuitiva
- **Navbar Fixo**: Barra de navegação sempre visível
- **Menu Mobile**: Hamburger menu responsivo para dispositivos móveis
- **Navegação Suave**: Transições animadas entre seções
- **Indicadores Visuais**: Destaque da seção ativa

## 📱 Seções do Website

### 1. Home (Página Inicial)
- Hero section impactante com call-to-action
- Estatísticas da empresa em cards interativos
- Elementos visuais com gradientes e animações
- Botões de ação flutuantes

### 2. Sobre
- História da empresa em timeline interativa
- Missão e visão em cards destacados
- Valores corporativos com ícones
- Seção da equipe com métricas

### 3. Serviços
- Grid de serviços com cards hover
- Processo de trabalho em 4 etapas
- Tecnologias utilizadas por serviço
- Call-to-action para contato

### 4. Projetos
- Portfolio com filtros por categoria
- Projetos em destaque
- Métricas de sucesso por projeto
- Links para visualização e código

### 5. Contato
- Formulário interativo com validação
- Informações de contato organizadas
- Seção de FAQ
- Botões de ação rápida

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca JavaScript para interfaces
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones moderna
- **Vite**: Build tool rápido e moderno

### Componentes UI
- **shadcn/ui**: Componentes React reutilizáveis
- **Framer Motion**: Animações e transições (preparado)
- **React Router**: Navegação SPA (preparado)

### Funcionalidades
- **Formulário de Contato**: Com validação e feedback visual
- **Filtros de Portfolio**: Sistema de categorização
- **Animações CSS**: Keyframes personalizadas
- **Estados Hover**: Microinterações em todos os elementos

## 🎨 Sistema de Design

### Paleta de Cores
- **Primária**: Gradiente azul (#3B82F6) para roxo (#8B5CF6)
- **Secundária**: Tons de cinza para texto e backgrounds
- **Acentos**: Verde para sucesso, vermelho para alertas
- **Neutros**: Branco e tons de cinza para contraste

### Tipografia
- **Títulos**: Font-weight bold com tamanhos responsivos
- **Corpo**: Text regular com line-height otimizado
- **Destaques**: Gradientes de texto para elementos especiais

### Espaçamento
- **Containers**: Max-width 7xl (1280px) com padding responsivo
- **Seções**: Padding vertical de 20 (80px) em desktop
- **Elementos**: Gaps consistentes usando sistema Tailwind

## 📦 Estrutura do Projeto

```
empresa-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── sections/        # Seções do website
│   │   │   ├── Home.jsx
│   │   │   ├── Sobre.jsx
│   │   │   ├── Servicos.jsx
│   │   │   ├── Projetos.jsx
│   │   │   └── Contato.jsx
│   │   └── Navbar.jsx       # Componente de navegação
│   ├── assets/              # Imagens e recursos estáticos
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos customizados
│   └── main.jsx             # Ponto de entrada
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm, npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd empresa-website

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm run dev
```

### Build para Produção
```bash
# Gere a build otimizada
pnpm run build

# Visualize a build localmente
pnpm run preview
```

## 🎯 Funcionalidades Implementadas

### ✅ Navegação
- [x] Navbar responsivo com menu mobile
- [x] Navegação entre seções
- [x] Indicador de seção ativa
- [x] Scroll suave

### ✅ Interatividade
- [x] Hover effects em todos os elementos
- [x] Animações de transição
- [x] Microinterações nos botões
- [x] Loading screen inicial

### ✅ Formulários
- [x] Formulário de contato funcional
- [x] Validação de campos obrigatórios
- [x] Feedback visual de envio
- [x] Reset automático após envio

### ✅ Responsividade
- [x] Layout adaptativo para mobile
- [x] Otimização para tablet
- [x] Design desktop completo
- [x] Imagens responsivas

### ✅ Performance
- [x] Lazy loading preparado
- [x] Otimização de imagens
- [x] CSS minificado
- [x] Bundle otimizado com Vite

## 🔧 Customização

### Cores
Edite as variáveis CSS em `src/App.css` para personalizar a paleta de cores:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... outras variáveis */
}
```

### Conteúdo
Modifique os arquivos em `src/components/sections/` para alterar o conteúdo de cada seção.

### Estilos
Adicione estilos customizados em `src/App.css` ou use classes Tailwind diretamente nos componentes.

## 📱 Compatibilidade

### Navegadores Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos Testados
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024, 1024x768)
- Mobile (375x667, 414x896)

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte sites estáticos:

- **Vercel**: Deploy automático via Git
- **Netlify**: Drag & drop da pasta `dist`
- **GitHub Pages**: Via GitHub Actions
- **AWS S3**: Upload da build para bucket

## 📄 Licença

Este projeto foi desenvolvido como demonstração de habilidades em desenvolvimento frontend moderno.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
