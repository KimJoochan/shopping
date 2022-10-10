<template>
  <div class="wrap">
    <div class="side_menu">
        <div class="logo_area">
        </div>
        <nav>
            <ul class="nav">
                <li class="item">
                    <div class="title_area">
                        <h2 class="tit">Shopping</h2>
                    </div>
                    <div class="nav_item">
                        <div class="clip">
                            <p class="txt">Goods</p>
                        </div>
                        <div class="sub_nav">
                            <ul class="list">
                                <li class="item">
                                    <a href="/goods/list" class="txt">상품목록</a>
                                </li>
                                <li class="item">
                                    <a href="/goods/register" class="txt">상품등록</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">상품 등록하기</h2>
                <div class="gs_register_area">
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
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"AdminIndexView"
}
</script>

<style lang="scss" scoped>
    @import "@/assets/admin.scss";
</style>
