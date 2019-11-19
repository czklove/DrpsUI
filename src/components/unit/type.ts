/*
 * @Description: 
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 15:41:01
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-19 16:36:59
 */
import Vue, { VNode, ComponentOptions, VueConstructor } from 'vue';

export type ScopedSlot<Props = any> = (props?: Props) => VNode[] | VNode | undefined;
export type DefaultSlots = {
  default?: ScopedSlot
}

export type ObjectIndex = Record<string, any>

export type ScopedSlots = {
  [key: string]: ScopedSlot | undefined;
}

export interface DrmsComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}