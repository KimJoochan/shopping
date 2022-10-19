<template>
  <div class="wrap">
   <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">배너리스트</h2>
                 <div class="banner_list_area">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col1">
                            <col class="col1">
                            <col class="col1">
                            <col class="col1">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>이미지</th>
                                <th>화면</th>
                                <th>순서</th>
                                <th>활성화</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><div class="thumbnail"></div></td>
                                <td>PC</td>
                                <td>1</td>
                                <td>유</td>
                                <td><button class="btn">수정</button></td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    <div class="img_detail">
                                        <p class="txt">클릭시 나오는 이미지</p>
                                    </div>
                                </td>
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
                                <p class="txt">수정하기</p>
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
