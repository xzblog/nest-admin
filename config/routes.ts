import { MenuDataItem } from '@ant-design/pro-components'

export type IBestAFSRoute = {
  component?: React.ComponentType | string
} & MenuDataItem

export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: './Home',
    icon: 'DashboardOutlined'
  },
  {
    name: '账户管理',
    path: '/accounts',
    component: './Accounts',
    icon: 'UserOutlined'
  },
  {
    name: '角色管理',
    path: '/roles',
    component: './Roles',
    icon: 'TeamOutlined'
  },
  {
    name: '日志管理',
    path: '/logs',
    component: './Logs',
    icon: 'ProfileOutlined'
  }
] as IBestAFSRoute[]