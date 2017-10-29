<template>
  <div class='goods'>
    <div class='menu-wrapper'>
        <ul >
            <li v-for='item in goods' class='menu-idea' :key='item.id'>
              <span class='text border-1px'>
                <span v-show='item.type>0' class='icon' :class='classMap[item.type]'></span>{{item.name}}
              </span>
            </li>
        </ul>
    </div>
    <div class='foods-wrapper'>
        <ul>
            <li v-for='item in goods' class='item-list' v-bind:key='item.id'>
                <h1 class='title'>{{item.name}}</h1>
                <ul>
                    <li v-for='food in item.foods' class='food-item border-1px' :key='food.id'>
                        <div class='icon' >
                            <img width='57' height='57' :src='food.icon' alt=''/>
                        </div>
                        <div class='content'>
                            <h2 class='name'>{{food.name}}</h2>
                            <p class='desc'>
                                {{food.description}}
                            </p>
                            <div class='extra'>
                                <span>月售{{food.sellCount}}份</span>
                                <span>好评率{{food.rating}}%</span>
                            </div>
                            <div class='price'>
                                <span>￥<a href=''>{{food.price}}</a></span>
                                <span v-show='food.oldPrice'>{{food.oldPrice}}</span>
                            </div>
                            <a class='icon-add_circle'></a>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-5'>
import footer from "../footer/footer.vue";
const ERR_OK = 0;
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    "v-footer": footer
  },
  data() {
    return {
      allPrice: 0,
      goods: []
    };
  },
  created() {
    this.$http.get("api/goods").then(response => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      }
    });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl';

.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;

  
  .foods-wrapper {
    flex: 1;

    .food-item {
      margin: 18px;
      padding-bottom: 18px;
      display: flex;
      border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
      }

      .content {
        flex: 1;
        margin-left: 10px;
        display: relative;

        .name {
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
          margin-top: 2px;
        }

        .desc, .extra {
          margin: 8px 0;
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);

          span:first-child {
            margin-right: 12px;
          }
        }

        .icon-add_circle {
          position: absolute;
          right: 18px;
          bottom: 18px;
          font-size: 24px;
          color: rgb(0, 160, 220);
          line-height: 24px;
        }

        .price {
          span:first-child {
            font-size: 1px;
            color: #e4393c;
            font-weight: 300;

            a {
              color: #e4393c;
              font-size: 18px;
              ling-height: 24px;
              font-weight: 800;
            }
          }

          span:last-child {
            font-size: 10px;
            color: rgb(147, 153, 159);
            font-weight: 700;
            line-height: 24px;
          }
        }
      }
    }

    .title {
      height: 26px;
      background: #f3f5f7;
      line-height: 26px;
      font-size: 12px;
      border-left: 2px solid #d9dde1;
      padding-left: 14px;
      color: rgb(147, 153, 159);
    }
  }

  .menu-wrapper {
    // 第一个是等分，等二个是缩放情况 ，第三个是点位
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-idea {
      display: table;
      padding: 0 12px;
      height: 54px;
      line-height: 14px;
      font-size: 12px;
      font-weight: 200;
      box-sizing: border-box;
      text-align: center;

      .text {
        display: table-cell;
        font-size: 12px;
        vertical-align: middle;
        border-1px(rgba(7, 17, 27, 0.1));
        width: 56px;
      }

      .icon {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: top;
        margin-right: 2px;
        background-size: 16px 16px;
        background-repeat: no-repeat;

        &.decrease {
          bg-image('decrease_3');
        }

        &.discount {
          bg-image('discount_3');
        }

        &.guarantee {
          bg-image('guarantee_3');
        }

        &.invoice {
          bg-image('invoice_3');
        }

        &.special {
          bg-image('special_3');
        }
      }
    }
  }
}
</style>
