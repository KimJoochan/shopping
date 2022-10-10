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
                <h2 class="tit">주문리스트확인 영역</h2>
            </div>
            <div class="section">
                <h2 class="tit">상품현황 영역</h2>
            </div>
            <div class="section">
                <h2 class="tit">사용자리스트 영역</h2>
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
