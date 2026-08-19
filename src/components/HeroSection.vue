<template>
  <section class="hero-section">
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

      <!-- Right Column: Featured Image Container (580x464) -->
      <div class="hero-media col-12 col-md-6 q-mt-xl q-mt-md-none row justify-center items-center">
        <div class="hero-media-wrapper">
          <!-- Kitchen Background (hero-1.png) -->
          <img
            src="/images/hero-1.png"
            alt="Before and after end of lease bond cleaning in a Melbourne kitchen"
            class="hero-bg-img"
          />

          <!-- Right Woman (hero-1b.png) - Positioned on white countertop -->
          <img
            src="/images/hero-1b.png"
            alt="Fully uniformed, police-checked cleaning staff arriving at a residential property in Melbourne"
            class="hero-woman-right"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { openWhatsAppQuote } from '../utils/whatsapp'

gsap.registerPlugin(ScrollTrigger)

let destroyParallax: (() => void) | null = null

function isSafari(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  return /Safari/i.test(ua) && !/Chrome|CriOS|Android|Edg|OPR/i.test(ua)
}

function initParallaxTilt() {
  const womanEl = document.querySelector('.hero-woman-right')
  const bgEl = document.querySelector('.hero-bg-img')

  const elementsWithMax = [
    { el: bgEl, max: -4 },
    { el: womanEl, max: 14 }
  ]

  const LIMIT_PX = 16

  // Aumentado duration para 1.4s para um movimento e retorno mais lentos, fluidos e elegantes
  const movers = elementsWithMax
    .map(({ el, max }) => {
      if (!el) return null
      gsap.set(el, { willChange: 'transform' })
      return {
        xTo: gsap.quickTo(el, 'x', { duration: 1.4, ease: 'power2.out' }),
        yTo: gsap.quickTo(el, 'y', { duration: 1.4, ease: 'power2.out' }),
        max
      }
    })
    .filter(Boolean)

  if (movers.length === 0) return () => {}

  const shiftX = (nx: number, max: number) => gsap.utils.clamp(-LIMIT_PX, LIMIT_PX, nx * max)
  // Menor ângulo na diagonal (Y é 25% de X)
  const shiftY = (nx: number, max: number) => gsap.utils.clamp(-LIMIT_PX, LIMIT_PX, -nx * (max * 0.25))

  let mouseTimer: ReturnType<typeof setTimeout> | null = null

  // Retorno suave para a posição inicial (0, 0)
  const resetToCenter = () => {
    movers.forEach((mover) => {
      if (mover) {
        mover.xTo(0)
        mover.yTo(0)
      }
    })
  }

  // Mouse move handler (Desktop) - Movimento lento para onde o mouse está
  const onMove = (e: MouseEvent) => {
    if (mouseTimer) clearTimeout(mouseTimer)

    const nx = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to +1
    movers.forEach((mover) => {
      if (mover) {
        mover.xTo(shiftX(nx, mover.max))
        mover.yTo(shiftY(nx, mover.max))
      }
    })

    // Após o mouse parar, inicia retorno lento para a posição inicial
    mouseTimer = setTimeout(resetToCenter, 1000)
  }

  // Mouse leave handler - Retorno lento ao sair da janela
  const onMouseLeave = () => {
    if (mouseTimer) clearTimeout(mouseTimer)
    resetToCenter()
  }

  // Device orientation / tilt handler (Mobile)
  const onTilt = (e: DeviceOrientationEvent) => {
    const nx = gsap.utils.clamp(-1, 1, (e.gamma || 0) / 45) // -1 to +1
    movers.forEach((mover) => {
      if (mover) {
        mover.xTo(shiftX(nx, mover.max))
        mover.yTo(shiftY(nx, mover.max))
      }
    })
  }

  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseleave', onMouseLeave, { passive: true })

  // Desabilita o giroscópio (deviceorientation) se for navegador Safari por incompatibilidade
  const safari = isSafari()
  if (!safari) {
    window.addEventListener('deviceorientation', onTilt, { passive: true })
  }

  return function destroy() {
    if (mouseTimer) clearTimeout(mouseTimer)
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseleave', onMouseLeave)
    if (!safari) {
      window.removeEventListener('deviceorientation', onTilt)
    }
  }
}

onMounted(() => {
  // Entrance Animation Timeline
  const tl = gsap.timeline()
  tl.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.4 })
    .from('.hero-title', { opacity: 0, y: 30, duration: 0.4 }, '+=0.08')
    .from('.hero-description', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-actions', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-phone', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-media', { opacity: 0, scale: 0.95, y: 20, duration: 0.4 }, '+=0.08')
    .from('.hero-woman-right', { opacity: 0, x: 45, y: 15, scale: 0.96, duration: 0.7, ease: 'back.out(1.2)' }, '-=0.25')

  // Scroll Parallax Effect on Hero Media
  gsap.to('.hero-media-wrapper', {
    y: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })

  // Initialize 3D Horizontal Parallax (Mouse Follow + Device Tilt)
  destroyParallax = initParallaxTilt()
})

onUnmounted(() => {
  if (destroyParallax) {
    destroyParallax()
  }
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
  openWhatsAppQuote()
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

/* Featured Media Container - 580x464 */
.hero-media-wrapper {
  position: relative;
  width: 100%;
  max-width: 580px;
  height: 464px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  background-color: #F7FAFC;

}

/* Kitchen Background (hero-1.png) */
.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.06);
  will-change: transform;
}

/* Right Woman (hero-1b.png) */
.hero-woman-right {
  position: absolute;
  bottom: 16px;
  right: -129px;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  will-change: transform;

  @media (max-width: 600px) {
    bottom: 10px;
    max-width: unset;
  }

  @media (max-width: 500px) {
    bottom: -5px;
  }
}
</style>
