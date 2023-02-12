import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import axios from 'axios';
import { url } from '../../slices/api';
const company = [
    {
        id: 1,
        cname: 'microsoft',
        sector: 'technology',
        skill: 'react',
    },
    {
        id: 2,
        cname: 'google',
        sector: 'technology',
        skill: 'angular',
    },
    {
        id: 3,
        cname: 'jpmc',
        sector: 'finance',
        skill: 'ml',
    },
    {
        id: 4,
        cname: 'goldman',
        sector: 'finance',
        skill: 'react',
    },
    {
        id: 5,
        cname: 'byjus',
        sector: 'edutech',
        skill: 'flutter',
    },
    {
        id: 6,
        cname: 'byjus',
        sector: 'edutech',
        skill: 'flutter',
    },
    {
        id: 7,
        cname: 'byjus',
        sector: 'edutech',
        skill: 'flutter',
    },
]

var frequency = {};

function sortByFrequency(array) {
    var value;

    for (var i = 0; i < array.length; i++) {
        value = array[i].skill;
        if (value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }


    var uniques = [];
    for (value in frequency) {
        uniques.push(value);
    }

    function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }

    return uniques.sort(compareFrequency);
}

const Algorithm = () => {

    const [graphdata, setGraphdata] = useState([]);
    const [allskill, setskill] = useState([]);

    useEffect(() => {
        
        const fetchSkills = async ()=>{
            await axios.get(`${url}/allrequest/getskills`)
            .then(res=>{
                setskill(res.data);
                console.log(res.data)
            }).catch(err=>{
                console.log(err);
            })
        }
        fetchSkills();
        // console.log(allskill[0].skill)
        setGraphdata(sortByFrequency(company));
    }, []);

    const skillandfreq = graphdata.map((currentValue, index) => {
        return {
            id: index,
            skill_name: graphdata[index],
            skill_freq: (frequency[graphdata[index]]/graphdata.length)*100,
        }
    })
    console.log(skillandfreq);

    return (
        <div className='bar'>
            <BarChart width={800} height={400} data={skillandfreq}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="skill_name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="skill_freq" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default Algorithm