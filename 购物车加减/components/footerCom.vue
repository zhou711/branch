<template>
    <footer class="footer">
        <ul>
            <li>首页</li>
            <li>列表</li>
            <li>购物车</li>
            <li>个人中心</li>
        </ul>
    </footer>
</template>

<script>
export default {
    name:"",
    data(){
        return{}
    }
}
</script>

<style scoped>
    footer,ul{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: green;
        color: #fff;
        overflow: hidden;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
    }
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        list-style: none;
    }
</style>
