import { RenderContext, VNodeData } from 'vue'
import { ObjectIndex } from './type'

type Context = RenderContext & { data: VNodeData & ObjectIndex };

/*
  context 其实代表的是当前vue实例
  listeners 保存这所以的事件
  args 就是传入的参数
 */
export function emit (context: Context, eventName: string, ...args: any[]) {
  const listeners = context.listeners[eventName]
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(listener => {
        listener(...args)
      })
    } else {
      listeners(...args)
    }
  }
}
