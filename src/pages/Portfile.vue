<template>
    <div class="app">
        <div class="container1">
            <h1>Ваш портфель:</h1>
            <div class="btc" @click="showModal">
                <img src="./bitcoin.png" alt="" class="img">
                <p>Bitcoin</p>
                <v-spacer></v-spacer>
                <p>Balance: {{balanceBtc}}</p>
    
                
            </div>
            <div class="btc" @click="showModalEth">
                <img src="./ethereum.png" alt="" class="img">
                <p>Ethereum</p>
                <v-spacer></v-spacer>
                <p>Balance: {{balanceEth}}</p>
            </div>
            <div class="sum">
            <h2>Стоимость портфеля: {{calcSum()}}</h2>
            </div>
        </div>
           <div class="graph">
               {{calcGrah()}}
        <line-chart :chartData="chartData" :options="options"></line-chart>
        </div>
        <modal-window ref="modal" :value="balanceBtc" :price="priceBtc"></modal-window>
        <modal-window-eth ref="modal1" :value="balanceEth" :price="priceEth"></modal-window-eth>
    </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';
import ModalWindow from '../components/ModalWindow.vue';
import ModalWindowEth from '../components/ModalWindowEth.vue';

export default {
    components: {
        LineChart,
        ModalWindow,
        ModalWindowEth
    },
    data() {
        return{
            balanceBtc: 0.253,
            priceBtc: 0,
            balanceEth: 1.71,
            priceEth: 0,
            sum: 0, 
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
            this.sum = this.balanceBtc / this.data.BTC + this.balanceEth / this.data.ETH
            let priceBtcF = this.balanceBtc / this.data.BTC
            this.priceBtc = priceBtcF.toFixed(2) + '$'
            let priceEthF = this.balanceEth / this.data.ETH
            this.priceEth = priceEthF.toFixed(2) + '$'
            return this.sum.toFixed(2) + '$'
        },
        calcGrah() {
            const arr = [0,0,0]
            arr[0] = this.balanceBtc
            arr[1] = this.balanceEth
            this.chartData.datasets[0].data = arr
        },
        showModal: function () {
                this.$refs.modal.show = true
            },
        showModalEth: function () {
            this.$refs.modal1.show = true
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
.sum {
    display: flex;
    position: absolute;
    bottom: 7px;
    left: 10px;
    
}
.sum button {
    border: 1px solid brown;
    margin-left: 20px;
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
.show-modal-button{
    width: 100px;
    height: 100px;
    background-color: brown;
}


</style>