"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Clock, DollarSign, Car, Plane, Bus, Loader2, Star, X } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { selectTransportType } from "../lib/features/Transport/transportSlice"

const transportTypes = [
  { id: "car", name: "Car", icon: Car },
  { id: "taxi", name: "Taxi", icon: Bus },
  { id: "plane", name: "Plane", icon: Plane },
]

const transportServices = [
  {
    id: "uber",
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
    apiEndpoint: "/api/uber",
    features: [
      "24/7 availability",
      "Multiple car options",
      "Live tracking",
      "Cashless payment"
    ],
    options: [
      {
        name: "Uber Go",
        price: "₹250",
        rating: 4.5,
        features: ["Economy", "4 seats", "AC"],
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500"
      },
      {
        name: "Uber Premier",
        price: "₹350",
        rating: 4.7,
        features: ["Premium", "4 seats", "AC", "Leather seats"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500"
      },
      {
        name: "Uber XL",
        price: "₹450",
        rating: 4.6,
        features: ["SUV", "6 seats", "AC", "Spacious"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500"
      }
    ]
  },
  {
    id: "ola",
    name: "Ola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ola_Cabs_logo.svg/2560px-Ola_Cabs_logo.svg.png",
    apiEndpoint: "/api/ola",
    features: [
      "Wide coverage",
      "Multiple vehicle types",
      "Real-time tracking",
      "Multiple payment options"
    ],
    options: [
      {
        name: "Ola Mini",
        price: "₹230",
        rating: 4.3,
        features: ["Economy", "4 seats", "AC"],
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500"
      },
      {
        name: "Ola Prime",
        price: "₹330",
        rating: 4.5,
        features: ["Premium", "4 seats", "AC", "Leather seats"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500"
      },
      {
        name: "Ola SUV",
        price: "₹430",
        rating: 4.4,
        features: ["SUV", "6 seats", "AC", "Spacious"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500"
      }
    ]
  },
  {
    id: "rapido",
    name: "Rapido",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rapido_logo.svg/2560px-Rapido_logo.svg.png",
    apiEndpoint: "https://www.rapido.bike",
    features: [
      "Bike taxis",
      "Quick pickup",
      "Affordable rides",
      "Easy booking"
    ],
    options: [
      {
        name: "Rapido Bike",
        price: "₹100",
        rating: 4.2,
        features: ["Bike", "1 seat", "Quick"],
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500"
      },
      {
        name: "Rapido Auto",
        price: "₹150",
        rating: 4.0,
        features: ["Auto", "3 seats", "Economical"],
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500"
      }
    ]
  }
]

const airlineServices = [
  {
    id: "indigo",
    name: "IndiGo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IndiGo_Logo.svg/2560px-IndiGo_Logo.svg.png",
    options: [
      {
        name: "Economy",
        price: "₹3,500",
        rating: 4.3,
        features: ["Standard seat", "7kg hand baggage", "15kg check-in"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
      },
      {
        name: "Business",
        price: "₹7,500",
        rating: 4.6,
        features: ["Premium seat", "12kg hand baggage", "25kg check-in", "Priority boarding"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
      }
    ]
  },
  {
    id: "airindia",
    name: "Air India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
    options: [
      {
        name: "Economy",
        price: "₹4,000",
        rating: 4.2,
        features: ["Standard seat", "7kg hand baggage", "15kg check-in"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
      },
      {
        name: "Business",
        price: "₹8,000",
        rating: 4.5,
        features: ["Premium seat", "12kg hand baggage", "25kg check-in", "Priority boarding"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
      }
    ]
  }
]

export default function TransportSection() {
  const dispatch = useDispatch()
  const { selectedTransportType } = useSelector((state) => state.transport)
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [searchClicked, setSearchClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [priceComparison, setPriceComparison] = useState({})
  const [showComparison, setShowComparison] = useState(false)
  const [comparisonService, setComparisonService] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = async () => {
    if (fromLocation && toLocation) {
      setIsLoading(true)
      setError(null)
      setSearchClicked(true)

      try {
        const results = await Promise.all(
          transportServices.map(async (service) => {
            try {
              const response = await fetch(`${service.apiEndpoint}?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}`)
              if (!response.ok) throw new Error(`Failed to fetch from ${service.name}`)
              const data = await response.json()
              return { [service.id]: data }
            } catch (error) {
              console.error(`Error fetching from ${service.name}:`, error)
              return { [service.id]: null }
            }
          })
        )

        const combinedResults = results.reduce((acc, curr) => ({ ...acc, ...curr }), {})
        setPriceComparison(combinedResults)
      } catch (error) {
        setError("Failed to fetch price comparison")
        console.error("Search error:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleCompareClick = (service) => {
    setComparisonService(service)
    setShowComparison(true)
  }

  const filteredOptions = (service) => {
    return service.options.filter(option =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const renderPriceComparison = (service) => {
    const data = priceComparison[service.id]
    
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      )
    }

    if (error) {
      return (
        <div className="text-red-500 text-center p-4">
          Failed to load price comparison
        </div>
      )
    }

    if (!data) {
      return (
        <div className="text-gray-500 text-center p-4">
          No price data available
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Estimated Time</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="font-medium">{data.estimatedTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Estimated Cost</span>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
            <span className="font-medium">{data.estimatedCost}</span>
          </div>
        </div>

        {data.availableOptions && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Available Options</h4>
            {data.availableOptions.map((option, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span>{option.name}</span>
                <span className="font-medium">{option.price}</span>
              </div>
            ))}
          </div>
        )}

        {data.surgeMultiplier && (
          <div className="text-orange-500 text-sm">
            Surge pricing: {data.surgeMultiplier}x
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Transport Services</h2>

      {/* Transport Type Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Select Transport Type</h3>
        <div className="flex flex-wrap gap-4">
          {transportTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedTransportType === type.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedTransportType === type.id ? "bg-blue-500 hover:bg-blue-600" : ""
                }`}
                onClick={() => dispatch(selectTransportType(type.id))}
              >
                <Icon className="h-4 w-4" />
                {type.name}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Location Search */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                placeholder="Enter pickup location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                placeholder="Enter destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              />
            </div>
          </div>
          <Button
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600"
            onClick={handleSearch}
            disabled={!fromLocation || !toLocation || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Searching...
              </div>
            ) : (
              "Search Rides"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Transport Services */}
      {searchClicked && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transportServices.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <img
                    src={service.logo}
                    alt={`${service.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {renderPriceComparison(service)}

                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Car className="h-4 w-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => handleCompareClick(service)}
                  >
                    Compare Options
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Compare Transport Options</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search transport options..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedTransportType === "plane" ? (
                airlineServices.map((service) => (
                  <div key={service.id} className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={service.logo}
                        alt={`${service.name} logo`}
                        className="h-8 object-contain"
                      />
                      <h4 className="font-semibold text-lg">{service.name}</h4>
                    </div>

                    <div className="space-y-4">
                      {filteredOptions(service).map((option) => (
                        <div key={option.name} className="bg-gray-50 p-4 rounded-lg">
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h5 className="font-medium">{option.name}</h5>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm">{option.rating}</span>
                            </div>
                            <span className="font-medium">{option.price}</span>
                          </div>
                          <ul className="mt-2 space-y-1">
                            {option.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                transportServices.map((service) => (
                  <div key={service.id} className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={service.logo}
                        alt={`${service.name} logo`}
                        className="h-8 object-contain"
                      />
                      <h4 className="font-semibold text-lg">{service.name}</h4>
                    </div>

                    <div className="space-y-4">
                      {filteredOptions(service).map((option) => (
                        <div key={option.name} className="bg-gray-50 p-4 rounded-lg">
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h5 className="font-medium">{option.name}</h5>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm">{option.rating}</span>
                            </div>
                            <span className="font-medium">{option.price}</span>
                          </div>
                          <ul className="mt-2 space-y-1">
                            {option.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowComparison(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
