<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-grid">
        <!-- Left Column: Contact Info & Stack -->
        <div class="contact-info column justify-start">
          <!-- Kicker Tag -->
          <div class="contact-subtitle row items-center q-mb-md">
            <span class="subtitle-line q-mr-sm"></span>
            <span class="subtitle-text">CONTACT US</span>
          </div>

          <!-- Main Title H2 -->
          <h2 class="contact-title q-ma-none">
            Let’s make your home<br />
            <span class="text-highlight">remarkable.</span>
          </h2>

          <!-- Support Paragraph -->
          <p class="contact-description">
            Request a free, tailored quote — or simply ask us a question. We’ll get back to you as soon as possible.
          </p>

          <!-- Divider Line -->
          <div class="info-divider q-mb-lg"></div>

          <!-- Contact Stack (4 Items) -->
          <div class="contact-stack column">
            <!-- Item 1: Phone / Text -->
            <div class="stack-item row items-center no-wrap">
              <div class="play-icon-wrap q-mr-md row items-center justify-center">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 8L1 15L1 1L13 8Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div class="stack-text column">
                <a href="tel:0426658642" class="item-title">0426 658 642</a>
                <span class="item-label">CALL OR TEXT</span>
              </div>
            </div>

            <!-- Item 2: WhatsApp -->
            <div class="stack-item row items-center no-wrap">
              <div class="play-icon-wrap q-mr-md row items-center justify-center">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 8L1 15L1 1L13 8Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div class="stack-text column">
                <a :href="whatsappUrl" target="_blank" rel="noopener" class="item-title">WhatsApp us</a>
                <span class="item-label">FASTEST REPLY</span>
              </div>
            </div>

            <!-- Item 3: Email -->
            <div class="stack-item row items-center no-wrap">
              <div class="play-icon-wrap q-mr-md row items-center justify-center">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 8L1 15L1 1L13 8Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div class="stack-text column">
                <a href="mailto:mariaeduarda_@hotmail.com" class="item-title">mariaeduarda_@hotmail.com</a>
                <span class="item-label">EMAIL</span>
              </div>
            </div>

            <!-- Item 4: Melbourne Area -->
            <div class="stack-item row items-center no-wrap">
              <div class="play-icon-wrap q-mr-md row items-center justify-center">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 8L1 15L1 1L13 8Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div class="stack-text column">
                <span class="item-title">Bringing exceptional cleaning to homes across Melbourne</span>
                <span class="item-label">REGULAR · DEEP CLEAN · END OF LEASE · ONE-OFF</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Request Quote Form Card -->
        <div class="form-card-column row justify-center items-start">
          <div id="quote-form" class="form-card column">
            <!-- Form Title -->
            <h3 class="form-title q-ma-none q-mb-lg">Request your free quote</h3>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="quote-form-body column q-gutter-y-md">
              <!-- Field 1: Name -->
              <div class="form-group column">
                <label for="form-name" class="field-label">Name</label>
                <input
                  id="form-name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="field-input"
                  required
                />
              </div>

              <!-- Field 2: Suburb -->
              <div class="form-group column">
                <label for="form-suburb" class="field-label">Suburb</label>
                <input
                  id="form-suburb"
                  v-model="form.suburb"
                  type="text"
                  placeholder="Your suburb"
                  class="field-input"
                  required
                />
              </div>

              <!-- Field 3: Phone (using Quasar native mask) -->
              <div class="form-group column">
                <label for="form-phone" class="field-label">Phone</label>
                <q-input
                  id="form-phone"
                  v-model="form.phone"
                  mask="#### ### ###"
                  placeholder="04XX XXX XXX"
                  outlined
                  dense
                  class="quasar-phone-input"
                  required
                />
              </div>

              <!-- Field 4: Select Cleaning Type -->
              <div class="form-group column">
                <label for="form-service" class="field-label">What type of cleaning do you need?</label>
                <div class="select-wrapper">
                  <select id="form-service" v-model="form.serviceType" class="field-select">
                    <option value="Regular Home Cleaning">Regular Home Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                    <option value="One-Off Cleaning">One-Off Cleaning</option>
                    <option value="Kitchen & Bathroom">Kitchen & Bathroom</option>
                    <option value="Custom Cleaning">Custom Cleaning</option>
                  </select>
                  <span class="chevron-icon">▼</span>
                </div>
              </div>

              <!-- Field 5: Textarea -->
              <div class="form-group column">
                <label for="form-details" class="field-label">Tell us about your home</label>
                <textarea
                  id="form-details"
                  v-model="form.details"
                  rows="3"
                  placeholder="Number of bedrooms/bathrooms, suburb, preferred date and anything else we should know..."
                  class="field-textarea"
                ></textarea>
              </div>

              <!-- Field 6: Terms Checkbox -->
              <div class="terms-group form-group row items-start no-wrap q-mt-md q-mb-xs">
                <input
                  id="form-terms"
                  v-model="form.agreeTerms"
                  type="checkbox"
                  class="field-checkbox q-mr-sm"
                  required
                />
                <label for="form-terms" class="checkbox-label">
                  I agree to be contacted about my cleaning enquiry and accept the Privacy Policy.
                </label>
              </div>

              <!-- Honeypot Anti-Spam Field -->
              <input type="checkbox" name="botcheck" class="hidden-honeypot" v-model="form.botcheck" tabindex="-1" autocomplete="off" />

              <!-- Submit CTA Button -->
              <button type="submit" class="submit-cta-btn q-mt-lg" :disabled="isSubmitting">
                <span v-if="isSubmitting">SENDING...</span>
                <span v-else>GET MY FREE QUOTE →</span>
              </button>

              <!-- Feedback Messages -->
              <div v-if="submitted" class="success-message q-mt-md text-center">
                Thank you! Your quote request has been sent successfully. We will be in touch shortly.
              </div>
              <div v-if="errorMessage" class="error-message q-mt-md text-center">
                {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { getWhatsAppUrl, openWhatsAppQuote } from '../utils/whatsapp'

gsap.registerPlugin(ScrollTrigger)

const whatsappUrl = getWhatsAppUrl()

const form = reactive({
  name: '',
  suburb: '',
  phone: '',
  serviceType: 'Regular Home Cleaning',
  details: '',
  agreeTerms: false,
  botcheck: false
})

const isSubmitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  if (form.botcheck) {
    // Bot detected via honeypot
    return
  }

  isSubmitting.value = true
  submitted.value = false
  errorMessage.value = ''

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0073be45-a222-41c5-bfc5-4e96264a664e'

  try {
    const formData = new FormData()
    formData.append('access_key', web3FormsKey)
    formData.append('subject', `New Quote Request from ${form.name} - The Maria Touch`)
    formData.append('from_name', 'The Maria Touch Web Form')
    formData.append('to_email', 'mariaeduarda_@hotmail.com')
    formData.append('name', form.name)
    formData.append('suburb', form.suburb)
    formData.append('phone', form.phone)
    formData.append('service_type', form.serviceType)
    formData.append('details', form.details)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email.')
    }

    submitted.value = true

    form.name = ''
    form.suburb = ''
    form.phone = ''
    form.serviceType = 'Regular Home Cleaning'
    form.details = ''
    form.agreeTerms = false
    form.botcheck = false
  } catch (err: any) {
    console.error('Email send error:', err)
    // Fallback: if email fails, open WhatsApp as backup so the lead is never lost
    errorMessage.value = 'Failed to send email. Opening WhatsApp...'
    const parts = [
      `Hello! I would like to request a free quote for cleaning services.`
    ]
    if (form.name) parts.push(`*Name:* ${form.name}`)
    if (form.suburb) parts.push(`*Suburb:* ${form.suburb}`)
    if (form.phone) parts.push(`*Phone:* ${form.phone}`)
    if (form.serviceType) parts.push(`*Service:* ${form.serviceType}`)
    if (form.details) parts.push(`*Details:* ${form.details}`)

    openWhatsAppQuote(parts.join('\n'))
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitted.value = false
    }, 6000)
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 75%'
    }
  })

  tl.from('.contact-subtitle', { opacity: 0, y: 20, duration: 0.4 })
    .from('.contact-title', { opacity: 0, y: 25, duration: 0.4 }, '+=0.08')
    .from('.contact-description', { opacity: 0, y: 20, duration: 0.4 }, '+=0.08')
    .from('.info-divider', { opacity: 0, scaleX: 0, transformOrigin: 'left center', duration: 0.4 }, '+=0.08')
    .from('.stack-item', { opacity: 0, x: -25, duration: 0.4, stagger: 0.1 }, '+=0.08')
    .from('.form-card', { opacity: 0, y: 30, scale: 0.96, duration: 0.4 }, '+=0.08')
})
</script>

