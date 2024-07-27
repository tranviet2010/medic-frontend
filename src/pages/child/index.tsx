import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col, Form } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getChild } from "../../api/comment.api"
import dayjs from "dayjs"
import { BaseTable } from "../../components/core/table/tableCore"
import { ColumnChild } from "./column.child"

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: any;
    index: number;
    children: React.ReactNode;
}

export default function Child() {
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
        getChild(combinedParams).then((ress: any) => {
            let conf = ress?.data?.data
            setData(conf)

        })
    }, [])

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
                notDate
            >
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="age"
                        placeholder="Tuần tuổi"

                    />
                </Col>
            </FormSearch>

            <BaseTable
                columType={ColumnChild}
                dataSource={data}
                user
                pagination={pagination}
            />
        </>
    )
}