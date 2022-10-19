<template>
    <div class="side_menu">
        <div class="logo_area">
        </div>
        <nav>
            <ul class="nav">
                <li class="item">
                    <div class="title_area">
                        <h2 class="tit">SideNav</h2>
                    </div>
                    <div class="nav_item">
                        <div class="clip">
                            <p class="txt">Goods</p>
                        </div>
                        <div class="sub_nav">
                            <ul class="list">
                                <li class="item">
                                    <p v-on:click="goto_page('gs_register')" class="txt">상품목록</p>
                                </li>
                                <li class="item">
                                    <p v-on:click="goto_page('gs_list')" class="txt">상품등록</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                  <li class="item">
                    <div class="nav_item">
                        <div class="clip">
                            <p class="txt">Order</p>
                        </div>
                        <div class="sub_nav">
                            <ul class="list">
                                <li class="item">
                                    <p v-on:click="goto_page('order_list')" class="txt">주문리스트</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="nav_item">
                        <div class="clip">
                            <p class="txt">User</p>
                        </div>
                        <div class="sub_nav">
                            <ul class="list">
                                <li class="item">
                                    <p v-on:click="goto_page('user_list')" class="txt">회원 리스트</p>
                                </li>
                                <li class="item">
                                    <p v-on:click="goto_page('user_register')" class="txt">회원 추가</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="nav_item">
                        <div class="clip">
                            <p class="txt">Display</p>
                        </div>
                        <div class="sub_nav">
                            <ul class="list">
                                <li class="item">
                                    <p v-on:click="goto_page('banner_register')" class="txt">배너</p>
                                </li>
                                <li class="item">
                                    <p v-on:click="goto_page('banner_list')" class="txt">배너리스트</p>
                                </li>
                                <li class="item">
                                    <p v-on:click="goto_page('category_register')" class="txt">메뉴등록</p>
                                </li>
                                <li class="item">
                                    <p v-on:click="goto_page('category_flow_edit')" class="txt">메뉴리스트</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Side_menu",
    methods: {
        goto_page:function(page){
            this.$router.push(`/admin/${page}`);
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/admin.scss";
</style>