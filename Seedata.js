import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, PieChart,Pie } from 'recharts';

const student = [
    {
        id: 1,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Electrical',
        college: 'Manit bhopal',
        company: 'Microsoft',
        package: 25,
    },
    {
        id: 2,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Electrical',
        college: 'Manit bhopal',
        company: 'Atlassian',
        package: 20,
    },
    {
        id: 3,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Mechanical',
        college: 'Manit bhopal',
        company: 'Google',
        package: 35,
    },
    {
        id: 4,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Computer',
        college: 'Manit bhopal',
        company: 'JPMC',
        package: 28,
    },
    {
        id: 5,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Electronics',
        college: 'Manit bhopal',
        company: 'JPMC',
        package: 10,
    },
    {
        id: 6,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Civil',
        college: 'Manit bhopal',
        company: 'Core',
        package: 8,
    },
    {
        id: 7,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Chemical',
        college: 'Manit bhopal',
        company: 'Core',
        package: 15,
    },
    {
        id: 8,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'MSME',
        college: 'Manit bhopal',
        company: 'Core',
        package: 19,
    },
    {
        id: 9,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Computer',
        college: 'Manit bhopal',
        company: 'Core',
        package: 18,
    },
    {
        id: 10,
        sname: 'abcd',
        email: 'kg@gmail.com',
        branch: 'Mechanical',
        college: 'Manit bhopal',
        company: 'Core',
        package: 15,
    },

]

var avg_frequency = {};
var high_frequency = {};
var total_frombranch = {};
var comp_total ={};
var comp_avg ={};
var comp_high ={};
var all_companies = [];

function sortByFrequency(array) {
    var b, pkg;

    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        if (b in total_frombranch) {
            total_frombranch[b]++;
        }
        else {
            total_frombranch[b] = 1;
        }
    }
    return total_frombranch;
}

function totalpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        pkg = array[i].package;
        if (b in avg_frequency) {
            avg_frequency[b] += pkg;
        }
        else {
            avg_frequency[b] = pkg;
        }
    }
    return avg_frequency;
}

function highestpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        pkg = array[i].package;
        if (b in high_frequency) {
            if (high_frequency[b] < pkg) {
                high_frequency[b] = pkg;
            }
        }
        else {
            high_frequency[b] = pkg;
        }
    }
    // console.log(high_frequency);
    return high_frequency;
}

function comptotalselections(array) {
    var b, pkg;

    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        if (b in comp_total) {
            comp_total[b]++;
        }
        else {
            comp_total[b] = 1;
        }
    }

    for (b in comp_total) {
        // console.log(b);
        all_companies.push(b);
    }

    return comp_total;
}

function comptotalpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        pkg = array[i].package;
        if (b in comp_avg) {
            comp_avg[b] += pkg;
        }
        else {
            comp_avg[b] = pkg;
        }
    }
    return comp_avg;
}

function comphighestpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        pkg = array[i].package;
        if (b in comp_high) {
            if (comp_high[b] < pkg) {
                comp_high[b] = pkg;
            }
        }
        else {
            comp_high[b] = pkg;
        }
    }
    return comp_high;
}

const Seedata = () => {

    const [branchdata, setBranchdata] = useState([]);
    const [packagedata, setPackagedata] = useState([]);
    const [highestdata, setHighestdata] = useState([]);
    const branches = ['Computer', 'Electronics', 'Electrical', 'Mechanical', 'Chemical', 'Civil', 'MSME'];

    useEffect(() => {
        setBranchdata(sortByFrequency(student));
        setPackagedata(totalpackage(student));
        setHighestdata(highestpackage(student));
        comptotalselections(student);
        comptotalpackage(student);
        comphighestpackage(student);
    }, []);

    const branchandfreq = branches.map((currentValue, index) => {
        return {
            id: index,
            branch_name: branches[index],
            branch_freq: total_frombranch[branches[index]],
            branch_avg: (avg_frequency[branches[index]] / total_frombranch[branches[index]]),
            branch_high: high_frequency[branches[index]],
        }
    })

    const fullcompanydata = all_companies.map((currentValue,index)=>{
        return {
            id:index,
            company_name:all_companies[index],
            company_selections:comp_total[all_companies[index]],
            company_avgpay:(comp_avg[all_companies[index]]/comp_total[all_companies[index]]),
            company_highpay:comp_high[all_companies[index]],
        }
    })
    console.log(fullcompanydata);
    // console.log(branchandfreq);

    return (<div className='graphs'>
        <div>
            <BarChart width={800} height={500} data={branchandfreq}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="branch_name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="branch_freq" fill="#8884d8" />
            </BarChart>
        </div>

        <div>
            <BarChart width={800} height={500} data={branchandfreq}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="branch_name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="branch_avg" fill="#454B1B" />
            </BarChart>
        </div>

        <BarChart width={800} height={500} data={branchandfreq}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="branch_name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="branch_high" fill="#00FF00" />
        </BarChart>


    </div>

    )
}

export default Seedata