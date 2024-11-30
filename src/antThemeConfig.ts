import { AntdConfig } from '@umijs/max'

export default {
  token: {
    borderRadius: 2,
    colorPrimary: 'rgb(0, 57, 255)'
  },
  components: {
    Table: {
      fontSize: 12,
      headerBorderRadius: 8,
      borderColor: 'rgb(250,250,250)',
      headerBg: '#f8f8fc',
      headerColor: '#333',
      headerSplitColor: '#f8f8fc'
    },
    Input: {
      // colorBgContainer: '#f0f0f0',
      borderRadiusSM: 4,
      fontSize: 12
    },
    Select: {
      // colorBgContainer: '#f0f0f0',
      borderRadiusSM: 4,
      fontSize: 12
    },
    Form: {
      labelFontSize: 12
    },
    Button: {
      fontSize: 12
    },
    Pagination: {
      fontSize: 12,
    },
    Badge: {
      fontSize: 12
    },
    Drawer: {
      paddingLG: 15
    }
  }
} as AntdConfig['theme']