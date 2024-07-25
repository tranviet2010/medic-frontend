
import { Col, Form, Row } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifi from '../noti';
import { ButtonCore } from '../button/buttonCore';
import { addError, addSucc, updateError, updateSucc } from '../../../utils/textUnits';
import { addFormData, editFormRequest } from '../../../api/request';
import TextArea from 'antd/es/input/TextArea';
import { getTimeUnix } from '../../../utils/convertData';
import { fetchUserById } from '../../../stores/param';
import { AppDispatch } from '../../../stores';
import { useDispatch } from 'react-redux';

export const FormSubmit = ({ type, initialValues, children, onchange, configUrl,notNote,...props}: any) => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        let configValue =props.adult ? {
            ...initialValues,
            ...values,
            number_day:Number(values.age) + Number(values.month_age)
        } : {
            ...initialValues,
            ...values
        }

        if (type == "add") {
            addFormData(configUrl?.urlAdd, configValue).then((res: any) => {
                if (res?.status == 201) {
                    Notifi("succ", addSucc)
                    form.resetFields();
                    navigate(configUrl?.navigate)
                } else {
                    Notifi("error", addError)
                }
            })
        }
        else {
            const urlEdit= configUrl?.urlEdit + "/" + initialValues._id
            editFormRequest(urlEdit, configValue).then((res: any) => {
                if (res?.status == 200) {
                    Notifi("succ", updateSucc)
                    form.resetFields();
                    navigate(configUrl?.navigate)
                } else {
                    Notifi("error", updateError)
                }
            })
        }
    }

    const handleFormValuesChange = async (changed: any, allValue: any) => {
        await onchange && onchange(allValue, changed)
    }
    useEffect(() => {
        form.setFieldsValue(initialValues)
    }, [form, initialValues])

    return (
        <Form
            name="dynamic_form_nest_item"
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            autoComplete="on"
            onValuesChange={handleFormValuesChange}
        >
            {children}
            {notNote ? <br></br> : <Col span={24}>
                <Form.Item label="" name="note">
                    <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                </Form.Item>
            </Col>}
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonCore>{type == 'add' ? 'Thêm mới' : 'Cập nhật'}</ButtonCore>
            </Row>
        </Form>
    );
};
