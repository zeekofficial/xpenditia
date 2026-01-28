let chart;
function drawChart(per){
  if(chart) chart.destroy();
  chart=new Chart(document.getElementById("chart"),{
    type:"doughnut",
    data:{
      labels:Object.keys(per),
      datasets:[{data:Object.values(per)}]
    }
  });
}
