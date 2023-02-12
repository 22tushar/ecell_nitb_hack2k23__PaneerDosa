import React from 'react'
// import Companies from './Companies'
import Headerfirst from './components/Headerfirst'
import './requests.css'
import Acceptedlist from './components/Acceptedlist'

const Summary = () => {
  return (
    <div className='RequestsFront'>
      <div  className="headerforaccepted">
            <div>
              <Headerfirst/>
            </div>
            <div>
              <Acceptedlist/>
            </div>
      </div>
      
    </div>
  )
}

export default Summary
