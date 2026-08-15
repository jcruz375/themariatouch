<template>
  <router-link to="/" class="brand-logo row items-center no-wrap text-decoration-none">
    <img
      :src="logo1x"
      :srcset="`${logo1x} 1x, ${logo2x} 2x`"
      alt="The Maria Touch"
      class="logo-img"
    />
  </router-link>
</template>

<script setup lang="ts">
import logo1x from '../assets/logo.png'
import logo2x from '../assets/logo@2x.png'
</script>

<style scoped lang="scss">
.brand-logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
}

.logo-img {
  height: 50px;
  width: auto;
  display: block;
  object-fit: contain;
}
</style>

