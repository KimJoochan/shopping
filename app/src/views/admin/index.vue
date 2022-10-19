<template>
  <div class="wrap">
   <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">주문리스트확인 영역</h2>
                <div class="index_order_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>주문날짜</th>
                                <th>사용자</th>
                                <th>주문상태</th>
                                <th>등록일</th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2022-10-20</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item">
                                <p class="txt">더보기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2 class="tit">상품현황 영역</h2>
                 <div class="index_gs_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col1">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>이미지</th>
                                <th>상품명</th>
                                <th>재고</th>
                                <th>가격</th>
                                <th>등록일</th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td><div class="thumbnail"></div></td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2022-10-20</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item">
                                <p class="txt">추가하기</p>
                            </li>
                            <li class="item">
                                <p class="txt">더보기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2 class="tit">사용자리스트 영역</h2>
                <div class="index_user_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>아이디</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>가입일</th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>010-9494-8585</td>
                                <td>2022-10-20</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item">
                                <p class="txt">추가하기</p>
                            </li>
                            <li class="item">
                                <p class="txt">더보기</p>
                            </li>
                        </ul>
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
