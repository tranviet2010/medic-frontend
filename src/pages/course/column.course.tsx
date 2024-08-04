import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCourse = [
    { title: 'Tên liệu trình', dataIndex: 'name', key: 'type',align: 'center'  },
    { title: 'Tiêu chuẩn tương ứng', dataIndex: 'define', key: 'type',align: 'center' },
    { title: 'Sản phẩm đi kèm theo liệu trình', dataIndex: 'products', key: 'type',align: 'center',render:((value:any)=>(
        value.map((product:any) => 
            `${product.name_product}: số lượng ${product.quantity}, hạn dùng ${product.exp}`
        ).join('- ')
    )) },
    { title: 'Đối tượng', dataIndex: 'define', key: 'type',align: 'center'},
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' }
]