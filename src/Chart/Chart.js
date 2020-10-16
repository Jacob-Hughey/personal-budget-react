import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

function CreateChart() {
  const [currentData, setData] = useState([]);
  const [currentLabel, setLabels] = useState([]);

  var dataSource = {
    datasets: [
        {
        data: currentData,
        backgroundColor: [
            "#ffcd56",
            "#ff6384",
            "#36a2eb",
            "#fd6b19",
            "#abc234",
            "#34c2c0",
            "#d62dd6",
            "#2dd654",
        ],
        },
    ],
    labels: currentLabel,
  };

  useEffect(() => {
    axios.get("http://localhost:3000/budget.json").then(function (res) {
      console.log(res.data);
      let titles = [];
      for (var i = 0; i < res.data.myBudget.length; i++) {
        setData([...currentData, res.data.myBudget[i].budget]);
        titles.push(res.data.myBudget[i].title);
      }
      setLabels(titles);
    });
  }, []);


  return (
      <>
        <Pie data={dataSource} width={400} height={400} />
      </>
  );
}

export default CreateChart;



