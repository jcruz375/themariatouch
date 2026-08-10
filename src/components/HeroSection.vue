<template>
  <section class="hero-section bg-white">
    <div class="hero-container row items-center justify-between">
      <!-- Left Column: Content & Calls to Action -->
      <div class="hero-content col-12 col-md-6 q-pr-md-xl column justify-center">
        <!-- Subtitle Badge / Tagline -->
        <div class="hero-subtitle row items-center q-mb-md">
          <span class="subtitle-line q-mr-sm"></span>
          <span class="subtitle-text">RESIDENCIAL CLEANING • AUSTRALIA</span>
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
        <div class="hero-actions row items-center q-gutter-md q-mb-xl">
          <q-btn unelevated no-caps class="btn-primary-cta" label="Request a Quote" @click="scrollToQuote" />

          <q-btn outline no-caps class="btn-secondary-cta" label="See the results" @click="scrollToResults" />
        </div>

        <!-- Direct Phone Line -->
        <div class="hero-phone row items-center">
          <span class="text-grey-8 q-mr-xs">or call</span>
          <a href="tel:0426658642" class="phone-number">0426 658 642</a>
        </div>
      </div>

      <!-- Right Column: Featured Image -->
      <div class="hero-media col-12 col-md-6 q-mt-lg q-mt-md-none row justify-center items-center">
        <div class="image-wrapper">
          <img src="../assets/cleaners.png" alt="The Maria Touch Professional Cleaners" class="hero-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToQuote() {
  const target = document.getElementById('quote-form')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToResults() {
  const target = document.getElementById('results')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  overflow: hidden;
}

.hero-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 48px;

  @media (max-width: 1024px) {
    padding: 32px 32px;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
}

.hero-subtitle {
  user-select: none;
}

.subtitle-line {
  display: inline-block;
  width: 32px;
  height: 2px;
  background-color: #7FB7DC;
}

.subtitle-text {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #7FB7DC;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: 68px;
  font-weight: 400;
  line-height: 92px;
  color: #909090;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 46px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 1.2;
  }
}

.text-highlight {
  font-weight: 800;
  color: #7FB7DC;
  background: linear-gradient(180deg, #7FB7DC 0%, #1F83C4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: #909090;
  max-width: 580px;
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
}

.btn-primary-cta {
  background-color: #7FB7DC;
  color: #FFFFFF;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 32px;
  border-radius: 10px;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.9;
  }
}

.btn-secondary-cta {
  border: 2px solid #7FB7DC;
  color: #7FB7DC;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 12px 30px;
  border-radius: 10px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #F0F7FC;
  }
}

.hero-phone {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
}

.phone-number {
  font-weight: 700;
  color: #7FB7DC;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
}

.image-wrapper {
  max-width: 600px;
  width: 100%;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
