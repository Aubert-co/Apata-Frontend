import type { Metadata } from 'next'
import DonationForm from '@/components/DonationForm'

export const metadata: Metadata = {
  title: 'Quero Doar | Apata ATM',
  description:
    'Cadastre seu interesse em doar para a APATA - ração, remédios veterinários, roupas, calçados, livros, artesanato e plantas.',
}

export default function DoarPage() {
  return <DonationForm />
}
