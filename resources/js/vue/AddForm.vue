<template>
  <div class="form">
      <input type="text" v-model="item.name">
      <font-awesome-icon
            icon="plus-square"
            @click="addItem()"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
      />
  </div>
</template>

<script>
export default {
    data(){
        return{
            item:{
                name: ''
            }
        }
    },

    methods:{
        addItem(){
            if(this.item.name == ''){
                return ;
            }

            axios.post('api/item/store', {
                item: this.item
            }).then(res=>{
                if(res.status == 201){
                    this.item.name = '';
                    this.$emit('reloadlist');
                }
            }).catch(err=> console.log(err));
        }
    }
}
</script>

<style scoped>
    input{
        width: 80%;
        height: 20px;
        border-radius: 5px;
        border:none;
        padding: 10px;
        margin-right: 15px;
        font-size: 16px;
    }

    .plus{
        font-size: 35px;
        transform: translateY(7px);
    }

    .active{
        color: #00ce25;
    }

    .inactive{
        color: #999;
    }
</style>