<template>
  <div class="unconfirmed-list">
    <header class="header">
      <router-link to="/message/check/details" tag='i' class="icon icon-left"></router-link>
      <span class="title">未确认</span>
    </header>
    <div class="message-list">
      <list-item class="list-item" itemType="未确认"></list-item>
      <list-item class="list-item" itemType="参加"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from 'components/list-item/list-item';
export default {
  name: 'unconfirmed-list',
  components: {
    [ListItem.name]: ListItem
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.unconfirmed-list {
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
  .message-list {
    margin-top: rem(26px);
    .list-item {
      margin-bottom: rem(24px);
    }
  }
}
</style>
