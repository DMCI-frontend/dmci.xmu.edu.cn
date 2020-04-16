import React from "react";
import { Radio } from "antd";

const MethodChoose = ({ method, changeMethod }) => {
  const onChange = e => {
    changeMethod(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={method}>
      <Radio value={1}>药品基因预测</Radio>
      <Radio value={2} disabled>
        文件接口
      </Radio>
    </Radio.Group>
  );
};
export default MethodChoose;
