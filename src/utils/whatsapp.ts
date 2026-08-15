export const WHATSAPP_PHONE = '61426658642'
export const DEFAULT_QUOTE_MESSAGE = 'Hello! I would like to request a free quote for cleaning services.'

export function getWhatsAppUrl(message: string = DEFAULT_QUOTE_MESSAGE): string {
  const encodedText = encodeURIComponent(message)
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`
}

export function openWhatsAppQuote(message?: string): void {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
