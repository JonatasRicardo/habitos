# Habitos

Protótipo React de um app de acompanhamento de hábitos diários. A interface foi desenhada no Figma e implementada de forma responsiva com React, TypeScript, Tailwind CSS e Motion, usando `localStorage` para persistência local e Storybook para documentação dos componentes.

## Funcionalidades

- **Home** — página de apresentação do projeto com links para o design no Figma, protótipo navegável, código no GitHub e Storybook.
- **Protótipo React (Dashboard)** — visão de estatísticas dos hábitos por dia, semana e mês, com barras de progresso e destaque do melhor hábito do período.
- **Gerenciar hábitos** — lista de hábitos com reordenação por arrastar e soltar (drag and drop) via `@dnd-kit`.

Os hábitos suportam três tipos: `boolean` (sim/não), `counter` (contador com meta) e `duration` (tempo com meta). Os dados iniciais são semeados automaticamente no `localStorage` na primeira execução.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler/dev server
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Motion](https://motion.dev/) para animações
- [@dnd-kit](https://dndkit.com/) para drag and drop
- [lucide-react](https://lucide.dev/) para ícones
- [Storybook](https://storybook.js.org/) para documentação de componentes
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes
- [Oxlint](https://oxc.rs/) para lint

## Como rodar

Pré-requisito: Node.js (versão LTS recomendada).

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview
```

## Scripts

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite. |
| `npm run build` | Faz o type-check (`tsc -b`) e gera o build de produção. |
| `npm run preview` | Serve localmente o build de produção. |
| `npm run test` | Executa a suíte de testes com Vitest. |
| `npm run lint` | Roda o Oxlint no código-fonte. |
| `npm run storybook` | Inicia o Storybook em `localhost:6006`. |
| `npm run build-storybook` | Gera o build estático do Storybook. |

## Estrutura do projeto

```
src/
├── App.tsx                 # roteamento por hash entre as telas
├── main.tsx                # ponto de entrada
├── types.ts                # tipos de domínio (Habit, HabitCompletion, stats)
├── components/             # componentes de UI + stories
├── data/                   # seed de hábitos, persistência (storage) e cálculo de estatísticas
└── screens/                # Home, Dashboard e Gerenciar hábitos
```

## Roteamento

A navegação é feita pelo hash da URL:

- `#/` — Home
- `#/prototipo-react` — Dashboard
- `#/gerenciar-habitos` — Gerenciar hábitos

## Links

- **Design (Figma):** [arquivo de design](https://www.figma.com/design/NdUd55SST624cVUhRn97zj/Habitos?node-id=19-18)
- **Protótipo (Figma):** [fluxo navegável](https://www.figma.com/proto/NdUd55SST624cVUhRn97zj/Habitos?node-id=19-18&starting-point-node-id=19%3A18)
- **Storybook:** [habitos-doc.vercel.app](https://habitos-doc.vercel.app/)
- **GitHub:** [JonatasRicardo/habitos](https://github.com/JonatasRicardo/habitos)

## Autor

Jonatas Ricardo — [LinkedIn](https://www.linkedin.com/in/jonatasricardo/) · [Site](https://jonatasricardo.com/)
