import { useRouteProps } from '@umijs/max'
import styles from './index.less'

interface PageTitleProps {
  title?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const { name } = useRouteProps()

  return (
    <div className={styles['srm-page-title']}>{title || name}</div>
  )
}

export default PageTitle