import React, { useState } from "react";
import { Row } from "antd";
import MethodChoose from "./components/method_choose/index";
import Methods from "./components/methods/index";

const Chrl = () => {
  const [method, setMethod] = useState(1);
  return (
    <>
      <Row>药物靶点预测</Row>
      <Row>
        <MethodChoose method={method} changeMethod={setMethod} />
      </Row>
      <Row>
        <Methods method={method} />
      </Row>
    </>
  );
};

export default Chrl;
