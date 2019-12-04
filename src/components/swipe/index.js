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
  },
  mounted () {
    this.count = this.$slots.default.length
    if (this.count) {
      this.imgwidth = this.$refs['track'].firstChild.firstChild.width
      console.log(this.$props.speed / 1000)
      this.$refs['track'].firstChild.style.transition = this.$props.speed / 1000 + 's'
      console.log(this.imgwidth)
      let imgs = this.$refs['track'].firstChild.children
      imgs.forEach(item => {
        item.style.width = this.imgwidth + 'px'
      })
      if (this.$props.changetype === 'opti') {
        this.$refs['track'].firstChild.style.width = (this.count * this.imgwidth) + 'px'
      } else if (this.$props.changetype === 'left') {
        this.count++
        this.$refs['track'].firstChild.style.width = ((this.count) * this.imgwidth) + 'px'
        this.$refs['track'].firstChild.appendChild(imgs[0].cloneNode(true))
      } else {
        this.count++
        this.$refs['track'].firstChild.style.width = ((this.count) * this.imgwidth) + 'px'
        this.$refs['track'].firstChild.insertBefore(imgs[imgs.length - 1].cloneNode(true), imgs[0])
        this.$refs['track'].firstChild.style.left = '-' + (this.imgwidth) + 'px'
      }
      this.setChangeTime()
    }
  },
  methods: {
    setChangeTime () {
      console.log(this.$props.time)
      this.got = setInterval(() => {
        if (this.$props.changetype === 'left') {
          if (this.currentcount < this.count) {
            this.$refs['track'].firstChild.style.left = '-' + (this.currentcount * this.imgwidth) + 'px'
            if (this.currentcount === this.count - 1) {
              setTimeout(() => {
                this.$refs['track'].firstChild.style.transition = 'none'
                this.$refs['track'].firstChild.style.left = '0px'
              }, this.speed)
            }
          } else {
            this.currentcount = 1
            this.$refs['track'].firstChild.style.transition = this.$props.speed / 1000 + 's'
            this.$refs['track'].firstChild.style.left = '-' + (this.currentcount * this.imgwidth) + 'px'
          }
        } else if (this.$props.changetype === 'right') {
          console.log(this.currentcount)
          if (this.currentcount <= 1) {
            this.$refs['track'].firstChild.style.transition = this.$props.speed / 1000 + 's'
            this.$refs['track'].firstChild.style.left = '0px'
            if (this.currentcount === 1) {
              console.log('change')
              setTimeout(() => {
                this.$refs['track'].firstChild.style.transition = 'none'
                this.$refs['track'].firstChild.style.left = '-' + ((this.count - 1) * this.imgwidth) + 'px'
              }, this.speed)
            }
          } else {
            this.$refs['track'].firstChild.style.transition = this.$props.speed / 1000 + 's'
            this.$refs['track'].firstChild.style.left = '-' + ((6 - this.currentcount) * this.imgwidth) + 'px'
            if (this.currentcount === this.count - 1) {
              this.currentcount = 0
            }
          }
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
          { this.$slots.default }
        </div>
      </div>
    )
  }
}
Swipe.install = function () {
  Vue.component('drms-swipe', Swipe)
}
export default Swipe
