import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCustomer = [
    { title: 'Họ tên đối tác', dataIndex: 'name', key: 'type',align: 'center'  },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'type',align: 'center' },
    { title: 'Tên công ty', dataIndex: 'company_name', key: 'type',align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'type',align: 'center'},
    { title: 'Email', dataIndex: 'email', key: 'type',align: 'center' },
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' },
]