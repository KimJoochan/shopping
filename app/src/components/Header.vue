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
                                    <p class="txt" v-on:click="goto_cart()">CART</p>
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
                        <div class="logo" :style="{backgroundImage:'url('+$store.state.logo_obj['pc']['img_path']+')'}" v-on:click="goto_index_page()">
                        </div>
                    </div>
                    <div class="center_area">
                        <ul class="list">
                            <li class="item" v-for="item of $store.state.nav_list" v-bind:key="item.index">
                                <div class="top_menu">
                                    <p class="txt" v-on:click="goto_gs_list(item.top.idx)">{{item.top.nav_name}}</p>
                                </div>
                                <div class="sub_menu" v-if="item.sub!=''">
                                    <ul class="list">
                                        <li class="item" v-for="item2 of item.sub" v-bind:key="item2.index">
                                            <p class="txt" v-on:click="goto_gs_list(item2.idx)">{{item2.nav_name}}</p>
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
        <div class="mb">
            <aside>
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
            </aside>
            <div class="inner_header">
                <div class="inner">
                    <div class="left_side">
                        <div class="ham" v-on:click="mb_nav_open()"></div>
                        <div class="logo" :style="{backgroundImage:'url('+$store.state.logo_obj['mb']['img_path']+')'}" v-on:click="goto_index_page()">
                        </div>
                    </div>
                    <div class="right_side">
                        <div class="search_area">

                        </div>
                        <div class="cart_icon">

                        </div>
                    </div>
                </div>
            </div>
            <div class="nav" v-show="mb_nav_show">
                <div class="nav_header">
                    <div class="txt_area">

                    </div>
                    <div class="btn_area" v-on:click="mb_nav_open()">

                    </div>
                </div>
                <div class="top_segment">
                    <ul class="list">
                        <li class="item">
                            <p class="txt">Join us</p>
                        </li>
                        <li class="item">
                            <p class="txt">Login</p>
                        </li>
                        <li class="item">
                            <p class="txt" v-on:click="goto_cart()">Cart(0)</p>
                        </li>
                        <li class="item">
                            <p class="txt">Order</p>
                        </li>
                        <li class="item">
                            <p class="txt">My page</p>
                        </li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="view_segment">
                    <ul class="list">
                        <li class="item">
                            <div class="btn_area">
                                <div class="icon_area">
                                    <div class="icon"></div>
                                </div>
                                <p class="txt">Lorem</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="icon_area">
                                    <div class="icon"></div>
                                </div>
                                <p class="txt">Lorem</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="icon_area">
                                    <div class="icon"></div>
                                </div>
                                <p class="txt">Lorem</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="icon_area">
                                    <div class="icon"></div>
                                </div>
                                <p class="txt">Lorem</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="icon_area">
                                    <div class="icon"></div>
                                </div>
                                <p class="txt">Lorem</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="segment_nav">
                    <div class="inner_nav">
                        <ul class="list">
                            <li class="item">
                                <p class="txt">Lorem</p>
                            </li>
                            <li class="item">
                                <p class="txt">Lorem</p>
                            </li>
                            <li class="item">
                                <p class="txt">Lorem</p>
                            </li>
                        </ul>
                    </div>
                    <div class="list_nav">
                        <ul class="list">
                            <li class="item" v-for="item of $store.state.nav_list" v-bind:key="item.index">
                                <div class="txt_area">
                                    <p class="txt" v-on:click="goto_gs_list(item.top.idx)">{{item.top.nav_name}}</p>
                                    <div class="mark_area"></div>
                                </div>
                                <div class="sub_nav" v-if="item.sub!=''">
                                    <ul class="sub_list">
                                        <li class="item" v-for="item2 of item.sub" v-bind:key="item2.index">
                                            <p class="txt" v-on:click="goto_gs_list(item2.idx)">{{item2.nav_name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="line"></div>
                <div class="search_area">
                    <div class="inner">
                        <div class="input_area">

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
                </div>
                <div class="line"></div>
                <div class="foot_nav_area">
                    <div class="footer_nav_mb">
                        <ul class="list">
                            <li class="customer item">
                                <h2 class="tit">C/S CENTER</h2>
                                <div class="other_tit">
                                    <h3 class="stress_txt">070-888-1234</h3>
                                    <p class="txt">mon-fir am 09:00~pm 06:00 lunch pm 12:00~pm 01:00</p>
                                    <p class="txt">SAT SUN HOLIDAY <span class="red">closed</span></p>
                                    <div class="btn_area">
                                        <p class="btn_txt">???????????? ????????????</p>
                                    </div>
                                    <div class="btn_area">
                                        <p class="btn_txt">Q&A????????? ????????????</p>
                                    </div>
                                </div>
                            </li>
                            <li class="account item">
                                <h2 class="tit">ACCOUNT</h2>
                                <div class="other_tit">
                                    <p class="txt">Lorem ipsum dolor sit.</p>
                                    <p class="txt">Lorem ipsum dolor sit amet consectetur.</p>
                                    <p class="txt">Lorem ipsum</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="outer_nav" v-show="true">
                <ul class="list">
                    <li class="item" v-for="item of $store.state.mb_nav_list" v-bind:key="item.index">
                        <p class="txt" v-on:click="goto_gs_list(item.idx)">{{item.nav_name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"headerView",
    data() {
        return {
            mb_nav_show:false
        }
    },
    methods: {
        mb_nav_open:function(){
            this.mb_nav_show=!this.mb_nav_show;
        },
        goto_gs_list:function(idx){
            this.$router.push('/list?idx='+idx);
        },
        goto_index_page:function(){
            this.$router.push('/');
        },
        goto_cart:function(){
            this.$router.push('/cart');
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>