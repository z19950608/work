<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods" exact>商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
//  引入头部组件
const ERR_OK = 0;
// 定义了必须用，不然也会报错
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    // 箭头函数前后要加空格，不然会出错
    this.$http.get('/api/seller').then(response => {
      response = response.body;
      // body 生成object对象
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        // 拿到object 中data数据对象
        console.log(this.seller);
      }
    });
  },
  components: {
    'v-header': header
    // 将头部分起个别名，避免与语义化标签header起冲突
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-1px(rgba(7, 17, 27, 0.1));
  }

  .tab-item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}

/* 设置当前组件的样式 */
</style>
