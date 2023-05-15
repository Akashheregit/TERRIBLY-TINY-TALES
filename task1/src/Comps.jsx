import { useState} from 'react';
import Papa from 'papaparse';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function Comps() {

    const [chartData, setChartData] = useState();
    const [csvs,setCsvs] = useState(null);
    const option={
        responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
                size: 20
            }
        },
        
        },
        title: {
          display: true,
          text: "Histogram",
          font:40
        }
      }
      }
  const fetchdata=async ()=>{
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const data = await response.text();
    // console.log(data);

    const words=data.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/)
    let filters=[]
   words.map((item)=>{
     if(!filters.includes(item))
        {
               filters.push(item)
        }
    })
     let topdata=[]

     for(let item of filters)
     {
        let flag=true
        for(let datas of words)
        {
            
           if(flag && item===datas )
           {
            topdata.push({
                label: item,
                count: 1
            }) 
            flag=false;
           }
           else if(item===datas)
           {

            topdata[filters.indexOf(item)].count+=1;
           }
        }
     }
    const blobdata=[]

    
    const finaldata=topdata.sort((a,b)=>b.count-a.count).slice(0,20)
    for(let item in finaldata)
    {
         blobdata.push([finaldata[item].label,finaldata[item].count])
    }
     console.log(blobdata)
     const csvData = Papa.unparse(blobdata, { header: true });

     const blob=new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
     const url=URL.createObjectURL(blob);
     setCsvs(url)
     setChartData({
        labels:finaldata.map((item)=> item.label),
        data:finaldata.map((item)=>{return item.count}),
        csvData:csvData
     })
     setTimeout(()=>{
console.log(chartData)
     },3000)
     
     

  }
  return (
    <div >
    <div>
      {!chartData &&(<button onClick={()=>{fetchdata()}} class=" h-24 bg-green-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mx-64 mt-64" >Submit</button>)}
      
      {
        chartData &&(
            <>
<Bar className="graph" options={option} data={{labels:chartData.labels,datasets: [
            {
              label: 'Word Frequency',
              data: chartData.data,
              backgroundColor: "rgba(300, 99, 132, 0.5)",
              borderColor: '#ff2753',
              borderWidth: 2,
            },
          ],}} ></Bar>

          <a href={csvs} download="histogramdata.csv" className="inline-block">
        <button className="font-bold py-2 px-4 rounded-full bg-yellow-400 hover:bg-teal-500 text-black">
          Export/Download
        </button>
      </a>

            </>
        )
      }
      
    </div>
    </div>
  )
}

export default Comps;