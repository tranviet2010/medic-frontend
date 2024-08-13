import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col, Form, Space, Table } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getAdult } from "../../api/comment.api"
import ColumnGroup from "antd/es/table/ColumnGroup"
import Column from "antd/es/table/Column"
import { Age, AgeMonth, convertAge, convertAgeMonth } from "../../utils/instant"
import { useNavigate } from "react-router-dom"
import { EditOutlined, InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import confirm from "antd/es/modal/confirm"
import { deleteFormRequest } from "../../api/request"
import Notifi from "../../components/core/noti"
import store from "../../stores"
import { setModalFalse } from "../../stores/global.store"


export default function Adult() {
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()
    const [editingKey, setEditingKey] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params
        }
        getAdult(combinedParams).then((ress: any) => {
            let conf = ress?.data?.data
            setData(conf)

        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
        const deleteManyId = (id: any) => {
        // store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn xóa bản ghi này`,
            async onOk() {
                try {
                    let url = 'height/' + id;
                    deleteFormRequest(url, {}).then((res: any) => {
                        if (res?.status == 200) {
                            Notifi('succ', `Xóa thành công bản ghi`);
                            store.dispatch(setModalFalse());
                            // setSelectedRowKeys([]);
                        }
                        else {

                        }
                    });
                } catch (e) {
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });
    }

    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal, loading])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
                notDate
            >
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="age"
                        placeholder="Chọn tuổi"
                        data={Age()}

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="month_age"
                        placeholder="Chọn tháng"
                        data={AgeMonth()}

                    />
                </Col>
            </FormSearch>
            <b>Bé trai</b>
            <Table dataSource={data?.filter((val: any) => val.male == '0')} bordered>
                <Column title="" key="age" render={(value) => `${convertAge(value.age)} ${convertAgeMonth(value.month_age)}`} width={150} align="center" />
                <ColumnGroup title="CÂN NẶNG (KG)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight3} />
                    <Column title="Trên chuẩn độ 2" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight2} />
                    <Column title="Trên chuẩn độ 1" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight1} />
                    <Column title="Chuẩn" dataIndex="weight" key="weight" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight1} />
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight2} />
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight3} />
                </ColumnGroup>
                <ColumnGroup title="CHIỀU CAO (CM)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height3} />
                    <Column title="Trên chuẩn độ 2" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height2} />
                    <Column title="Trên chuẩn độ 1" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height1} />
                    <Column title="Chuẩn" dataIndex="height" key="height" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height1} />
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height2} />
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height3} />

                </ColumnGroup>
                <Column
                    width={50}
                    title="Hành động"
                    key="action"
                    render={(_: any, record: any) => (
                        <Space size="middle">
                            <span
                                onClick={() =>
                                    navigate('edit', {
                                        state: {
                                            data: _,
                                            type: 'edit',
                                        },
                                    })
                                }
                                style={{ marginLeft: 0, cursor: 'pointer' }}
                                title="Sửa"
                            >
                                <EditOutlined />
                            </span>
                            <span
                                onClick={() =>
                                    deleteManyId(_?._id)
                                }
                                style={{ cursor: 'pointer', marginLeft: '1.5rem' }}
                                title="Xoá"
                            >
                                <DeleteOutlined />
                            </span>
                        </Space>
                    )}
                />
            </Table>
            <br></br>

            <b>Bé gái</b>
            <Table dataSource={data?.filter((val: any) => val.male == '1')} bordered>
                <Column title="" key="age" render={(value) => `${convertAge(value.age)} ${convertAgeMonth(value.month_age)}`} width={150} align="center" />
                <ColumnGroup title="CÂN NẶNG (KG)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight3} />
                    <Column title="Trên chuẩn độ 2" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight2} />
                    <Column title="Trên chuẩn độ 1" dataIndex="up_weight" key="up_weight" width={50} align="center" render={(value) => value.up_weight1} />
                    <Column title="Chuẩn" dataIndex="weight" key="weight" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight1} />
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight2} />
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_weight" key="dow_weight" width={50} align="center" render={(value) => value.dow_weight3} />
                </ColumnGroup>
                <ColumnGroup title="CHIỀU CAO (CM)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height3} />
                    <Column title="Trên chuẩn độ 2" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height2} />
                    <Column title="Trên chuẩn độ 1" dataIndex="up_height" key="up_height" width={50} align="center" render={(value) => value.up_height1} />
                    <Column title="Chuẩn" dataIndex="height" key="height" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height1} />
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height2} />
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_height" key="dow_height" width={50} align="center" render={(value) => value.dow_height3} />

                </ColumnGroup>
                <Column
                    width={50}
                    title="Hành động"
                    key="action"
                    render={(_: any, record: any) => (
                        <Space size="middle">
                            <span
                                onClick={() =>
                                    navigate('edit', {
                                        state: {
                                            data: _,
                                            type: 'edit',
                                        },
                                    })
                                }
                                style={{ marginLeft: 0, cursor: 'pointer' }}
                                title="Sửa"
                            >
                                <EditOutlined />
                            </span>
                            <span
                                onClick={() =>
                                    deleteManyId(_?._id)
                                }
                                style={{ cursor: 'pointer', marginLeft: '1.5rem' }}
                                title="Xoá"
                            >
                                <DeleteOutlined />
                            </span>
                        </Space>
                    )}
                />
                {/* <Column
                    title="Action"
                    key="action"
                    render={(_: any, record: any) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                /> */}
            </Table>
        </>
    )
}