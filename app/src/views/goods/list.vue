<template>
  <div class="list_view">
    <Header/>
    <div class="pc">
      <div class="item_list_area">
        <div class="section_area">
          <div class="inner_area">
            <div class="tit_area">
              <h2 class="tit">{{nav_obj.nav_name}}</h2>
            </div>
            <div class="gs_content" v-if="nav_obj.contents!=''"  v-html="nav_obj.contents">
            </div>
            <div class="segment_area">
              <ul class="list">
                <li class="item" v-on:click="choice_segment_mb(0,$event)">
                  <p class="txt">all</p>
                </li>
                <li class="item" v-for="(item2,index) of nav_obj.sub_nav" v-bind:key="index" v-on:click="choice_segment_mb((index+1),$event)">
                  <p class="txt">{{item2.nav_name}}</p>
                </li>
              </ul>
            </div>
            <div class="item_align_area">
              <div class="total_area">
                <p class="txt">Total {{nav_obj.gs_items.length}} Items</p>
              </div>
              <div class="alignment">
                <ul class="list">
                  <li class="item">
                    <a href="#" class="txt">신상품</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">상품명</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">낮은가격</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">높은가격</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">제조사</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">사용후기</a>
                  </li>
                </ul>
              </div>
            </div>
           
            <div class="items_list_three">
              <ul class="list">
                <li class="item" v-for="gs_info of nav_obj.gs_items" v-bind:key="gs_info.index"  v-on:click="read_gs(gs_info['idx'])">
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
              <ul class="list" v-show="false" v-for="item of nav_obj.sub_nav" v-bind:key="item.key">
                <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index" v-on:click="read_gs(gs_info['idx'])">
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
            <div class="pagi_area_num">
              <ul class="pagi_list">
                <li class="item on">
                  <a class="txt" href="#">1</a>
                </li>
                <li class="item">
                  <a class="txt" href="#">2</a>
                </li>
                <li class="item">
                  <a class="txt" href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb">
      <div class="section">
          <div class="tit_area">
            <h2 class="tit">{{nav_obj.nav_name}}</h2>
          </div>
          <div class="gs_content" v-if="nav_obj.contents!=''"  v-html="nav_obj.contents">
            </div>
          <div class="segment_area">
            <div class="inner">
              <ul class="list">
                <li class="item" v-on:click="choice_segment_mb(0,$event)">
                  <p class="txt">all</p>
                </li>
                <li class="item" v-for="(item2,index) of nav_obj.sub_nav" v-bind:key="index" v-on:click="choice_segment_mb((index+1),$event)">
                  <p class="txt">{{item2.nav_name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="align_area">
            <div class="align_select_area">
              <select>
                <option>정렬방식</option>
              </select>
            </div>
            <div class="select_count_area">
              <div class="icon"></div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="list_items">
            <ul class="list">
              <li class="item" v-for="gs_info of nav_obj.gs_items" v-bind:key="gs_info.index" v-on:click="read_gs(gs_info['idx'])">
                <div class="img_area" :style="{backgroundImage:'url('+gs_info['img_path']+')'}"></div>
                <div class="txt_area">
                  <p class="gs_name">{{gs_info['gs_name']}}</p>
                  <div class="price_area">
                    <p class="sell">{{gs_info['gs_price'] - gs_info['gs_sale'] }}원</p>
                    <p class="sale"  v-show="gs_info['gs_price']>0">{{gs_info['gs_price']}}원</p>
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
            <ul class="list" v-show="false" v-for="item of nav_obj.sub_nav" v-bind:key="item.key">
              <li class="item" v-for="gs_info of item.gs_items" v-bind:key="gs_info.index" v-on:click="read_gs(gs_info['idx'])">
                <div class="img_area" :style="{backgroundImage:'url('+gs_info['img_path']+')'}"></div>
                <div class="txt_area">
                  <p class="gs_name">{{gs_info['gs_name']}}</p>
                  <div class="price_area">
                    <p class="sell">{{gs_info['gs_price'] - gs_info['gs_sale'] }}원</p>
                    <p class="sale"  v-show="gs_info['gs_price']>0">{{gs_info['gs_price']}}원</p>
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
            <div class="more_view_area">
              <div class="inner_center">
                <ul class="list">
                  <li class="item">

                  </li>
                  <li class="item">
                    
                  </li>
                  <li class="item">
                    
                  </li>
                </ul>
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
import $ from 'jquery';
export default {
    name:"ListView",
    data() {
      return {
        idx:0,
        nav_obj:{
          gs_items:[]
        }
      }
    },
    methods: {
      change_nav_obj:function(obj){
        this.nav_obj=obj;
      },
      choice_segment:function(idx,e){
        var that = $(e.currentTarget);
        that.parent('.list').find('.item').removeClass('on');
        that.addClass('on');
        var num = idx;
        var ban_item = that.parents('.inner_area').find('.items_list_three>.list');
        ban_item.hide();
        ban_item.eq(num).fadeIn(250);
      },
      choice_segment_mb:function(idx,e){
        var that = $(e.currentTarget);
        that.parent('.list').find('.item').removeClass('on');
        that.addClass('on');
        var num = idx;
        var ban_item = that.parents('.section').find('.list_items>.list');
        ban_item.hide();
        ban_item.eq(num).fadeIn(250);
      },
      read_gs:function(idx){
        this.$router.push('/info?idx='+idx);
      }
    },
    components:{
        Header,Footer
    },
    mounted(){
      this.idx=this.$route.query.idx;
      var change_nav_fun = this.change_nav_obj;
      let obj = {
        idx:this.idx
      };
      $.ajax({
        url : 'http://localhost/vue_shopping/api/gs_list_by_idx',
        data:obj,
        type:"POST",
        beforeSend:function(){
            $('#ajax_loding').show();
            $('body').addClass('noscroll');
        },
        success:function(res){
          var result = JSON.parse(res);
          change_nav_fun(result['data']['nav_obj'])
          console.log(result);
        },error:function(a,b,c){
            $('#ajax_loding').hide();
            $('body').removeClass('noscroll');
            console.log(a,b,c);
            alert('서버에서 오류 발생');
        }
      })
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>