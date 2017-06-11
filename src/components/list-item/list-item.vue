<template>
  <div class="list-item">
    <div class="content">
      <div class="title">618大促通知</div>
      <div class="additional">618大促 管理员1 6月10日 17:00</div>
      <img class="cover" src="./images/1.jpg"/>
    </div>
    <div class="text">亲爱的店长:我们将在6月18号进行618大促活动。此活动分将由满减活动，送饮料，五折食品三种形式进行。</div>
    <div class="button">
      <div v-if="itemType === '所有人已确认'" class="button-type-1">
        <span class="button-content">
          <i class="icon"></i>所有人已确认
        </span>
      </div>
      <router-link to="/message/affirm/affirm" tag='div' v-if="itemType === '部分确认'" class="button-type-2">尚有<span class="number">23</span>人未确认</router-link>
      <router-link to="/message/check/details" tag='div' v-if="itemType === '完成'" class="button-type-3"><button>查看详情</button></router-link>
      <router-link to="/message/affirm/affirm" tag='div' class="button-type-4" v-if="itemType === '未确认'">确认收到</router-link>
      <div class="button-type-5" v-if="itemType === '参加'">
        <button class="not-join">不参加</button>
        <button class="join">参加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    itemType: {
      type: String,
      default: '所有人已确认' // 所有人已确认 部分确认 完成 未确认 参加
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
  .list-item {
    padding: rem(40px) rem(32px) 0 rem(32px);
    background: #fff;
    .content {
      position: relative;
      padding-right: rem(140px);
      min-height: rem(120px);
      .title {
        margin-bottom: rem(16px);
        font-weight: bold;
        font-size: rem(34px);
      }
      .additional {
        font-size: rem(28px);
        color: #B4B5B6;
      }
      .cover {
        position: absolute;
        top: 0;
        right: 0;
        width: rem(120px);
        height: rem(120px);
        border-radius: rem(8px);
      }
    } 
    .text {
      margin-top: rem(18px);
      padding-bottom: rem(28px);
      font-size: rem(32px);
      line-height: rem(48px);
      color: #333333;
    }
    .button {
      width: 100%;
      height: rem(88px);
      font-size: rem(32px);
      border: 0;
      background: transparent;
      text-align: center;
      .button-type-1 {
        line-height: rem(88px);
        text-align: center;
        border-top: rem(2px) solid #F1F1F1;
        .button-content {
          position: relative;
          padding-left: rem(50px);
          .icon {
            position: absolute;
            top: rem(-4px);
            left: 0;
            width: rem(40px);
            height: rem(40px);
            line-height: rem(88px);
            @include background('select', rem(40px) auto, center);
          }
        }
      }
      .button-type-2 {
        line-height: rem(88px);
        border-top: rem(2px) solid #F1F1F1;
        .number {
          background: #FDDD33;
          border-radius: rem(22px);
          margin:  0 rem(6px);
          padding: rem(3px) rem(12px);
        }
      }
      .button-type-3 {
        height: rem(88px);
        padding-top: rem(16px);
        border-top: rem(2px) solid #F1F1F1;
        button{
          display: inline-block;
          width: rem(240px);
          height: rem(60px);
          line-height: rem(60px);
          font-size: rem(28px);
          border: 0;
          background: #FDDD33;    
        }  
      }
      .button-type-4 {
        height: 100%;
        line-height: rem(88px);
        border-radius: rem(8px);
        background: #FDDD33;
      }
      .button-type-5 {
        height: 100%;
        .not-join {
          float: left;
          width: 49%;
          height: rem(88px);
          border: rem(2px) solid #CDCDCD;
          border-radius: rem(8px);
          font-size: rem(32px);
          background: #fff;
          margin-right: 2%;
        }
        .join {
          float: left;
          width: 49%;
          height: rem(88px);
          border: 0;
          border-radius: rem(8px);
          font-size: rem(32px);
          background: #FDDD33;
        }
      }
    }
  }
</style>
