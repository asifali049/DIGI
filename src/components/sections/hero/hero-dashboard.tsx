"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bell, Users } from "lucide-react";

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.35)]">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">
              Monthly Revenue
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              $148,420
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-2 text-emerald-400">
            <ArrowUpRight size={18} />
            18.2%
          </div>
        </div>

        {/* Fake Chart */}

        <div className="mb-8 flex h-44 items-end gap-3">
          {[40,60,55,80,65,100,85].map((height,index)=>(
            <motion.div
              key={index}
              initial={{height:0}}
              animate={{height}}
              transition={{delay:index*0.08}}
              className="flex-1 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400"
            />
          ))}
        </div>

        <div className="space-y-6">

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-zinc-400">
                Project Completion
              </span>

              <span className="text-white">
                78%
              </span>
            </div>

            <div className="h-3 rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-violet-500"/>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-zinc-400">
                Client Satisfaction
              </span>

              <span className="text-white">
                98%
              </span>
            </div>

            <div className="h-3 rounded-full bg-white/10">
              <div className="h-full w-[98%] rounded-full bg-cyan-500"/>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Card */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -left-10 bottom-8 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"
      >
        <Users className="mb-2 text-cyan-400" />

        <p className="text-sm text-zinc-400">
          Active Clients
        </p>

        <h4 className="text-2xl font-bold text-white">
          128+
        </h4>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -right-8 top-12 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"
      >
        <Bell className="mb-2 text-yellow-400" />

        <p className="text-sm text-zinc-400">
          New Orders
        </p>

        <h4 className="text-2xl font-bold text-white">
          24
        </h4>
      </motion.div>
    </motion.div>
  );
}