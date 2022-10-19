<template>
  <div class="wrap">
   <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">메뉴 순서</h2>
                <h2 v-show="false" class="tit">카테고리 속한 상세 메뉴 순서 변경하기 상세보기 순서(파라매타가 들어오면 작동)</h2>
                <!-- 한 페이지에서 큰 카테고리 순서 변경, 상세 카테고리 순서 변경 둘다 되게 하기 -->
                <div class="category_cate_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col1">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>카테고리 명</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr v-for="item of 5" v-bind:key="item.index">
                                <td>1</td>
                                <td>1</td>
                                <td><button class="btn">상세 메뉴</button></td>
                                <td>
                                    <div class="btn_up_down">
                                        <button class="btn">▲</button>
                                        <button class="btn">▼</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
