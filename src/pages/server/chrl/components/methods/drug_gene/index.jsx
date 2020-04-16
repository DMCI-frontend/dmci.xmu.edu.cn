import React, { useState } from "react";
import { Col, Row, Form, Select, Button, message, Table, Spin } from "antd";
import { DrugList } from "../../../config/drug_list";
import "./style.scss";
import { ProteinList } from "../../../config/protein_list";
import { postGeneDrug } from "../../../service";

const { Option } = Select;
const { Column } = Table;
const initShowData = [];
const DrugGeneForm = ({ form }) => {
  const [drug, setDrug] = useState("");
  const [gene, setGene] = useState("");
  const [showData, setShowData] = useState(initShowData);
  const [showRes, setShowRes] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 4 }
  };
  const { getFieldDecorator } = form;
  const handleSubmit = () => {
    if (gene && drug) {
      const data = { drug: drug, gene: gene };
      setShowLoading(true);
      postGeneDrug(data)
        .then(res => {
          const tmpData = {
            drug: drug,
            gene: gene,
            interaction: res.data.outputs[0][0] > 0.5 ? 1 : 0,
            porobality: res.data.outputs[0][0]
          };
          setShowLoading(false);
          setShowRes(true);
          setShowData([tmpData]);
        })
        .catch(error => {
          console.error(error);
          setShowLoading(false);
          message.error("模型错误");
        });
    } else {
      message.warn("请确定俩个都输入！");
    }
  };
  return (
    <Form {...formItemLayout}>
      <Row>
        <Col>
          <Form.Item label="药品">
            {getFieldDecorator("drug", {
              rules: [{ required: true, message: "请选择药品" }]
            })(
              <Select
                className="drug-select"
                showSearch
                onSearch={value => {}}
                onChange={value => {
                  setDrug(value);
                }}
              >
                {DrugList.map(item => (
                  <Option key={item.index} value={item.value}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="基因">
            {getFieldDecorator("gene", {
              rules: [{ required: true, message: "请选择基因" }]
            })(
              <Select
                className="drug-select"
                showSearch
                onSearch={value => {}}
                onChange={value => {
                  setGene(value);
                }}
              >
                {ProteinList.map(item => (
                  <Option key={item.index} value={item.value}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={4}>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              查询
            </Button>
          </Form.Item>
        </Col>
      </Row>
      {showLoading ? <Spin /> : null}
      {showRes ? (
        <Row>
          <Table dataSource={showData}>
            <Column title="药品" dataIndex="drug" key="drug" />
            <Column title="基因" dataIndex="gene" key="gene" />
            <Column title="相关性" dataIndex="interaction" key="interaction" />
            <Column title="概率" dataIndex="porobality" key="porobality" />
          </Table>
        </Row>
      ) : null}
    </Form>
  );
};

const DrugGene = Form.create({ name: "drug_gene_method" })(DrugGeneForm);
export default DrugGene;
