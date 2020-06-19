<template>
    <div class='crud'>
    <form @submit='submit()'>
       
        <div v-for='(item,index) in label.slice(0,-1)' :key='item+index' ><label>{{ item.name }} :</label> 
       
          <input type="text" v-model='info[item.type]' required>
        </div>
        <!-- <div ><label>{{ label[1] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[2] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[3] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[4] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[5] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[6] }} :</label> 
          
          <input type="text" required>
        </div>
        <div ><label>{{ label[7] }} :</label> 
          
          <input type="text" required>
        </div> -->

        <button @click="click"   >{{ label[label.length-1].name }}</button>
      </form></div>
</template>

<script>
export default {
created(){
// fetch('http://qcs.sb/admin/admin/edit/id/2',{method:'POST',body:{'user_name':'fdsdsf' }}).then((res)=>{console.log(res)})

},
props:['label','info','ifevent'],
methods:{
  click(){
     this.$emit('updatad',this.info)
  },
   submit(e){
      e.preventDefault()
        console.log(this.ifevent)
        this.ifevent ? this.$emit('updatad',this.info) :this.$emit('createData',{})
        
  }
 
}
}
</script>

<style >
    .crud{
      
        display: flex;
        width:1100px


    }
    .crud form{
        display: flex;
        flex-wrap:wrap ;
        justify-content: space-between;
           

    }
      .crud form div{
          width:500px;
          height:40px;
          display: flex;
            
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 40px;
     
      
      }
        .crud form div label{
            height: 100%;
              width:100px;
            font-size:18px;
            font-family:Microsoft YaHei;
            line-height: 40px;
            font-weight:bold;
          color:rgba(61,61,61,1);

        }
         .crud form div input{
              height: 38px;
              width: 400px;
              border:transparent;
              background:rgba(240,240,240,1);
                border-radius:4px;
                outline: none;

         }
          .crud form button{
              width:200px;
              border-radius:4px;
height:40px;
background:rgba(61,100,231,1);
border-radius:4px;
font-size:16px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height:28px;
          }
          input{
            font-weight: bold;
            text-indent: 20px;
          }
</style>