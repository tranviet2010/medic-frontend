
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import { configPartner, configProduct } from "../../api/comment.api";
import TextArea from "antd/es/input/TextArea";
import UploadFile from "../../api/uploadfile";

export const FormProduct: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    useEffect(() => {
    }, [initialValues])
    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configProduct}
            type={type}
            file
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Tên sản phẩm" name="name" label="Tên sản phẩm" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập giá bán" name="buy" label="Giá bán" />
                </Col>
                <Col span={24} >
                    <Form.Item label="" name="dis">
                        <TextArea rows={7} placeholder="Mô tả sản phẩm" maxLength={244} />
                    </Form.Item>
                </Col>
            </Row>

        </FormSubmit>
    )
}

