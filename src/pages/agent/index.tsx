import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import { getAgent } from "../../api/custom.api"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnAgent } from "./column.agent"
// import { IdUser } from "../../utils/instant"


export default function City() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const parentStore = useSelector((state: any) => state.usersSlice.param.parent)
    const idByEmail = useSelector((state: any) => state.usersSlice.param.getIdEmail)
    const [valueSearch, setValueSearch] = useState<any>()


    const fetchData = useCallback((pagination: any, params: any) => {
        const role = localStorage.getItem('role')
        const combinedParams = role == '1' ? {
            ...pagination,
            ...params,
            partner: idByEmail[0]?._id
        } : {
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
                columType={ColumnAgent(parentStore)}
                dataSource={data}
                user
                pagination={pagination}
            // onChangePaniga={onChangePaniga}
            />
        </>
    )
}