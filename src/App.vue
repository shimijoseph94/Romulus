<template>
  <div id="app">
    
    <router-view/>
    
   <Footer></Footer>
  </div>
</template>

<script>
import Footer from  '../src/components/Footer'
import Hooper from 'hooper';
export default {
  name: 'App',
  components:{
    Footer,Hooper
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  overflow-x:hidden!important;
}
</style>
