<template>
  <section id="about" class="about-section">
    <div class="about-container row items-center justify-between">
      <!-- Left Column: Image -->
      <div class="about-media col-12 col-md-6 q-mb-xl q-mb-md-none row justify-center items-center">
        <div class="image-wrapper">
          <img
            src="../assets/hero-2.png"
            alt="The Maria Touch Cleaners in Living Room"
            class="about-img"
          />
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="about-content col-12 col-md-6 q-pl-md-xl column justify-center">
        <!-- Subtitle Kicker -->
        <div class="about-subtitle row items-center justify-end-desktop q-mb-md">
          <span class="subtitle-text">— ABOUT US</span>
        </div>

        <!-- Headline H2 -->
        <h2 class="about-title q-ma-none text-right-desktop">
          A beautifully clean home is the<br class="gt-sm" />
          <span class="text-highlight">foundation</span> of everyday comfort.
        </h2>

        <!-- Body Text -->
        <p class="about-description text-right-desktop">
          We're detail-oriented, reliable and committed to a standard of care that
          goes beyond ordinary cleaning. While it's easy to focus on what you can
          see, we pay attention to the little things that make your entire home feel
          truly clean, fresh and beautifully cared for. We believe a clean home is
          about more than appearances. It's about creating a space where you can
          relax, feel comfortable and spend more time enjoying the things that
          matter most.
        </p>

        <!-- Final Callout / Signature -->
        <div class="about-signature text-right-desktop">
          Come home to clean.
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
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%'
    }
  })
  tl.from('.about-media', { opacity: 0, x: -40, duration: 0.4 })
    .from('.about-subtitle', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.about-title', { opacity: 0, y: 25, duration: 0.4 }, '+=0.08')
    .from('.about-description', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.about-signature', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')

  gsap.to('.about-img', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })
})
</script>

<style scoped lang="scss">
.about-section {
  width: 100%;
  background-color: #7BB2D9;
  overflow: hidden;
}

.about-container {
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

.image-wrapper {
  max-width: 580px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
}

.about-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 20px;
}

.about-subtitle {
  user-select: none;
}

.justify-end-desktop {
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
}

.subtitle-text {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
}

.about-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 44px;
  font-weight: 300;
  line-height: 1.2;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin-top: 12px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
}

.text-highlight {
  font-weight: 800;
  color: #206AA9;
}

.text-right-desktop {
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
}

.about-description {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: #FFFFFF;
  margin-top: 24px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
}

.about-signature {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #206AA9;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 18px;
  }
}
</style>
