import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps) => (
  <section className={`w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
    {children}
  </section>
)
