# Skill: Landing Page Frontend Architecture Standards
# Trigger: paths("src/**/*", "quasar.config.ts")

## 🚀 Stack Context
- Vue 3 (Composition API com `<script setup>`)
- Quasar Framework (Componentes e utilitários)
- Vite (Bundler)
- TypeScript (Strict mode)

## 🏗️ Architectural Rules
1. **Foco em Landing Page**: Como o projeto é uma landing page de página única (ou quase isso), evite sobredesenhar. Mantenha os componentes focados e na pasta `src/components/` de forma direta ou agrupados por seções simples (ex: `src/components/sections/` ou direto na raiz de components se forem poucos). Não use Atomic Design complexo (`atoms/molecules/organisms`).
2. **Component Design**: Prefira componentes nativos do Quasar (`q-btn`, `q-carousel`, `q-img`, etc.) e customize via props, classes utilitárias do Quasar ou CSS local.
3. **State Management & Logic**: O uso do Pinia/stores deve ser evitado ou restrito ao mínimo necessário (ex: preferir state local na página se for apenas controle de UI).
4. **Design & Estética (The Maria Touch)**: Foco total em uma experiência visual premium, animações suaves de scroll, cores elegantes e tipografia refinada para combinar com a identidade da marca.

## TypeScript
- Tipos e interfaces devem ser simples.
- Se necessário, declarar em `src/types/index.ts` ou diretamente no componente correspondente se forem exclusivos dele.
- Prefixo `I` nas interfaces não é obrigatório para componentes simples, mas recomenda-se consistência.

## CSS & Estilização
- Usar predominantemente as classes utilitárias de Grid, Flexbox e Spacing do Quasar.
- Para customizações visuais detalhadas, usar blocos `<style scoped lang="scss">` no próprio componente ou centralizar em `src/css/app.scss`.
- Use nomes de classes semânticos e simples (kebab-case).

## Imports
- Use sempre caminho absoluto a partir de `src`.
  - ✅ `import MyComponent from 'components/MyComponent.vue'`
  - ✅ `import { useMyStore } from 'src/stores/myStore'`
  - ❌ `import MyComponent from '../../components/MyComponent.vue'`

## 🛡️ Anti-Hallucination & Scope Guardrails
- Não crie componentes UI customizados do zero se o Quasar fornecer um equivalente.
- Não introduza estruturas complexas de roteamento ou estados compartilhados sem real necessidade técnica.