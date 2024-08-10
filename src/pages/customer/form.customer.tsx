
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { configCustome, getAgent } from "../../api/custom.api";
import { getPartnerClass } from "../../api/partner.api";
import { useSelector } from "react-redux";

export const FormCustom: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    const [dataAgent, setDataAgent] = useState<any>([])

    const getDataAgent = async () => {
        const data = await getAgent()
        const dataConvert = data?.data?.data?.map((val: any) => ({ ...val,value:val.name, autoid: val?._id }))
        setDataAgent(dataConvert)
    }


    useEffect(() => {
        getDataAgent()
    }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configCustome}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên" name="name" label="Tên người dùng" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập số điện thoại" name="phone" label="Số điện thoại" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập tên công ty" label="Công ty" name="company_name" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập địa chỉ" label="Địa chỉ" name="address" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập email" name="email" label="Email" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Chọn đại lý" name="agent" label="Đại lý" data={dataAgent} required/>
                </Col>
                

            </Row>

        </FormSubmit>
    )
}

