import React from 'react';
import './requests.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { url } from '../../../slices/api';
// const items =[
//     {
//         id: 1,
//         tpo: 'Manit Bhopal',
//         score: '89.0',
//       },
//       {
//         id: 2,
//         tpo: 'vnit nagpur',
//         score: '78.5',
//       },
//       {
//         id: 3,
//         tpo: 'LPU',
//         score: '75.0',
//       },
// ]

const Acceptedlist = () => {

  const [Accepted,SetAccepted]=useState([])
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
        await axios.get(`${url}/allrequest/requestAccept`)
        .then(res=>{
          SetAccepted(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    fetchPosts()
},[])

  return (
    <div className='section-center-people-search'>
      {Accepted.map((listitem) => {
        const { id, name, desc } = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>{desc}</h4>
              </header>
            </div>

          </article>
        );
      })}
    </div>
  );
};

export default Acceptedlist;