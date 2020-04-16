import React from "react";
import { Row, Col, List } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import Gpu from "./gpu/index";
import Chrl from "./chrl/index";

const ServerPage = () => {
  const listData = [
    { text: "服务器GPU实时状态", path: "/server/gpu" },
    { text: "陈若兰的药物靶点预测服务", path: "/server/chrl" }
  ];
  return (
    <div>
      <Row>
        <Col span={6}>
          <h3>目前提供的服务</h3>
          <List
            bordered
            dataSource={listData}
            renderItem={item => (
              <List.Item>
                <Link to={item.path}>{item.text}</Link>
              </List.Item>
            )}
          />
        </Col>
        <Col span={18}>
          <Switch>
            <Route path="/server/gpu" component={Gpu} />
            <Route path="/server/chrl" component={Chrl} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default ServerPage;
