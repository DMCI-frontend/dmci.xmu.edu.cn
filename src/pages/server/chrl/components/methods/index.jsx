import React from "react";
import DrugGene from "./drug_gene";

const Methods = ({ method }) => {
  return <>{method === 1 ? <DrugGene /> : null}</>;
};

export default Methods;
