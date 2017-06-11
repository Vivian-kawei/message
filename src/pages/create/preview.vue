<template>
  <div class="preview">
    <header class="header">
      <router-link to="/message/create" tag='i' class="icon icon-left"></router-link>
      <span class="title">预览</span>
    </header>
    <div class="message">
      <h1 class="title">活动通知</h1>
      <div class="content">亲爱的店长:我们将在6月18号进行618大促活动。此活动分将由满减活动，送饮料，五折食品三种形式进行。</div>
      <img class="upload-img" src="./images/2.jpg"></img>
    </div>
    <button class="bt-issue">发布</button>    
  </div>
</template>

<script>
export default {
  name: 'preview'
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.preview {
  height: 100%;
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
  .message {
    position: relative;
    margin-top: rem(26px);
    padding: rem(32px) rem(30px) rem(24px) rem(30px);
    background: #fff;
    .title {
      margin-bottom: rem(24px);
      font-size: rem(32px);
      font-weight: 600;
      text-align: center;
    }
    .content {
      font-size: rem(32px);
      line-height: rem(48px);
      color: #333333;
    }
    .upload-img {
      width: rem(688px);
      height: rem(387px);
      margin-top: rem(40px);
    }
  }
  .bt-issue {
    position: absolute;
    bottom: rem(24px);
    left: rem(30px);
    width: rem(688px);
    height: rem(88px);
    font-size: rem(32px);
    border: 0;
    border-radius: rem(8px);
    background: #FDDD33;
  }
}
</style>
