import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col, Form, Table } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getAdult } from "../../api/comment.api"
import ColumnGroup from "antd/es/table/ColumnGroup"
import Column from "antd/es/table/Column"
import { convertAge, convertAgeMonth } from "../../utils/instant"

export default function Adult() {
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()
    const [editingKey, setEditingKey] = useState('');
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params
        }
        getAdult().then((ress: any) => {
            let conf = ress?.data?.data
            setData(conf)

        })
    }, [])

    console.log("  data",data);

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal, loading])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
            >
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="title"
                        placeholder="Trạng thái"

                    />
                </Col>
            </FormSearch>

            <Table dataSource={data} bordered>
                <Column title="" key="age" render={(value)=>`${convertAge(value.age)} ${convertAgeMonth(value.month_age)}`} width={150} align="center"/>
                <ColumnGroup title="CÂN NẶNG (KG)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_weight3" key="up_weight" width={50} align="center"/>
                    <Column title="Trên chuẩn độ 2" dataIndex="up_weight2" key="up_weight" width={50} align="center"/>
                    <Column title="Trên chuẩn độ 1" dataIndex="up_weight1" key="up_weight" width={50} align="center"/>
                    <Column title="Chuẩn" dataIndex="weight" key="weight" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_weight1" key="dow_weight" width={50} align="center"/>
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_weight2" key="dow_weight" width={50} align="center"/>
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_weight3" key="dow_weight" width={50} align="center"/>
                </ColumnGroup>
                <ColumnGroup title="CHIỀU CAO (CM)">
                    <Column title="Trên chuẩn độ 3" dataIndex="up_height3" key="up_height" width={50} align="center"/>
                    <Column title="Trên chuẩn độ 2" dataIndex="up_height2" key="up_height" width={50} align="center"/>
                    <Column title="Trên chuẩn độ 1" dataIndex="up_height1" key="up_height" width={50} align="center"/>
                    <Column title="Chuẩn" dataIndex="height" key="height" align="center" />
                    <Column title="Dưới chuẩn độ 1" dataIndex="dow_height1" key="dow_height" width={50} align="center"/>
                    <Column title="Dưới chuẩn độ 2" dataIndex="dow_height2" key="dow_height" width={50} align="center"/>
                    <Column title="Dưới chuẩn độ 3" dataIndex="dow_height3" key="dow_height" width={50} align="center"/>

                </ColumnGroup>
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