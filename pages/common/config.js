var TYPE = {
  FAIL: 0,
  WAIT: 1,
  PASS: 2,
  CHECKING: 3,
  BACK: 4
};

function status() {
  return [{
    type: TYPE.FAIL,
    name: "失败",
    color: "#FA8072"
  }, {
    type: TYPE.PASS,
    name: "通过",
    color: "#93E06D"
  }, {
    type: TYPE.WAIT,
    name: "待审",
    color: "#F3A633"
  }, {
    type: TYPE.CHECKING,
    name: "审批中",
    color: "#F3A633"
  }, {
    type: TYPE.BACK,
    name: "撤回",
    color: "#777777"
  }]
}

function getDataByStatus(status) {
  let list = this.status();
  let param = list.filter((x) => {
    return x.type == status
  })
  if (!param)
    return list[0];

  return param[0];
}

module.exports = {
  status: status,
  getDataByStatus: getDataByStatus
}