<template>
  <div class='header'>
    <div class='content-wrapper '>
      <div class='avatar'>
        <img width='64' height='64' :src='seller.avatar' alt=''/>
      </div>
      <div class='content'>
        <div class='title'>
            <span class='brand'></span>
            <span class='name'>{{seller.name}}</span>
        </div>
        <div class='description'>
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if='seller.supports' class='support'>
            <span  class='icon' :class='classMap[seller.supports[0].type]'></span>
            <span class='text'>{{seller.supports[0].description}}</span>
        </div>

      </div><div v-if='seller.supports' class='support-count' @click='showDetail'>
        <span class='count'>{{seller.supports.length}}个</span>
        <i class='icon-keyboard_arrow_right'></i>
      </div>
    </div>
    <div class='bulletin-wrapper' @click='showDetail'>
        <!-- 将两个span之间的间隙空格给删掉，就不会出现左右边距不准确的情况，或者直接将-->
        <!--将父元素的font-size:0这样就不会出现这样的问题,小数点不一样是字体格式的原因 -->
      <span class='bulletin-title'></span><span class='bulletin-text'>{{seller.bulletin}}</span>
      <i class='icon-keyboard_arrow_right'></i>
    </div>
    <div class='background'>
      <img :src='seller.avatar' width='100%' height='100%' alt=''/>
    </div>
    <div v-show='detailShow' class='detail' transition='fade'>
      <div class='detail-wrapper clearfix'>
        <div class='detail-main'>
          <div class='main-title'>{{seller.name}}</div>
          <star :size='48' :score='seller.score'></star>
          <div class='title'>
            <div class='line'></div>
            <div class='text'>优惠信息</div>
            <div class='line'></div>
          </div>
          <ul v-if='seller.supports' class='supports'>
            <li class='support-item' v-for='(item,index) in seller.supports' :key="item.id">
              <!--vue中$index已经移除了，现在用（val,index）来获取他的博茨元素和下标-->
              <span  class='icon' :class='classMap[seller.supports[index].type]'></span>
              <span class='text'>{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class='title'>
            <div class='line'></div>
            <div class='text'>商家公告</div>
            <div class='line'></div>
          </div>
          <div class='bulletin'>
            <p class='content'>{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class='detail-close' @click='closeDetail'><i class='icon-close'></i></div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import star from '../../components/star/star.vue';
export default {
  // 接收到我的app中的seller对象供下面使用
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      console.log(1);
      this.detailShow = true;
      console.log(this.detailShow);
    },
    closeDetail() {
      console.log(2);
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixin';

.header {
  overflow: hidden;
  position: relative;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);

  .detail {
    z-index: 100;
    width: 100%;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(7, 17, 27, 0.8);
    transition: all 0.5s;
    backdrop-filter: blur(10px);

    &.fade-transition {
      opacity: 1;
      background: rgba(7, 17, 27, 0.8);
    }

    &.fade-enter, &.fade-leave {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }

    .detail-wrapper {
      min-height: 100%;
      width: 100%;
      height: 20px;

      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;

        .main-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          text-align: center;
        }

        .star {
          height: 24px;
          line-height: 24px;
          margin-top: 16px;
          text-align: center;
        }

        .supports {
          width: 80%;
          margin: 0 auto;

          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;

            &.last-child {
              margin-bottom: 0;
            }

            .text {
              font-size: 12px;
              // 只有.text与.icon 行高相同时，才能上下居中
              line-height: 16px;
            }

            .icon {
              width: 16px;
              height: 16px;
              display: inline-block;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;

              &.decrease {
                bg-image('decrease_2');
              }

              &.discount {
                bg-image('discount_2');
              }

              &.guarantee {
                bg-image('guarantee_2');
              }

              &.invoice {
                bg-image('invoice_2');
              }

              &.special {
                bg-image('special_2');
              }
            }
          }
        }

        .bulletin {

          width: 80%;
          padding: 0px 12px;
          margin: 0px auto;

          .content {
            line-height: 24px;
            font-size: 12px;
          }
        }

        .title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;

          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .text {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }

    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }

  // 底层背景
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    filter: blur(1px);
  }
}

// 设置模糊像素
.bulletin-wrapper {
  background: rgba(7, 17, 27, 0.2);
  position: relative;
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  // 设置超出长度隐藏并显示。。。
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .bulletin-title {
    display: inline-block;
    line-height: 12px;
    width: 22px;
    height: 12px;
    bg-image('bulletin');
    background-size: 22px 12px;
    background-repeat: no-repeat;
    vertical-align: top;
    margin-top: 8px;
  }

  .bulletin-text {
    vertical-align: top;
    font-size: 10px;
    margin: 0 4px;
  }

  .icon-keyboard_arrow_right {
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 9px;
  }
}

.content-wrapper {
  padding: 24px 12px 18px 24px;
  font-size: 0;
  position: relative;

  .avatar {
    display: inline-block;
    border-radius: 2px;
    vertical-align: top;
  }

  .support-count {
    font-size: 10px;
    position: absolute;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    padding: 0 8px;
    bottom: 18px;
    right: 12px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);

    .count {
      font-size: 10px;
      vertical-align: top;
      font-size: 10px;
      margin-left: 2px;
      line-height: 24px;
    }
  }

  .content {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;

    .support {
      margin-top: 10px;
      font-size: 10px;
      line-height: 12px;

      .text {
        font-size: 10px;
        line-height: 12px;
      }

      .icon {
        vertical-align: top;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;

        &.decrease {
          bg-image('decrease_1');
        }

        &.discount {
          bg-image('discount_1');
        }

        &.guarantee {
          bg-image('guarantee_1');
        }

        &.invoice {
          bg-image('invoice_1');
        }

        &.special {
          bg-image('special_1');
        }
      }
    }

    .description {
      font-size: 12px;
      line-height: 12px;
    }

    .title {
      margin: 2px 0 8px 0;

      .brand {
        display: inline-block;
        vertical-align: top;
        width: 30px;
        height: 18px;
        bg-image('brand');
        background-size: 30px 18px;
        background-repeat: no-repeat;
      }

      .name {
        font-size: 16px;
        margin-left: 6px;
        line-height: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
