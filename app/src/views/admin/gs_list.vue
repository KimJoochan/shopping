<template>
  <div class="wrap">
   <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">상품현황</h2>
                 <div class="goods_gs_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col1">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                            <col class="col2">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>이미지</th>
                                <th>상품명</th>
                                <th>재고</th>
                                <th>가격</th>
                                <th>등록일</th>
                                <th></th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td><div class="thumbnail"></div></td>
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
                    <div class="btn_area">
                        <ul class="list">
                            <li class="item">
                                <p class="txt">추가하기</p>
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
