import React, { Fragment } from "react";
import { Row, List, Card, Col } from "antd";
import member from "../../config/member.config";

const Member = () => (
  <Fragment>
    <Row>
      <List
        grid={{
          gutter: 16,
          column: 4
        }}
        header={<h3>师资信息</h3>}
        dataSource={member.teacher}
        renderItem={item => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              cover={
                <img
                  src={require(`../../static/member/${item.img}`)}
                  alt={item.name}
                  style={{
                    maxWidth: "100%",
                    overflow: "auto",
                    maxHeight: "100%"
                  }}
                />
              }
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <p>{item.rank}</p>
                    <p>{item.email}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        )}
      />
    </Row>
    <Row>
      <List
        grid={{
          gutter: 16,
          column: 4
        }}
        header={<h3>在读人员</h3>}
        dataSource={member.student}
        renderItem={item => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              cover={
                <img
                  src={require(`../../static/member/${item.img}`)}
                  alt={item.name}
                  style={{
                    maxWidth: "100%",
                    overflow: "auto",
                    maxHeight: "100%"
                  }}
                />
              }
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <p>{item.rank}</p>
                    <p>{item.email}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        )}
      />
    </Row>
    <Row>
      <List
        grid={{
          gutter: 16,
          column: 4
        }}
        header={<h3>毕业同学</h3>}
        dataSource={member.graduate}
        renderItem={item => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              cover={
                <img
                  src={require(`../../static/member/${item.img}`)}
                  alt={item.name}
                  style={{
                    maxWidth: "100%",
                    overflow: "auto",
                    maxHeight: "100%"
                  }}
                />
              }
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <p>{item.rank}</p>
                    <p>{item.email}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        )}
      />
    </Row>
  </Fragment>
);
export default Member;
