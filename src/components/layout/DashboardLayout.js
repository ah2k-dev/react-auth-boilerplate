import { Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
const DashboardLayout = () => {
  return (
    <Row gutter={[16,16]}>
        <Col span={5}><Sidebar /></Col>
        <Col span={18}><Outlet/></Col>
    </Row>
  )
}

export default DashboardLayout