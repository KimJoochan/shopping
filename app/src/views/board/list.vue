<template>
  <div class="board_list_view">
    <Header/>
    <div class="pc">
        <div class="list_view">
            <div class="inner">
                <div class="flow_area">
                    <!-- 공지사항 게시판(썸네일이 없는 것) -->
                    <p class="txt">home>게시판>NOTICE</p>
                    <!-- 리뷰게시판(썸네일이 있는 것) -->
                    <p class="txt" v-show="false">home>게시판>리뷰</p>
                </div>
                <div class="tit_area">
                    <!-- 비밀번호 찾기 -->
                    <h2 class="txt">Notice</h2>
                    <p class="sub_txt">공지사항입니다</p>
                    <!-- 아이디 찾기 -->
                    <h2 class="txt" v-show="false">Review</h2>
                    <p class="sub_txt" v-show="false">상품 사용후기입니다</p>
                </div>
                <div class="no_thumnail_list_view">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col2">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr class="th">
                                <td>
                                    <p class="txt">번호</p>
                                </td>
                                <td>
                                    <p class="txt">제목</p>
                                </td>
                                <td>
                                    <p class="txt">작성자</p>
                                </td>
                            </tr>
                            <tr class="tr" v-for="item in 5" v-bind:key="item.index">
                                <td>
                                    <p class="txt">{{item}}</p>
                                </td>
                                <td class="title">
                                    <div class="in_title">
                                        <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos fugit, ex corrupti tempore odit mollitia nobis praesentium esse molestias ipsa impedit neque? Quos expedita natus corrupti neque officiis corporis!
                                        Dolore et id aliquam, nam quia possimus quibusdam corrupti dicta accusamus nobis eius minima maiores ut consequatur ad perferendis ex velit repudiandae beatae accusantium aliquid dolorem vitae itaque esse. Ipsa?</p>
                                    </div>
                                </td>
                                <td>
                                    <p class="txt">Loem</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="thumnail_list_view" v-show="false">
                    <table>
                        <colgroup>
                            <col class="col1">
                            <col class="col1">
                            <col class="col2">
                            <col class="col1">
                        </colgroup>
                        <tbody>
                            <tr class="th">
                                <td>
                                    <p class="txt">번호</p>
                                </td>
                                <td>
                                    <p class="txt">상품정보</p>
                                </td>
                                <td>
                                    <p class="txt">제목</p>
                                </td>
                                <td>
                                    <p class="txt">작성자</p>
                                </td>
                            </tr>
                            <tr class="tr" v-for="item in 5" v-bind:key="item.index">
                                <td>
                                    <p class="txt">{{item}}</p>
                                </td>
                                <td>
                                    <div class="thumbnail">

                                    </div>
                                </td>
                                <td class="title">
                                    <div class="in_title">
                                        <p class="gs_name">Lorem, ipsum.</p>
                                        <p class="gs_review">Lorem, ipsum.</p>
                                    </div>
                                </td>
                                <td>
                                    <p class="txt">Loem</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:"boardListView",
    components:{
        Header,Footer
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
