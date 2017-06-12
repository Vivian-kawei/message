<template>
  <div class="details">
    <header class="header">
      <router-link to="/message" tag='i' class="icon icon-left"></router-link>
      <span class="title">通知详情</span>
      <span class="share">分享</span>
    </header>
    <div class="message">
      <h1 class="title">促销活动报名</h1>
      <div class="additional">618大促 管理员1 6月10日 17:00</div>
      <div class="content">亲爱的店长：<br/>　　我们将在6月18号进行618大促活动。此活动分将由满减活动，送饮料，五折食品三种形式进行。</div>
      <img class="upload-img" src="./images/2.jpg"></img>
    </div>
    <div class="action action-1" style="display:none">
      <i class="icon"></i>
      <span>举报</span>
    </div>
    <div class="action action-2">
      <i class="icon"></i>
      <span>删除</span>
    </div>
    <div class="btn-wrapper">
      <div class="button-1" style="display:none">
        <button class="bt bt-reject">不参加</button>
        <button class="bt bt-join">参加</button>
      </div>
      <router-link to="/message/affirm/unconfirmed-list" tag='button' class="button-2" >查看确认详情</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details'
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.details {
  position: relative;
  min-height: 100%;
  padding-bottom: rem(136px);
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
      left: 0;
      width: rem(88px);
      height: rem(88px);
      line-height: rem(88px);
      cursor: pointer;
      @include background('back', rem(16.8px) auto, center);
    }
    .share {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: rem(120px);
      height: rem(88px);
      line-height: rem(88px);
      cursor: pointer;
      font-size: rem(34px);

    }
  }
  .message {
    position: relative;
    margin-top: rem(26px);
    padding: rem(32px) rem(30px) rem(33px) rem(30px);
    background: #fff;
    .title {
      
      font-size: rem(32px);
      font-weight: 600;
      text-align: center;
    }
    .additional {
      margin-top: rem(2px);
      font-size: rem(28px);
      text-align: center;
      color: #B4B5B6;
      line-height: rem(40px);
    }
    .content {
      margin-top: rem(32px);
      font-size: rem(32px);
      line-height: rem(48px);
      color: #333333;
    }
    .upload-img {
      width: 100%;
      margin-top: rem(40px);
    }
  }
  .action {
    margin: rem(36px) 0;
    font-size: rem(28px);
    color: #999999;
    text-align: right;
    padding: 0 rem(30px);
    .icon {
      display: inline-block;
      width: rem(32px);
      height: rem(32px);
      line-height: rem(32px);
      vertical-align: bottom;
    }
    &.action-1 {
      .icon {
        @include background('report', rem(32px) auto, center);
      }
    }
    &.action-2 {
      .icon {
        @include background('delete', rem(32px) auto, center);
      }
    }
  }
  .btn-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: rem(24px);
    text-align: center;
    .button-1 {
      .bt {
        display: inline-block;
        width: 48%;
        height: rem(88px);
        border-radius: rem(8px);
        font-size: rem(32px);
      }
      .bt-reject {
        margin-right: 2%;
        border: rem(2px) solid  #CDCDCD;
        background: #fff;
      }
      .bt-join {
        border: 0;
        background: #FDDD33;
      }
    }
    .button-2 {
      width: 100%;
      height: rem(88px);
      border: 0;
      border-radius: rem(8px);
      font-size: rem(32px);
      background: #FDDD33;
    }
  }
  
  
}
</style>
