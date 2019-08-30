<template>
  <div>
      <v-container class="grey lighten-5">
      <v-row no-gutters>
          <v-col sm="12" md="12" lg="12" xl="12">
      <v-text-field label="标题" v-model="title"></v-text-field>
      </v-col>
          <v-col>
      <v-text-field label="首页图链接" v-model="banner"></v-text-field>
      </v-col>
      </v-row>
      </v-container>
    <div id="main">
      <mavon-editor v-model="content" />
    </div>
  
       <div class="text-center">
    <v-btn large="" @click="publish">发布</v-btn>
  </div>
    </div>
  
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
        title:"",
        banner:"",
      content: ""
    };
  },
  methods:{
      publish(){
          axios.post("http://119.3.108.19:9090/api/wallet/v1/com/news",{title:this.title,banner:this.banner,content:this.content}).then(function (data){
           console.log(data);
           
            return;
          })
      }
  }
};
</script>