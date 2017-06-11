<template>
	<div class="select-type">
    <header class="header">
      <router-link to="/message/create" tag='i' class="icon icon-left"></router-link>
      <span class="title">通知类型</span>
    </header>
    <div class="message-type" v-for="type in messageTypes" :key="type.title">
      <div class="title">{{type.title}}</div>
      <div class="additional">{{type.tips}}</div>
      <div class="tag-content">
        <div class="tag-list">
          <div :class="{'tag-item': true, 'active': tag === messageType}" v-for="tag in type.tags" :key="tag" @click="selectMessageTag(tag)">{{tag}}</div>
        </div>
        <router-link tag='i' :to="'/message/create/select-type/add-type/' + type.typeName" class="icon"></router-link>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'create-message',
  computed: {
    messageType() {
      return this.$store.state.create.messageType;
    },
    messageTypes() {
      return this.$store.state.create.messageTypes;
    }
  },
  methods: {
    selectMessageTag(type) {
      this.$store.commit('selectMessageTag', { type });
      this.$router.push('/message/create');
    }
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.select-type {
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
  .message-type {
    .title {
      margin-bottom: rem(16px);
      padding: rem(16px) rem(32px) 0 rem(32px);
      font-size: rem(32px);
      font-weight: 600;
    }
    .additional {
      font-size: rem(24px);
      padding: 0 rem(32px) rem(16px) rem(32px);
      color: #999999;
      @include ellipsis;
    }
    .tag-content {
      padding: rem(32px);
      background: #fff;
      .tag-list {
        overflow: hidden;
        margin: rem(-20px) -1%;
        .tag-item {
          width: 22.7%;
          height: rem(64px);
          line-height: rem(64px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          border: 1px solid #CDCDCD;
          border-radius: rem(8px);
          float: left;
          margin: rem(20px) 1%;
          &.active {
            background: #FDDD33;
          }
        }
      }
      .icon {
        display: block;
        margin-top: rem(40px);
        width: rem(64px);
        height: rem(64px);
        border-radius: rem(8px);
        cursor: pointer;
        @include background('add', rem(28px) auto, center, #FDDD33);
      }
    }
  }
}

</style>
