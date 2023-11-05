import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer,Legend, Tooltip } from 'recharts';

const Statistics = () => {
    const [donateData, setDonateData] = useState([]);
   const [donationValue,setDonateValue]=useState(0);
    useEffect(() => {
        const getLocalStorageData = JSON.parse(localStorage.getItem("selectdata"));
        if(getLocalStorageData){
            setDonateData(getLocalStorageData);
        }
    }, []);

    // Donation data loading......
    const AllDonationData = useLoaderData();

    // Calculate numeric values for the pie chart
    useEffect(()=>{
        if(donateData){
            setDonateValue(donateData.length)
         }else{
            setDonateValue(0)
         }
    },[donateData.length])

    const data = [
        { name: 'Total Donation', value: AllDonationData.length },
        { name: 'Your Donate', value: donationValue },
    ];

    const COLORS = ['#FFBB28', '#00C49F'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{width:"100%", height:"800px"}}>
            <ResponsiveContainer width="100%" height="72%">
            <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip/>

                </PieChart>
            </ResponsiveContainer>
            <div>
                <span></span><p></p>
                <span></span><p></p>
            </div>
        </div>
    );
};

export default Statistics;

