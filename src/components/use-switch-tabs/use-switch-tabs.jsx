import { useEffect, useRef, useState } from 'react';

const useSwitchTabs = (rootRef, currentRef, switchTab) => {

  const observer = useRef(null)
  const [margin, setMargin] = useState(0)
  useEffect(
    () => {

      const options = {
        root: rootRef.current,
        rootMargin: `0px 0px -${margin}px  0px`,
        // rootMargin: `0px 0px -${margin}%  0px`,
        threshold: 0
      }

      const callbackFunctions = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && currentRef.current) {
          switchTab()
          setMargin(entry.intersectionRect.top - entry.rootBounds.top)
        }
      }

      const current = currentRef.current

      observer.current = new IntersectionObserver(callbackFunctions, options)


      observer.current.observe(current)


      return () => {
        observer.current.unobserve(current)
      }
    }, [margin, switchTab])
}
export default useSwitchTabs