<template>
  <div class="find_info_view">
    <Header/>
    <div class="pc">
        <div class="find_view">
            <div class="inner">
                <div class="flow_area">
                    <!-- 비밀번호 찾기 -->
                    <p class="txt">home>find pw</p>
                    <!-- 아이디 찾기 -->
                    <p class="txt" v-show="false">home>find id</p>
                </div>
                <div class="tit_area">
                    <!-- 비밀번호 찾기 -->
                    <h2 class="txt">Find PW</h2>
                    <!-- 아이디 찾기 -->
                    <h2 class="txt" v-show="false">Find ID</h2>
                    <p class="sub_txt" v-show="false">Lorem ipsum dolor, sit amet <br>consectetur adipisicing elit.Incidunt cupiditate ratione non</p>
                </div>
                <div class="form_outer_area">
                    <div class="inner_form_area">
                        <div class="txt_area">
                            <h2 class="txt" v-show="false">아이디 찾기</h2>
                            <h2 class="txt">비밀번호 찾기</h2>
                        </div>
                        <div class="user_info">
                            <div class="user_theme">
                                <div class="top">
                                    <div class="top_txt_area">
                                        <p class="txt">회원유형</p>
                                    </div>
                                    <div class="top_select_area">
                                        <select>
                                            <option>개인회원</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="bot">
                                    <div class="radio_area">
                                        <div class="radio_input">
                                            <input type="radio" class="radio">
                                            <label class="txt">이메일</label>
                                        </div>
                                        <div class="radio_input">
                                            <input type="radio" class="radio">
                                            <label class="txt">휴대전화</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 비빔번호 찾기 할 시에는 아이디 입력칸이 나오면 됨 -->
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">아이디</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">이름</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">이메일로 찾기</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                        </div>
                        <div class="btn_area">
                            <p class="txt">확인</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb">
        <div class="find_view">
            <div class="inner">
                <div class="tit_area">
                    <!-- 비밀번호 찾기 -->
                    <h2 class="txt" v-show="false">Find PW</h2>
                    <!-- 아이디 찾기 -->
                    <h2 class="txt" v-show="true">Find ID</h2>
                </div>
                <div class="form_outer_area">
                    <div class="inner_form_area">
                        <div class="user_info">
                            <div class="user_input">
                                <div class="top">
                                    <div class="top_txt_area">
                                        <p class="txt">회원유형</p>
                                    </div>
                                    <div class="top_select_area">
                                        <select>
                                            <option>개인회원</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- 비번 찾기 할때는 아이디 영역이 나오면 됨 -->
                            <div class="user_input" v-show="false">
                                <div class="txt_area">
                                    <p class="txt">아이디</p>
                                </div>
                                <div class="radio_area">
                                    <div class="radio_input">
                                        <input type="radio" class="radio">
                                        <label class="txt">이메일</label>
                                    </div>
                                    <div class="radio_input">
                                        <input type="radio" class="radio">
                                        <label class="txt">휴대전화</label>
                                    </div>
                                </div>
                            </div>
                            <!-- 비빔번호 찾기 할 시에는 아이디 입력칸이 나오면 됨 -->
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">아이디</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">이름</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                            <div class="user_input">
                                <div class="txt_area">
                                    <p class="txt">이메일</p>
                                </div>
                                <div class="input_area">
                                    <input type="text" class="txt">
                                </div>
                            </div>
                        </div>
                        <div class="btn_area">
                            <p class="txt">확인</p>
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
    name:"findView",
    components:{
        Header,Footer
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>
