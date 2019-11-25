/*
 * @Description: czklove
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:43:29
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-25 17:21:38
 */

import Vue, { CreateElement, RenderContext, ComponentOptions } from 'vue'
import { DefaultSlots } from '../unit/type'
import './index.less'
import { emit } from './../unit/functional'
import { CreateComponent } from '../unit'
import { Context } from 'mocha'

type ButtonProps = {
  tag: string,
  size: ButtonSize,
  type: ButtonType,
  text: String
}

type ButtonEvents = {
  onClick?(event: Event) :void
}
type ButtonSize = 'large' | 'normal' | 'small' | 'mini'
type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger'

/**
 * @description:
 * @param {type}
 * @return:
 * @author: czklove
 */
function Button (h: CreateElement, props: ButtonProps, slots: DefaultSlots, ctx: RenderContext<ButtonProps>) {
  const { tag, size, type } = props
  let text
  text = slots.default ? slots.default() : props.text
  function onClick (event: Event) {
    emit(ctx, 'click', event)
  }
  let classes = [size, type]
  return (
    <tag
      onClick = {onClick}
      class = {classes}
    >
      {text}
    </tag>
  )
}
Button.props = {
  text: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  }
}

export default CreateComponent('button')<ButtonProps, ButtonEvents>(Button)
