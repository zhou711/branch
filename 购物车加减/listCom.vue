<template>
    <div class="listcon">
        <!-- 列表总模块 -->
        <div class="checkall">
            <label for="">
                <input type="checkbox" v-model="checkAll">全选
            </label>
        </div>
        <!-- 循坏列表 -->
        <!-- <itemcom></itemcom> -->
        <div class="itemcon">
             <itemcom v-for="(item,index) in shopData" :key="index" :msg="item"></itemcom>
        </div>
        <div class="foot">总计</div>
    </div>
</template>

<script>
import itemcom from "./components/itemCom.vue"
export default {
    //渲染的数据
    data(){
        return{
            checkAll:false,
            checkList:[],
            shopData:[
                {
                    checked:false,
                    id:0,
                    pic:"./src/images/1.jpg",
                    price:120,
                    count:0,
                    title:"油泼大虾",
                    weight:"150g/袋",
                    description:["美味可口","真好吃"]
                },
                 {
                    checked:false,
                    id:0,
                    pic:"./src/images/2.jpg",
                    price:190,
                    count:0,
                    title:"油泼大虾",
                    weight:"150g/袋",
                    description:["美味可口","真好吃"]
                },
                 {
                    checked:false,
                    id:0,
                    pic:"./src/images/3.jpg",
                    price:150,
                    count:0,
                    title:"油泼大虾",
                    weight:"150g/袋",
                    description:["美味可口","真好吃"]
                }
            ]
        }
    },
    // 注册
    components:{itemcom},
    watch:{
        checkAll(newval,oldval){
            console.log(newval);
            if(newval){
                this.shopData.forEach((item)=>{
                    item.checked=true
                })
            }else{
                this.shopData.forEach((item)=>{
                    console.log(item);
                    item.checked=false;
                })
                this.checkList=[]
            }
        },
        checkList(newval,oldval){
            if(newval.length>0&&newval.length===this.shopData.length){
                this.checkAll=false;
            }
        }
    }
}
</script>

<style>
.listcon{
     padding:60px 0
 }
 .checkall{
    padding: 10px 0;
    border-bottom: 1px solid red;
    position: fixed;
    width: 100%;
    top: 60px;
    background: white;
 }
 .itemcon{
    padding-top: 42px;
 }
 .listfooter{
     position: fixed;
    bottom: 60px;
    /* background: red; */
    width: 100%;
    background: white
 }
 .listfooter p{
     height: 40px;
     line-height: 40px;
     text-align: center;
     padding: 0;
     margin: 0;
     border-top: 1px solid #c3c1c1
 }
</style>
