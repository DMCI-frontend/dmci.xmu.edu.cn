import axios from "axios";

export const postGeneDrug = data => {
  return axios.post("/api/chenrl/drug-gene", data);
};

// 已知有两个接口
// [GET] /api/user/get?id= 根据 id 获取用户的年级和班级
//   - 传入用户 id
//   - 返回 json body: { id, name, grade, class }
// [GET] /api/user/search?query= 根据查询内容返回符合条件的用户列表
//   - 传入字符串 query
//   - 返回 json body: [{ id, name }, ...]
// 要求
// 编写一个查询函数，根据传入字符串 query 来返回满足条件的用户的详情列表
// 即：返回 json body: [{ id, name, grade, class }, ...]
