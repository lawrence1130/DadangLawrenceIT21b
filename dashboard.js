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

