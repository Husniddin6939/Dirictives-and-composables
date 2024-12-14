import { ref } from "vue";

export function useCounter(){

    const counter=ref<number>(0);

    function increment(){
        counter.value++
    }

    function decrement(){
        counter.value--
    }

    return{
        counter,
        increment,
        decrement
    }
}