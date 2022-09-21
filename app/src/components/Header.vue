<template>
    <div class="header">
        <div class="pc">
            <aside>
                <div class="left_area">
                    <div class="icon_area">

                    </div>
                    <div class="recent_search">
                        <div class="txt_area">
                            <div class="txt_mask">
                                <ul class="txt_list">
                                    <li class="item">
                                        <p class="txt_num">1</p>
                                        <p class="txt_text">Lorem</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="icon_area">

                        </div>
                    </div>          
                </div>
                <div class="right_area">
                    <div class="right_nav">
                        <ul class="list">
                            <li class="item">
                                <div class="txt_area">
                                    <p class="txt">JOIN US</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt_area">
                                    <p class="txt">LOGIN</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt_area">
                                    <p class="txt">CART</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt_area">
                                    <p class="txt">ORDER</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="txt_area">
                                    <p class="txt">MY PAGE</p>
                                    <div class="icon_area"></div>
                                </div>
                                <div class="sub_nav" v-show="false">

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            <nav>
                <div class="inner_nav">
                    <div class="left_area">
                        <div class="logo">

                        </div>
                    </div>
                    <div class="center_area">
                        <ul class="list">
                            <li class="item" v-for="item in 5" v-bind:key="item.index">
                                <div class="top_menu">
                                    <p class="txt">Lorem</p>
                                </div>
                                <div class="sub_menu" v-show="false">
                                    <ul class="list">
                                        <li class="item">
                                            <p class="txt">Lorem</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="right_area">
                        <div class="search_area">
                            <div class="input_area"></div>
                            <div class="btn_area"></div>
                        </div>
                        <div class="cart_icon">

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name:"headerView"
}
</script>

<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>