import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnProduct = [
    { title: 'Tên sản phẩm', dataIndex: 'name', key: 'type',align: 'center'  },
    { title: 'Hình ảnh sản phẩm', dataIndex: 'image', key: 'type',align: 'center' },
    { title: 'Mô tả sản phẩm', dataIndex: 'dis', key: 'type',align: 'center' },
    { title: 'Giá bán', dataIndex: 'buy', key: 'type',align: 'center'},
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' }
]