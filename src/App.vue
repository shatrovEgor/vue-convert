<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
    <div class="bar-chart">
    </div>
       </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: 'App',
  components: {
    Navbar,
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
