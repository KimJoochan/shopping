<template>
  <div class="cart_view">
    <Header/>
    <div class="pc">
        <div class="gs_cart">
            <div class="inner">
                <div class="flow_area">
                    <p class="txt">hmoe>cart</p>
                </div>
                <div class="tit_area">
                    <h2 class="txt">Shopping Cart</h2>
                </div>
                <div class="cart_list_area">
                    <div class="segment_area">
                        <ul class="list">
                            <li class="item on">
                                <a href="#" class="txt">국내배송상품(1)</a>
                            </li>
                            <li class="item">
                                <a href="#" class="txt">해외배송상품(1)</a>
                            </li>
                        </ul>
                    </div>
                    <div class="table_area">
                        <div class="tb_top">
                            <ul class="list">
                                <li class="item">
                                    <p class="txt">일반상품({{cart_list.length}})</p>
                                </li>
                            </ul>
                        </div>
                        <div class="tb_inner">
                            <table>
                                <colgroup>
                                    <col class="col1">
                                    <col class="col2">
                                    <col>
                                    <col class="col3">
                                    <col class="col4">
                                    <col class="col4">
                                    <col class="col4">
                                    <col class="col4">
                                    <col class="col4">
                                    <col class="col4">
                                </colgroup>
                                <tbody>
                                    <tr class="tr_head">
                                        <td>
                                            <input type="checkbox" class="all_chk">
                                        </td>
                                        <td>
                                            <p class="txt">이미지</p>
                                        </td>
                                        <td>
                                            <p class="txt">상품정보</p>
                                        </td>
                                        <td>
                                            <p class="txt">수량</p>
                                        </td>
                                        <td>
                                            <p class="txt">상품구매금액</p>
                                        </td>
                                        <td>
                                            <p class="txt">할인금액</p>
                                        </td>
                                        <td>
                                            <p class="txt">적립금</p>
                                        </td>
                                        <td>
                                            <p class="txt">배송구분</p>
                                        </td>
                                        <td>
                                            <p class="txt">배송비</p>
                                        </td>
                                        <td>
                                            <p class="txt">선택</p>
                                        </td>
                                    </tr>
                                    <tr class="tr_body" v-for="item of cart_list" v-bind:key="item.index">
                                        <td>
                                            <input type="checkbox" class="chk" :valu="item.idx">
                                        </td>
                                        <td>
                                            <div class="thumb" :style="{backgroundImage:'url('+item['img_path']+')'}"></div>
                                        </td>
                                        <td>
                                            <p class="txt">{{item.gs_name}}</p>
                                        </td>
                                        <td>
                                            <div class="count_area">
                                                <div class="cnt_area">
                                                    <div class="cnt_txt">
                                                        <p class="txt">{{item.gs_cnt}}</p>
                                                    </div>
                                                    <div class="cnt_btn">
                                                        <div class="btn_arr" v-on:click="chang_cnt('up',item)"></div>
                                                        <div class="btn_arr" v-on:click="chang_cnt('down',item)"></div>
                                                    </div>
                                                </div>
                                                <div class="btn_area">
                                                    <p class="txt">변경</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="cent_txt">{{item.gs_cnt*(item.gs_price - item.gs_sale)}}원</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">-</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">-</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">Lorem</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">Lorem원<br>조건</p>
                                        </td>
                                        <td>
                                            <div class="btn_list_area">
                                                <ul class="list">
                                                    <li class="item on" v-on:click="order_item(item.idx)">
                                                        <div class="txt_area">
                                                            <p class="txt">주문하기</p>
                                                        </div>
                                                    </li>
                                                    <li class="item" v-on:click="wish_item(item.idx)">
                                                        <div class="txt_area">
                                                            <p class="txt">관심상품등록</p>
                                                        </div>
                                                    </li>
                                                    <li class="item" v-on:click="delete_item(item.idx)">
                                                        <div class="txt_area">
                                                            <div class="icon"></div>
                                                            <p class="txt">삭제</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="tr_body" v-show="false">
                                        <td>
                                            <input type="checkbox" class="chk">
                                        </td>
                                        <td>
                                            <div class="thumb"></div>
                                        </td>
                                        <td>
                                            <p class="txt">Lorem, ipsum dolor.</p>
                                        </td>
                                        <td>
                                            <div class="count_area">
                                                <div class="cnt_area">
                                                    <div class="cnt_txt">
                                                        <p class="txt">1</p>
                                                    </div>
                                                    <div class="cnt_btn">
                                                        <div class="btn_arr"></div>
                                                        <div class="btn_arr"></div>
                                                    </div>
                                                </div>
                                                <div class="btn_area">
                                                    <p class="txt">변경</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="cent_txt">5,000원</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">-</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">-</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">기본배송</p>
                                        </td>
                                        <td>
                                            <p class="cent_txt">2,500원<br>조건</p>
                                        </td>
                                        <td>
                                            <div class="btn_list_area">
                                                <ul class="list">
                                                    <li class="item on">
                                                        <div class="txt_area">
                                                            <p class="txt">주문하기</p>
                                                        </div>
                                                    </li>
                                                    <li class="item">
                                                        <div class="txt_area">
                                                            <p class="txt">관심상품등록</p>
                                                        </div>
                                                    </li>
                                                    <li class="item">
                                                        <div class="txt_area">
                                                            <div class="icon"></div>
                                                            <p class="txt">삭제</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tb_bottom">
                            <div class="left_txt">
                                <p class="txt">[기본배송]</p>
                            </div>
                            <div class="right_txt">
                                <p class="txt">Lorem, ipsum.</p>
                                <p class="total_txt">Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div class="tb_notice">
                            <ul class="list">
                                <li class="item">
                                    <div class="icon"></div>
                                </li>
                                <li class="item">
                                    <p class="txt">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="tb_btn_area">
                            <ul class="list">
                                <li class="item">
                                    <p class="txt">선택상품을</p>
                                </li>
                                <li class="item">
                                    <div class="btn_area">
                                        <div class="btn on">
                                            <p class="txt">삭제하기</p>
                                        </div>
                                        <div class="btn">
                                            <p class="txt">해외배송사품 장바구니로 이동</p>
                                        </div>
                                        <div class="btn on">
                                            <p class="txt">전부 삭제하기</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tb_total_calc_area">
                            <ul class="list">
                                <li class="item">
                                    <p class="txt">{{gs_total_price}}원</p>
                                </li>
                                <li class="item">
                                    <p class="txt">-{{gs_sale_price}}원</p>
                                </li>
                                <li class="item2">
                                    <p class="txt">={{gs_seller_price}}원</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cart_btn_area">
                    <div class="cent_btn">
                        <ul class="list">
                            <li class="item on">
                                <p class="txt">전체상품주문</p>
                            </li>
                            <li class="item">
                                <p class="txt">선택상품주문</p>
                            </li>
                        </ul>
                    </div>
                    <div class="continue_btn">
                        <p class="txt">쇼핑 계속하기</p>
                    </div>
                </div>
                <div class="use_info_tb">
                    <div class="tit_area">
                        <p class="txt">이용안내</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb">
        <div class="gs_cart">
            <div class="inner">
                <div class="tit_area">
                    <h2 class="txt">Shopping Cart</h2>
                </div>
                <div class="cart_list_area">
                    <div class="segment_area">
                        <ul class="list">
                            <li class="item on">
                                <a href="#" class="txt">국내배송상품(1)</a>
                            </li>
                            <li class="item">
                                <a href="#" class="txt">해외배송상품(1)</a>
                            </li>
                        </ul>
                    </div>
                    <div class="list_area">
                        <div class="toggle_section">
                            <div class="toggle_top">
                                <p class="txt">장바구니 상품</p>
                                <div class="icon"></div>
                            </div>
                            <div class="section">
                                <div class="tb_top">
                                    <p class="txt">일반상품({{cart_list.length}})</p>    
                                </div>
                                <ul class="list">
                                    <li class="item" v-for="item of cart_list" v-bind:key="item.index">
                                        <table>
                                            <colgroup>
                                                <col class="col1">
                                                <col class="col2">
                                            </colgroup>
                                            <tbody>
                                                <tr class="check">
                                                    <td>
                                                        <input type="checkbox" class="check_input" :value="item.idx">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="img_area" :style="{backgroundImage:'url('+item['img_path']+')'}">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h2 class="gs_name">{{item.gs_name}}.</h2>
                                                        <p class="gs_txt" v-show="false">{{item.gs_name}}.</p>
                                                        <p class="gs_txt" v-show="false">-</p>
                                                        <p class="gs_txt" v-show="false">Lorem, ipsum.</p>
                                                        <p class="gs_txt" v-show="false">Lorem, <b class="bold">ipsum</b>sdfsdfdsf.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <div class="count_area">
                                                            <div class="cnt_btn" v-on:click="chang_cnt('down',item)">
                                                                <p class="txt">-</p>
                                                            </div>
                                                            <div class="input_area">
                                                                <p class="txt">{{item.gs_cnt}}</p>
                                                            </div>
                                                            <div class="cnt_btn" v-on:click="chang_cnt('up',item)">
                                                                <p class="txt">+</p>
                                                            </div>
                                                            <div class="adjust_btn">
                                                                <p class="txt">적용</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li class="item">
                                        <div class="btn_area">
                                            <div class="left_side">
                                                <div class="btn" v-on:click="delete_item(item.idx)">
                                                    <p class="txt">삭제</p>
                                                </div>
                                                <div class="btn" v-on:click="wish_item(item.idx)">
                                                    <p class="txt">관심상품</p>
                                                </div>
                                            </div>
                                            <div class="right_side" v-on:click="order_item(item.idx)">
                                                 <div class="btn">
                                                    <p class="txt">주문하기</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="toggle_section">
                            <div class="toggle_top">
                                <p class="txt">[기본배송]</p>
                                <div class="icon"></div>
                            </div>
                            <div class="section">
                                <div class="btn_list_area">
                                    <div class="inner_area">
                                        <div class="btn_area">
                                            <div class="btn">
                                                <p class="txt">전체선택</p>
                                            </div>
                                            <div class="btn">
                                                <p class="txt">산택삭제</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="total_price_area">
                            <div class="total_area">
                                <h2 class="txt">결제예정금액</h2>
                                <h2 class="price">{{gs_seller_price}}원</h2>
                            </div>
                            <div class="gs_price_area">
                                <h2 class="txt">총 상품금액</h2>
                                <h2 class="price">{{gs_total_price}}원</h2>
                            </div>
                            <div class="gs_price_area">
                                <h2 class="txt">총 할인금액</h2>
                                <h2 class="price">-{{gs_sale_price}}원</h2>
                            </div>
                            <div class="gs_price_area">
                                <h2 class="txt">총 배송비</h2>
                                <h2 class="price">-{{gs_sale_price}}원</h2>
                            </div>
                        </div>
                        <div class="btn_area">
                            <ul class="list">
                                <li class="item">
                                    <p class="txt">선택상품주문</p>
                                </li>
                                <li class="item on">
                                    <p class="txt">잔체상품주문</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import $ from 'jquery'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:"CartView",
    components:{
        Header,Footer
    },
    data() {
        return {
            cart_list:{},
            gs_total_price:0,
            gs_seller_price:0,
            gs_sale_price:0
        }
    },
    methods: {
        chang_cnt:function(method,item){
            if(method=='up'){
                item.gs_cnt++;
            }else{
                item.gs_cnt--;
            }
            var cart_list_arr=this.cart_list;
            var gs_total_price=0;
            var gs_seller_price=0;
            var gs_sale_price=0;
            for(var item2 of cart_list_arr){
                gs_total_price+=item2['gs_cnt']*(item2['gs_price']);
                gs_seller_price+=item2['gs_cnt']*(item2['gs_price']-item2['gs_sale']);
                gs_sale_price+=item2['gs_cnt']*(item2['gs_sale']);
            }
            this.gs_total_price=gs_total_price;
            this.gs_seller_price=gs_seller_price;
            this.gs_sale_price=gs_sale_price;
        },
        my_cart_list:function(idx,user_idx){
            var obj ={
                idx:idx,
                user_idx:user_idx
            };
            var change_cart_fun = this.change_cart_list;
            $.ajax({
                url : 'http://localhost/vue_shopping/api/my_cart_list',
                data:obj,
                type:"POST",
                beforeSend:function(){
                    $('#ajax_loding').show();
                    $('body').addClass('noscroll');
                },
                success:function(res){
                    var result = JSON.parse(res);
                    change_cart_fun(result['data']['cart_list']);
                },error:function(a,b,c){
                    $('#ajax_loding').hide();
                    $('body').removeClass('noscroll');
                    console.log(a,b,c);
                    alert('서버에서 오류 발생');
                }
            })
        },
        change_cart_list:function(obj){
            this.cart_list=obj;
            var gs_total_price=0;
            var gs_seller_price=0;
            var gs_sale_price=0;
            for(var item2 of obj){
                gs_total_price+=item2['gs_cnt']*(item2['gs_price']);
                gs_seller_price+=item2['gs_cnt']*(item2['gs_price']-item2['gs_sale']);
                gs_sale_price+=item2['gs_cnt']*(item2['gs_sale']);
            }
            this.gs_total_price=gs_total_price;
            this.gs_seller_price=gs_seller_price;
            this.gs_sale_price=gs_sale_price;
        }
    },
    mounted() {
        var my_cart_fun = this.my_cart_list;
        $.ajax({
            url:"https://api.ipify.org?format=json",
            success:function(res){
                var user_idx=0;
                my_cart_fun(res['ip'],user_idx);
            }
        });
    },
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
