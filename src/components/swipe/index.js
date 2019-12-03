import Vue, { CreateElement } from 'vue'
import './index.less'

const Swipe = {
  props: {
    time: {
      type: Number,
      default: 3000
    },
    speed: {
      type: Number,
      default: 200
    },
    changetype: {
      type: String,
      default: 'left'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      Allslots: this.$slots.default,
      got: null,
      currentcount: 1,
      imgwidth: 0,
      count: 0
    }
  },
  created () {
    console.log(111)
  },
  mounted () {
    this.count = this.$slots.default.length
    if (this.count) {
      this.imgwidth = this.$refs['track'].firstChild.firstChild.width
      console.log(this.$props.speed / 1000)
      this.$refs['track'].firstChild.style.transition = this.$props.speed / 1000 + 's'
      console.log(this.imgwidth)
      this.$refs['track'].firstChild.children.forEach(item => {
        item.style.width = this.imgwidth + 'px'
      })
      this.$refs['track'].firstChild.style.width = (this.count * this.imgwidth) + 'px'
      this.setChangeTime()
    }
  },
  methods: {
    setChangeTime () {
      console.log(this.$props.time)
      this.got = setInterval(() => {
        console.log(this.currentcount)
        if (this.currentcount < this.count) {
          this.$refs['track'].firstChild.style.left = '-' + (this.currentcount * this.imgwidth) + 'px'
        } else {
          this.currentcount = 0
          this.$refs['track'].firstChild.style.left = '0px'
        }
        this.currentcount++
      }, this.$props.time)
    },
    onTouchStart () {
      console.log(111)
    },
    onTouchMove () {
      console.log(222)
    },
    onTouchEnd () {
      console.log(333)
    }
  },
  render () {
    return (
      <div
        ref="track"
        class="imgswipe"
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <div class="ztrack">
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
Swipe.install = function () {
  Vue.component('drms-swipe', Swipe)
}
export default Swipe
