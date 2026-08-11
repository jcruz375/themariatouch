<template>
  <q-page class="landing-page-bg">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Us Section -->
    <AboutUsSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Reviews / Testimonials Section -->
    <ReviewsSection />

    <!-- Contact & Quote Form Section -->
    <ContactSection />
  </q-page>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutUsSection from '../components/AboutUsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<style scoped lang="scss">
.landing-page-bg {
  background-color: #7BB2D9;
  min-height: 100vh;
}
</style>
