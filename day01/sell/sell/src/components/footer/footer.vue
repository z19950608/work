<template>
<div class="footer">
     <div class='bot-content'>
        <div class='content-left'>
          <div class='circle-out'>
            <span class='circle-in'>
              <i class='icon-shopping_cart'></i>
            </span>
          </div>
          <div class="price">
            ￥<output>{{allPrice}}</output>
           
          </div>
           <div class="right-line">

            </div>
            <div class="send">另需配送费￥4元</div>
        </div>
        <div class='content-right'>
          ￥{{minPrice}}起送
        </div>
    </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    allPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bot-content {
    height: 48px;
    width: 100%;
    line-height: 48px;
    background: #141d27;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    .price {
        box-sizing:border-box;
        padding-left:9px;
        padding-right:6px;
        line-height 48px;
        font-size 16px;
        color:rgba(255,255,255,.4);
        font-weight:700;
        height 48px
        float left
       
    }
    .send{
        height 48px
        line-height 48px
        float left ;
        color:rgba(255,255,255,.4)
        margin-left:6px;
        font-size 16px;

    }
    .right-line{
            float left;
            display inline-block
            height 30px;
            margin-top:9px;
            border-right:1px solid rgba(255,255,255,.1)
            }
    .content-left {
        flex: 1;
        .circle-out {
            float left
            margin-top: -8px;
            margin-left: 9px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #141d27;
            position: relative;
            .circle-in {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: inline-block;
                width: 42px;
                height: 42px;
                text-align: center;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                color: rgba(255, 255, 255, 0.4);
                line-height: 44px;
                font-size: 24px;
            }
        }
    }
    .content-right {
        background: rgba(255, 255, 255, 0.1);
        width 25%;
        text-align: center;
        box-sizing: border-box;
        height 48px;
        line-height 48px;
        font-size: 12px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
    }
}
</style>
