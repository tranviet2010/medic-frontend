import React, { useCallback, useEffect, useState } from 'react';
import TableCore from '../../components/core/table';
import { Card, Col, Row, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getResult } from '../../api/comment.api';
import { BaseTable } from '../../components/core/table/tableCore';
import { ColumnAgent } from '../agent/column.agent';
import { getAgent, getCustom, getPartner } from '../../api/custom.api';
import { paginationShared } from '../../components/core/variable/variable';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const { Title, Text } = Typography;
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [dataAgent, setDataAgent] = useState([])
  const [dataPartner, setDataPartner] = useState([])
  const [dataCustom, setDataCustom] = useState([])
  const [pagination, setPagination] = useState(paginationShared)
  const parentStore = useSelector((state: any) => state.usersSlice.param.parent)
  const agentStore = useSelector((state: any) => state.usersSlice.param.agent)
  const idByEmail = useSelector((state: any) => state.usersSlice.param.getIdEmail)
  const [valueSearch, setValueSearch] = useState<any>()
  const role = localStorage.getItem('role')

  const fetchData = useCallback((pagination: any, params: any) => {
    const combinedParams = role == '1' ? {
      ...pagination,
      ...params,
      partner: idByEmail[0]?._id
    } : {
      ...pagination,
      ...params
    }

    getAgent(combinedParams).then((ress: any) => {
      setDataAgent(ress?.data?.data)
    })

    getPartner().then((res) => {
      setDataPartner(res?.data?.data)
    })

    getCustom().then((res: any) => {
      setDataCustom(res?.data?.data)
    })




  }, [])

  const dataGroup = [
    { text: "Tổng số phác đồ với nhóm thai nhi", sum: data?.filter((val: any) => (val.type_result == 'C'))?.length },
    { text: "Tổng số bệnh án với người trưởng thành", sum: data?.filter((val: any) => val.type_result == "L")?.length },
    { text: "Tổng số phác đồ nhóm từ 0-20", sum: data?.filter((val: any) => val.type_result == "T")?.length }
  ]

  const dataRowPartner = [
    { text: "Tổng số đối tác", sum: parentStore?.length },
    ...dataGroup,

  ]

  const dataRowAgent = [
    { text: "Tổng số đại lý", sum: agentStore?.length },
    ...dataGroup,
  ]

  const dataRowAdmin = [
    { text: "Tổng số đối tác", sum: parentStore?.length },
    { text: "Tổng số đại lý", sum: agentStore?.length },
    ...dataGroup,
  ]


  const dataRow = role == '0' ? dataRowAdmin : role == '1' ? dataRowPartner : dataRowAgent

  // const onSearch = (value: any) => {
  //     setValueSearch(value)
  //     fetchData(pagination, value)
  // }
  // const onChangePaniga = (e: any) => {
  //     setPagination(e)
  //     fetchData(e, valueSearch)
  // }


  useEffect(() => {
    fetchData(paginationShared, valueSearch)
    getResult().then((res) => {
      setData(res?.data?.data)
    })
  }, [])
  return (
    <>
      <Row gutter={[16, 16]}>
        {
          dataRow.map((val) => (
            <Col span={6}>
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row>
                    <Col>
                      <b>{val.text}</b>
                      <Title level={3}>
                        {val.sum}
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))
        }

        <Col span={6}>
          <Card bordered={false} className="criclebox " onClick={() => navigate('/form/child')} style={{ cursor: "pointer" }}>
            <div className="number">
              <Row justify="space-between" align="middle">
                <Col>
                  <b>
                    Thêm phác đồ nhóm thai nhi
                  </b>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <PlusOutlined style={{ fontSize: '24px' }} />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} className="criclebox " onClick={() => navigate('/form/adult')} style={{ cursor: "pointer" }}>
            <div className="number">
              <Row justify="space-between" align="middle">
                <Col>
                  <b>
                    Thêm phác đồ nhóm từ 0-20 tuổi
                  </b>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <PlusOutlined style={{ fontSize: '24px' }} />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} className="criclebox " onClick={() => navigate('/form/mature')} style={{ cursor: "pointer" }}>
            <div className="number">
              <Row justify="space-between" align="middle">
                <Col>
                  <b>
                    Thêm phác đồ nhóm trưởng thành
                  </b>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <PlusOutlined style={{ fontSize: '24px' }} />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col>
          <br></br>
          {/* <b>{role == '1' ? "Danh sách 10 đại lý gần nhất" : "Danh sách 10 khách hàng gần nhất"}</b> */}
          <b>Danh sách 10 đại lý gần nhất</b>
          <BaseTable
            columType={ColumnAgent(parentStore)}
            // dataSource={role == '1' ? dataAgent : dataCustom}
            dataSource={dataAgent}
            user
            notAction
          // pagination={pagination}
          // onChangePaniga={onChangePaniga}
          />
        </Col>
      </Row>

    </>
  );
};

export default DashBoard;
