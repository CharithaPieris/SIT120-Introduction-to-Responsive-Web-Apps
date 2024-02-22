<template>

<Home msg="Welcome to Your Vue.js App"/>

</template>



<script>

import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>


<style>

*{
	margin: 0;
	padding: 0;
	font-family: 'Anton', sans-serif;
	font-family: 'Archivo Black', sans-serif;
	font-family: 'Poppins', sans-serif;
	
}

.bodycontainer{
        animation: myAnimT 1s ease-in 0s 1 normal forwards;
    }
    @keyframes myAnimT {
        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    }
</style>

