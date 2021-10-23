<template>
    <div id="app">
        <p>0 элемент:{{ info[0]}}</p>
        <p>{{getLastPrice()}}</p>
        <p>{{info[dlina]}}</p>
        <p>Массив дат:{{getArrDate()}}</p>
        <p>Массив цены:{{getArrPrice()}}</p>

  </div>
</template>

<script>


export default {
  name: 'App',
    data(){
     return {
      info : [],
      dlina: []
     }
},

methods:{
    getLastPrice() {
        this.dlina = this.info.length - 1
        return this.dlina
    },
    getArrDate() {
        this.getLastPrice()
        let date = this.info[this.dlina]
        let str = ''
        const arrDate = []
        for(let i = 0;i < 14; i++){
            date = this.info[this.dlina - i]
            str = date.date
            arrDate[i] = str.slice(5,10)
        }
        return arrDate.reverse()
    },
    getArrPrice() {
        this.getLastPrice()
        let date = this.info[this.dlina]
        let str = ''
        const arrDate = []
        for(let i = 0;i < 14; i++){
            date = this.info[this.dlina - i]
            str = date.priceUsd
            arrDate[i] = str.slice(0,7) + '$'
        }
        return arrDate.reverse()
    }
},
mounted(){
this.axios
  .get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
  .then(response => (this.info = response.data.data))
  this.data = this.info.length
}

}
</script>