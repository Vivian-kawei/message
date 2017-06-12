<template>
	<div class="select-range">
    <header class="header">
      <router-link to="/message/create" tag='i' class="icon icon-left"></router-link>
      <span class="title">通知详情</span>
    </header>
    <div class="recipient">
      <i class="icon"></i>
      <span class="name">深圳区商铺</span>
    </div>
    <div class="check-all">
      <i :class="classListClass()" @click="toggleSelectAll"><span></span></i>
      <span class="item">全选</span>
    </div>
    <div class="user-list">
      <list-recipient></list-recipient>
    </div>
    <div class="user"></div>
    <footer class="footer">
      <div class="select">已选择：{{selectedList.length}}人</div>
      <router-link to="/message/create" tag='button' class="bt-next">下一步</router-link>
    </footer>
	</div>
</template>

<script>
import ListRecipient from 'components/list-recipient/list-recipient';
export default {
  name: 'select-range',
  computed: {
    classList() {
      return this.$store.state.selectRange.classList;
    },
    selectedList() {
      return this.$store.getters.selectedList;
    }
  },
  methods: {
    classListClass() {
      let isSelectAll = true;
      this.classList.data.forEach((group) => {
        if (!group.status) {
          isSelectAll = false;
        }
      });

      this.$store.commit('setStatus', { item: this.classList, status: isSelectAll });

      return {
        icon: true,
        active: isSelectAll
      };
    },
    toggleSelectAll() {
      this.$store.commit('toggleSelectAll');
    }
  },
  components: {
    [ListRecipient.name]: ListRecipient
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.select-range {
  padding-bottom: rem(224px);
  .header {
    position: relative;
    width: 100%;
    height: rem(88px);
    line-height: rem(88px);
    font-size: rem(34px);
    text-align: center;
    background: #fff;
    .icon {
      display: block;
      position: absolute;
      top: 0;
      width: rem(88px);
      height: rem(88px);
      line-height: rem(88px);
      cursor: pointer;
    }
    .icon-left {
      left: 0;
      @include background('back', rem(16.8px) auto, center);
    }
  }
  .recipient {
    position: relative;
    padding-left: rem(110px);
    height: rem(100px);
    line-height: rem(100px);
    border-top: rem(2px) solid #E2E3E5;
    font-size: rem(32px);
    background: #fff;
    .icon {
      display: block;
      position: absolute;
      top: rem(18px);
      left: rem(30px);
      height: rem(64px);
      width: rem(64px);
      line-height: rem(100px);
      border-radius: rem(6px);
      @include background('home', rem(29px) auto, center, #F69D44);
    }
  }
  .check-all {
    position: relative;
    margin-top: rem(24px);
    padding-left: rem(100px);
    height: rem(100px);
    line-height: rem(100px);
    font-size: rem(32px);
    background: #fff;
    .icon {
      position: absolute;
      top: 0;
      left: 0;
      padding: rem(30px);
      &.active {
        @include background('select', rem(40px) auto, center);
        span {
          opacity: 0;
        }
      }
      span {
        width: rem(40px);
        height: rem(40px);
        display: block;
        border-radius: 50%;
        border: rem(1.5px) solid #E2E3E5 
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: rem(200px);
    opacity: 0.9;
    background: #fff;
    border-top: rem(2px) solid  #E5E6E8;
    .select {
      margin: rem(22px) 0 rem(22px) rem(24px);
      font-size: rem(32px);
    }
    .bt-next {
      width: 96%;
      height: rem(88px);
      margin: 0 2%;
      border: 0;
      border-radius: rem(8px);
      background: #FDDD33;
      font-size: rem(32px);
    }
  }
}
</style>
