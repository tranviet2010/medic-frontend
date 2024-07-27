import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCustomer = (value: any) => (
    [
        { title: 'Tên khách hàng', dataIndex: 'name', key: 'type', align: 'center' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'type', align: 'center' },
        { title: 'Tên công ty', dataIndex: 'company_name', key: 'type', align: 'center' },
        { title: 'Địa chỉ', dataIndex: 'address', key: 'type', align: 'center' },
        { title: 'Ghi chú', dataIndex: 'note', key: 'type', align: 'center' },
        { title: 'Thuộc đại lý', dataIndex: 'agent', key: 'type', align: 'center', render:(val:any)=> (value.filter((valu:any)=>valu._id==val)[0]?.name)},

    ]
)

export const ColumnInfoChild = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'datecheck', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'age', key: 'type', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Số tuần thai nhi', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Chiều dài xương đùi', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Chiều dài xương mũi', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Ghi chú bệnh lý', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Kết quả dự đoán', dataIndex: 'nguong', key: 'type', align: 'center' },
]

export const ColumnInfo020 = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'datecheck', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'age', key: 'type', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Họ tên', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Ngày tháng năm sinh', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Chiều cao hiện tại', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Cân nặng hiện tại', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Ghi chú bệnh lý', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Kết quả dự đoán', dataIndex: 'nguong', key: 'type', align: 'center' }
]

export const ColumnInfoMature = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'datecheck', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'age', key: 'type', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Họ tên', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Ngày tháng năm sinh', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'Bệnh lý hiện tại', dataIndex: 'nguong', key: 'type', align: 'center' },
    { title: 'File đính kèm', dataIndex: 'nguong', key: 'type', align: 'center' }
]