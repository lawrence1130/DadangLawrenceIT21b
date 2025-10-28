class LineChart{
            constructor(canvasId, data, labels){
                this.canvasId = canvasId;
                this.dataUrl = dataUrl;
                this.chart = null;
            }

            // method to fetch data from a URL
            renderChart(){
                const ctx = document.getElementById(this.canvasId). getContext("2d");

                this.chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: this.labels,
                        datasets: [{
                            label: 'Monthly Data',
                            data: this.data,
                            borderwidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            async fetchData(){
                try{
                    const response = await fetch(this.dataUrl);
                    if(!response.ok){
                        throw new Error(`Failed to fetch data: ${response.statusText}`);
                    }
                    const jsonData = await response.json();
                    return data;
                } catch(error){
                    console.error("There has been a problem with your fetch operation:", error);
                    return null;
                }
           }

           async init(){
                const data = await this.fetchData();
                if(data){
                    this.renderChart(data);
                }
            }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const chart = new LineChart("lineChart","linedata.json");
        chart.init();
    });

class radarChart{
        constructor(canvasId,dataUrl){
            this.canvasId = canvasId;
            this.dataUrl = dataUrl;
            this.chart = null;
        }

        renderChart(data){
            const ctx = document.getElementById(this.canvasId).getContext("2d");

            this.chart = new Chart(ctx,{
                type:"radar",
                data:{
                    //Labels
                    labels:data.labels,
                    //Datasets
                    datasets: data.datasets
                },
                options:{
                    responsive: true,
                    plugins:{
                        legend:{
                           position:"top"
                        },
                        title:{
                            display: true,
                            //Title
                            text:"Radar Chart"
                        }
                    },
                    scales:{
                        r:{
                            angleLines:{display:true},
                            suggestedMin:0,
                            suggestedMax:100
                        }
                    }
                }
            });
        }

        async fetchData(){
            try{
                const response = await fetch(this.dataUrl);
                if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`);

                const data = await response.json();
                return data;
            } catch(error){
                console.error("Error fetching data: ", error);
                return null;
            }
        }

        async init(){
            const data = await this.fetchData();
            if(data) this.renderChart(data);
        }
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        const chart = new radarChart("radarChart","radarChart.json");
        chart.init();
    });