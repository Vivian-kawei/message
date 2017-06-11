<template>
	<div class="create">
	  <header class="header">
      <router-link to="/message" tag='i' class="icon icon-left"></router-link>
      <span class="title">新建通知</span>
    </header>
    <div class="select-type">
      <span>选择通知类型</span>
      <span v-if="messageType" class="message-type">{{messageType}}</span>
      <router-link to="/message/create/select-type" tag='i' class="icon-right"></router-link>
    </div>
    <div class="content">
      <textarea placeholder="请输入通知内容"></textarea>
      <div class="upload-cover">
        <div class="upload-file">
          <img class="upload-img" src="./images/1.jpg"></img>
          <span class="upload-name">上传成功</span>
        </div>
        <i class="link link-1"></i>
        <i class="link link-2"></i>
      </div>
    </div>
    <div v-if="selectedList.length === 0" class="select-range">
      <span>选择接受对象</span>
      <router-link class="icon" tag='i' to="/message/create/select-range"></router-link>
    </div>
    <div v-else class="selected-range">
      <span>接受对象</span>
      <router-link class="member" tag='span' to="/message/create/select-range">
        <span>{{selectedList.length}}人 <span v-if="selectedList.length === rememberList.length">(群内所有成员)</span></span>
      </router-link>
    </div>
    <div class="btn-next-wrapper">
      <router-link to="/message/create/preview" tag='button' class="bt-next">下一步</router-link> 
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
    rememberList() {
      return this.$store.getters.rememberList;
    },
    selectedList() {
      return this.$store.getters.selectedList;
    }
  }
};
</script>

<style lang="scss">
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
.create {
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
  .select-type {
    position: relative;
    height: rem(100px);
    margin-top: rem(26px);
    padding: 0 rem(80px) 0 rem(30px);
    font-size: rem(32px);
    line-height: rem(100px);
    background: #fff;
    .icon-right {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: rem(80px);
      height: rem(100px);
      line-height: rem(100px);
      cursor: pointer;
      @include background('next', rem(15px) auto, center);
    }
    .message-type {
      float: right;
      padding: 0 rem(10px);
      max-width: rem(250px);
      height: rem(64px);
      margin-top: rem(18px);
      text-align: center;
      line-height: rem(64px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: #FDDD33;
      border-radius: rem(8px);
    }
  }
  .content {
    margin-top: rem(24px);
    background: #fff;
    padding: rem(24px) rem(30px);
    textarea {
      width: 100%;
      height: rem(288px);
      resize: none;
      border: 0;
      background: transparent;
      font-size: rem(32px);
      line-height: rem(44px);
    }
    .upload-cover {
      position: relative;
      height: rem(84px);
      margin-top: rem(20px);
      .upload-file {
        padding-right: rem(80px);
        @include ellipsis;
        .upload-img {
          width: rem(84px);
          height: rem(84px);
          margin-right: rem(16px);
          border-radius: rem(8px);
        }
        .upload-name {
          font-size: rem(32px);
          line-height: rem(84px);
        }
      }
      .link {
        position: absolute;
        bottom: 0;
        right: 0;
        width: rem(64px);
        height: rem(64px);
        border-radius: rem(8px);   
      }
      .link-1 {
        @include background('link', rem(26.8px) auto, center, #FDDD33);
      }
      .link-2 {
        @include background('X', rem(26.8px) auto, center, #FDDD33);
      }
    }
  }
  .selected-range {
    position: relative;
    height: rem(100px);
    margin-top: rem(24px);
    padding: 0 rem(386px) 0 rem(30px);
    line-height: rem(100px);
    font-size: rem(32px);
    background: #fff;
    .member {
      position: absolute;
      top: 0;
      right: rem(18px);
      height: rem(100px);
      line-height: rem(100px);
      color: #B4B5B6;
      cursor: pointer;
    }
  }
  .select-range {
    position: relative;
    height: rem(100px);
    margin-top: rem(24px);
    padding: 0 rem(386px) 0 rem(30px);
    line-height: rem(100px);
    font-size: rem(32px);
    background: #fff;
    .icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: rem(80px);
      height: rem(100px);
      cursor: pointer;
      @include background('next', rem(15px) auto, center);
    }
  }
  .btn-next-wrapper {
    width: 100%;
    position: absolute;
    bottom: rem(24px);
    left: 0;
    padding: 0 rem(32px);
  }
  .bt-next {
    width: 100%;
    display: block;
    height: rem(88px);
    border: 0;
    border-radius: rem(8px);
    background: #FDDD33;
    font-size: rem(32px);
  }
}
</style>
