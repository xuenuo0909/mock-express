var express = require('express');
var router = express.Router();

// 数据效果
// {
//   type: 11,       // 11: 个人-今日榜单, 12: 个人-阶段竞赛榜单, 13: 个人-月竞赛榜单, 21: 团队-今日榜单, 22: 团队-阶段竞赛榜单, 23: 团队-月竞赛榜单
//   name: "个人业绩榜单-今日榜单",            // 屏幕
//   topLimit: 20,                       // Top值
//   isShow: true,                        // 显示状态 true: 显示，false: 不显示
//   // (if type === 12 || type === 22) 阶段竞赛榜单时才返以下字段
//   startTime: 1561910400000,           // 阶段竞赛榜单开始时间（单位：毫秒）
//   endTime: 1564588799999,
// } 

// 数据大屏获取规划师数据大屏配置信息
const planners = [
  {
    type: 11,
    name: "个人业绩榜单-今日榜单",
    topLimit: 20,
    isShow: true,
    startTime: 1561910400000,
    endTime: 0
  },
  {
    type: 12,
    name: "个人-阶段竞赛榜单",
    topLimit: 20,
    isShow: true,
    startTime: 0,
    endTime: 0
  },
  {
    type: 13,
    name: "个人-月竞赛榜单",
    topLimit: 20,
    isShow: true,
    startTime: 1561910400000,
    endTime: 1564588723456
  },
  {
    type: 21,
    name: "团队-今日榜单",
    topLimit: 20,
    isShow: true,
    startTime: 1524910400000,
    endTime: 1561910400000
  },
  {
    type: 22,
    name: "团队-阶段竞赛榜单",
    topLimit: 20,
    isShow: true,
    startTime: 1512310400000,
    endTime: 1555688799999
  },
  {
    type: 23,
    name: "团队-月竞赛榜单",
    topLimit: 20,
    isShow: true,
    startTime: 1512310434512,
    endTime: 1564588756789
  }
]

// 规划师数据大屏配置信息接口
router.get('/planners/configs/planner-info', function(req, res, next) {
  setTimeout(() => {res.send({code: 200,msg: '获取成功',data: planners});}, 3500);
  // res.send({code: 0,msg: '获取成功',data: planners});
});

// 修改规划师数据大屏配置信息
router.put('/planners/configs/planner-info', function(req, res, next) {
  const {type, topLimit, isShow, startTime, endTime} = req.body;
  if (type) {
    planners = planners.map(item => {
      if (item.type === Number(type)) {
        item.topLimit = topLimit;
        item.isShow = isShow;
        item.startTime = startTime;
        item.endTime = endTime;
        res.send({
          code: 0,      
          msg: '修改成功',
          data: null
        });
      }
      return item;
    });
  } else {
    res.send({
      code: 1,      
      msg: '修改错误',
      data: null
    });
  }
});

// 上传规划师数据图片信息
router.post('/planners/configs/planner-imgs', function(req, res, next) {
  // const {staff_id, img} = req.body;
  res.send({
    code: 0,
    msg: '上传成功',
    data: null
  });
  // if (staff_id && img) {
    
  // } else {
  //   res.send({
  //     code: 1,
  //     msg: '请检查参数',
  //     data: null
  //   });
  // }
});
module.exports = router;
