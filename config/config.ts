import { defineConfig } from '@umijs/max'
import routes from './routes'

export default defineConfig({
  antd: {
    configProvider: {}
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '供应商系统',
  },
  routes,
  npmClient: 'pnpm',
})

