import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnCustomer } from "./column.customer"
import { getCustom } from "../../api/custom.api"
import { configCustomer } from "../../api/comment.api"


export default function Customer() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const agentStore = useSelector((state: any) => state.usersSlice.param.agent)
    const getIdByEmailAgent = useSelector((state: any) => state?.usersSlice?.param?.getIdByEmailAgent)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const role = localStorage.getItem('role')
        const combinedParams = role == '2' ? {
            ...pagination,
            ...params,
            agent:getIdByEmailAgent&&getIdByEmailAgent[0]?._id
        } : {
            ...pagination,
            ...params
        }
        getCustom(combinedParams).then((ress: any) => {
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
    }, [dataModal])
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
                columType={ColumnCustomer(agentStore)}
                dataSource={data}
                user
                pagination={pagination}
                del
                configUrl={configCustomer}
                cus
                onChangePaniga={onChangePaniga}
            />
        </>
    )
}