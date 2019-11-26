var express = require('express');
var router = express.Router();

const tableData = [
  {
    id: 1,
    date: "深沉1",
    name: "深沉",
    province: "哈哈哈",
    startTime: [1564478257000, 1564478357000],
    endTime: [1564478267000, 1564478367000],
    zip: "21:00-22:00"
  },
  {
    id: 2,
    date: "深沉2",
    name: "深沉",
    province: "团队2",
    startTime: [1564478257000, 1564478357000],
    endTime: [1564478267000, 1564478367000],
    zip: "21:00-22:00"
  },
  {
    id: 3,
    date: "深沉3",
    name: "深沉",
    province: "团队2",
    startTime: [1564478257000, 1564478357000],
    endTime: [1564478267000, 1564478367000],
    zip: "21:00-22:00"
  },
  {
    id: 4,
    date: "深沉4",
    name: "深沉",
    province: "团队2",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 5,
    date: "深沉5",
    name: "深沉",
    province: "团队1",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 6,
    date: "深沉6",
    name: "深沉",
    province: "团队1",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 7,
    date: "深沉7",
    name: "深沉",
    province: "团队1",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 8,
    date: "深沉8",
    name: "深沉",
    province: "团队三",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 9,
    date: "深沉9",
    name: "深沉",
    province: "团队三",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 10,
    date: "深沉10",
    name: "深沉",
    province: "团队三",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 11,
    date: "深沉11",
    name: "深沉",
    province: "团队四",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 12,
    date: "深沉12",
    name: "深沉",
    province: "团队四",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  },
  {
    id: 13,
    date: "深沉13",
    name: "深沉",
    province: "团队四",
    startTime: 1564478457000,
    endTime: 1564478557000,
    zip: "21:00-22:00"
  }
]
// 数据格式
// {
//   date: "深沉",
//   name: "深沉",
//   province: "哈哈哈",
//   zip: "21:00-22:00"
// }
/* GET users listing. */
router.post('/data', function(req, res, next) {
  const { pageName, limit } = req.body;
  let data = pageSeting(tableData, pageName, limit);
  res.send({
    code: 0,
    msg: '请求成功',
    data: {
      data: data,
      total: tableData.length,
      allData: tableData
    }
  });
});

function pageSeting(data, pageName, limit) {
  if (limit >= data.length) {
    return data;
  }
  let arr = [];
  for (let i = (pageName - 1) * limit; i < (pageName * limit); i++) {
    if (data[i]) {
      arr.push(data[i]);
    }
  }
  return arr;
}

// 设置教务时间数据接口
const dataList = [
  {
    academicName: '教务1',
    logName: '华北',
    team: '华北一区',
    week1: {
      startTime: [1564478257000, 1564478357000],
      endTime: [1564478267000, 1564478367000]
    },
    week2: {
      startTime: 1564478257000,
      endTime: 1564478267000
    }
  },
  {
    academicName: '教务2',
    logName: '东北',
    team: '东北一区',
    week1: {
      startTime: [1564478257000, 1564478357000],
      endTime: [1564478267000, 1564478367000]
    },
    week2: {
      startTime: 1564478257000,
      endTime: 1564478267000
    }
  }
]

module.exports = router;
