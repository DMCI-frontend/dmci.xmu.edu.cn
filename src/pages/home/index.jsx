import React, { Fragment } from "react";
import { Card, Carousel, Col, List, Row } from "antd";
import carousel from "../../config/carousel.config";
import news from "../../config/news.config";
import research from "../../config/research.config";
import project from "../../config/project.config";

const Home = () => (
  <Fragment>
    <Row
      style={{
        width: "100%",
        height: "50%",
        margin: "5px 5px",
        overflow: "auto"
      }}
    >
      <Carousel autoplay>
        {carousel.map((item, index) => (
          <img
            src={require(`../../static/Carousel/${item.src}`)}
            key={index}
            alt={item.alt}
            style={{
              maxHeight: "100%",
              maxWidth: "100%"
            }}
          />
        ))}
      </Carousel>
    </Row>
    <Row
      type="flex"
      justify="space-between"
      align="top"
      style={{ padding: "5px" }}
    >
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="组内动态">
          <List
            header={false}
            footer={false}
            dataSource={news}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta title={item.title} />
                <span style={{ textAlign: "right" }}> {item.date}</span>
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="科研进展">
          <List
            header={false}
            footer={false}
            dataSource={research}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta title={item.title} />
                <span style={{ textAlign: "right" }}> {item.date}</span>
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="项目动态">
          <List
            header={false}
            footer={false}
            dataSource={project}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta title={item.title} />
                <span style={{ textAlign: "right" }}> {item.date}</span>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default Home;
