import type { FocusEvent } from 'react'

/**
 * Centraliza o campo focado na tela: evita que o teclado virtual
 * do celular cubra o input durante o preenchimento do formulário.
 */
export function scrollIntoCenter(e: FocusEvent<HTMLElement>) {
  const target = e.target
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 300)
}
