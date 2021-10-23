<template>
    <div id="app">
        hello
    {{ info[0] }}
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
     return {
      info : []
     }
},
mounted(){
this.axios
  .get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
  .then(response => (this.info = response.data.data))
}

}
</script>