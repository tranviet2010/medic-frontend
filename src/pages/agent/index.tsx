import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import { getAgent } from "../../api/custom.api"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnAgent } from "./column.agent"


export default function City() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params
        }
        getAgent(combinedParams).then((ress: any) => {
            setData(ress?.data?.data)
        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal])
    return (
        <>
            <FormSearch
                onSearch={onSearch}
                notDate
            >
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="phone"
                        placeholder="Số điện thoại"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="name"
                        placeholder="Họ tên"
                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnAgent}
                dataSource={data}
                user
                pagination={pagination}
                // onChangePaniga={onChangePaniga}
            />
        </>
    )
}