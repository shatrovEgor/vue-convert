<template>
    <v-container fluid> <v-app-bar
        color="orange"
        dark
      > 
      <v-spacer></v-spacer>
        <v-btn 
         class="ml-3">
           <router-link to="/">Main</router-link>
        </v-btn>
        <v-btn 
         class="ml-3">
           <router-link to="/portfile">Portfile</router-link>
        </v-btn>
      </v-app-bar>
      </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>