<style scoped lang="scss">
.contact-section {
  width: 100%;
  background-color: #7BB2D9;
  overflow: hidden;
}

.contact-container {
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

/* 2-Column Responsive Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.contact-subtitle {
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

.contact-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.15;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin-top: 12px;

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
}

.text-highlight {
  font-weight: 800;
  color: #206AA9;
}

.contact-description {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #FFFFFF;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.info-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
}

/* Contact Stack Items */
.contact-stack {
  width: 100%;
}

.stack-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);

  &:last-child {
    border-bottom: none;
  }
}

.play-icon-wrap {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.item-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  a & {
    &:hover {
      text-decoration: underline;
    }
  }
}

a.item-title {
  &:hover {
    text-decoration: underline;
  }
}

.item-label {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 4px;
  text-transform: uppercase;
}

/* Form Card Styling */
.form-card {
  width: 100%;
  max-width: 580px;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
}

.form-title {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #3B7FB7;
  letter-spacing: -0.01em;
}

.form-group {
  width: 100%;
}

.field-label {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #3B7FB7;
  margin-bottom: 6px;
}

.field-input,
.field-select,
.field-textarea {
  width: 100%;
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 15px;
  color: #334C5D;
  background-color: #FFFFFF;
  border: 1px solid #D4E2EE;
  border-radius: 8px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #3B7FB7;
    box-shadow: 0 0 0 3px rgba(59, 127, 183, 0.15);
  }
}

