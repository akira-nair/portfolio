import React from "react"
import Header from "./header"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Navbar></Navbar>
    </main>
  )
}
