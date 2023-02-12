import React, { useState , useEffect } from 'react';
// import './requests.css'
import { url } from '../../slices/api';
import axios from 'axios';
import { Experimental_CssVarsProvider } from '@mui/material';
import { toast } from 'react-toastify';
import Headerfirst2 from '../admin/Headerfirst2';

const items = [
  {
    id: 1,
    cname: 'MS',
    skills: 'react',
    email: 'check1@gmail.com'
  },
  {
    id: 1,
    cname: 'JP',
    skills: 'finance api',
    email: 'js@outlook.com'
  },
  {
    id: 1,
    cname: 'GS',
    skills: 'database mining',
    email: 'rels@outlook.com'
  },
]

const HRequest = () => {

  const [HRequest,SetHrequest]=useState([])
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
        await axios.get(`${url}/allrequest/HRequest`)
        .then(res=>{

            SetHrequest(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    fetchPosts()
},[])

const accept = (email) =>{
  const fetchPosts = async ()=>{
    await axios.post(`${url}/allrequest/ReqAccept`,{email:email})
    .then(res=>{
       console.log("accepted")
    }).catch(err=>{
        console.log(err);
    })
}
fetchPosts()
}
const reject = (email) =>{
  const fetchPosts = async ()=>{
    await axios.post(`${url}/allrequest/reject`,{email:email})
    .then(res=>{
        console.log("rejected")
    }).catch(err=>{
        console.log(err);
    })
}
fetchPosts()
}



  return (
    <div className='section-center-people-search'>
      <Headerfirst2/>
      {HRequest.map((listitem) => {
        const { id,name, email } = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className="email">{email}</h4>
              </header>
            </div>
            {/* <button className="sendrequest" onClick={() => sendRequest(email)}>Send Request</button> */}
            <button className="sendrequest" onClick={() => accept(email)}>Accept Request</button>
            <button className="sendrequest" onClick={() => reject(email)}>Reject Request</button>

          </article>
        );
      })}
    </div>
  );
};

export default HRequest;