.quasar-phone-input {
  width: 100%;

  :deep(.q-field__control) {
    border-radius: 8px;
    border-color: #D4E2EE;
    background-color: #FFFFFF;
  }

  :deep(.q-field__native),
  :deep(input) {
    color: #334C5D;
    font-family: 'Inter', 'Manrope', sans-serif;
    font-size: 15px;

    &::placeholder {
      color: #94A3B8;
    }
  }
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.field-select {
  appearance: none;
  padding-right: 36px;
  cursor: pointer;
}

.chevron-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: #5E7A92;
  pointer-events: none;
}

.field-textarea {
  resize: vertical;
  min-height: 90px;
}

.field-checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #3B7FB7;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 13px;
  line-height: 1.45;
  color: #5E7A92;
  cursor: pointer;
}

.hidden-honeypot {
  display: none !important;
  opacity: 0;
  position: absolute;
  top: -9999px;
  left: -9999px;
}

.submit-cta-btn {
  width: 100%;
  background: linear-gradient(135deg, #6DA0CB 0%, #3B7FB7 100%);
  color: #FFFFFF;
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(59, 127, 183, 0.3);
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #5B92BE 0%, #2E6DA4 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 127, 183, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
}

.success-message {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #166534;
  background-color: #DCFCE7;
  padding: 12px;
  border-radius: 8px;
}

.error-message {
  font-family: 'Inter', 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #991B1B;
  background-color: #FEE2E2;
  padding: 12px;
  border-radius: 8px;
}
</style>
