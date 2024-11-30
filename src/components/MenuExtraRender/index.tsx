import {Flex, Avatar} from 'antd'

const MenuExtraRender: React.FC = () => {
  return (
    <Flex
      vertical
      align='center'
      justify='center'
    >
      <Avatar />
      user
    </Flex>
  )
}

export default MenuExtraRender