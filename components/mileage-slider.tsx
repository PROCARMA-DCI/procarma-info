"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const mileagePoints = [10000, 15000, 30000, 45000, 60000, 100000]

export function MileageSlider() {
  const [currentMileage, setCurrentMileage] = useState(45000)

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Slider Track */}
        <div className="h-1 bg-gray-300 rounded-full relative">
          {/* Active Track */}
          <motion.div
            className="h-1 bg-cyan-500 rounded-full absolute top-0 left-0"
            initial={{ width: "60%" }}
            animate={{
              width: `${(mileagePoints.indexOf(currentMileage) / (mileagePoints.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Slider Handle */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow-lg cursor-pointer"
            style={{
              left: `${(mileagePoints.indexOf(currentMileage) / (mileagePoints.length - 1)) * 100}%`,
              marginLeft: "-8px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>

        {/* Mileage Labels */}
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          {mileagePoints.map((mileage, index) => (
            <button
              key={mileage}
              onClick={() => setCurrentMileage(mileage)}
              className={`transition-colors ${
                currentMileage === mileage ? "text-gray-900 font-semibold" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {mileage.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
