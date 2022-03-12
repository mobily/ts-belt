import React from 'react'

import styles from './Features.module.css'

export const Features = props => {
  const { children } = props
  const length = React.Children.count(children)

  return (
    <div className={styles.features}>
      {React.Children.map(children, (child, index) => {
        return (
          <span>
            {child}
            {index === length - 1 ? null : (
              <span className={styles.dot}>·</span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export const Feature = props => {
  const { children, isDotVisible = true } = props

  return <span className={styles.feature}>{children}</span>
}
