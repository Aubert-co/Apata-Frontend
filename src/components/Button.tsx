'use client'

import type { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  name: ReactNode
  onClick?: () => void
  size?: number | string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const DISABLED_STYLE = 'cursor-default bg-gray-300 text-gray-600 hover:bg-gray-300 hover:text-gray-600'

export default function Button({ name, onClick, size, type = 'button', className = '', disabled = false }: ButtonProps) {
  const style: CSSProperties | undefined = size !== undefined ? { fontSize: `${size}pt` } : undefined

  return (
    <button
      type={type}
      disabled={disabled}
      style={style}
      className={`bg-(--primary-color) text-(--text-color) hover:bg-(--tertiary-color) hover:text-(--text-color2) font-bold px-2 py-1 rounded transition-colors duration-200 cursor-pointer my-1 w-full ${disabled ? DISABLED_STYLE : ''} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
