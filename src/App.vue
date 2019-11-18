<!--
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-18 11:43:01
 -->
<template>
  <div id="app">
    <Button @click="gotoclick">忘记你</Button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/button/index.tsx'

@Component({
  components: {
    HelloWorld,
    'drms-button': Button
  }
})
export default class App extends Vue {
  gotoclick () : void {
    console.log(13131313)
  }
  created () {
    console.log(Button)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
