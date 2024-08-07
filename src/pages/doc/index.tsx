import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getDoc } from "../../api/custom.api"
import { configDoc } from "../../api/comment.api"
import { ColumnDoc } from "./column.doc"


export default function Doc() {
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
        getDoc(combinedParams).then((ress: any) => {
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
                        name="name"
                        placeholder="Tên tài nguyên"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="link"
                        placeholder="Link tài nguyên"
                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnDoc}
                dataSource={data}
                user
                pagination={pagination}
                configUrl={configDoc}
                del
                // onChangePaniga={onChangePaniga}
            />
        </>
    )
}