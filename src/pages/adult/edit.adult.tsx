import { Card } from 'antd';
import styled from "styled-components"
import { configBanner } from '../../api/banner.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatusBoole } from '../../utils/convertData';
import { FormAdult } from './form.adult';
import { configAdult, configChild } from '../../api/comment.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditAdult() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const dataInfoNavigate: any = state?.data
  const initialValues = {
    ...dataInfoNavigate,
    ...dataInfoNavigate?.up_weight,
    ...dataInfoNavigate?.dow_weight,
    ...dataInfoNavigate?.up_height,
    ...dataInfoNavigate?.dow_height
  }
  console.log("fsdfs",initialValues);
  return (
    <AddFormStyle>
      <Card
        title="Sửa chỉ số"
        extra={
          < p onClick={() => navigate(configAdult.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
        }
      >
        <FormAdult initialValues={initialValues} />
      </Card>
    </AddFormStyle>
  )
}