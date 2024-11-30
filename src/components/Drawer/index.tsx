import { useRouteData } from '@umijs/max'
import { Drawer as AntdDrawer, Breadcrumb } from 'antd'

interface DrawerProps {
  open?: boolean
  text?: string
  onClose?: () => void
  children?: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ open = false, text, onClose, children }) => {
  const { route }: any = useRouteData()

  return (
    <AntdDrawer
      width='100%'
      open={open}
      mask={false}
      getContainer={false}
      className='g-drawer'
      rootClassName='g-root-drawer'
      drawerRender={() => {
        return (
          <div className='g-drawer'>
            <Breadcrumb
              items={[
                {
                  key: '2',
                  title: <span onClick={onClose}>{route.name}</span>
                },
                {
                  key: '3',
                  title: text
                }
              ]}
            />
            {children}
          </div>
        )
      }}
    />
  )
}

export default Drawer