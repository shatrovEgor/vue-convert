<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
    <graph/>
    <div class="bar-chart">
    </div>
       </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"
import Graph from './components/Graph';

export default {
  name: 'App',
  components: {
    Navbar,
    Graph,
  }

};
</script>

<style>
.bar-chart {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
