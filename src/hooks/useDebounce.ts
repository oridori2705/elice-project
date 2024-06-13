import { useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (...args: Parameters<T>): void => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export default useDebounce
