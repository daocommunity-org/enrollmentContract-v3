import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to DAO Community</h1>
      <p className="text-xl">Next.js + Hardhat Boilerplate</p>
    </main>
  )
}