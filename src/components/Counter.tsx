import React, { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [cnt, setIncrement] = useState(0)
  return (
    <div>
      <h1>
        Counter
        {cnt}
      </h1>
      <button className={classes.btn} onClick={() => setIncrement(cnt + 1)}>
        setIncrement
      </button>
    </div>
  )
}
