
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import { configDoc } from "../../api/comment.api";

export const FormDoc: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    useEffect(() => {
    }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configDoc}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên tài nguyên" name="name" label="Tên tài nguyên" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập link tài liệu" name="link" label="Link tài liệu/ video" />
                </Col>
            </Row>

        </FormSubmit>
    )
}

