<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <!-- Section Header -->
      <div class="services-header q-mb-xl">
        <!-- Subtitle / Kicker -->
        <div class="services-subtitle row items-center q-mb-md">
          <span class="subtitle-line q-mr-sm"></span>
          <span class="subtitle-text">OUR SERVICES</span>
        </div>

        <!-- Section Description -->
        <p class="services-description">
          Professional cleaning tailored to your home, your schedule and your
          lifestyle — with exceptional care and attention to every detail.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card column"
        >
          <!-- Card Image -->
          <div class="card-image-wrap q-mb-lg">
            <img
              :src="service.image"
              :srcset="`${service.image} 1x, ${service.image2x} 2x`"
              :alt="service.title"
              class="card-img"
              loading="lazy"
            />
          </div>

          <!-- Card Content -->
          <div class="card-content column q-gutter-y-xs">
            <!-- Sub-tag / Kicker -->
            <span class="card-kicker">{{ service.kicker }}</span>

            <!-- Card Title -->
            <h3 class="card-title q-ma-none">{{ service.title }}</h3>

            <!-- Card Description -->
            <p class="card-description q-ma-none">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface ServiceItem {
  image: string
  image2x: string
  kicker: string
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    image: '/service/1.png',
    image2x: '/service/1@2x.png',
    kicker: 'EVERYDAY CARE',
    title: 'Home Cleaning',
    description:
      'Keep your home consistently fresh and spotless with reliable cleaning tailored to your routine.'
  },
  {
    image: '/service/2.png',
    image2x: '/service/2@2x.png',
    kicker: 'A FRESH START',
    title: 'Deep Cleaning',
    description:
      'A detailed top-to-bottom clean for the areas that need a little extra attention and care.'
  },
  {
    image: '/service/3.png',
    image2x: '/service/3@2x.png',
    kicker: 'MOVE WITH CONFIDENCE',
    title: 'End of Lease',
    description:
      'Thorough cleaning designed to leave your property spotless, refreshed and ready for handover.'
  },
  {
    image: '/service/4.png',
    image2x: '/service/4@2x.png',
    kicker: 'MORE TIME FOR YOU',
    title: 'One-Off Cleaning',
    description:
      'Professional cleaning whenever you need an extra hand — no ongoing commitment required.'
  },
  {
    image: '/service/5.png',
    image2x: '/service/5@2x.png',
    kicker: 'THE FINISHING TOUCH',
    title: 'Kitchen & Bathroom',
    description:
      'Extra attention where it matters most, leaving kitchens and bathrooms fresh, hygienic and beautifully clean.'
  },
  {
    image: '/service/6.png',
    image2x: '/service/6@2x.png',
    kicker: 'MADE FOR YOUR HOME',
    title: 'Custom Cleaning',
    description:
      "Need something different? We'll tailor the service to your home, priorities and schedule."
  }
]

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 75%'
    }
  })

  tl.from('.services-subtitle', { opacity: 0, y: 20, duration: 0.4 })
    .from('.services-description', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.service-card', {
      opacity: 0,
      y: 30,
      duration: 0.4,
      stagger: 0.1
    }, '+=0.08')
})
</script>

<style scoped lang="scss">
.services-section {
  width: 100%;
  background-color: #7BB2D9;
  overflow: hidden;
}

.services-container {
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

.services-subtitle {
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

.services-description {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #FFFFFF;
  max-width: 580px;
  margin-top: 12px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

/* Responsive Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* Card Styling */
.service-card {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
}

.card-image-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background-color: #F0F4F8;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  .service-card:hover & {
    transform: scale(1.03);
  }
}

.card-kicker {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #5A94C3;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.card-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #3B7FB7;
  letter-spacing: -0.01em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
}

.card-description {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #5E7A92;
}
</style>
