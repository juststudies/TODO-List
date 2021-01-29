<template>
  <div class="container">
      <div class="heading">
        <h2 id="title">TODO List maroto</h2>
        <add-form v-on:reloadlist="getList()"/>
      </div>
      <list-view :items="items" v-on:reloadlist="getList()"/>
  </div>
</template>

<script>
import AddForm from './AddForm.vue'
import ListView from './ListView.vue';
export default {
    components:{ AddForm, ListView },
    data(){
        return{
            items:[]
        }
    },
    methods:{
        getList(){
            axios.get('api/items')
                .then(res=>{
                    this.items = res.data;
                }).catch(err=> console.log(err));
        }
    },

    created(){
        this.getList();
    }
}
</script>

<style scoped>
    .container{
        width: 40vw;
        margin: auto;
    }
    .heading {
        background: #191919;
        padding: 10px;
    }

    #title{
        color: #fff;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }   
</style>