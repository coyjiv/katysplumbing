import { ArrowUpIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const ScrollToTop = () => {

  const [click, setClick] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY
      if (scroll > 300) {
        setClick(false)
        setIsButtonVisible(true)
      } else {
        setIsButtonVisible(false)
      }
    })

    return () => {
        window.removeEventListener('scroll', () => {
            const scroll = window.scrollY
            if (scroll > 300) {
            setClick(false)
            setIsButtonVisible(true)
            } else {
            setIsButtonVisible(false)
            }
        })
        }
  }, [])

  const scrollToTop = () => {
    setClick(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const spring = useSpring({
    translateY: click ? 70 : 0,
    config: { tension: 160, friction: 24 },
  })

  const buttonSpring = useSpring({
    shadow: click ? 100 : 0,
    opacity: isButtonVisible ? 1 : 0,
    config: { tension: 400, friction: 10 },
    })

  return (
    <animated.button
    aria-label="Scroll to top button"
    style={buttonSpring}
      className='z-[99] transition-opacity opacity-0 fixed w-10 h-10 lg:w-14 lg:h-14 bottom-10 right-4 lg:bottom-20 lg:right-7 flex justify-center items-center rounded-full bg-amber-300/95 border-none'
      onClick={scrollToTop}
    >
      <animated.span style={spring}><ArrowUpIcon width={30} color={'gray'} /></animated.span>
    </animated.button>
  )
}


