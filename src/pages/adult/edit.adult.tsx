import { Card } from 'antd';
import styled from "styled-components"
import { configBanner } from '../../api/banner.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatusBoole } from '../../utils/convertData';
import { FormAdult } from './form.adult';
import { configChild } from '../../api/comment.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditChild() {
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
        title="Sửa"
        extra={
          < p onClick={() => navigate(configChild.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
        }
      >
        <FormAdult initialValues={initialValues} />
      </Card>
    </AddFormStyle>
  )
}