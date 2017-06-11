<template>
	<div class="add-type">
	  <header class="header">
      <router-link to="/message/create/select-type" tag='i' class="icon icon-left"></router-link>
      <span>添加类型</span>
    </header>
    <div class="message-type">
      <span class="item">通知类型:</span>
      <span class="value">{{tagType}}</span>
    </div>
    <div class="message-name">
      <span class="item">通知名称:</span>
      <input type="text" name="messagename" placeholder="请输入2-8个字" v-model="tagName"/>
    </div>
    <button class="button" @click="addMessageTag">确定</button>
	</div>
</template>

<script>
export default {
  name: 'add-type',
  data() {
    return {
      tagName: ''
    };
  },
  computed: {
    tagType() {
      return this.$route.params.type === 'notice' ? '公告类通知' : '报名类通知';
    }
  },
  methods: {
    addMessageTag() {
      this.$store.commit('addMessageTag', { type: this.$route.params.type, name: this.tagName });
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.add-type {
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
  .message-type, .message-name {
    position: relative;
    margin-top: rem(26px);
    padding: 0 0 0 rem(190px);
    height: rem(100px);
    line-height: rem(100px);
    font-size: rem(32px);
    background: #fff;
    .item {
      position: absolute;
      top: 0;
      left: rem(30px);
      width: rem(140px);
      height: rem(100px);
      line-height: rem(100px);
    }
  }
  .message-name {
    input {
      border: 0;
    }
  }
  .button {
    position: absolute;
    left: rem(32px);
    bottom: rem(24px);
    width: rem(688px);
    height: rem(88px);
    border: 0;
    border-radius: rem(8px);
    font-size: rem(32px);
    background: #FDDD33;
  }
}
</style>
