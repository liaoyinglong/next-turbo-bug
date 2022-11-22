import * as d3 from "d3"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const body = d3.select("body")
    console.log({ body, window: d3.select(window) })
    console.log(`select body is correct in both cases`)
    console.log(`select window is not correct in turbo mode`) //
  }, [])

  return <div>home</div>
}
