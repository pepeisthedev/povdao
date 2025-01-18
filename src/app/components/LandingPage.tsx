'use client'

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-4 sm:pt-0">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F7931A] to-[#FFB74D]">
            Proof Of Vision DAO
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            Powering Bitcoin&apos;s next chapter
          </p>
        </motion.div>

        {/* Information Section */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-[#F7931A]/50 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4 text-[#F7931A]">Our Vision</h2>
              <p className="text-gray-300">
                We&apos;re tokenizing complex processes and acting as an intermediary that allocates capital in high-friction environments. Through veteran knowledge and connections, we&apos;re creating real opportunities for sustainable, outsized returns.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-[#F7931A]/50 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4 text-[#F7931A]">Innovation</h2>
              <p className="text-gray-300">
                By holding <span className="font-mono font-bold text-[#F7931A] bg-[#F7931A]/10 px-1.5 py-0.5 rounded-md">$POV</span> on Solana/Base, you gain exposure to tier-1 Bitcoin assets, DeFi protocols, and emerging founders—activities typically reserved for ecosystem veterans.
              </p>
            </div>

            <div className="md:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-[#F7931A]/50 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4 text-[#F7931A]">Community</h2>
                       <p className="text-gray-300 mb-6">
              Join a thriving community of innovators, developers, and Bitcoin enthusiasts shaping the future of finance.<br />
              <strong> How will you contribute?</strong>
            </p>
              <a 
                href="https://discord.gg/JCmv6DcEwe" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 rounded-lg bg-[#F7931A] text-white font-medium hover:bg-[#FFB74D] transition-all duration-300 hover:scale-105"
              >
                Join our Discord <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <motion.div 
            className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#F7931A]">Why PoV DAO?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We&apos;re filling critical gaps in the Bitcoin ecosystem, like meaningful support for quality founders and increasing on-chain asset DeFi TVL. This isn&apos;t a zero-sum game, it&apos;s a system where everyone can win.
              </p>
              <p>
                PoV DAO accelerates on-chain innovation, strengthens the Bitcoin ecosystem, and maximizes <span className="font-mono font-bold text-[#F7931A] bg-[#F7931A]/10 px-1.5 py-0.5 rounded-md">$POV</span> value. We&apos;re not just building for today, we&apos;re shaping Bitcoin&apos;s future.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Powered by <span className="font-mono font-bold text-[#F7931A] bg-[#F7931A]/10 px-1.5 py-0.5 rounded-md">$POV</span>
            </motion.p>

          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

