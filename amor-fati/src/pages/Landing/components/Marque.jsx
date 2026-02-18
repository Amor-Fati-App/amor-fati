import React, {useEffect} from 'react'
import { Carousel, useCarousel } from 'motion-plus/react';
import { animate, motion, useMotionValue } from 'motion/react'

const AutoplayProgress = ({ duration }) => {
    const { currentPage, nextPage } = useCarousel()
    const progress = useMotionValue(0)

    useEffect(() => {
        const animation = animate(progress, [0, 1], {
            duration,
            ease: "linear",
            onComplete: nextPage
        })

        return () => animation.stop()
    }, [duration, nextPage, progress, currentPage])

    return (
        <div className='autoplay-progress'>
            <motion.div className='progress-bar'
            style={{scaleX: progress, willChange: "transform"}} />
        </div>
    )
}

const Marque = () => {
    const rawItems = [
        {
            text: "As Above, So Below"
        },
        {
            text: "Amor Fati"
        },
        {
            text: "Memento Mori"
        }
    ]

    let items = [...rawItems, ...rawItems]
  return (
      <article>
          <div className='marque-container'>
              <Carousel 
                  axis="x"
                  className='marque'
                  items={items.map((item, index) => (
                      <motion.span key={index}>
                          <span className='mx-12 font-display text-xl text-rose/40 italic'>{item.text}</span>
                          <i className='ph-fill ph-star-four text-[10px] text-gold pt-2'></i>
                  </motion.span>
              ))}
            
                  gap={20}
                  snap="page"
                  loop={true}
                  fade={80}
              >
                  <AutoplayProgress duration={1} />
              </Carousel>
          </div>
    </article>
  )
}

export default Marque