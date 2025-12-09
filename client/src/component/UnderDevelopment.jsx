"use client"
import React from "react"
import { motion } from "framer-motion"
import { Construction } from "lucide-react"

export default function UnderDevelopment() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-[#F9FAFB] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center" >
        <Construction className="w-20 h-20 text-[#889F2D] mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold text-[#7B0000] mb-4">
          Page Under Development
        </h2>
        
      </motion.div>
    </section>
  )
}
