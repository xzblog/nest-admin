import { ProLayoutProps } from '@ant-design/pro-components'

export default {
  bgLayout: '#f7f8fb',
  header: {
    heightLayoutHeader: 48,
    colorHeaderTitle: '#fff',
    colorBgHeader: 'rgb(26, 33, 46)',
    colorTextMenu: 'rgb(247, 215, 217)',
    colorBgMenuItemSelected: 'rgb(0, 57, 255)',
    colorTextMenuSelected: 'rgb(250, 250, 250)',
    colorTextMenuActive: 'rgb(250, 250, 250)',
  },
  sider: {
    colorTextMenu: 'rgb(247, 215, 217)',
    colorMenuItemDivider: 'rgb(24, 31, 41)',
    colorMenuBackground: 'rgb(26, 33, 46)',
    colorBgCollapsedButton: '#efefef',
    colorBgMenuItemSelected: 'rgb(0, 57, 255)',
    colorBgMenuItemHover: 'rgb(33, 41, 57)',
    colorTextMenuSelected: 'rgb(250, 250, 250)',
    colorTextMenuItemHover: 'rgb(250, 250, 250)',
    colorTextCollapsedButton: 'rgb(26, 33, 46)',
    colorTextCollapsedButtonHover: 'rgb(0, 57, 255)',
  },
  pageContainer: {
    paddingBlockPageContainerContent: 15,
    paddingInlinePageContainerContent: 15,
  }
} as ProLayoutProps['token']