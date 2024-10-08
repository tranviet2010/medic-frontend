import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getPartner, getProductN } from "../../api/custom.api"
import { ColumnProduct } from "./column.product"
import { configProduct } from "../../api/comment.api"


export default function Product() {
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
        getProductN(combinedParams).then((ress: any) => {
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
                        placeholder="Tên sản phẩm"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="buy"
                        placeholder="Giá bán"
                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnProduct}
                dataSource={data}
                user
                pagination={pagination}
                del
                configUrl={configProduct}
                // onChangePaniga={onChangePaniga}
            />
        </>
    )
}