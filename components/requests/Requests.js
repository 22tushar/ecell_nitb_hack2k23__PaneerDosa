import React from 'react'
import Acceptedlist from './components/Acceptedlist'
import Headerfirst from './components/Headerfirst'
import Headersecond from './components/Headersecond'
import Pendinglist from './components/Pendinglist'
import './requests.css'

const Requests = () => {
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
      <div  className="headerforpending">
            <div>
                <Headersecond/>
            </div>
            <div>
                <Pendinglist/>
            </div>
      </div>
    </div>
  )
}

export default Requests
