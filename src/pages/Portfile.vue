<template>
    <div class="app">
        <div class="container1">
            <h1>Ваш портфель:</h1>
            <div class="btc">
                <img src="./bitcoin.png" alt="" class="img">
                <p>Bitcoin</p>
                <v-spacer></v-spacer>
                <p>Balance: {{balanceBtc}}</p>
    
                
            </div>
            <div class="btc">
                <img src="./ethereum.png" alt="" class="img">
                <p>Ethereum</p>
                <v-spacer></v-spacer>
                <p>Balance: {{balanceEth}}</p>
            </div>
            <h2>Стоимость портфеля: {{calcSum()}}</h2>
        </div>
           <div class="graph">
               {{calcGrah()}}
        <line-chart :chartData="chartData" :options="options"></line-chart>
        </div>
    </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';

export default {
    components: {
        LineChart
    },
    data() {
        return{
            balanceBtc: 0.2,
            balanceEth: 1.7, 
            data:[],
            chartData: {labels: [
            "BTC",
            "ETH", 
            ],
            datasets: [
            {
                label: '',
                data: []
            }
            ]},
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
                }
        }
    },
    methods:{
        calculateResults() {
        fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR,RUB,USD`
        )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
        });
        },

        calcSum() {
            let sum = 0
            sum = this.balanceBtc / this.data.BTC + this.balanceEth / this.data.ETH
            return sum.toFixed(2) + '$'
        },
        calcGrah() {
            const arr = [0,0,0]
            arr[0] = this.balanceBtc
            arr[1] = this.balanceEth
            this.chartData.datasets[0].data = arr
        }

    },
     mounted() {
    this.calculateResults();
  }
    
}
</script>
<style>
.app{
    display: flex;
    flex-wrap: wrap;
}
.container1{
    position: relative;
    background-color: rgb(238, 232, 232);
    box-shadow: 2px 2px 6px grey;
    border-radius: 10px;
    width: 500px;
    height: 300px;
    margin-top: 50px;
    margin-left: 50px;
}
.container1 h1{
    margin-left: 20px;
}
.container1 h2 {
    position: absolute;
    bottom: 7px;
    left: 10px;
    
}
.btc{
    display: flex;
    background-color: rgb(202, 198, 198);
    box-shadow: 1px 1px 4px grey;
    width: 450px;
    height: 50px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}
.btc:hover{
    cursor: pointer;
    opacity: 0.8;
}
.btc p {
    padding: 10px 10px 10px 0;
    font-size: 20px;
}
.img{
    width: 35px;
    height: 35px;
    margin: 8px;
}
.graph{
    width: 500px;
    margin-left: auto;
    margin-right: auto;

}


</style>