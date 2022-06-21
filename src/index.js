import React from 'react'
import './styles.module.css'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl(dismissIn = 3) {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)


  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
      setTimeout(() => setGrowlActive(false), dismissIn * 1000)
    },
  ]
}