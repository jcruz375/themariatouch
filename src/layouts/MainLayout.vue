<template>
  <q-layout view="hHh Lpr lFf">
    <!-- Header Section using Figma Navigation Component -->
    <q-header flat class="bg-white text-dark">
      <HeaderNav @toggle-mobile-menu="mobileDrawerOpen = !mobileDrawerOpen" />
    </q-header>

    <!-- Mobile Navigation Drawer -->
    <q-drawer
      v-model="mobileDrawerOpen"
      side="right"
      overlay
      bordered
      behavior="mobile"
      class="bg-white"
    >
      <div class="column full-height q-pa-lg">
        <div class="row items-center justify-between q-mb-xl">
          <AppLogo />
          <q-btn
            flat
            dense
            round
            icon="close"
            color="primary"
            @click="mobileDrawerOpen = false"
          />
        </div>

        <q-list class="q-mb-auto">
          <q-item
            v-for="item in navItems"
            :key="item.label"
            clickable
            v-ripple
            class="mobile-nav-item rounded-borders q-mb-sm"
            @click="onNavClick(item.href)"
          >
            <q-item-section class="text-subtitle1 text-weight-bold text-secondary">
              {{ item.label }}
            </q-item-section>
          </q-item>
        </q-list>

        <div class="q-pt-md">
          <q-btn
            unelevated
            no-caps
            class="full-width cta-mobile-btn"
            label="Get a Quote"
            @click="onGetQuoteMobile"
          />
        </div>
      </div>
    </q-drawer>

    <!-- Main Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderNav from '../components/HeaderNav.vue'
import AppLogo from '../components/AppLogo.vue'

const mobileDrawerOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
]

function onNavClick(href: string) {
  mobileDrawerOpen.value = false
  const target = document.querySelector(href)
  if (target) {
    const headerOffset = 90
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

function onGetQuoteMobile() {
  onNavClick('#quote-form')
}
</script>

<style scoped lang="scss">
.mobile-nav-item {
  color: #5B88B2;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  border-radius: 8px;

  &:hover {
    background-color: #F3F8FC;
    color: #334C5D;
  }
}

.cta-mobile-btn {
  background: linear-gradient(135deg, #7FB7DC 0%, #5B88B2 100%);
  color: #FFFFFF;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(109, 160, 203, 0.3);
}
</style>
