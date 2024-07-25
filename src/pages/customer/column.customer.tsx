import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCustomer = [
    { title: 'Tên khách hàng', dataIndex: 'name', key: 'type',align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'type',align: 'center' },
    { title: 'Tên công ty', dataIndex: 'company_name', key: 'type',align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'type',align: 'center'},
    { title: 'Ghi chú', dataIndex: 'note', key: 'type',align: 'center' },
    { title: 'Thuộc đại lý', dataIndex: 'agent', key: 'type',align: 'center' },

]

export const ColumnInfoCus = [
    { title: 'Ngày kiểm tra', dataIndex: 'datecheck', key: 'type',align: 'center' },
    { title: 'Tuổi thai', dataIndex: 'age', key: 'type',align: 'center' },
    { title: 'Kết quả', dataIndex: 'nguong', key: 'type',align: 'center' },
]