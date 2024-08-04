import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configCourse } from '../../api/comment.api';
import { FormCourse } from './form.course';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddCourse() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới liệu trình"
                extra={
                    < p onClick={() => navigate(configCourse.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormCourse type={state.type} />
            </Card>
        </AddFormStyle>
    )
}