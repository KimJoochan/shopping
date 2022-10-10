<template>
  <div class="board_read_view">
    <Header/>
    <div class="pc">
        <div class="read_view">
            <div class="inner">
                <div class="flow_area">
                    <!-- 공지사항 게시판(썸네일이 없는 것) -->
                    <p class="txt">home>게시판>NOTICE</p>
                    <!-- 리뷰게시판(썸네일이 있는 것) -->
                    <p class="txt" v-show="false">home>게시판>리뷰</p>
                </div>
                <div class="tit_area">
                    <h2 class="txt">Notice</h2>
                    <p class="sub_txt">공지사항입니다</p>
                    <h2 class="txt" v-show="false">Review</h2>
                    <p class="sub_txt" v-show="false">상품 사용후기입니다</p>
                </div>
                <div class="columns">
                    <div class="gs_info_area">
                        <div class="thumbnail">

                        </div>
                        <div class="desc_area">
                            <div class="option_area">
                                <ul class="list">
                                    <li class="item one">
                                        <p class="txt">Lorem</p>
                                    </li>
                                    <li class="item two">
                                        <p class="txt">Lorem, ipsum dolor.</p>
                                    </li>
                                    <li class="item one">
                                        <p class="txt">Lorem</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="info_area">
                                <p class="gs_name">Lorem, ipsum dolor.</p>
                                <p class="gs_price">10,000원</p>
                            </div>
                            <div class="line"></div>
                            <div class="btn_area">
                                <div class="btn">
                                    <p class="txt">상품 상세보기</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tb_area">
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">제목</p>
                                    </td>
                                    <td>
                                        <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam voluptatibus commodi iusto possimus, ratione eum quasi officiis sunt non qui, fugiat vitae a recusandae natus aspernatur, incidunt quae facere.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">작성자</p>
                                    </td>
                                    <td>
                                        <p class="txt">Lorem</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tb_desc">

                    </div>
                    <div class="tb_area">
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">첨부파일</p>
                                    </td>
                                    <td>
                                        <a href="#" class="txt">Lorem</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn_area">
                        <div class="btn">
                            <p class="txt">목록</p>
                        </div>
                    </div>
                      <div class="comment_area">
                        <div class="empty">
                            <p class="txt">댓글이 없습니다.</p>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <h2 class="tit">Lorem, ipsum.</h2>
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </li>
                        </ul>
                        <div class="btn_area">
                            <div class="not_auth">
                                <p class="txt">회원에게만 댓글 작성 권한이 있습니다.</p>
                            </div>
                            <div class="auth">
                                <div class="input_area">
                                    <input type="text">
                                </div>
                                <div class="btn_area">
                                    <button type="button">작성</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next_prev_area">
                        <div class="section">
                            <div class="txt_area">
                                <p class="txt">이전글</p>
                            </div>
                            <div class="desc_area">
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="txt_area">
                                <p class="txt">다음글</p>
                            </div>
                            <div class="desc_area">
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb">
        <div class="read_view">
            <div class="inner">
                <div class="tit_area">
                    <h2 class="txt">Notice</h2>
                    <p class="sub_txt">공지사항입니다</p>
                    <h2 class="txt" v-show="false">Review</h2>
                    <p class="sub_txt" v-show="false">상품 사용후기입니다</p>
                </div>
                <div class="columns">
                    <div class="gs_info_area">
                        <div class="thumbnail">

                        </div>
                        <div class="desc_area">
                            <div class="option_area">
                                <ul class="list">
                                    <li class="item one">
                                        <p class="txt">Lorem</p>
                                    </li>
                                    <li class="item two">
                                        <p class="txt">Lorem, ipsum dolor.</p>
                                    </li>
                                    <li class="item one">
                                        <p class="txt">Lorem</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="info_area">
                                <p class="gs_name">Lorem, ipsum dolor.</p>
                                <p class="gs_price">10,000원</p>
                            </div>
                            <div class="btn_area">
                                <div class="btn">
                                    <p class="txt">상품 상세보기</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tb_area">
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">제목</p>
                                    </td>
                                    <td>
                                        <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam voluptatibus commodi iusto possimus, ratione eum quasi officiis sunt non qui, fugiat vitae a recusandae natus aspernatur, incidunt quae facere.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">작성자</p>
                                    </td>
                                    <td>
                                        <p class="txt">Lorem</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tb_desc">

                    </div>
                    <div class="tb_area">
                        <table>
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="col1">
                                        <p class="txt">첨부파일</p>
                                    </td>
                                    <td>
                                        <a href="#" class="txt">Lorem</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn_area">
                        <div class="btn">
                            <p class="txt">목록</p>
                        </div>
                    </div>
                    <div class="comment_area">
                        <div class="empty">
                            <p class="txt">댓글이 없습니다.</p>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <h2 class="tit">Lorem, ipsum.</h2>
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </li>
                        </ul>
                        <div class="btn_area">
                            <div class="not_auth">
                                <p class="txt">회원에게만 댓글 작성 권한이 있습니다.</p>
                            </div>
                            <div class="auth">
                                <div class="input_area">
                                    <input type="text">
                                </div>
                                <div class="btn_area">
                                    <button type="button">작성</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next_prev_area">
                        <div class="section">
                            <div class="txt_area">
                                <p class="txt">이전글</p>
                            </div>
                            <div class="desc_area">
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="txt_area">
                                <p class="txt">다음글</p>
                            </div>
                            <div class="desc_area">
                                <p class="txt">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
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
    name:"boardReadView",
    components:{
        Header,Footer
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
