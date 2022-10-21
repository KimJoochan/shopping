<template>
  <div class="info_view">
    <Header/>
    <div class="pc">
        <div class="gs_info">
            <div class="inner">
                <div class="flow_area">
                    <p class="txt">home>{{info_obj.info['gs_name']}}</p>
                </div>
                <div class="info_area">
                    <div class="img_area">
                        <div class="swiper pc_gsInfo_swiper" v-show="info_obj.img_list.length>0">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item of info_obj.img_list" v-bind:key="item.index" :style="{backgroundImage:'url('+item+')'}"></div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div class="banner_empty" v-show="info_obj.img_list.length==0"><p class="txt">이미지가 없음</p></div>
                    </div>
                    <div class="info_txt_area">
                        <div class="gs_name_area">
                            <p class="tit">{{info_obj.info['gs_name']}}</p>
                        </div>
                        <div class="gs_tb_area">
                            <table class="gs_tb">
                                <colgroup>
                                    <col class="col1">
                                    <col class="col2">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="col1">
                                            <p class="txt">판매가</p>
                                        </td>
                                        <td class="col2">
                                            <p class="line_txt" v-show="info_obj.info['gs_price']>0">{{info_obj.info['gs_price']}}원</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col1">
                                            <p class="txt">할인판매가</p>
                                        </td>
                                        <td class="col2">
                                            <p class="sale_price">{{info_obj.info['gs_price'] - info_obj.info['gs_sale']}}원</p>
                                            <p class="sale_txt" v-show="info_obj.info['gs_sale']>0">({{info_obj.info['gs_sale']}}원 할인)</p>
                                        </td>
                                    </tr>
                                    <tr v-if="false">
                                        <td class="col1">
                                            <p class="txt">할인기간</p>
                                        </td>
                                        <td class="col2">
                                            <p class="deadline_txt">남은시간 1505일 10:26:24(350원 할인)</p>
                                            <p class="txt">2021-10-05 00:00 ~ 2026-10-31 23:55</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="gs_cnt_controll_area">
                            <div class="name_area">
                                <p class="txt">{{info_obj.info['gs_name']}}</p>
                            </div>
                            <div class="count_area">
                                <div class="cnt">
                                    <p class="txt">{{gs_cnt}}</p>
                                </div>
                                <div class="btn_area">
                                    <div class="up btn" v-on:click="gs_cnt_change('up')"></div>
                                    <div class="down btn" v-on:click="gs_cnt_change('down')"></div>
                                </div>
                            </div>
                            <div class="price_area">
                                <p class="txt">{{info_obj.info['gs_price'] - info_obj.info['gs_sale']}}원</p>
                            </div>
                        </div>
                        <div class="total_price_area">
                            <div class="txt_area">
                                <p class="txt">총 상품금역(수량):</p>
                                <p class="price">{{gs_cnt * (info_obj.info['gs_price'] - info_obj.info['gs_sale'])}}원</p>
                                <p class="txt">{{gs_cnt}}개</p>
                            </div>
                        </div>
                        <div class="btn_list_area">
                            <div class="btn wish_btn">
                                <div class="icon">

                                </div>
                            </div>
                            <div class="btn cart_btn" v-on:click="insert_cart()">
                                <p class="txt">CART</p>
                            </div>
                            <div class="btn buy_btn">
                                <p class="txt">BUY IT NOW</p>
                            </div>
                        </div>
                        <div class="gs_comment_area">
                            <p class="tit">comment</p>
                            <p class="txt">{{info_obj.info['gs_short_txt']}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item on">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="desc_area" v-html="info_obj.info['gs_explain']">

            </div>
        </div>
        <div class="guide_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="table_area">

            </div>
        </div>
        <div class="with_item_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">WITH ITEM</h2>
                    <p class="sub">함께 코디된 상품입니다.</p>
                </div>
            </div>
            <div class="list_area">
                <ul class="list">
                    <li class="item">
                        <div class="img_area">

                        </div>
                        <p class="name">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div class="price_area">
                            <p class="origin_txt">Lorem.</p>
                            <p class="seller_txt">Lorem, ipsum.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="review_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">REVIEW</h2>
                    <p class="sub">상품의 사용후기를 적어주세요.</p>
                </div>
            </div>
            <div class="table_area">
                <div class="table_inner">
                    <div class="empty">
                        <p class="txt">게시글이 없습니다.</p>
                    </div>
                    <table class="tb">
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col3">
                            <col class="col4">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="col1">
                                    <p class="txt">번호</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">글쓴이</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">내용</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">점수</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item write">
                                <p class="txt">상품후기쓰기</p>
                            </li>
                            <li class="item">
                                <p class="txt">모두보기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
        <div class="qna_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">Q&A</h2>
                    <p class="sub">상품에 대해 궁금한 점을 해결해 드립니다.</p>
                </div>
            </div>
            <div class="table_area">
                <div class="table_inner">
                    <div class="empty">
                        <p class="txt">게시글이 없습니다.</p>
                    </div>
                    <table class="tb">
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col3">
                            <col class="col4">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="col1">
                                    <p class="txt">번호</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">글쓴이</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">내용</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">조회수</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <p class="txt">1</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">Lorem</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolore mollitia id suscipit quae ducimus excepturi sapiente aliquid asperiores quod? Laboriosam quos culpa minima impedit quam labore quasi earum nostrum!</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">1</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item write">
                                <p class="txt">상품문의하기</p>
                            </li>
                            <li class="item">
                                <p class="txt">모두 보기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <div class="mb">
        <div class="gs_info">
            <div class="img_area">
                <div class="thumbnail_area">
                    <div class="swiper mb_gsInfo_swiper" v-show="info_obj.img_list.length>0">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item of info_obj.img_list" v-bind:key="item.index" :style="{backgroundImage:'url('+item+')'}"></div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    <div class="banner_empty" v-show="info_obj.img_list.length==0"><p class="txt">이미지가 없음</p></div>
                </div>
            </div>
            <div class="info_area">
                <div class="gs_name_area">
                    <div class="gs_name_inner">
                        <h2 class="gs_txt">{{info_obj.info['gs_name']}}</h2>
                        <div class="mark">
                            <ul class="list">
                                <li class="item one">
                                    <p class="txt">Lorem</p>
                                </li>
                                <li class="item two">
                                    <p class="txt">Lorem</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info_tb_area">
                    <div class="tb_inner">
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <p class="txt">판매가</p>
                                    </td>
                                    <td>
                                        <p class="txt line" v-show="info_obj.info['gs_price']>0">{{info_obj.info['gs_price']}}원원</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="txt">할인판매가</p>
                                    </td>
                                    <td>
                                        <p class="txt">{{info_obj.info['gs_price'] - info_obj.info['gs_sale']}}원</p>
                                        <p class="sale_txt" v-show="info_obj.info['gs_sale']>0">({{info_obj.info['gs_sale']}}원 할인)</p>
                                    </td>
                                </tr>
                                <tr v-show="false">
                                    <td>
                                        <p class="txt">할인기간</p>
                                    </td>
                                    <td>
                                        <p class="txt_during">남은시간 1504일 12:04:25(700원 할인)</p>
                                        <p class="txt">2021-10-05 00:00 ~ 2026-10-31 23:55</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="txt">색상</p>
                                    </td>
                                    <td>
                                        <div class="option_area">
                                            <ul class="list">
                                                <li class="item"></li>
                                                <li class="item"></li>
                                                <li class="item"></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        <p class="txt">개수</p>
                                    </td>
                                    <td>
                                        <div class="count_area">
                                            <div class="cnt">
                                                <p class="txt">{{gs_cnt}}</p>
                                            </div>
                                            <div class="btn_area">
                                                <div class="up btn" v-on:click="gs_cnt_change('up')"></div>
                                                <div class="down btn" v-on:click="gs_cnt_change('down')"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="total_price_area">
                    <div class="inner_center">
                        <p class="txt">총상품금액(수량):</p>
                        <h2 class="price">{{gs_cnt * (info_obj.info['gs_price'] - info_obj.info['gs_sale'])}}</h2>
                        <p class="txt">원</p>
                    </div>
                </div>
                <div class="btn_area">
                    <ul class="list">
                        <li class="item wish">
                            <div class="icon"></div>
                        </li>
                        <li class="item cart" v-on:click="insert_cart()">
                            <p class="txt">Cart</p>
                        </li>
                        <li class="item buy">
                            <p class="txt">BUY IT NOW</p>
                        </li>
                    </ul>

                </div>
                <div class="comment_area">
                    <h2 class="tit">Comment</h2>
                    <ul class="list">
                        <li class="item">
                            <p class="txt">{{info_obj.info['gs_short_txt']}}.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="detail_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item on">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="desc_area" v-html="info_obj.info['gs_explain']">

            </div>
        </div>
        <div class="guide_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="table_area">

            </div>
        </div>
        <div class="with_item_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">WITH ITEM</h2>
                    <p class="sub">함께 코디된 상품입니다.</p>
                </div>
            </div>
            <div class="list_area">
                <ul class="list">
                    <li class="item">
                        <div class="img_area">

                        </div>
                        <p class="name">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div class="price_area">
                            <p class="origin_txt">Lorem.</p>
                            <p class="seller_txt">Lorem, ipsum.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="review_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">REVIEW</h2>
                    <p class="sub">상품의 사용후기를 적어주세요.</p>
                </div>
            </div>
            <div class="table_area">
                <div class="table_inner">
                    <div class="empty">
                        <p class="txt">게시글이 없습니다.</p>
                    </div>
                    <table class="tb">
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col3">
                            <col class="col4">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="col1">
                                    <p class="txt">번호</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">글쓴이</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">내용</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">점수</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item write">
                                <p class="txt">상품후기쓰기</p>
                            </li>
                            <li class="item">
                                <p class="txt">모두보기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
        <div class="qna_area section">
            <div class="segment_area">
                <ul class="segment_list">
                    <li class="item">
                        <a href="#" class="txt">Detail</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Guide</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">With item</a>
                    </li>
                    <li class="item">
                        <a href="#" class="txt">Review(0)</a>
                    </li>
                    <li class="item on">
                        <a href="#" class="txt">Q&A(0)</a>
                    </li>
                </ul>
            </div>
            <div class="txt_area">
                <div class="txt_center">
                    <h2 class="tit">Q&A</h2>
                    <p class="sub">상품에 대해 궁금한 점을 해결해 드립니다.</p>
                </div>
            </div>
            <div class="table_area">
                <div class="table_inner">
                    <div class="empty">
                        <p class="txt">게시글이 없습니다.</p>
                    </div>
                    <table class="tb">
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col3">
                            <col class="col4">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="col1">
                                    <p class="txt">번호</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">글쓴이</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">내용</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">조회수</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <p class="txt">1</p>
                                </td>
                                <td class="col2">
                                    <p class="txt">Lorem</p>
                                </td>
                                <td class="col3">
                                    <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolore mollitia id suscipit quae ducimus excepturi sapiente aliquid asperiores quod? Laboriosam quos culpa minima impedit quam labore quasi earum nostrum!</p>
                                </td>
                                <td class="col4">
                                    <p class="txt">1</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item write">
                                <p class="txt">상품문의하기</p>
                            </li>
                            <li class="item">
                                <p class="txt">모두 보기</p>
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
    components:{
        Header,Footer
    },
    data() {
        return {
            info_obj:{
                info:"",
                img_list:[],
            },
            gs_cnt:1
        }
    },
    methods: {
        change_info_obj:function(obj){
            this.info_obj=obj;
        },
        gs_cnt_change:function(txt){
            if(txt=='up'){
                this.gs_cnt++;
            }else if(txt=='down'){
                if(this.gs_cnt>1){
                    this.gs_cnt--;
                }
            }
        },
        ajax_insert_cart:function(obj){
            $.ajax({
                url : 'http://localhost/vue_shopping/api/insert_cart',
                data:obj,
                type:"POST",
                beforeSend:function(){
                    $('#ajax_loding').show();
                    $('body').addClass('noscroll');
                },
                success:function(res){
                    console.log(res);
                    var result = JSON.parse(res);
                    alert(result['msg']);
                },error:function(a,b,c){
                    $('#ajax_loding').hide();
                    $('body').removeClass('noscroll');
                    console.log(a,b,c);
                    alert('서버에서 오류 발생');
                }
            })
        },
        insert_cart:function(){
            var gs_count = this.gs_cnt;
            var gs_idx = this.info_obj.info['idx'];
            var ajax_insert_fun = this.ajax_insert_cart;
            $.ajax({
                url:"https://api.ipify.org?format=json",
                success:function(res){
                    var obj ={
                        gs_idx:gs_idx,
                        cnt : gs_count,
                        non_user:res['ip'],
                        user_idx:""
                    };
                    ajax_insert_fun(obj);
                }
            });
          
        }
    },
    mounted() {
        this.idx=this.$route.query.idx;
        var change_info_fun = this.change_info_obj;
        let obj = {
            idx:this.idx
        };
        $.ajax({
            url : 'http://localhost/vue_shopping/api/gs_info_by_idx',
            data:obj,
            type:"POST",
            beforeSend:function(){
                $('#ajax_loding').show();
                $('body').addClass('noscroll');
            },
            success:function(res){
                var result = JSON.parse(res);
                change_info_fun(result['data']);
                console.log(result['data']);
            },error:function(a,b,c){
                $('#ajax_loding').hide();
                $('body').removeClass('noscroll');
                console.log(a,b,c);
                alert('서버에서 오류 발생');
            }
        })
    },
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
