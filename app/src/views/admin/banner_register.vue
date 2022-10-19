<template>
  <div class="wrap">
    <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">배너 등록하기</h2>
                <div class="register_area">
                    <ul class="list">
                        <li class="item">
                            <h2 class="txt">PC버전 배너</h2>
                            <div class="input_area">
                                <div class="input_box_files">
                                    <ul class="list">
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">모바일 버전 배너</h2>
                            <div class="input_area">
                                <div class="input_box_files">
                                    <ul class="list">
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                            <!-- 기존 이미지 있을때 삭제 -->
                                            <button class="btn red">삭제</button>
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
                                            <input type="file">
                                        </li>
                                        <li class="item">
                                            <p class="txt">이미지</p>
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
