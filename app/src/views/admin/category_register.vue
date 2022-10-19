<template>
  <div class="wrap">
    <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">카테고리 등록하기</h2>
                <div class="register_area">
                    <ul class="list">
                        <li class="item">
                            <h2 class="txt">카테고리 이름</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">부모 메뉴</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">상품</h2>
                            <div class="input_area">
                                <div class="input_box_radio_list">
                                    <div class="gs_area" v-for="item of 5" v-bind:key="item.index">
                                        <label class="label">{{item}}상품</label>
                                        <input type="radio" class="radio">
                                    </div>
                                </div>
                            </div>
                        </li>
                         <li class="item">
                            <h2 class="txt">본문</h2>
                            <div class="input_area">
                                <div class="input_box_textarea">
                                    <textarea></textarea>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="btn">
                                    <button>등록하기</button>
                                </div>
                                <div class="btn delete">
                                    <button class="btn">삭제</button>
                                </div>
                            </div>
                        </li>
                    </ul>
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
