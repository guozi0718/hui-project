window.UnifiedPages={
  "version": 1,
  "end": "agent",
  "name": "代理商后台",
  "menu": [
    {
      "id": "menu.school",
      "t": "校务管理",
      "ic": "school",
      "c": [
        {
          "id": "family-notice",
          "t": "家校通知",
          "route": "family-notice"
        }
      ]
    },
    {
      "id": "cs",
      "t": "客服管理",
      "ic": "settings",
      "route": "cs"
    },
    {
      "id": "menu.user-feedback",
      "t": "用户反馈",
      "ic": "feedback",
      "c": [
        {
          "id": "school-feedback",
          "t": "学校反馈",
          "route": "school-feedback"
        },
        {
          "id": "agent-feedback",
          "t": "代理商反馈",
          "route": "agent-feedback"
        }
      ]
    },
    {
      "id": "menu.badge",
      "t": "智能校徽",
      "ic": "badge",
      "c": [
        {
          "id": "badge-style",
          "t": "校徽款式"
        },
        {
          "id": "handle-stats",
          "t": "办理统计"
        },
        {
          "id": "handle-list",
          "t": "办理明细"
        },
        {
          "id": "refunds",
          "t": "退款管理"
        }
      ]
    },
    {
      "id": "menu.money",
      "t": "资金结算",
      "ic": "money",
      "c": [
        {
          "id": "withdrawals",
          "t": "提现管理"
        }
      ]
    },
    {
      "id": "menu.system",
      "t": "系统管理",
      "ic": "settings",
      "c": [
        {
          "id": "op-log",
          "t": "操作日志",
          "route": "op-log"
        }
      ]
    }
  ],
  "pages": {
    "family-notice": {
      "title": "家校通知",
      "owner": "代理商 Web 家校通知",
      "url": "notice/index.html",
      "self": false,
      "parameters": {
        "role": "agent",
        "school": "s1",
        "embedded": "1"
      },
      "readiness": "zxh-content-v1"
    },
    "cs": {
      "title": "客服管理",
      "owner": "代理商 Web 客服管理",
      "url": "index.html",
      "self": true,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "school-feedback": {
      "title": "学校反馈",
      "owner": "代理商 Web 用户反馈",
      "url": "index.html",
      "self": true,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "agent-feedback": {
      "title": "代理商反馈",
      "owner": "代理商 Web 用户反馈",
      "url": "index.html",
      "self": true,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "badge-style": {
      "title": "校徽款式",
      "owner": "既有功能",
      "url": null,
      "self": false,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "handle-stats": {
      "title": "办理统计",
      "owner": "既有功能",
      "url": null,
      "self": false,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "handle-list": {
      "title": "办理明细",
      "owner": "既有功能",
      "url": null,
      "self": false,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "refunds": {
      "title": "退款管理",
      "owner": "既有功能",
      "url": null,
      "self": false,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "withdrawals": {
      "title": "提现管理",
      "owner": "既有功能",
      "url": null,
      "self": false,
      "parameters": {},
      "readiness": "zxh-content-v1"
    },
    "op-log": {
      "title": "操作日志",
      "owner": "代理商 Web 主基线",
      "url": "index.html",
      "self": true,
      "parameters": {},
      "readiness": "zxh-content-v1"
    }
  },
  "firstSecondary": "family-notice"
};
