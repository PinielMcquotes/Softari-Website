'use client'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const steps = [
{
title: 'Idle assets exist everywhere',
desc: 'Equipment, power, and spaces sit unused across cities.',
},
{
title: 'We connect them digitally',
desc: 'IoT devices bring assets online in real-time.',
},
{
title: 'Access becomes instant',
desc: 'Users discover and unlock assets on demand.',
},
{
title: 'Value is created continuously',
desc: 'Owners earn. Users build. The economy expands.',
},
]

export default function ScrollStory() {
const ref = useRef(null)

const { scrollYProgress } = useScroll({
target: ref,
offset: ['start start', 'end end'],
})

return ( 
<section ref={ref} className="relative h-[400vh]">

  <div className="sticky top-0 h-screen flex items-center">
    <div className="container-pad grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div className="relative h-[300px]">

        {steps.map((step, i) => {
          const segment = 1 / steps.length

          const start = i * segment
          const mid = start + segment * 0.5
          const end = (i + 1) * segment

          return (
            <motion.div
              key={i}
              className="absolute max-w-md"
              style={{
                opacity: scrollYProgress,
              }}
            >
              <motion.div
                style={{
                  opacity: scrollYProgress,
                  y: scrollYProgress,
                }}
              >
                <h2 className="font-display text-3xl md:text-4xl mb-4 text-white">
                  {step.title}
                </h2>
                <p className="text-white/60">
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          )
        })}

      </div>

      {/* RIGHT VISUAL */}
      <div className="relative h-[300px] flex items-center justify-center">

        {steps.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-56 h-56 rounded-full border border-white/20"
            style={{
              scale: 0.85 + i * 0.05,
              opacity: 0.25,
            }}
          />
        ))}

        {/* center glow (always visible anchor) */}
        <div className="absolute w-24 h-24 rounded-full bg-white/5 blur-xl" />

      </div>

    </div>
  </div>

</section>


)
}