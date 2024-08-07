import type { FC } from 'react'
import { ReactComponent as GuideSvg } from '../../asset/menu/guide.svg'
import {
    PieChartOutlined,
    BookOutlined,
    SnippetsOutlined,
    UsergroupAddOutlined,
    LineChartOutlined,
    FileImageOutlined,
    ExperimentOutlined,
    AlertOutlined,
    ProjectOutlined,
    BarChartOutlined
}
    from '@ant-design/icons'

interface CustomIconProps {
    type: string
}

export const CustomIcon: FC<CustomIconProps> = (props) => {
    const { type } = props
    let com = <GuideSvg />

    if (type === 'menu') {
        com = <BookOutlined />
    } else if (type === 'manage') {
        com = <SnippetsOutlined />
    } else if (type === 'user') {
        com = <UsergroupAddOutlined />
    } else if (type === 'comment') {
        com = <LineChartOutlined />
    } else if (type === 'banner') {
        com = <FileImageOutlined />
    }
    else if (type === 'product') {
        com = <ExperimentOutlined />
    }
    else if (type === 'prod') {
        com = <AlertOutlined />
    }
    else if (type === 'productot') {
        com = <ProjectOutlined />
    }
    else if (type === 'lt') {
        com = <BarChartOutlined />
    }

    

 
    else {
        com = <PieChartOutlined />
    }

    return <span className="anticon">{com}</span>
}
