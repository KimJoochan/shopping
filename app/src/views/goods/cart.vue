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
                                    <p class="txt">일반상품(1)</p>
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
                                    <tr class="tr_body">
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
                                    <p class="txt">5000원</p>
                                </li>
                                <li class="item">
                                    <p class="txt">+5000원</p>
                                </li>
                                <li class="item2">
                                    <p class="txt">=5000원</p>
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
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:"CartView",
    components:{
        Header,Footer
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
