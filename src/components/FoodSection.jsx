"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ShoppingBag, Star, Clock, DollarSign, X, Search, Utensils } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { selectFoodType } from "../lib/features/food/foodSlice"

const foodTypes = [
  { id: "pizza", name: "Pizza", icon: Utensils },
  { id: "burger", name: "Burger", icon: Utensils },
  { id: "sushi", name: "Sushi", icon: Utensils },
  { id: "indian", name: "Indian", icon: Utensils },
  { id: "chinese", name: "Chinese", icon: Utensils },
]

const foodDeliveryServices = [
  {
    name: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png",
    url: "https://www.swiggy.com",
    features: [
      "Wide restaurant selection",
      "Quick delivery",
      "Live order tracking",
      "Multiple payment options"
    ],
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹49",
    products: [
      {
        name: "Margherita Pizza",
        price: "₹199",
        rating: 4.2,
        restaurant: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
      },
      {
        name: "Chicken Burger",
        price: "₹149",
        rating: 4.0,
        restaurant: "McDonald's",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
      },
      {
        name: "Veg Biryani",
        price: "₹179",
        rating: 4.3,
        restaurant: "Paradise Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500"
      }
    ]
  },
  {
    name: "Zomato",
    logo: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
    url: "https://www.zomato.com",
    features: [
      "Extensive restaurant network",
      "Real-time order tracking",
      "Multiple cuisines",
      "Cash on delivery"
    ],
    rating: 4.4,
    deliveryTime: "35-50 min",
    minOrder: "₹40",
    products: [
      {
        name: "Margherita Pizza",
        price: "₹189",
        rating: 4.1,
        restaurant: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
      },
      {
        name: "Chicken Burger",
        price: "₹159",
        rating: 4.2,
        restaurant: "McDonald's",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
      },
      {
        name: "Veg Biryani",
        price: "₹169",
        rating: 4.4,
        restaurant: "Paradise Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500"
      }
    ]
  },
  {
    name: "UberEats",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/UberEats_Logo.svg/2560px-UberEats_Logo.svg.png",
    url: "https://www.ubereats.com",
    features: [
      "Global restaurant chain",
      "Fast delivery",
      "Easy payment",
      "Order tracking"
    ],
    rating: 4.3,
    deliveryTime: "40-55 min",
    minOrder: "₹60",
    products: [
      {
        name: "Margherita Pizza",
        price: "₹209",
        rating: 4.0,
        restaurant: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
      },
      {
        name: "Chicken Burger",
        price: "₹169",
        rating: 4.1,
        restaurant: "McDonald's",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
      },
      {
        name: "Veg Biryani",
        price: "₹189",
        rating: 4.2,
        restaurant: "Paradise Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500"
      }
    ]
  }
]

export default function FoodSection() {
  const dispatch = useDispatch()
  const { selectedFoodType } = useSelector((state) => state.food)
  const [searchQuery, setSearchQuery] = useState("")
  const [showComparison, setShowComparison] = useState(false)
  const [comparisonService, setComparisonService] = useState(null)

  const handleOrderClick = (service, e) => {
    e.stopPropagation()
    setComparisonService(service)
    setShowComparison(true)
  }

  const handleProceedToOrder = () => {
    window.open(comparisonService.url, '_blank')
    setShowComparison(false)
  }

  const filteredProducts = (service) => {
    return service.products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Food Delivery Services</h2>

      {/* Food Type Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Select Food Type</h3>
        <div className="flex flex-wrap gap-4">
          {foodTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedFoodType === type.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedFoodType === type.id ? "bg-orange-500 hover:bg-orange-600" : ""
                }`}
                onClick={() => dispatch(selectFoodType(type.id))}
              >
                <Icon className="h-4 w-4" />
                {type.name}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for food or restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </CardContent>
      </Card>

      {/* Food Delivery Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodDeliveryServices.map((service) => (
          <Card key={service.name} className="overflow-hidden">
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{service.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Delivery Time</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="font-medium">{service.deliveryTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Min. Order</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="font-medium">{service.minOrder}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <ShoppingBag className="h-4 w-4 text-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={(e) => handleOrderClick(service, e)}
                  className="block w-full text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Compare Products</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {foodDeliveryServices.map((service) => (
                <div key={service.name} className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src={service.logo}
                      alt={`${service.name} logo`}
                      className="h-8 object-contain"
                    />
                    <h4 className="font-semibold text-lg">{service.name}</h4>
                  </div>

                  <div className="space-y-4">
                    {filteredProducts(service).map((product) => (
                      <div key={product.name} className="bg-gray-50 p-4 rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-cover rounded-lg mb-3"
                        />
                        <h5 className="font-medium">{product.name}</h5>
                        <p className="text-sm text-gray-600">{product.restaurant}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                          <span className="font-medium">{product.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowComparison(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleProceedToOrder}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Proceed to {comparisonService.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
