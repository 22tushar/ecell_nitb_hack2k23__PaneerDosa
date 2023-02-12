import React, { useState , useEffect } from 'react';
import './requests.css'
import { url } from '../../slices/api';
import axios from 'axios';
import { Experimental_CssVarsProvider } from '@mui/material';
import { toast } from 'react-toastify';
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

const Companies = () => {

  const [company,Setcompany]=useState([])
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
        await axios.get(`${url}/allrequest/allCampany`)
        .then(res=>{
          Setcompany(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    fetchPosts()
},[])


  const sendRequest = async (email) => {

    try {
         await axios.post(`${url}/allrequest/ReqSent`, {
         email:email,
        });
        console.log("Sent");
      } catch (error) {
        console.log("Not sent");
      }
      // toast.success("Request Sent", { position: "Top-right" });
      alert("request Sent")
  }
  return (
    <div className='section-center-people-search'>
      {company.map((listitem) => {
        const { id, cname, skills, email } = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={cname} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{cname}</h4>
                <h4 className='price'>{skills}</h4>
                <h4 className="email">{email}</h4>
              </header>
            </div>
            <button className="sendrequest" onClick={() => sendRequest(email)}>Send Request</button>

          </article>
        );
      })}
    </div>
  );
};

export default Companies;