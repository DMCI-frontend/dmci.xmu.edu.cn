import React, { useEffect, useState } from "react";
import { getGpuStat } from "../service";
import { Col, Table, Row } from "antd";

const { Column } = Table;

const Gpu = () => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getGpuStat();
      setState(res.data);
      setIsLoading(true);
    })();
  }, []);
  return (
    <div>
      <Row>
        {isLoading
          ? state.map((item, index) => (
              <Col span={10} offset={1} key={index}>
                <Table dataSource={item.gpuStats}>
                  <Column title="型号" dataIndex="0" />
                  <Column title="占用率及温度" dataIndex="1" />
                  <Column title="内存使用" dataIndex="2" />
                  <Column title="进程相关" dataIndex="3" />
                </Table>
              </Col>
            ))
          : "加载中"}
      </Row>
    </div>
  );
};
export default Gpu;
