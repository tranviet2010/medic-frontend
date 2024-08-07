import { Image } from "antd";
import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";
import { CheckCircleTwoTone } from '@ant-design/icons';

export const ColumnCustomer = (value: any) => (
    [
        { title: 'Tên khách hàng', dataIndex: 'name', key: 'type', align: 'center' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'type', align: 'center' },
        { title: 'Tên công ty', dataIndex: 'company_name', key: 'type', align: 'center' },
        { title: 'Địa chỉ', dataIndex: 'address', key: 'type', align: 'center' },
        { title: 'Ghi chú', dataIndex: 'note', key: 'type', align: 'center' },
        { title: 'Thuộc đại lý', dataIndex: 'agent', key: 'type', align: 'center', render: (val: any) => (value.filter((valu: any) => valu._id == val)[0]?.name) },

    ]
)

export const ColumnInfoChild = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'name', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'type', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'type', align: 'center' },
    { title: 'Số tuần thai nhi', dataIndex: 'age', key: 'type', align: 'center' },
    { title: 'Chiều dài xương đùi', dataIndex: 'height_femur', key: 'type', align: 'center' },
    { title: 'Chiều dài xương mũi', dataIndex: 'height_nose', key: 'type', align: 'center' },
    { title: 'Ghi chú bệnh lý', dataIndex: 'note', key: 'type', align: 'center' },
    { title: 'Kết quả dự đoán', dataIndex: 'result', key: 'type', align: 'center' },
]

export const ColumnInfo020 = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'name', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'type', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'adress', key: 'type', align: 'center' },
    { title: 'Họ tên', dataIndex: 'sponsor', key: 'type', align: 'center' },
    { title: 'Ngày tháng năm sinh', dataIndex: 'dob', key: 'type', align: 'center' },
    { title: 'Chiều cao hiện tại', dataIndex: 'height', key: 'type', align: 'center' },
    { title: 'Cân nặng hiện tại', dataIndex: 'weight', key: 'type', align: 'center' },
    { title: 'Ghi chú bệnh lý', dataIndex: 'note', key: 'type', align: 'center' },
    { title: 'Kết quả dự đoán', dataIndex: 'result', key: 'type', align: 'center' }
]

export const ColumnInfoMature = [
    { title: 'Họ và tên người bảo trợ', dataIndex: 'name', key: 'type', align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone', align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'address', align: 'center' },
    { title: 'Họ tên', dataIndex: 'sponsor', key: 'sponsor', align: 'center' },
    { title: 'Ngày tháng năm sinh', dataIndex: 'dob', key: 'type', align: 'center' },
    { title: 'Bệnh lý hiện tại', dataIndex: 'phatho', key: 'type', align: 'center' },
    { title: 'File đính kèm', dataIndex: 'file', key: 'type', align: 'center', render: ((val: any) => (<Image width={100} src={`http://172.104.189.80/uploads/${val?.split('/').pop()}`} />)) }
]