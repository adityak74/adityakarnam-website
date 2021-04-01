import React, { Component } from "react";
import "./HomePage.css";
import {
  Button,
  Row,
  Col,
  Card,
  Layout,
} from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GithubOutlined,
  MediumOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Row style={{ marginTop: '-7vh' }}>
          <Col span={24} style={{
            width: '100%', 
            minHeight: '100vh', 
            backgroundColor: '#121212' 
          }}>
            <div className='bounding-box-homepage'>
              <div className='bounding-box-gray-homepage'>
                <Row style={{ minHeight: '100vh' }} >
                  <Col span={10} className='content-column-left'>
                    <Card
                      title="Aditya Karnam"
                      bordered={false}
                      headStyle={{ fontSize: 36 }}
                      bodyStyle={{ fontSize: 24 }}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: 600 }}>
                      <h4>Full Stack Developer | Entrepreneur |  Coach</h4>
                      <p>"We are nothing but <i>space</i> dust trying to find its way back to the stars" -David Jones.</p>
                      <Row>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://www.instagram.com/aditya_karnam/"
                            icon={<InstagramOutlined />}
                          />
                        </Col>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://www.facebook.com/adityakarnam.g/"
                            icon={<FacebookOutlined />}
                          />
                        </Col>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://github.com/adityak74"
                            icon={<GithubOutlined />}
                          />
                        </Col>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://medium.com/@adityakarnam"
                            icon={<MediumOutlined />}
                          />
                        </Col>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://twitter.com/aditya_karnam"
                            icon={<TwitterOutlined />}
                          />
                        </Col>
                        <Col span={4} className='social-icon-column'>
                          <Button
                            type="primary"
                            shape="circle"
                            href="https://www.linkedin.com/in/adityakarnamgrao/"
                            icon={<LinkedinOutlined />}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col span={14} className='content-column-right'>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}
export default HomePage;
