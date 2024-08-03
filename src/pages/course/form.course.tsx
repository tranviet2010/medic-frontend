
import { Button, Col, Form, Input, Row, Select, Space } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import { configProduct, getChild } from "../../api/comment.api";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { getProductN } from "../../api/custom.api";

export const FormCourse: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    const [group, setGroup] = useState()
    const [dataChild, setDataChild] = useState()
    const [product, setProduct] = useState([])
    useEffect(() => {
        getChild().then((res) => {
            const dataConvert = res?.data?.data?.map((val: any) => ({ ...val, value: val.age, autoid: val?.age }))
            setDataChild(dataConvert)
        })
        getProductN().then((res) => {
            const dataConvert = res?.data?.data?.map((val: any) => ({ ...val, value: val.name, autoid: val?._id }))
            setProduct(dataConvert)
        })


    }, [initialValues])

    const getValue = (value: any) => {
        setGroup(value)
    }
    return (
        <FormSubmit
            initialValues={initialValue}
            configUrl={configProduct}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Tên liệu trình" name="name" label="Tên liệu trình" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" onChange={getValue} placeholder="Nhóm đối tượng tư vấn" name="group" label="Chọn nhóm đối tượng tư vấn" data={[
                        { autoid: "1", value: "Trẻ sơ sinh" },
                        { autoid: "2", value: "Trẻ từ 0-20 tuổi" },
                        { autoid: "3", value: "Người trưởng thành" }
                    ]} />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" name="male" label="Giới tính" data={[
                        { autoid: "0", value: "Nam" },
                        { autoid: "1", value: "Nữ" },

                    ]} />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" name="age" label="Lứa tuổi" data={group == 1 ? dataChild : []} />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="male" label="Tiêu chuẩn tương ứng" />
                </Col>

                <Col span={12}>
                    <Form.List name="products">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            marginBottom: 8,
                                        }}
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'product']}
                                            style={{width:"100%"}}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing first name',
                                                },
                                            ]}
                                        >
                                            <Select
                                                allowClear
                                                showSearch
                                                optionFilterProp='children'
                                            >
                                                {product?.map((val: any) => (
                                                    <Select.Option key={val?.autoid}>{val?.value}</Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'sl']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing last name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Số lượng lọ/ hộp" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'hsd']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing last name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Tháng sử dụng" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button style={{ width: "50%" }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Thêm thuốc
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>



            </Row>

        </FormSubmit>
    )
}

