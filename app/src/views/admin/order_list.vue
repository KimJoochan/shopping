<template>
  <div class="wrap">
   <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">주문리스트확인</h2>
                <div class="order_od_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col1">
                            <col class="col2">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>주문번호</th>
                                <th>주문상태</th>
                                <th>등록일</th>
                                <th></th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2022-10-20</td>
                                <td><button class="btn">수정</button></td>
                            </tr>
                        </tbody>
                    </table>
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
            <div class="order_info_pop">
                <div class="back"></div>
                <div class="order_info_pop_inner">
                    <div class="tit_area">
                        <h2 class="tit">해당 주문의 상세 내역</h2>
                        <div class="close"></div>
                    </div>
                    <div class="tb_area">
                        <div class="order_status_arae">
                            <h2 class="tit">주문 상태 변경</h2>
                            <select class="select">
                                <option>배송준비</option>
                            </select>
                        </div>
                        <h2 class="tit">주문자 정보</h2>
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>주문자</td>
                                    <td>Lorem, ipsum.</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 class="tit">상품정보</h2>
                        <table>
                            <colgroup>
                                <col class="col2">
                                <col class="col1">
                                <col class="col1">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>상품명</td>
                                    <td>개수</td>
                                    <td>가격</td>
                                </tr>
                                <tr v-for="item of 5" v-bind:key="item.index">
                                    <td>Lorem, ipsum.</td>
                                    <td>50</td>
                                    <td>50,000</td>
                                </tr>
                                <tr>
                                    <td>총합계</td>
                                    <td>250</td>
                                    <td>250,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '../admin/side_menu'
export default {
    name:"AdminIndexView",
    components:{SideMenu}
}
</script>

<style lang="scss" scoped>
    @import "@/assets/admin.scss";
</style>
