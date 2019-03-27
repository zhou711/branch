import "./css/style.css"
import Vue from "vue"
import headercom from "../components/headerCom.vue"
import footercom from "../components/footerCom.vue"
import listcom from "../listCom.vue"
console.log(listcom)
new Vue({
    el: "#wrap",
    components: { headercom, footercom, listcom }
})