<template>
  <div class="wrap">
    <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">상품 등록하기</h2>
                <div class="register_area">
                    <ul class="list">
                        <li class="item">
                            <h2 class="txt">상품이름</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">상품가격</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">할인가격</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">상품요약</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">상품설명</h2>
                            <div class="input_area">
                                <div class="input_box_textarea">
                                    <textarea></textarea>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">상품이미지</h2>
                            <div class="input_area">
                                <div class="input_box_files">
                                    <ul class="list">
                                        <li class="item">
                                            <p class="txt main">메인이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">서브이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">서브이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">서브이미지</p>
                                            <input type="file">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="btn">
                                    <button>등록하기</button>
                                </div>
                                <div class="btn">
                                    <button>초기화</button>
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
