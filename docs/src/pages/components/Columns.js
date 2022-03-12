import React from 'react'

import styles from './Columns.module.css'

const Context = React.createContext({
  space: 0,
})

const useColumns = () => React.useContext(Context)

export const Columns = props => {
  const { children, space, marginBottom = 0 } = props
  return (
    <Context.Provider value={{ space }}>
      <div
        className={styles.columns}
        style={{
          marginLeft: `${-space}rem`,
          marginBottom: `${marginBottom}rem`,
        }}
      >
        {children}
      </div>
    </Context.Provider>
  )
}

export const Column = props => {
  const { children } = props
  const { space } = useColumns()

  return (
    <div
      className={styles.column}
      style={{
        marginLeft: `${space}rem`,
      }}
    >
      {children}
    </div>
  )
}
