<template>
  <div class="wrap">
    <SideMenu/>
    <div class="other_area">
        <div class="nav_bar"></div>
        <div class="inner">
            <div class="section">
                <h2 class="tit">회원 추가하기</h2>
                <div class="register_area">
                    <ul class="list">
                        <li class="item">
                            <h2 class="txt">아이디</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">비밀번호</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">이름</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">전화번호</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <h2 class="txt">이메일</h2>
                            <div class="input_area">
                                <div class="input_box_full">
                                    <input type="text">
                                </div>
                            </div>
                        </li>
                         <li class="item">
                            <h2 class="txt">권한</h2>
                            <div class="input_area">
                                <div class="select_tag">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                        <li class="item">
                            <div class="btn_area">
                                <div class="btn">
                                    <button>등록하기</button>
                                </div>
                                <div class="btn">
                                    <button>초기화</button>
                                </div>
                                <div class="btn delete">
                                    <button>삭제</button>
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
