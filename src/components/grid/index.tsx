import Vue, { CreateElement, RenderContext } from 'vue'
import { DefaultSlots } from '../unit/type'
import { CreateComponent } from '../unit'
import './index.less'

type Rowprops = {
  text: string
}
function RowRender (h: CreateElement, props: Rowprops, slots: DefaultSlots, ctx: RenderContext<Vue>) {
  let text = slots.default ? slots.default() : props.text
  return (
    <div class="drms-row">
      { text }
    </div>
  )
}
RowRender.props = null

type Colprops = {
  span: string,
  text: string
}
function ColRender (h: CreateElement, props: Colprops, slots: DefaultSlots, ctx: RenderContext<Vue>) {
  let text = slots.default ? slots.default() : props.text
  let classes = 'span' + props.span
  return (
    <div class={ classes }>
      { text }
    </div>
  )
}
ColRender.props = {
  span: {
    type: String,
    default: '24'
  },
  text: {
    type: String,
    default: ''
  }
}
export const Row = CreateComponent('row')<Rowprops, any>(RowRender)
export const Col = CreateComponent('col')<Colprops, any>(ColRender)
