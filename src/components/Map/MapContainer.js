import Map from './Map'
import { useContext } from 'react'
import { StateContext } from '../../contexts/appState'

const MapContainer = () => {
    const [{ setIsMap }] = useContext(StateContext)
    
    return(
    <div style={{marginTop : '100px'}}>
         <div onClick={() => setIsMap(false)}>
          <span type='button' className='btn btn--outline'>
            Back
          </span>
        </div>
        <div style={{height: '100px'}}>
            <Map/>
        </div>
    </div>
)}

export default MapContainer