<template>
  <router-link to="/" class="brand-logo row items-center no-wrap text-decoration-none">
    <!-- Spray Bottle + Sparkles SVG Icon -->
    <div class="logo-icon-wrap q-mr-sm">
      <svg
        width="44"
        height="48"
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="spray-svg"
      >
        <!-- Sparkles / Stars -->
        <path
          d="M12 4L13.2 7.8L17 9L13.2 10.2L12 14L10.8 10.2L7 9L10.8 7.8L12 4Z"
          fill="#7FB7DC"
        />
        <path
          d="M26 2L26.8 4.7L29.5 5.5L26.8 6.3L26 9L25.2 6.3L22.5 5.5L25.2 4.7L26 2Z"
          fill="#5B88B2"
        />
        <path
          d="M33 11L33.6 13.1L35.7 13.7L33.6 14.3L33 16.4L32.4 14.3L30.3 13.7L32.4 13.1L33 11Z"
          fill="#7FB7DC"
        />

        <!-- Spray Nozzle & Trigger -->
        <path
          d="M16 16C16 15.4477 16.4477 15 17 15H25C25.5523 15 26 15.4477 26 16V18H16V16Z"
          fill="#6DA0CB"
        />
        <path
          d="M22 18H28C28.5523 18 29 18.4477 29 19V21C29 21.5523 28.5523 22 28 22H24L22 18Z"
          fill="#5B88B2"
        />
        <path
          d="M19 18L15 25C14.7 25.5 15.1 26 15.7 26H18.5L19 18Z"
          fill="#6DA0CB"
        />

        <!-- Bottle Neck -->
        <rect x="18" y="18" width="6" height="8" rx="1" fill="#7FB7DC" />

        <!-- Bottle Body -->
        <path
          d="M16 26C14.3431 26 13 27.3431 13 29V42C13 44.2091 14.7909 46 17 46H25C27.2091 46 29 44.2091 29 42V29C29 27.3431 27.6569 26 26 26H16Z"
          fill="#7FB7DC"
        />
        <!-- Fluid Level / Reflection line -->
        <path
          d="M16 32C16 32 18 30.5 21 32C24 33.5 26 32 26 32V42C26 43.6569 24.6569 45 23 45H19C17.3431 45 16 43.6569 16 42V32Z"
          fill="#6199C7"
          fill-opacity="0.5"
        />
      </svg>
    </div>

    <!-- Typography (THE / MARIA / TOUCH) -->
    <div class="logo-text-col column justify-center">
      <span class="logo-the">THE</span>
      <span class="logo-maria">MARIA</span>
      <span class="logo-touch">TOUCH</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.brand-logo {
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
}

.spray-svg {
  display: block;
}

.logo-text-col {
  line-height: 0.95;
  color: #5A94C3;
  font-family: 'Manrope', sans-serif;
}

.logo-the {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.28em;
  color: #6DA0CB;
}

.logo-maria {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: #5B88B2;
}

.logo-touch {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.35em;
  color: #6DA0CB;
}
</style>
