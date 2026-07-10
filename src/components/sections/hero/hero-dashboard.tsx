"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bell, Users } from "lucide-react";

const chartHeights = [40, 60, 55, 80, 65, 100, 85];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:p-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 sm:mb-8 sm:flex-nowrap sm:items-center">
          <div>
            <p className="text-sm text-zinc-400">Monthly Revenue</p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              $148,420
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500/20 px-3 py-2 text-sm text-emerald-400 sm:px-4">
            <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            <span>18.2%</span>
          </div>
        </div>

        {/* Fake Chart */}

        <div className="mb-6 flex h-36 items-end gap-2 sm:mb-8 sm:h-44 sm:gap-3">
          {chartHeights.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height }}
              transition={{ delay: index * 0.08 }}
              className="flex-1 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400"
            />
          ))}
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-zinc-400 sm:text-base">
                Project Completion
              </span>

              <span className="text-sm text-white sm:text-base">78%</span>
            </div>

            <div className="h-3 rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-violet-500" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-zinc-400 sm:text-base">
                Client Satisfaction
              </span>

              <span className="text-sm text-white sm:text-base">98%</span>
            </div>

            <div className="h-3 rounded-full bg-white/10">
              <div className="h-full w-[98%] rounded-full bg-cyan-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl sm:absolute sm:-left-10 sm:bottom-8 sm:mt-0 sm:block"
      >
        <Users className="mb-0 text-cyan-400 sm:mb-2" />

        <div>
          <p className="text-sm text-zinc-400">Active Clients</p>

          <h4 className="text-xl font-bold text-white sm:text-2xl">
            128+
          </h4>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl sm:absolute sm:-right-8 sm:top-12 sm:mt-0 sm:block"
      >
        <Bell className="mb-0 text-yellow-400 sm:mb-2" />

        <div>
          <p className="text-sm text-zinc-400">New Orders</p>

          <h4 className="text-xl font-bold text-white sm:text-2xl">
            24
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
}