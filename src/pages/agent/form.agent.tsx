
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import { configAgent } from "../../api/comment.api";
import { getPartner } from "../../api/custom.api";

export const FormAgent: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    const [dataPartner, setDataParent] = useState([])

    const getDataPartner = async () => {
        const data = await getPartner()
        const dataConvert = data?.data?.data?.map((val: any) => ({ ...val,value:val.name, autoid: val?._id }))
        setDataParent(dataConvert)
    }
    useEffect(() => {
        getDataPartner()

    }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configAgent}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên đại lý" name="name" label="Tên đại lý" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập số điện thoại" name="phone" label="Số điện thoại" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập tên công ty" name="company_name" label="Tên công ty" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập địa chỉ" label="Địa chỉ" name="address" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập email" label="Email" name="email" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập mật khẩu" label="Mật khẩu" name="password" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Đối tác" label="Chọn đối tác" name="partner" data={dataPartner} required/>
                </Col>

            </Row>
        </FormSubmit>
    )
}

