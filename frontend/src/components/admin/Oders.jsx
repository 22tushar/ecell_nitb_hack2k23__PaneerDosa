
import React from 'react'
import Companies from './Companies'
import Acceptedlist from './Companies'
import Headerfirst from './Headerfirst'
import './requests.css'

const Summary = () => {
  return (
    <div className='RequestsFront'>
      <div  className="headerforaccepted">
            <div>
                <Headerfirst/>
            </div>
            <div>
                <Companies/>
            </div>
      </div>
      
    </div>
  )
}

export default Summary
