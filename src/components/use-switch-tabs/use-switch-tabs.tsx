
import { RefObject, useEffect, useRef } from 'react';

const useSwitchTabs = (rootRef: RefObject<HTMLDivElement>, currentRef: RefObject<HTMLHeadingElement>, switchTab: any) => {

  const observer = useRef<IntersectionObserver | null>(null)
  useEffect(
    () => {

      const options = {
        root: rootRef.current,
        rootMargin: '0px',
        threshold: [0, 1]
      }

      const callbackFunctions = (entries: any) => {
        const [entry] = entries
        if (entry.isIntersecting && entry.boundingClientRect.top < entry.intersectionRect.top) {
          switchTab()
        }
      }
      if (!currentRef.current) return

      const current = currentRef.current

      observer.current = new IntersectionObserver(callbackFunctions, options)


      observer.current.observe(current)


      return () => {
        observer.current?.unobserve(current)
      }
    }, [switchTab])
}


export default useSwitchTabs