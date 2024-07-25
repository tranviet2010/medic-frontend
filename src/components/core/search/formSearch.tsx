import { Card, Col, Form, Row } from "antd";
import BaseFormInput from "../input/formInput";
import { ButtonCore } from "../button/buttonCore";
import { useNavigate } from 'react-router-dom'

const FormSearch = ({ nameButtonModal, children, onSearch, notDate, notadd }: any) => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        onSearch(values)
    }
    return (

        <Card>
            <Form name="dynamic_form_nest_item" form={form} onFinish={onFinish} autoComplete="off" >
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
                    <Row gutter={16} justify="center">
                        {children}
                        {
                            !notDate ? <>
                                <Col span={4}>
                                    <BaseFormInput
                                        type="date"
                                        name="from_date"
                                        placeholder="Từ ngày"
                                    />
                                </Col>
                                <Col span={4}>
                                    <BaseFormInput
                                        type="date"
                                        name="to_date"
                                        placeholder="Đến ngày"
                                    />
                                </Col>
                            </> : ""
                        }
                        <Col span={12}>
                            <ButtonCore >Tìm kiếm</ButtonCore>
                            {!notadd ? <ButtonCore type="button"
                                onClick={() =>
                                    navigate('add', {
                                        state: {
                                            type: 'add',
                                        },
                                    })
                                }
                            >{`+ ${nameButtonModal || 'Thêm mới'}`}</ButtonCore> : ""}
                        </Col>
                    </Row>
                {/* </div> */}
            </Form>
        </Card>

    );
};

export default FormSearch;
