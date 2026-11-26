window.AgentPageRegistry={
  "schemaVersion": 1,
  "endpoint": "agent",
  "release": "v0.79",
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
      "kind": "embedded",
      "url": "notice/index.html",
      "parameters": {
        "role": "agent",
        "school": "s1",
        "embedded": "1"
      },
      "owner": "代理商 Web 家校通知",
      "readiness": "zxh-content-v1"
    },
    "cs": {
      "title": "客服管理",
      "kind": "native",
      "module": "customer",
      "owner": "代理商 Web 客服管理",
      "readiness": "zxh-content-v1"
    },
    "school-feedback": {
      "title": "学校反馈",
      "kind": "native",
      "module": "feedback",
      "owner": "代理商 Web 用户反馈",
      "readiness": "zxh-content-v1"
    },
    "agent-feedback": {
      "title": "代理商反馈",
      "kind": "native",
      "module": "feedback",
      "owner": "代理商 Web 用户反馈",
      "readiness": "zxh-content-v1"
    },
    "badge-style": {
      "title": "校徽款式",
      "kind": "unconnected"
    },
    "handle-stats": {
      "title": "办理统计",
      "kind": "unconnected"
    },
    "handle-list": {
      "title": "办理明细",
      "kind": "unconnected"
    },
    "refunds": {
      "title": "退款管理",
      "kind": "unconnected"
    },
    "withdrawals": {
      "title": "提现管理",
      "kind": "unconnected"
    },
    "op-log": {
      "title": "操作日志",
      "kind": "legacy",
      "owner": "代理商 Web 主基线",
      "readiness": "zxh-content-v1"
    }
  },
  "firstSecondary": "family-notice",
  "globalStyles": {
    "dialogLayout": {
      "css": "assets/dialog-layout.css",
      "rule": "标题和底部操作行固定，只有正文滚动"
    }
  },
  "integrationPolicy": {
    "target": "全部已接入菜单使用同一 UnifiedPages 登记、UnifiedShell 加载器及页签生命周期",
    "formsException": "新增/编辑类不强制同一业务版式",
    "tabRules": "沿用已确认 NAV-01—05",
    "migrationStatus": "家校通知、客服管理、学校反馈、代理商反馈已完成统一加载与真实浏览器核验；未接入页面维持明确状态"
  },
  "source": "T-20261125-01-代理商菜单功能版本整合",
  "sourceHash": "BFE9A7D32D4F6EE66ED64BE3AC82D2AC3C0EE6DFC5DF03B7C14587D5C7F5BF60",
  "updatedAt": "2026-11-25"
};
