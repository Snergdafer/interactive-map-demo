import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [isMap, setIsMap] = useState(false)

  return (
    <StateContext.Provider value={[{ isMap, setIsMap }]}>
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
  

export { StateProvider, StateContext }
