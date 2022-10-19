<template>
  <div class="index">
    <Header/>
    <div class="pc">
      <div class="img_banner">
        <!-- Slider main container -->
        <div class="swiper pc_swiper" v-show="$store.state.index_page_data.pc_banner.length!=0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item of $store.state.index_page_data.pc_banner" v-bind:key="item.index" :style="{backgroundImage:'url('+item+')'}"></div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="banner_empty" v-show="$store.state.index_page_data.pc_banner.length==0"><p class="txt">배너 데이터가 없음</p></div>
      </div>
      <div class="main_banner">
        <div class="center_pos">
          <ul class="list">
            <li class="item" v-for="item of $store.state.index_page_data.display_pc" v-bind:key="item.index" v-show="item.title.length>0 || item.sub.length>0">
              <div class="img_area" :style="{backgroundImage:'url('+item['img_path']+')'}"></div>
              <div class="txt_area">
                <p class="tit">{{item['title']}}</p>
                <p class="sub">{{item['sub']}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="item_list_area">
        <div :class="[item.theme==1?'category_area':'new_item_area']" v-for="item of $store.state.index_page_data.display_nav_list" v-bind:key="item.index">
          <div class="inner_area">
            <div class="tit_area">
              <h2 class="tit">{{item.nav_name}}</h2>
              <p class="sub">Lorem, ipsum dolor.</p>
            </div>
            <div class="segment_area" v-if="item.sub_nav.length>1">
              <ul class="list">
                <li class="item" v-for="(item2,index) of item.sub_nav" v-bind:key="index" v-on:click="choice_segment(index,$event)">
                  <p class="txt">{{item2.nav_name}}</p>
                </li>
              </ul>
            </div>
            <div class="categpry_banner_area" v-if="item.theme==1">
              <div class="banner_mask">
                <ul class="list">
                  <li class="ban_item">
                    <div class="left_img"  :style="{backgroundImage:'url('+item.gs_items[0]['img_path']+')'}">
                    </div>
                    <div class="right_img">
                      <ul class="list">
                        <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index" :style="{backgroundImage:'url('+gs_info['img_path']+')'}">
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="ban_item" v-for="(item2,index) of item.sub_nav" v-bind:key="index" v-show="false">
                    <div class="left_img"  :style="{backgroundImage:'url('+item2.gs_items[0]['img_path']+')'}">
                    </div>
                    <div class="right_img">
                      <ul class="list">
                        <li class="item" v-for="gs_info2 of item2.gs_items" v-bind:key="gs_info2.index" :style="{backgroundImage:'url('+gs_info2['img_path']+')'}">
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="items_list_three" v-if="item.theme==2">
              <ul class="list">
                <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index">
                  <div class="img_area" :style="{backgroundImage:'url('+gs_info['img_path']+')'}"></div>
                  <div class="txt_area">
                    <ul class="list">
                      <li class="item">
                        <p class="name">{{gs_info['gs_name']}}</p>
                      </li>
                      <li class="item">
                        <div class="price_area">
                          <p class="seller">{{gs_info['gs_price'] - gs_info['gs_sale'] }}원</p>
                          <p class="origin" v-show="gs_info['gs_price']>0">{{gs_info['gs_price']}}원</p>
                          <p class="percent" v-show="gs_info['gs_price']>0 && gs_info['gs_sale']>0">{{gs_info['gs_price']/gs_info['gs_sale']}}%</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="desc_area">
                          <p class="txt">{{gs_info['gs_short_txt']}}</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="color_options_area">
                          <ul class="list">
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                          </ul>
                        </div>
                      </li>
                      <li class="item">
                        <div class="marks_area">
                          <ul class="list">
                            <li class="item one">
                              <p class="txt">Lorem, ipsum dolor.</p>
                            </li>
                            <li class="item two">
                              <p class="txt">ipsum</p>
                            </li>
                            <li class="item three">
                              <p class="txt">dolor.</p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="items_list_four" v-if="item.theme==3">
              <ul class="list">
                <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index">
                  <div class="img_area" :style="{backgroundImage:'url('+gs_info['img_path']+')'}"></div>
                  <div class="txt_area">
                    <ul class="list">
                      <li class="item">
                        <p class="name">{{gs_info['gs_name']}}</p>
                      </li>
                      <li class="item">
                        <div class="price_area">
                          <p class="seller">{{gs_info['gs_price'] - gs_info['gs_sale'] }}원</p>
                          <p class="origin" v-show="gs_info['gs_price']>0">{{gs_info['gs_price']}}원</p>
                          <p class="percent" v-show="gs_info['gs_price']>0 && gs_info['gs_sale']>0">{{gs_info['gs_price']/gs_info['gs_sale']}}%</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="desc_area">
                          <p class="txt">{{gs_info['gs_short_txt']}}</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="color_options_area">
                          <ul class="list">
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                          </ul>
                        </div>
                      </li>
                      <li class="item">
                        <div class="marks_area">
                          <ul class="list">
                            <li class="item one">
                              <p class="txt">Lorem, ipsum dolor.</p>
                            </li>
                            <li class="item two">
                              <p class="txt">ipsum</p>
                            </li>
                            <li class="item three">
                              <p class="txt">dolor.</p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb">
      <div class="img_banner">
        <!-- Slider main container -->
        <div class="swiper mb_swiper" v-show="$store.state.index_page_data.pc_banner.length!=0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item of $store.state.index_page_data.pc_banner" v-bind:key="item.index" :style="{backgroundImage:'url('+item+')'}"></div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="banner_empty" v-show="$store.state.index_page_data.pc_banner.length==0"><p class="txt">배너 데이터가 없음</p></div>
      </div>
      <div class="main_banner">
        <ul class="list">
           <li class="item" v-for="item of $store.state.index_page_data.display_mb" v-bind:key="item.index" v-show="item.title.length>0 || item.sub.length>0">
              <div class="img_area" :style="{backgroundImage:'url('+item['img_path']+')'}"></div>
              <div class="txt_area">
                <p class="tit">{{item['title']}}</p>
                <p class="txt">{{item['sub']}}</p>
              </div>
            </li>
        </ul>
      </div>
      <div class="list_view_area">
        <div class="section" v-for="item of $store.state.index_page_data.display_nav_list" v-bind:key="item.index">
          <div class="tit_area">
            <h2 class="tit">{{item.nav_name}}</h2>
            <p class="txt">Lorem, ipsum dolor.</p>
          </div>
          <div class="segment_area" v-if="item.sub_nav.length>1">
            <div class="inner">
              <ul class="list">
                <li class="item" v-for="(item2,index) of item.sub_nav" v-bind:key="index" v-on:click="choice_segment(index,$event)">
                  <p class="txt">{{item2.nav_name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div :class="[item.theme==1?'categroy_items':'list_items']">
            <ul class="list">
              <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index">
                <div class="img_area" :style="{backgroundImage:'url('+gs_info['img_path']+')'}"></div>
                <div class="txt_area" v-show="item.theme!=1">
                  <p class="gs_name">{{gs_info['gs_name']}}</p>
                  <div class="price_area">
                    <p class="sell">{{gs_info['gs_price'] - gs_info['gs_sale'] }}원</p>
                    <p class="sale" v-show="gs_info['gs_price']>0">{{gs_info['gs_price']}}원</p>
                    <p class="percent" v-show="gs_info['gs_price']>0 && gs_info['gs_sale']>0">{{gs_info['gs_price']/gs_info['gs_sale']}}%</p>
                  </div>
                  <div class="desc_area">
                    <p class="txt">{{gs_info['gs_short_txt']}}</p>
                  </div>
                  <div class="option_area">
                    <ul class="list">
                      <li class="item one"></li>
                      <li class="item two"></li>
                      <li class="item three"></li>
                    </ul>
                  </div>
                  <div class="mark_list">
                    <ul class="list">
                      <li class="item one">
                        <p class="txt">Lorem, ipsum dolor.</p>
                      </li>
                      <li class="item two">
                        <p class="txt">Lorem, ipsum dolor.</p>
                      </li>
                      <li class="item three">
                        <p class="txt">Lorem, ipsum dolor.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div class="more_view_area" v-show="item.theme!=1">
              <p class="txt">MORE VIEW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import $ from 'jquery'

export default {
    name:"indexView",
    components:{
        Header,Footer
    },
    methods: {
      choice_segment:function(idx,e){
        var that = $(e.currentTarget);
        that.parent('.list').find('.item').removeClass('on');
        that.addClass('on');
        var num = idx+1;
        var ban_item = that.parents('.inner_area').find('.banner_mask>.list>.ban_item');
        ban_item.hide();
        ban_item.eq(num).fadeIn(250);
      }
    },
    data() {
      return {
        
      }
    },
    mounted() {
      this.$store.dispatch('index_load');
    },
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>