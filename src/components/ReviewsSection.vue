<template>
  <section id="reviews" class="reviews-section">
    <div class="reviews-container">
      <!-- Section Header -->
      <div class="reviews-header q-mb-xl">
        <!-- Subtitle Kicker (Right-aligned on desktop) -->
        <div class="reviews-subtitle row items-center justify-end-desktop q-mb-md">
          <span class="subtitle-line q-mr-sm"></span>
          <span class="subtitle-text">— OUR REVIEWS</span>
        </div>

        <!-- Main Headline H2 -->
        <h2 class="reviews-title q-ma-none">
          TRUSTED TO MAKE HOMES SHINE
        </h2>
      </div>

      <!-- Reviews Grid -->
      <div class="reviews-grid">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="review-card column justify-start"
        >
          <!-- Card Header: Stars & Client Name with underline -->
          <div class="review-card-header q-mb-md">
            <span class="stars">★★★★★</span>
            <span class="client-name q-ml-sm">{{ review.name }}</span>
          </div>

          <!-- Card Body: Testimonial Text -->
          <p class="review-text q-ma-none">
            {{ review.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ReviewItem {
  name: string
  text: string
}

const reviews: ReviewItem[] = [
  {
    name: 'Sarah M.',
    text: 'Absolutely impressed with the attention to detail. The house looked and felt incredibly fresh, and they took care of all the little things I usually notice after a clean. Reliable, friendly and professional.'
  },
  {
    name: 'Emily R.',
    text: "Coming home after they've cleaned is honestly the best feeling. Everything is spotless, the team is lovely, and I completely trust them in my home. I wouldn't hesitate to recommend them."
  },
  {
    name: 'Jessica T.',
    text: "We booked a deep clean and the difference was amazing. The kitchen and bathrooms looked fantastic, and even the areas I wasn't expecting them to clean were taken care of. Excellent service from start to finish."
  },
  {
    name: 'Michael & Sophie',
    text: "We've been using their regular cleaning service for a while now and couldn't be happier. They're consistent, punctual and always leave our home beautifully clean. It gives us so much more time back in our week."
  }
]
</script>

<style scoped lang="scss">
.reviews-section {
  width: 100%;
  background-color: #7BB2D9;
  overflow: hidden;
}

.reviews-container {
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

.reviews-subtitle {
  user-select: none;
}

.justify-end-desktop {
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
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

.reviews-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.15;
  color: #FFFFFF;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-top: 12px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
}

/* Reviews 2x2 Grid */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* Review Card Component */
.review-card {
  background-color: #9ECDF0;
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  @media (max-width: 768px) {
    padding: 24px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }
}

.review-card-header {
  display: inline-block;
  border-bottom: 1.5px solid #206AA9;
  padding-bottom: 6px;
  align-self: flex-start;
}

.stars {
  color: #206AA9;
  font-size: 16px;
  letter-spacing: 2px;
}

.client-name {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #206AA9;
}

.review-text {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: #1F5F94;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}
</style>
