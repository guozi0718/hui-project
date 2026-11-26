window.PrototypeSchema={
  "release": "v0.83",
  "menu": [
    {
      "k": "home",
      "t": "首页",
      "ic": "home",
      "id": "legacy.home"
    },
    {
      "t": "客户管理",
      "ic": "user",
      "c": [
        {
          "k": "customerManagement",
          "t": "客户管理",
          "id": "legacy.customerManagement"
        },
        {
          "k": "contractManagement",
          "t": "合同管理",
          "id": "legacy.contractManagement"
        },
        {
          "t": "开户管理",
          "c": [
            {
              "k": "regulatoryManagement",
              "t": "监管账号",
              "id": "legacy.regulatoryManagement"
            },
            {
              "k": "schoolManagement",
              "t": "学校账号",
              "id": "legacy.schoolManagement"
            }
          ],
          "id": "menu.开户管理"
        }
      ],
      "id": "menu.客户管理"
    },
    {
      "k": "simulatLogin",
      "t": "模拟登陆",
      "ic": "device",
      "id": "legacy.simulatLogin"
    },
    {
      "t": "智能校徽",
      "ic": "badge",
      "c": [
        {
          "k": "statisticsHandle",
          "t": "办理统计",
          "id": "legacy.statisticsHandle"
        },
        {
          "k": "transactionDetails",
          "t": "办理明细",
          "id": "legacy.transactionDetails"
        },
        {
          "k": "payOrder",
          "t": "支付单",
          "id": "legacy.payOrder"
        },
        {
          "k": "refundOrder",
          "t": "退款单",
          "id": "legacy.refundOrder"
        },
        {
          "k": "refundTransaction",
          "t": "退款流水",
          "id": "legacy.refundTransaction"
        },
        {
          "k": "invoiceManagement",
          "t": "发票管理",
          "id": "legacy.invoiceManagement"
        }
      ],
      "id": "menu.智能校徽"
    },
    {
      "t": "设备管理",
      "ic": "device",
      "c": [
        {
          "k": "schoolBadgeMgmt",
          "t": "校徽管理",
          "id": "legacy.schoolBadgeMgmt"
        },
        {
          "k": "attendanceEquipment",
          "t": "考勤设备",
          "id": "legacy.attendanceEquipment"
        }
      ],
      "id": "menu.设备管理"
    },
    {
      "k": "csList",
      "id": "customer-service.list",
      "t": "客服管理",
      "ic": "service"
    },
    {
      "id": "menu.feedback",
      "t": "用户反馈",
      "ic": "service",
      "c": [
        {
          "k": "userFeedback",
          "id": "feedback.replies",
          "t": "反馈回复"
        },
        {
          "k": "userDataQuery",
          "id": "feedback.user-data",
          "t": "用户数据查询"
        },
        {
          "k": "freqAskQuestionsConf",
          "id": "feedback.faqs",
          "t": "常见问题配置"
        }
      ]
    },
    {
      "t": "财务结算",
      "ic": "finance",
      "c": [
        {
          "k": "reconciliationMgmt",
          "t": "对账管理",
          "id": "legacy.reconciliationMgmt"
        }
      ],
      "id": "menu.财务结算"
    },
    {
      "t": "校务管理",
      "ic": "service",
      "c": [
        {
          "k": "familyNotice",
          "id": "family-notice",
          "t": "家校通知"
        }
      ],
      "id": "menu.school-affairs"
    },
    {
      "t": "系统设置",
      "ic": "setting",
      "c": [
        {
          "k": "personalCenter",
          "t": "个人中心",
          "id": "legacy.personalCenter"
        },
        {
          "k": "operationRoleMgmt",
          "t": "角色管理",
          "id": "legacy.operationRoleMgmt"
        },
        {
          "k": "operationUserMgmt",
          "t": "账号管理",
          "id": "legacy.operationUserMgmt"
        },
        {
          "k": "miniProgramShareConfig",
          "t": "小程序分享配置",
          "id": "legacy.miniProgramShareConfig"
        },
        {
          "k": "holidaysConfig",
          "t": "节假日配置",
          "id": "legacy.holidaysConfig"
        },
        {
          "k": "studentType",
          "t": "学生类型字典",
          "id": "legacy.studentType"
        },
        {
          "k": "carrierManagement",
          "t": "承运商管理",
          "id": "legacy.carrierManagement"
        },
        {
          "k": "operationLog",
          "t": "操作日志",
          "id": "legacy.operationLog"
        },
        {
          "k": "schoolDataSync",
          "t": "数据同步",
          "id": "legacy.schoolDataSync"
        }
      ],
      "id": "menu.系统设置"
    }
  ],
  "routes": {
    "customer-service.list": {
      "key": "csList",
      "title": "客服管理",
      "owner": "customer-service.list"
    },
    "customer-service.detail": {
      "key": "csList",
      "title": "客服详情",
      "owner": "customer-service.list",
      "required": [
        "id"
      ],
      "detail": "customer-service"
    },
    "feedback.replies": {
      "key": "userFeedback",
      "title": "反馈回复",
      "owner": "menu.feedback"
    },
    "feedback.detail": {
      "key": "userFeedback",
      "title": "反馈详情",
      "owner": "menu.feedback",
      "required": [
        "id"
      ],
      "detail": "feedback"
    },
    "feedback.user-data": {
      "key": "userDataQuery",
      "title": "用户数据查询",
      "owner": "menu.feedback"
    },
    "feedback.faqs": {
      "key": "freqAskQuestionsConf",
      "title": "常见问题配置",
      "owner": "menu.feedback"
    },
    "family-notice": {
      "key": "familyNotice",
      "title": "家校通知",
      "owner": "menu.school-affairs"
    }
  }
};
