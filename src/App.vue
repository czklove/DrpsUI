<!--
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-18 16:34:31
 -->
<template>
  <div id="app">
    <header>czklove</header>
    <div>
      <nav></nav>
      <div>
        <ul>
          <li>
            <Button @click="gotoclick">提交</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="default">default</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="success">success</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="error">error</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="danger">danger</Button>
          </li>
          <li>
            <Button @click="gotoclick" size="langer">danger</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="normal">danger</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="small">danger</Button>
          </li>
          <li>
            <Button @click="gotoclick" type="mini">danger</Button>
          </li>
        </ul>
      </div>
    </div>
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
