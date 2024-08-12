
import { Col, Form, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifi from '../noti';
import { ButtonCore } from '../button/buttonCore';
import { addError, addSucc, updateError, updateSucc } from '../../../utils/textUnits';
import { addFormData, editFormRequest } from '../../../api/request';
import TextArea from 'antd/es/input/TextArea';
import UploadFile from '../../../api/uploadfile';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../stores';
import { fetchUserById } from '../../../stores/param';

export const FormSubmit = ({ type, initialValues, children, onchange, configUrl, notNote, file, ...props }: any) => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [url, setUrl] = useState()
    const dispatch = useDispatch<AppDispatch>()

    const onFinish = (values: any) => {
        let configValue = props.adult ? {
            ...initialValues,
            ...values,
            up_height: {
                up_height1: values.up_height1,
                up_height2: values.up_height3,
                up_height3: values.up_height3
            },
            dow_height: {
                dow_height3: values.dow_height3,
                dow_height2: values.dow_height2,
                dow_height1: values.dow_height1,
            },
            up_weight: {
                up_weight1: values.up_weight1,
                up_weight2: values.up_weight3,
                up_weight3: values.up_weight3
            },
            dow_weight: {
                dow_weight3: values.dow_weight3,
                dow_weight2: values.dow_weight2,
                dow_weight1: values.dow_weight1,
            },
            number_day: Number(values.age) + Number(values.month_age),
        } : {
            ...initialValues,
            ...values,
            image: url
        }

        if (type == "add") {
            addFormData(configUrl?.urlAdd, configValue).then((res: any) => {
                if (res?.status == 201) {
                    Notifi("succ", addSucc)
                    form.resetFields();
                    navigate(configUrl?.navigate)
                    dispatch(fetchUserById())
                } else {
                    // Notifi("error", addError)
                }
            })
        }
        else {
            const urlEdit = configUrl?.urlEdit + "/" + initialValues._id
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
    const handleFile = (file: any) => {
        setUrl(file)
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
            {file ? <Col span={8} >
                <UploadFile handleFile={handleFile} />
            </Col> : <br></br>}
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
