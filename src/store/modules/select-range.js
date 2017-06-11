export default {
  state: {
    classList: {
      status: false,
      data: [{
        className: '大一班',
        status: false,
        childres: [{
          name: '陈晓妈妈',
          head: '',
          status: false
        }, {
          name: '苏小宝妈妈',
          head: '',
          status: false
        }, {
          name: '李晓强妈妈',
          head: '',
          status: false
        }]
      }, {
        className: '大二班',
        status: false,
        childres: [{
          name: '陈晓妈妈',
          head: '',
          status: false
        }, {
          name: '苏小宝妈妈',
          head: '',
          status: false
        }, {
          name: '李晓强妈妈',
          head: '',
          status: false
        }]
      }, {
        className: '大三班',
        status: false,
        childres: [{
          name: '陈晓妈妈',
          head: '',
          status: false
        }, {
          name: '苏小宝妈妈',
          head: '',
          status: false
        }, {
          name: '李晓强妈妈',
          head: '',
          status: false
        }]
      }]
    }
  },
  getters: {
    selectedList: (state) => { // 已选中的参加成员
      let selectedList = [];
      state.classList.data.forEach((group) => {
        group.childres.forEach((remember) => {
          if (remember.status) {
            selectedList.push(remember);
          }
        });
      });
      return selectedList;
    },
    rememberList: (state) => { // 所有的参加成员
      let rememberList = [];
      state.classList.data.forEach((group) => {
        group.childres.forEach((remember) => {
          rememberList.push(remember);
        });
      });
      return rememberList;
    }
  },
  mutations: {
    setStatus(state, params) {
      params.item.status = params.status;
    },
    toggleGroupSelect(state, params) {
      let childreStatus = !params.group.status;
      params.group.childres.forEach((remeber) => {
        remeber.status = childreStatus;
      });
    },
    toggleRememberSelect(state, params) {
      params.remember.status = !params.remember.status;
    },
    toggleSelectAll(state, params) {
      let childreStatus = !state.classList.status;
      state.classList.data.forEach((group) => {
        group.childres.forEach((remember) => {
          remember.status = childreStatus;
        });
      });
    }
  }
};
