import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';

function CreateChart() {

  var dataSource = {
    datasets: [
        {
        data: [],
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
    labels: [],
  };

  function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
      type: "pie",
      data: dataSource,
    });
  }

  function getBudget() {
    axios.get("http://localhost:3000/budget.json").then(function (res) {
      console.log(res.data);
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
      }
      createChart();
    });
  }

  getBudget();

  return (
      <>
        <canvas id="myChart" width="400" height="400"></canvas>
      </>
  );
}

export default CreateChart;



