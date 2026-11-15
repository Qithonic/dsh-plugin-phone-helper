import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-plugin-phone-helper'
export const inject = ['logger']

export interface Config {}

export function apply(ctx: Context, _config: Config) {
  ctx.logger?.info('[dsh-plugin-phone-helper] plugin loaded')
}
