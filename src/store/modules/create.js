export default {
  state: {
    messageType: '',
    messageTypes: [{
      title: '公告类通知',
      typeName: 'notice',
      tips: '接收人收到此类通知后，需要回复“确认收到”',
      tags: ['系统升级维护', '系统更新', '商户规范']
    }, {
      title: '报名类通知',
      typeName: 'apply',
      tips: '接收人收到此类通知后，需要回复“报名参加”或“不参加',
      tags: ['618大促', '满减活动', '下午茶满额配送', '限时抢购', '早餐预定促销', '夏日炎炎促销']
    }]
  },
  mutations: {
    selectMessageTag(state, params) {
      state.messageType = params.type;
    },
    addMessageTag(state, tag) {
      let index = tag.type === 'notice' ? 0 : 1;
      state.messageTypes[index].tags.push(tag.name);
    }
  }
};
