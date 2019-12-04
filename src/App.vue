<!--
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-25 17:25:47
 -->
<template>
  <div id="app">
    <header>czklove</header>
    <div>
      <nav></nav>
      <div>
        <ul>
          <li>
            <drms-button @click="gotoclick">default</drms-button>
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
            <drms-button @click="gotoclick" size="large">langer</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" size="normal">normal</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" size="small">small</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" size="mini">mini</drms-button>
          </li>
          <li>
            <drms-button @click="gotoclick" size="large" type="success">large+success</drms-button>
          </li>
        </ul>
      </div>
      <div>
        <drms-Row>
          <drms-Col span='4'>
            col4
          </drms-Col>
          <drms-Col span='4'>
            col4
          </drms-Col>
          <drms-Col span='4'>
            col4
          </drms-Col>
          <drms-Col span='4'>
            col4
          </drms-Col>
          <drms-Col span='4'>
            col4
          </drms-Col>
          <drms-Col span='4'>
            col4
          </drms-Col>
        </drms-Row>
        <drms-Row>
          <drms-Col span='6'>
            col6
          </drms-Col>
          <drms-Col span='6'>
            col6
          </drms-Col>
          <drms-Col span='6'>
            col6
          </drms-Col>
          <drms-Col span='6'>
            col6
          </drms-Col>
        </drms-Row>
      </div>
      <div class="swipe">
        <drms-swipe :time='2000' :speed = '1000' :changetype="'right'">
          <img v-for="(item,index) in imgs" :src="item" :key="`lqi${index+1}`" :title='`${index+1}图片`'/>
        </drms-swipe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/button'
import { Row, Col } from './components/grid'

@Component({
  components: {
    HelloWorld,
    'drms-button': Button,
    'drms-Row': Row,
    'drms-Col': Col
  }
})
export default class App extends Vue {
  gotoclick () : void {
    console.log(13131313)
  }
  created () {
  }
  data () {
    return {
      imgs: [
        require('./assets/01.jpg'),
        require('./assets/02.jpg'),
        require('./assets/03.jpg'),
        require('./assets/04.jpg'),
        require('./assets/05.jpg')
      ]
    }
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
  .swipe{
    img{
      width: 100%;
    }
  }
}
</style>
