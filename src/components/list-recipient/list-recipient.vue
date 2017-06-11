<template>
  <div class="list-group">
    <div class="list-recipient" v-for="group in classList" :key="group">
      <div class="class-content content">
        <i :class="groupClass(group)" @click="toggleGroupSelect(group)"><span></span></i>
        <span class="name">{{group.className}}</span>
      </div>
      <div class="user-content content" v-for="remember in group.childres" :key="remember">
        <i :class="rememberClass(remember)" @click="toggleRememberSelect(remember)"><span></span></i>
        <div class="user-item">
          <img class="user-img" src="./images/1.jpg"/>
          <span class="name">{{remember.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-recipient',
  computed: {
    classList() {
      return this.$store.state.selectRange.classList.data;
    }
  },
  methods: {
    groupClass(group) {
      let isSelectAll = true;
      group.childres.forEach((remeber) => {
        if (!remeber.status) {
          isSelectAll = false;
        }
      });

      this.$store.commit('setStatus', { item: group, status: isSelectAll });

      return {
        icon: true,
        active: isSelectAll
      };
    },
    rememberClass(remember) {
      return {
        icon: true,
        active: remember.status
      };
    },
    toggleGroupSelect(group) {
      this.$store.commit('toggleGroupSelect', { group: group });
    },
    toggleRememberSelect(remember) {
      this.$store.commit('toggleRememberSelect', { remember: remember });
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/common/scss/function';
@import 'src/common/scss/mixin';
  .list-recipient {
    margin-top: rem(24px);
    background: #fff;
    .content {
      position: relative;
      padding-left: rem(100px);
      height: rem(100px);
      line-height: rem(100px);     
      font-size: rem(32px);
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
    .class-content {
      .name {
        display: block;
        height: rem(100px);
        line-height: rem(100px);
        border-bottom: rem(2px) solid #E2E3E5 ;
      }
    }
    .user-content {
      .user-item {
        position: relative;
        padding-left: rem(88px);
        height: rem(100px);
        line-height: rem(100px);
        .user-img {
          position: absolute;
          top: rem(18px);
          left: 0;
          width: rem(64px);
          height: rem(64px);
          border-radius: rem(4px);
        }
        .name {
          font-size: rem(32px);
        }
      }
    }
  }
</style>
