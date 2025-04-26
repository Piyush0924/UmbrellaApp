"use client"

import { useState } from "react"
import { Provider } from "react-redux"
import Navbar from "./components/Navbar"
import FoodSection from "./components/FoodSection"
import TransportSection from "./components/TransportSection"
import { store } from "./lib/store"

export default function App() {
  const [activeSection, setActiveSection] = useState(null)

  return (
    <Provider store={store}>
      <main className="min-h-screen bg-gray-50">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="container mx-auto px-4 py-8">
          {activeSection === "food" && <FoodSection />}
          {activeSection === "transport" && <TransportSection />}
          {!activeSection && (
            <div className="flex items-center justify-center h-[70vh]">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to FoodCompare</h1>
                <p className="mt-4 text-gray-600">Select Food or Transport from the navbar to get started</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </Provider>
  )
}
