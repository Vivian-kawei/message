export default {
  state: {
    classList: {
      status: false,
      data: [{
        className: '南山区',
        status: false,
        childres: [{
          name: '陈记三及第（科技园店）',
          head: '',
          status: false
        }, {
          name: '贡茶',
          head: '',
          status: false
        }, {
          name: '一点点',
          head: '',
          status: false
        }]
      }, {
        className: '福田区',
        status: false,
        childres: [{
          name: '大家乐',
          head: '',
          status: false
        }, {
          name: 'KFC',
          head: '',
          status: false
        }, {
          name: '麦当劳',
          head: '',
          status: false
        }]
      }, {
        className: '罗湖区',
        status: false,
        childres: [{
          name: '必胜客',
          head: '',
          status: false
        }, {
          name: '海记',
          head: '',
          status: false
        }, {
          name: 'CoCo',
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
