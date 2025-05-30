# Gerenciador TG

Gerenciador TG é um site administrativo para gerenciar Trabalhos de Graduação (TG). Com ele, administradores podem cadastrar professores e alunos, atribuir orientações e gerar relatórios.

## Tecnologias

- Next.js
- TypeScript
- Radix UI
- React Hook Form
- date-fns

## Pré-requisitos

- Node.js (>=14.x)
- bun

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/LeoCarrijo/front-end-gerenciador-tg.git
   cd front-end-gerenciador-tg
   ```
2. Instale as dependências:
   ```bash
   bun install
   ```

## Execução (desenvolvimento)

```bash
bun dev
```
Abra http://localhost:3000 no navegador.

## Build e produção

```bash
bun run build
bun start
```

## Estrutura do projeto

- `src/app/` — Páginas e rotas do Next.js (Next App Router)
- `src/components/` — Componentes reutilizáveis de UI
- `src/actions/` — Funções para requisições e lógica de negócio
- `public/` — Arquivos estáticos (imagens, ícones)