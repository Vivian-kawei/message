<template>
  <div class="affirm">
    <header class="header">
      <router-link to="/message" tag='i' class="icon icon-left"></router-link>
      <span class="title">通知详情</span>
    </header>
    <div class="nav nav-notice" style="display:none">
      <div class="unconfirmed">未确认(4人)</div>
      <div class="confirmed">已确认(4人)</div>
    </div>
    <div class="nav nav-apply">
      <div class="not-join">未报名(4人)</div>
      <div class="join">已报名(4人)</div>
      <div class="reject">不参加(4人)</div>
    </div>
    <div class="un-content">
      <div class="user-list">
        <div class="user-item">
          <img class="user-img" src="./images/1.jpg"/>
          <span class="name">陈记三及第（科技园店）</span>
        </div>
      </div>
      <button class="bt-remind">提醒他们</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'affirm'
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.affirm {
  height: 100%;
  .header {
    position: relative;
    width: 100%;
    height: rem(88px);
    line-height: rem(88px);
    font-size: rem(34px);
    text-align: center;
    background: #fff;
    border: rem(2px) solid #E2E3E5;
    .icon {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: rem(88px);
      height: rem(88px);
      line-height: rem(88px);
      cursor: pointer;
      @include background('back', rem(16.8px) auto, center);
    }
  }
  .nav {
    height: rem(92px);
    line-height: rem(92px);
    background: #fff;
    font-size: rem(32px);
  }
  .nav-notice {
    text-align: center;
    .unconfirmed {
      display: inline-block;
      margin: 0 14%;
      width: 22%;
      border-bottom: rem(4px) solid #FDDD33;
    }
    .confirmed {
      display: inline-block;
      width: 14%;
      margin: 0 22%;
      color: #B4B5B6;
    }
  }
  .nav-apply {
    display: flex;
    text-align: center;
    .not-join {
      display: inline-block;
      margin: 0 7%;
      width: 19.3%;
      border-bottom: rem(4px) solid #FDDD33;
    }
    .join {
      display: inline-block;
      margin: 0 7%;
      width: 19.3%;
      color: #B4B5B6;
    }
    .reject {
      display: inline-block;
      margin: 0 7%;
      width: 19.3%;
      color: #B4B5B6;
    }
  }
  .un-content {
    margin-top: rem(24px);
    .user-list {
      background: #fff;
      .user-item {
        position: relative;
        padding-left: rem(120px);
        height: rem(100px);
        line-height: rem(100px);
        font-size: rem(32px);
        .user-img {
          position: absolute;
          left: rem(30px);
          top: rem(18px);
          width: rem(64px);
          height: rem(64px);
        }
        .name {
          display: block;
          height: rem(100px);
          line-height: rem(100px);
          border-bottom: rem(2px) solid #E2E3E5;
        }
      }
    }
    .bt-remind {
      margin: rem(64px) 2%;
      width: 96%;
      height: rem(88px);
      font-size: rem(32px);
      border: 0;
      border-radius: rem(8px);
      background: #FDDD33;
    }
  }
}
</style>
