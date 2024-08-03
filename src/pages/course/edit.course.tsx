import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatusBoole } from '../../utils/convertData';
import { FormCourse } from './form.course';
import { configCourse } from '../../api/comment.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditCourse() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const dataInfoNavigate: any = state?.data
    const initialValues = {
        ...dataInfoNavigate,
        status: convertStatusBoole(dataInfoNavigate?.status),
    }
    return (
        <AddFormStyle>
            <Card
                title="Sửa Thông Tin Đối Tác"
                extra={
                    < p onClick={() => navigate(configCourse.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormCourse initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}