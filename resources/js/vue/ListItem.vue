<template>
  <div class="item">
    <input 
      type="checkbox" 
      @change="updateCheck()" 
      v-model="item.completed"
      
      true-value='1' 
      false-value='0'
    />
    <span :class="[item.completed == true ? 'completed' : '','itemText']">
      {{ item.name }}
    </span>
    <button @click="removeItem()" class="trashCan"> 
      <font-awesome-icon 
        icon="trash"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    updateCheck(){
      axios
        .put("api/item/" + this.item.id, {
          item: this.item
        }).then(res=>{
          if(res.status == 200){
            this.$emit('itemchanged');
          }
        }).catch(err=>console.log(err));
    },
    removeItem() {
      axios
        .delete("api/item/" + this.item.id)
        .then(res => {
          if (res.status == 200) {
            this.$emit("itemchanged");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
  .item{
    margin-top: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemText{
    width: 100%;
    margin-left: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: #999999;
  }

  .trashCan{
    color: #ff0000;
    background: #e6e6e6;
    outline:none;
    border:none;
    font-size: 15px;
    padding: 5px;
  }
</style>