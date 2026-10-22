/**
 * Reliable smooth scrolling utilities that integrate with Lenis
 * and handle async DOM mounting / route transitions gracefully.
 */

export const scrollToElement = (elementId: string, offset = -90) => {
  let attempts = 0
  const maxAttempts = 35 // poll for up to 1.75s while page transitions finish

  const checkAndScroll = () => {
    const el = document.getElementById(elementId)
    if (el) {
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(el, { offset, duration: 1.1, immediate: false })
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY + offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
      return
    }
    attempts++
    if (attempts < maxAttempts) {
      setTimeout(checkAndScroll, 50)
    }
  }

  // Execute immediately
  checkAndScroll()
}

export const scrollToTopSmooth = (immediate = false) => {
  const lenis = (window as any).lenis
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(0, { immediate, duration: immediate ? 0 : 0.8 })
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' })
  }
}
