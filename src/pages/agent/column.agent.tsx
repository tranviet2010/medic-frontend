import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnAgent = [
    { title: 'Tên đại lý', dataIndex: 'name', key: 'type',align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'type',align: 'center' },
    { title: 'Tên công ty', dataIndex: 'company_name', key: 'type',align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'type',align: 'center'},
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' },
    { title: 'Thuộc đối tác', dataIndex: 'partner', key: 'type',align: 'center' },
]