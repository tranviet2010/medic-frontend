
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
                    <BaseFormInput type="option" placeholder="" name="male" label="Giới tính" data={[
                        { autoid: "Nam", value: "Nam" },
                        { autoid: "Nữ", value: "Nữ" },

                    ]} />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập giá trị trung bình" name="averageFemur" label="Giá trị trung bình xương đùi" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập ngưỡng giới hạn" name="limitFemur" label="Ngưỡng giới hạn xương đùi" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập giá trị trung bình" name="averageNose" label="Giá trị trung bình xương mũi" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Nhập ngưỡng giới hạn" name="limitNose" label="Ngưỡng giới hạn xương mũi" required />
                </Col>
            </Row>

        </FormSubmit>
    )
}

