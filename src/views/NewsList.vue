<template>
<div>
    <div v-for="(news,index) in newsList" :key="index" >
        
    </div>
    <div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        newsList:[]
    },created(){
        axios.get("http://119.3.108.19:9090/api/wallet/v1/com/news?order=create_at&sort=desc").then(function (data){
            console.log(data)
            if (data.data.state){

            }
        });
    }
}
</script>