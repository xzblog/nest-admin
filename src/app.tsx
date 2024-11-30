import { RuntimeAntdConfig, RunTimeLayoutConfig } from '@umijs/max'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import antThemeConfig from './antThemeConfig'
import layoutThemeConfig from './layoutThemeConfig'


export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' }
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    siderWidth: 240,
    logo: require('@/assets/icon/logo.svg').default,
    menu: { locale: false },
    token: layoutThemeConfig,
    avatarProps: {
      title: 'jun.yang',
      className: 'srm-user',
      icon: <UserOutlined />,
    },
    actionsRender: () => [<LogoutOutlined key='logout-icon' className='srm-actions-icon' />]
  }
}

export const antd: RuntimeAntdConfig = (memo) => {
  memo.prefixCls = 'srm'
  memo.iconPrefixCls = 'srmicon'
  memo.componentSize = 'small'
  memo.autoInsertSpaceInButton = false
  memo.theme = antThemeConfig
  return memo
}
