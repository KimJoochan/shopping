<template>
  <div class="list_view">
    <Header/>
    <div class="pc">
      <div class="item_list_area">
        <div class="section_area">
          <div class="inner_area">
            <div class="tit_area">
              <h2 class="tit">블라우스</h2>
            </div>
            <div class="segment_area">
              <ul class="list">
                <li class="item">
                  <p class="txt">OUTER</p>
                </li>
                <li class="item">
                  <p class="txt">TOP</p>
                </li>
                <li class="item">
                  <p class="txt">DRESS</p>
                </li>
                <li class="item">
                  <p class="txt">BOTTOM</p>
                </li>
                <li class="item on">
                  <p class="txt">ACC</p>
                </li>
              </ul>
            </div>
            <div class="item_align_area">
              <div class="total_area">
                <p class="txt">Total 4 Items</p>
              </div>
              <div class="alignment">
                <ul class="list">
                  <li class="item">
                    <a href="#" class="txt">신상품</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">상품명</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">낮은가격</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">높은가격</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">제조사</a>
                  </li>
                  <li class="item">
                    <a href="#" class="txt">사용후기</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="items_list_three">
              <ul class="list">
                <li class="item">
                  <div class="img_area"></div>
                  <div class="txt_area">
                    <ul class="list">
                      <li class="item">
                        <p class="name">Lorem ipsum dolor sit amet.</p>
                      </li>
                      <li class="item">
                        <div class="price_area">
                          <p class="seller">5,000원</p>
                          <p class="origin">5,000원</p>
                          <p class="percent">7%</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="desc_area">
                          <p class="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eligendi rerum iste quos doloremque tempora officia perspiciatis voluptas, sunt atque ducimus libero illum a saepe neque nemo asperiores ea deleniti.</p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="color_options_area">
                          <ul class="list">
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                          </ul>
                        </div>
                      </li>
                      <li class="item">
                        <div class="marks_area">
                          <ul class="list">
                            <li class="item one">
                              <p class="txt">Lorem, ipsum dolor.</p>
                            </li>
                            <li class="item two">
                              <p class="txt">ipsum</p>
                            </li>
                            <li class="item three">
                              <p class="txt">dolor.</p>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
              </ul>
            </div>
            <div class="pagi_area">
              <ul class="pagi_list">
                <li class="item on">
                  <a class="txt" href="#">1</a>
                </li>
                <li class="item">
                  <a class="txt" href="#">2</a>
                </li>
                <li class="item">
                  <a class="txt" href="#">3</a>
                </li>
              </ul>
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
    name:"ListView",
    components:{
        Header,Footer
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>