<!--
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-19 17:30:30
 -->
<template>
  <div id="app">
    <header>czklove</header>
    <div>
      <nav></nav>
      <div>
        <ul>
          <li>
            <drms-button @click="gotoclick">提交</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="default">default</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="success">success</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="error">error</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="danger">danger</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" size="langer">submit</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="normal">submit</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="small">submit</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" type="mini" tag="a">submit</drms-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/button'

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
  ul{
    list-style: none;
    li{
      text-align: left;
      margin-top: 10px;
    }
  }
}
</style>
