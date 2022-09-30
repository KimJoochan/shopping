<template>
  <div class="login_view">
    <Header/>
    <div class="pc">
        <div class="login_inner">
            <div class="inner">
                <div class="flow_area">
                    <p class="txt">home>login</p>
                </div>
                <div class="login_form_area">
                    <div class="inner_form_area">
                        <div class="inner_area">
                            <div class="txt_area">
                                <p class="txt">회원로그인</p>
                            </div>
                            <div class="form_area">
                                <div class="input_area">
                                    <div class="input"></div>
                                    <div class="input"></div>
                                </div>
                                <div class="btn_area">
                                    <p class="txt">로그인</p>
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="search_area">
                                <ul class="list">
                                    <li class="item">
                                        <p class="txt">아이디 찾기</p>
                                    </li>
                                    <li class="item">
                                        <p class="txt">비밀번호 찾기</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="join_area">
                                <div class="txt_area">
                                    <h2 class="tit">NEW MEMBER</h2>
                                    <p class="sub_txt">Lorem, ipsum dolor.</p>
                                </div>
                                <div class="btn_area">
                                    <p class="txt">회원가입</p>
                                </div>
                            </div>
                            <div class="line"></div>
                            <!-- 구매하기 할 시 비회원이면 나오는 영역 -->
                            <div class="no_user_buy_area">
                                <p class="txt">Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.</p>
                                <div class="buy_btn">
                                    <p class="txt">비회원구매</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 비회원으로 주문상품 조회시 입력해야하는 폼 -->
                <div class="nologin_form_area">
                     <div class="inner_form_area">
                        <div class="inner_area">
                            <div class="txt_area">
                                <p class="txt">회원로그인</p>
                                <p class="sub_txt">비회원의 경우, 주문시의 주문번호로 주문조회가 가능합니다.</p>
                            </div>
                            <div class="form_area">
                                <div class="user_input">
                                    <div class="txt_area">
                                        <p class="txt">주문자명</p>
                                    </div>
                                    <div class="input_area">
                                        <input type="text" class="txt">
                                    </div>
                                </div>
                                <div class="user_input">
                                    <div class="txt_area">
                                        <p class="txt">주문번호</p>
                                    </div>
                                    <div class="input_area">
                                        <input type="text" class="txt" placeholder="주문번호">
                                    </div>
                                </div>
                                <div class="user_input">
                                    <div class="txt_area">
                                        <p class="txt">비회원주문 비밀번호</p>
                                    </div>
                                    <div class="input_area">
                                        <input type="text" class="txt">
                                    </div>
                                </div>
                                <div class="btn_area">
                                    <p class="txt">조회</p>
                                </div>
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
    name:"loginView",
    components:{
        Header,Footer
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>