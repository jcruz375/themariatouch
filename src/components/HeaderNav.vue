<template>
  <header class="header-nav-wrap bg-white">
    <div class="header-nav-container row items-center justify-between no-wrap">
      <!-- Left Side: Logo -->
      <div class="logo-area row items-center">
        <AppLogo />
      </div>

      <!-- Right Side: Desktop Navigation Links + CTA -->
      <nav class="desktop-nav row items-center gt-sm">
        <div class="nav-links row items-center">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="nav-link"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>

        <q-btn
          unelevated
          no-caps
          class="cta-btn q-ml-xl"
          label="Get a Quote"
          @click="onGetQuote"
        />
      </nav>

      <!-- Right Side: Mobile Hamburger Button -->
      <div class="mobile-toggle lt-md">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="primary"
          aria-label="Toggle Mobile Menu"
          @click="$emit('toggle-mobile-menu')"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'

defineEmits(['toggle-mobile-menu'])

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
]

function scrollToSection(targetId: string) {
  const target = document.querySelector(targetId)
  if (target) {
    const headerOffset = 90
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

function onGetQuote() {
  scrollToSection('#quote-form')
}
</script>

<style scoped lang="scss">
.header-nav-wrap {
  width: 100%;
  border-bottom: 1px solid #E5E7EB;
  position: relative;
  z-index: 100;
}

.header-nav-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 48px;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
}

.nav-links {
  gap: 32px;
}

.nav-link {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #5B88B2;
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
  position: relative;
  padding: 4px 0;

  &:hover {
    color: #334C5D;
    opacity: 0.85;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #6DA0CB;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
}

.cta-btn {
  background: linear-gradient(135deg, #7FB7DC 0%, #5B88B2 100%);
  color: #FFFFFF;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(109, 160, 203, 0.25);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(109, 160, 203, 0.4);
    background: linear-gradient(135deg, #6DA0CB 0%, #4F7F9D 100%);
  }
}
</style>
