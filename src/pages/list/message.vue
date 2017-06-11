<template>
	<div class="message">
	  <header class="header">
      <i class="icon icon-left"></i>
      <span class="title">全部通知</span>
      <router-link to="/message/create" tag='i' class="icon icon-right"></router-link>
    </header>
    <div class="message-list">
      <list-item class="list-item" itemType="所有人已确认"></list-item>
      <list-item class="list-item" itemType="部分确认"></list-item>
      <list-item class="list-item" itemType="部分确认"></list-item>
      <list-item class="list-item" itemType="完成"></list-item>
    </div>
	</div>
</template>

<script>
import ListItem from 'components/list-item/list-item';
export default {
  name: 'create-message',
  components: {
    [ListItem.name]: ListItem
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.message {
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
    .icon-right {
      right: 0;
      @include background('add', rem(26px) auto, center);
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
