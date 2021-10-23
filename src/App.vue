<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
    <graph/>
    <bar-chart></bar-chart>
       </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"
import Graph from './components/Graph';
import BarChart from './components/BarChart.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Graph,
    BarChart
  }

};
</script>
