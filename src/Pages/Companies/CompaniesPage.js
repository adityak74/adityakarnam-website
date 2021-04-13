import React, { Component } from "react";
import { Row, Col } from "antd";
import aakashgangaaLogo from './aakashgangaa-space.png';
import kmdLogo from './kmd.png';

class CompaniesPage extends Component {
  render() {
    return (
      <Col xl={24} style={{ marginTop: '-7vh' }}>
        <Row justify="center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '7vh', padding: 50 }}>
            <div className="landingPage">
              <center style={{ marginTop: '7vh' }}>
                <a href="https://aakashgangaa.space/" target='_blank'>
                  <img src={aakashgangaaLogo} width={475} />
                  <h2 style={{ padding: 10 }}>Aakashgangaa Space</h2>
                </a>
              </center>
            </div>
          </Col>
          <Col style={{ background: 'rgb(127,127,127)', background: 'linear-gradient(180deg, rgba(127,127,127,1) 0%, rgba(18,18,18,1) 100%)', marginTop: '7vh', minHeight: '100vh', padding: 50 }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="landingPage">
              <center style={{ marginTop: '7vh' }}>
                <a href="https://knockmydoors.in/" target='_blank'>
                  <img src={kmdLogo} width={500} />
                  <h2 style={{ padding: 10, color: "white" }}>Knockmydoors</h2>
                </a>
              </center>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default CompaniesPage;
