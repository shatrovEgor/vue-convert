<template>
    <div id="app">
        <p>Начало графика</p>
        <p>Длинна массива с API: {{getLastPrice()}}</p>
        <p>Свежий элемент:{{info[dlina]}}</p>
        <p>Массив дат:{{getArrDate()}}</p>
        <p>Массив цены:{{getArrPrice()}}</p>
        <p>{{getGraph()}}</p>
        <p>{{chartData.labels}}</p>
    <bar-chart :chartData="chartData" :options="options"></bar-chart>
  </div>
</template>

<script>
import BarChart from './BarChart';


export default {
    components: {
    BarChart
  },
  name: 'App',
    data(){
     return {
      info : [],
      dlina: [],
       chartData: {labels: [
      "10-09",
      "10-10", 
      "10-11", 
      "10-12", 
      "10-13", 
      "10-14", 
      "10-15", 
      "10-16", 
      "10-17", 
      "10-18", 
      "10-19", 
      "10-20", 
      "10-21", 
      "10-26"
    ],
    datasets: [
      {
        label: 'BTC price',
        data: ["54808.3", "55213.3", "56706.2", "56642.5", "56052.3", "57638.6", "59863.1", "61264.7", "60840.3", "61789.9", "62724.1", "64947.4", "64355.7", "62189.1"]
      }
    ]},
      options: {responsive: true,
    maintainAspectRatio: false}
     }
},

methods:{
    getLastPrice() {
        this.dlina = this.info.length - 1
        return this.dlina
    },
    getArrDate() {
        this.getLastPrice()
        let datee = {}
        let str = ''
        const arrDate = []
        for(let i = 0;i < 14; i++){
            datee = this.info[this.dlina - i]
            str = datee.date
            arrDate[i] = str.slice(5,10)
        }
        return arrDate.reverse()
    },
    getArrPrice() {
        this.getLastPrice()
        let datee = {}
        let str = ''
        const arrDate = []
        for(let i = 0;i < 14; i++){
            datee = this.info[this.dlina - i]
            str = datee.priceUsd
            arrDate[i] = str.slice(0,7)
        }
        return arrDate.reverse()
    },
    getGraph() {
        this.chartData.labels = this.getArrDate()
        this.chartData.datasets[0].data = this.getArrPrice()
    }
},
mounted(){
this.axios
  .get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
  .then(response => (this.info = response.data.data))
}

}
</script>