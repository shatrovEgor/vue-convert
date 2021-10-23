<template>
  <div id="app">
    <h1 class="header">VueJs Currency Exchange App</h1>
    <div class="container">
      <div class="container-one">
        <select
          name="first-currency"
          id="first-currency"
          @change="calculateResults()"
          v-model="currency_one"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>
        <input
          type="number"
          name="input-one"
          id="input-one"
          v-model="amountOne"
          @input="calculateResults()"
        />
      </div>
      <div class="container-two">
        <v-btn @click="switchValues()">Switch</v-btn>
        <h4 id="baseValue">1 {{ currency_one }} = {{ rate }} {{ currency_two }}</h4>
      </div>
      <div class="container-there">
        <select
          id="currency-two"
          @change="calculateResults()"
          v-model="currency_two"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>

        <input
          type="number"
          id="input-two"
          placeholder="0"
          v-model="amountTwoF"
          disabled
        />
      </div>
      </div>
      <div class="bar-chart">
    </div>
    <graph/>
    </div>
</template>

<script>
import Graph from '../components/Graph.vue';

export default {
  components:{
    Graph
  },
  data() {
    return {
      data: [],
      currency_one: "USD",
      currency_two: "BTC",
      rate: "",
      amountOne: 1,
      amountTwo: 0,
      amountTwoF:0,
    };
  },

  methods: {
    calculateResults() {
      fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${this.currency_one}&tsyms=BTC,ETH,EUR,RUB,USD`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data[this.currency_two];
          this.amountTwo = this.amountOne * this.rate
          this.amountTwoF = this.amountTwo.toFixed(7)
        });
    },

    switchValues() {
      const temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;
      this.calculateResults();
    },
  },

  mounted() {
    this.calculateResults();
  },
};
</script>

<style>
#first-currency,
#currency-two{
    width: 70px;
    height: 30px;
    border-radius: 5px;
    margin: 3px 0 ;
    box-shadow: 1px 1px 5px grey;
    background-color: orange;
    text-align: center;
 }
 #first-currency:hover {
     cursor: pointer;
 }
 #currency-two:hover {
     cursor: pointer;
 }
 #input-one,
 #input-two {
   height: 35px;
     border:1px solid grey;
     border-radius: 4px ;
     margin: 0 20px;
 }
.header {
    margin: 0 50px;
}
.container-one,
.container-two,
.container-there {
    text-align: center;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 50%;
    justify-content: space-evenly;
    margin: 20px 30px;
}
</style>
