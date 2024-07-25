
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { getPartnerClass } from "../../api/partner.api";
import { useSelector } from "react-redux";
import { configAdult } from "../../api/comment.api";
import { Age, AgeMonth, Display, Phan_he } from "../../utils/instant";
import BaseFieldset from "../../components/core/fieldset";

export const FormAdult: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configAdult}
            type={type}
            notNote
            adult
        >
            <Row gutter={16}>
                    <Col span={8}>
                        <BaseFormInput type="option" label="Chọn tuổi" name="age"  required data={Age()}/>
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="option" label="Chọn tháng" name="month_age" required data={AgeMonth()}/>
                    </Col>
            </Row>
            <BaseFieldset title="Cân Nặng (KG)">
                <Row gutter={16}>
                    <Col span={8}>
                        <BaseFormInput type="input" label="Trên chuẩn độ 3" name="up_weight3"  required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" label="Trên chuẩn độ 2" name="up_weight2" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" label="Trên chuẩn độ 1" name="up_weight1" required />
                    </Col>
                    <Col span={24}>
                        <BaseFormInput type="input" name="weight" label="Chuẩn" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="dow_weight1" label="Dưới chuẩn độ 1" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="dow_weight2" label="Dưới chuẩn độ 2" required />
                    </Col>
                    <Col span={8}>
                        <BaseFormInput type="input" name="dow_weight3" label="Dưới chuẩn độ 3" required />
                    </Col>
                </Row>
            </BaseFieldset>

            <BaseFieldset title="Chiều Cao (CM)">
                <Row gutter={16}>
                    <Col span={8}>
                        <BaseFormInput type="input" name="up_height3" label="Trên chuẩn độ 3" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="up_height2" label="Trên chuẩn độ 2" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="up_height1" label="Trên chuẩn độ 1" required />
                    </Col>
                    <Col span={24}>
                        <BaseFormInput type="input" name="height" label="Chuẩn" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="dow_height1" label="Dưới chuẩn độ 1" required />
                    </Col>
                    <Col span={8} >
                        <BaseFormInput type="input" name="dow_height2" label="Dưới chuẩn độ 2" required />
                    </Col>
                    <Col span={8}>
                        <BaseFormInput type="input" name="dow_height3" label="Dưới chuẩn độ 3" required />
                    </Col>
                </Row>
            </BaseFieldset>



        </FormSubmit>
    )
}

