"use client"

import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  //auto redirect to /home
  const handleRedirect = () => {
    Router.push('/homepage')
  }

  {window.location.href = "/homepage"}
}