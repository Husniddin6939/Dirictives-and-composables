<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
  <h1 v-if="state.isPanding">Loading....</h1>
  <h1 v-if="state.isError">Error</h1>
  <ul>
    <li v-for="(el, index) in state.data">
    <p>{{ index }}</p>
  </li>
  </ul>

<!-- <code>{{ JSON.stringify(state) }}</code> -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {ref} from 'vue';
import {useCounter, useFetch} from "./composables";
import { type Itodos} from './types'

const {state, useQuery}=useFetch();


onMounted(()=>{
useQuery<Itodos[]>('https://jsonplaceholder.typicode.com/posts')
})

const {counter, increment, decrement}=useCounter();


const isToggle=ref<boolean>(false);

const toggleRef=()=>{
  isToggle.value=!isToggle.value;

}

</script>

<style scoped>
.container{
  max-width: auto;
  padding: 0 20px;
  margin: 0 auto;
}
.box{
  background-color: rgb(15, 228, 214);
  color: white;
  margin: 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>