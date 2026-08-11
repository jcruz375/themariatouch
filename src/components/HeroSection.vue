<template>
  <section class="hero-section">
    <div class="hero-container row items-center justify-between">
      <!-- Left Column: Content & Calls to Action -->
      <div class="hero-content col-12 col-md-6 q-pr-md-xl column justify-center">
        <!-- Subtitle Badge / Tagline -->
        <div class="hero-subtitle row items-center q-mb-md">
          <span class="subtitle-line q-mr-sm"></span>
          <span class="subtitle-text">— RESIDENCIAL CLEANING • AUSTRALIA</span>
        </div>

        <!-- Main Headline -->
        <h1 class="hero-title q-ma-none">
          Because every<br />
          home deserves<br />
          <span class="text-highlight">exceptional</span> care.
        </h1>

        <!-- Subtitle Description -->
        <p class="hero-description">
          We bring premium cleaning and meticulous care to every home, treating
          your space with the same respect and attention we'd give our own.
        </p>

        <!-- Action Buttons -->
        <div class="hero-actions row items-center q-gutter-md q-mb-lg">
          <q-btn
            unelevated
            no-caps
            class="btn-primary-cta"
            label="Request a Quote"
            @click="scrollToQuote"
          />

          <q-btn
            outline
            no-caps
            class="btn-secondary-cta"
            label="See the results"
            @click="scrollToResults"
          />
        </div>

        <!-- Direct Phone Line -->
        <div class="hero-phone row items-center">
          <span class="phone-label q-mr-xs">or call</span>
          <a href="tel:0426658642" class="phone-number">0426 658 642</a>
        </div>
      </div>

      <!-- Right Column: Featured Image -->
      <div class="hero-media col-12 col-md-6 q-mt-xl q-mt-md-none row justify-center items-center">
        <div class="image-wrapper">
          <img
            src="../assets/hero-1.png"
            alt="The Maria Touch Professional Cleaners in Kitchen"
            class="hero-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.4 })
    .from('.hero-title', { opacity: 0, y: 30, duration: 0.4 }, '+=0.08')
    .from('.hero-description', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-actions', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-phone', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-media', { opacity: 0, scale: 0.95, y: 20, duration: 0.4 }, '+=0.08')

  gsap.to('.hero-img', {
    y: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
})

function scrollToSection(targetId: string) {
  const target = document.querySelector(targetId)
  if (target) {
    const headerOffset = 90
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

function scrollToQuote() {
  scrollToSection('#quote-form')
}

function scrollToResults() {
  scrollToSection('#services')
}
</script>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  background-color: #7BB2D9;
  overflow: hidden;
}

.hero-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 48px;

  @media (max-width: 1024px) {
    padding: 60px 32px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
}

.hero-subtitle {
  user-select: none;
}

.subtitle-line {
  display: inline-block;
  width: 32px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);
}

.subtitle-text {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
}

.hero-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 56px;
  font-weight: 300;
  line-height: 1.15;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin-top: 12px;

  @media (max-width: 1024px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.text-highlight {
  font-weight: 800;
  color: #206AA9;
}

.hero-description {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #FFFFFF;
  max-width: 540px;
  margin-top: 24px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
}

.hero-actions {
  gap: 16px;
}

.btn-primary-cta {
  background-color: #FFFFFF !important;
  color: #206AA9 !important;
  font-family: 'Inter', 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 8px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #F0F7FC !important;
    transform: translateY(-1px);
  }
}

.btn-secondary-cta {
  background-color: transparent !important;
  border: 2px solid #FFFFFF !important;
  color: #FFFFFF !important;
  font-family: 'Inter', 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
    transform: translateY(-1px);
  }
}

.hero-phone {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 18px;
  color: #FFFFFF;
  margin-top: 8px;
}

.phone-label {
  color: rgba(255, 255, 255, 0.9);
}

.phone-number {
  font-weight: 800;
  color: #FFFFFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.image-wrapper {
  max-width: 580px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 20px;
}
</style>
