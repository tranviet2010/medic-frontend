import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCourse = [
    { title: 'Tên liệu trình', dataIndex: 'name', key: 'type',align: 'center'  },
    { title: 'Tiêu chuẩn tương ứng', dataIndex: 'image', key: 'type',align: 'center' },
    { title: 'Sản phẩm đi kèm theo liệu trình', dataIndex: 'dis', key: 'type',align: 'center' },
    { title: 'Đối tượng', dataIndex: 'buy', key: 'type',align: 'center'},
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' }
]