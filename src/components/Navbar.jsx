"use client"

import { Pizza, Car } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">FoodCompare</h1>
          </div>
          <div className="flex space-x-4">
            <Button
              variant={activeSection === "food" ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeSection === "food" ? "bg-orange-500 hover:bg-orange-600" : ""
              }`}
              onClick={() => setActiveSection(activeSection === "food" ? null : "food")}
            >
              <Pizza className="h-4 w-4" />
              Food
            </Button>
            <Button
              variant={activeSection === "transport" ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeSection === "transport" ? "bg-blue-500 hover:bg-blue-600" : ""
              }`}
              onClick={() => setActiveSection(activeSection === "transport" ? null : "transport")}
            >
              <Car className="h-4 w-4" />
              Transport
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
