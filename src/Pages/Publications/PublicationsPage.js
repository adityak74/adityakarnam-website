import React, { Component } from "react";
import {
  Button,
  Carousel,
  Row,
  Col,
  Card,
  Layout,
} from "antd";
import "./PublicationsPage.css";
import erbgaMwaisImage from "./erbga-mwais.jpg";
import gradFairImage from './grad-fair.jpg';
import hopeCenterImage from './hope-center.jpg';
import mwaisPresentationImage from './mwais-presentation.jpg';
import oakRidgeImage from './oak-ridge.jpg';

const { Meta } = Card;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
  padding: 20,
  margin: 0,
};

const carouselCardImageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 480,
};

const captionStyle = {
  paddingTop: 5,
  color: 'white',
};

const carouselBodyStyle = {
  backgroundColor: 'gray',
};

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Carousel
          autoplay
          dots={false}
          style={{
            width: '100%',
            minHeight: '100vh'
          }}
        >
          <Layout>
            <Row style={{ marginTop: '-7vh' }}>
              <Col span={24} style={{
                width: '100%', 
                minHeight: '100vh', 
                backgroundColor: '#121212' 
              }}>
                <div className='bounding-box'>
                  <div className='bounding-box-gray'>
                    <Row style={{ minHeight: '100vh' }} >
                      <Col span={8} className='content-column-left'>
                        <Card
                          title="ERBGA ML"
                          bordered={false}
                          headStyle={{ fontSize: 36 }}
                          bodyStyle={{ fontSize: 24 }}
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: 600 }}>
                          <h4>Efficient Reduced-Bias Genetic Algorithm (ERBGA) for Generic Community Detection Objectives</h4>
                          <p></p>
                          <Row>
                            <Col span={8} className='social-icon-column'>
                              <Button
                                type="primary"
                                href="https://irl.umsl.edu/thesis/331/"
                              >
                              Thesis
                              </Button>
                            </Col>
                            <Col span={8} className='social-icon-column'>
                              <Button
                                type="primary"
                                href="https://aisel.aisnet.org/mwais2018/32/"
                              >
                                Print (Paper)
                              </Button>
                            </Col>
                            <Col span={8} className='social-icon-column'>
                              <Button
                                type="primary"
                                href="https://github.com/adityak74/ERBGA"
                              >
                                Code
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col span={12} className='content-column-left'>
                        <Card
                          hoverable
                          style={{ width: 800 }}
                          cover={<img alt="erbga-mwais" src={erbgaMwaisImage} />}
                        >
                          <Meta title="High Resolution Community Detection" description="" />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Layout>
          <Layout>
            <Row style={{ marginTop: '-7vh' }}>
              <Col span={24} style={{
                width: '100%', 
                minHeight: '100vh', 
                backgroundColor: '#121212' 
              }}>
                <div className='bounding-box'>
                  <div className='bounding-box-gray'>
                    <Row style={{ minHeight: '100vh' }} >
                      <Col span={16} className='content-column-left-carousel-publications'>
                        <Card title="Public Presentations" bodyStyle={carouselBodyStyle} bordered={false}>
                          <Card.Grid style={gridStyle}>
                            <img alt="erbga-mwais-presentaion" src={mwaisPresentationImage} style={carouselCardImageStyle} />
                            <p style={captionStyle}>MWAIS 2018 Presentation</p>
                          </Card.Grid>
                          <Card.Grid style={gridStyle}>
                            <img alt="grad-fair" src={gradFairImage} style={carouselCardImageStyle} />
                            <p style={captionStyle}>UMSL Graduate Fair</p>
                          </Card.Grid>
                          <Card.Grid style={gridStyle}>
                            <img alt="hope-center-presentaion" src={hopeCenterImage} style={carouselCardImageStyle} /> 
                            <p style={captionStyle}>Hope Center Retreat</p>
                          </Card.Grid>
                          <Card.Grid style={gridStyle}>
                            <img alt="oak-ridge" src={oakRidgeImage} style={carouselCardImageStyle} />
                            <p style={captionStyle}>Oak Ridge National Laboratory (Summit Supercomputer)</p>
                          </Card.Grid>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Layout>
        </Carousel>
      </Layout>
    );
  }
}
export default HomePage;
