// 购物车内容组件  全选 产品列表 总计
<template>
    <div class="list-item"> 
       <div class="wraper">
            <dl>
            <dt>
               <input type="checkbox" style="font-size:30px" v-model="msg.checked"> 
            </dt>
            <dd>
                <p><img :src="msg.pic" alt=""></p>
                <p style="text-align:center"><button>+</button><input type="text"><button>-</button></p>
            </dd>
            <dd class="rr">
                <p class="title">{{msg.title}}</p>
                <p class="weight">{{msg.weight}}</p>
                <p class="info"><span v-for="(v,i) in msg.description" :key="i" >{{v}}</span></p>
                <p class="price" style="color:#1a9be4">￥{{msg.price}}</p>
            </dd>
        </dl>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:["msg"]
}
</script>

<style scoped>
    .list-item{
        width:100%;
        border-bottom:1px solid #cecece
    }
    .wraper{
         width: 200px;
        height: 200px;
        padding: 4px 4px;
    }
    dl{
       
        display: flex;
        justify-content: space-around;
      
    }
    dd{
        margin:0;
    }
    input[type='text']{
        width: 40px;
        text-align: center;
    }
    img{
        width: 100px;
        height: 100px;
    }
</style>
