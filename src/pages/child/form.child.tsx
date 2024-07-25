
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { getPartnerClass } from "../../api/partner.api";
import { useSelector } from "react-redux";
import { configChild } from "../../api/comment.api";
import { Display, Phan_he } from "../../utils/instant";

export const FormChild: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)

    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configChild}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tuổi" name="age" label="Tuổi thai (Tuần)" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập giá trị trung bình" name="average" label="Giá trị trung bình (mm)" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập ngưỡng giới hạn" name="limit" label="Ngưỡng giới hạn (mm)" required/>
                </Col>
            </Row>

        </FormSubmit>
    )
}

