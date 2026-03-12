# 🚀 Portfólio Pessoal

Portfólio moderno e responsivo construído com **React**, **TypeScript**, **Vite** e **Tailwind CSS**. Showcase interativo de projetos e habilidades com componentes UI avançados.

## ✨ Características

- ⚡ **Vite** - Build rápido e HMR (Hot Module Replacement)
- 🎨 **Tailwind CSS** - Styling moderno e responsivo
- 🔧 **TypeScript** - Type safety completo
- 🧩 **shadcn/ui** - Componentes React construídos com Headless UI
- ✅ **ESLint** - Code quality e best practices
- 📱 **Responsivo** - Funciona em desktop, tablet e mobile
- 🎭 **Componentes Avançados** - Aurora text, Bento grid, Particles, Magic cards e mais

## 🌐 Deploy

**Live:** https://site-portfolio.pages.dev

Hospedado no **Cloudflare Pages** com deploy automático via GitHub.

## 🛠️ Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 + Tailwind Animate
- **UI Components:** shadcn/ui + Base UI
- **Icons:** Lucide React
- **Animations:** Motion.js
- **Theme:** next-themes
- **Linting:** ESLint + TypeScript ESLint

## 📖 Começar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/sabinorush/site-portfolio.git
cd site-portfolio

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar dev server
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### Build para Produção

```bash
# Compilar TypeScript e fazer build
npm run build

# Preview da build
npm run preview
```

### Linting

```bash
# Verificar código
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── About.tsx       # Seção Sobre
│   ├── Contact.tsx     # Seção Contato
│   ├── Footer.tsx      # Rodapé
│   ├── Header.tsx      # Cabeçalho/Navegação
│   ├── Hero.tsx        # Seção Hero (Topo)
│   ├── Projects.tsx    # Seção Projetos
│   └── ui/             # Componentes UI reutilizáveis
├── context/            # React Context para estado global
├── data/               # Dados estáticos (conteúdo)
├── lib/                # Utilitários e funções auxiliares
├── assets/             # Imagens e recursos
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

## 🎨 Componentes Personalizados

O projeto utiliza componentes UI avançados:
- **Aurora Text** - Efeito de gradiente animado
- **Bento Grid** - Layout em grid responsivo
- **Magic Card** - Cards com hover interativo
- **Particles** - Fundo animado com partículas
- **Blur Fade** - Animação de fade com blur
- **Neon Gradient Card** - Cards com gradiente neon
- **Interactive Hover Button** - Botões com efeitos interativos

## 🚀 Deploy

Para fazer deploy no Cloudflare Pages:

1. **GitHub:** Seu repositório já está em https://github.com/sabinorush/site-portfolio
2. **Cloudflare Pages:**
   - Acesse https://dash.cloudflare.com
   - Vá para Workers & Pages → Pages
   - Conecte seu repositório GitHub
   - Build settings:
     - Framework: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
3. **Deploy:** Clique em "Save and Deploy"

O site será automaticamente deployado a cada push no branch `main`.

## 📝 Customização

### Mudar Conteúdo
Edite o arquivo `src/data/content.ts` para atualizar informações pessoais, projetos e habilidades.

### Cores e Tema
- Tailwind CSS é configurado em `tailwind.config.ts`
- Cores CSS variables em `src/index.css`

### Componentes UI
Use `shadcn/ui` para adicionar novos componentes:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📄 Configurações

- `vite.config.ts` - Configuração do Vite
- `tsconfig.json` - Configuração do TypeScript
- `tailwind.config.ts` - Configuração do Tailwind CSS
- `eslint.config.js` - Configuração do ESLint
- `components.json` - Configuração do shadcn/ui

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.2.1",
    "motion": "^12.35.2"
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "vite": "^7.3.1",
    "eslint": "^9.39.1"
  }
}
```

## 📧 Contato

- GitHub: [@sabinorush](https://github.com/sabinorush)
- Email: Veja a seção de contato no site

## 📜 Licença

Este projeto está disponível sob a licença MIT.

---

**Made with ❤️ using React, TypeScript & Vite**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
