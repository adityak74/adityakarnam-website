import React, { Component } from "react";
import { Icon, Row, Col, Avatar, Divider, Timeline } from "antd";
import "./CoachingPage.css";
import coachingData from './coaching.json';
import { SubnodeOutlined, ScheduleOutlined } from '@ant-design/icons';
import androidClubImage from './android-club.png';
import aakashgangaaSpace from './aakashgangaa.png';
import eventzeImage from './eventze.png';
import heycoachImage from './hey-coach.png';

class HomePage extends Component {
  render() {
    return (
      <Col xl={24} style={{ marginTop: '-7vh' }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={14} lg={14} xl={14} offset={2} style={{ marginTop: '7vh', padding: 50 }}>
            <div className="landingPage">
              <h1>Journey</h1>
              <Timeline>
                {coachingData.journey.map((value, index) => {
                  return <Timeline.Item
                    key={index}
                    dot={<SubnodeOutlined />}
                    color={value.active ? "green" : "blue"}
                  >
                    {value.text}
                  </Timeline.Item>;
                })}
              </Timeline>
              <Divider orientation="left" style={{ paddingRight: 60 }}>
                <ScheduleOutlined style={{ paddingRight: 10 }}/>
                Story
              </Divider>
              <p>Skilled professional working for a promising fintech startup to break the boundaries of payments across the world. I have research as well as corporate experience with two published papers one accepted thesis and more than two years of professional software development experience. I contribute to open-source and have completed more than 50+ projects. Self-driven, astrophile, philomath. </p>
            </div>
          </Col>

          <Col style={{ background: 'rgb(127,127,127)', background: 'linear-gradient(180deg, rgba(127,127,127,1) 0%, rgba(18,18,18,1) 100%)', minHeight: '100vh' }} xs={24} sm={24} md={8} lg={8} xl={8}>
            <center style={{ marginTop: '7vh' }}>
              <img src={aakashgangaaSpace} width={400}  />
              <Divider />
              <img src={androidClubImage} width={200}  />
              <img src={eventzeImage} width={200}  />
              <Divider />
              <img src={heycoachImage} width={200}  />
            </center>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default HomePage;
