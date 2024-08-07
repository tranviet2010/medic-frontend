
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import { configPartner } from "../../api/comment.api";

export const FormPartner: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    useEffect(() => {
    }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configPartner}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên đối tác" name="name" label="Tên đối tác" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập số điện thoại" name="phone" label="Số điện thoại" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập tên công ty đối tác" name="company_name" label="Tên công ty đối tác" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập địa chỉ" label="Địa chỉ" name="address"  />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập email" label="Email" name="email" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập password" label="Mật khẩu" name="password" required/>
                </Col>
            </Row>

        </FormSubmit>
    )
}

