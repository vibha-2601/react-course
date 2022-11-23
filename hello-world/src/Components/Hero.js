import React from 'react'

function Hero({heroName}) {
    if (heroName === 'Joker'){
        throw new Error('Is not a Hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero

// Error boundaries are React components that catch javascript error in their child component tree, log those errors, and display a fall-back UI.
// error boundary: a class component that implements either one or both of the lifecycle methods getDerivedStateFromEroor or componentDidCatch becomes an error boundary.
// getDerivedStateFromError() => used to render fallback UI after error is thrown.
// componentDidCatch() => used to log the error information.