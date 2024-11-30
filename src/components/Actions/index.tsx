import { Dropdown, MenuItemProps } from 'antd'
import { DeleteOutlined, EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'
import styles from './index.less'

interface ActionsProps {
  onMenuClick?: MenuItemProps['onClick']
}

const Actions: React.FC<ActionsProps> = ({ onMenuClick }) => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'detail',
            label: '详情',
            icon: <EyeOutlined />
          },
          {
            key: 'edit',
            label: '编辑',
            icon: <EditOutlined />
          },
          {
            key: 'del',
            label: '删除',
            icon: <DeleteOutlined />
          }
        ],
        onClick: onMenuClick
      }}
    >
      <EllipsisOutlined className={styles['text']} />
    </Dropdown>
  )
}

export default Actions