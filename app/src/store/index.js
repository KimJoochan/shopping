import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav_list:{},
    mb_nav_list:{},
    logo_obj:{
      pc:{
        img_path:""
      },
      mb:{
        img_path:""
      },
    },
    foot_obj:{
      pc:{
        img_path:""
      },
      mb:{
        img_path:""
      },
    },
    index_page_data:{
      pc_banner:[],
      mb_banner:[],
      display_pc:[],
      display_mb:[],
      display_nav_list:[],
    }
  },
  getters: {
  },
  mutations: {
    init_data(state,value){
      state.nav_list=value['nav'];
      state.mb_nav_list = value['mb_nav_list'];
      state.logo_obj=value['logo'];
      state.foot_obj=value['foot'];
    },
    index_data(state,value){
      state.index_page_data.pc_banner=value['pc_banner'];
      state.index_page_data.mb_banner=value['mb_banner'];

      state.index_page_data.display_pc=value['display_pc'];
      state.index_page_data.display_mb=value['display_mb'];

      state.index_page_data.display_nav_list=value['display_nav_list'];
      
    }
  },
  actions: {
    init_load(context){
      $.ajax({
        url : 'http://localhost/vue_shopping/api/init',
        type:"GET",
        crossDomain : true,
        processData: false,
        async: false,
        cache: false,
        contentType: 'application/json; charset=UTF-8',
        success:function(res){
          const result = JSON.parse(res);
          let nav_list = result['data']['nav_list'];
          let mb_nav_list = result['data']['mb_nav_list'];
          let logo_obj = result['data']['logo']
          let foot_obj = result['data']['foot']
          var obj = {
            nav:nav_list,
            mb_nav_list:mb_nav_list,
            logo:logo_obj,
            foot:foot_obj
          };
          console.log(obj);
          context.commit('init_data',obj);
        }
      })
    },
    index_load(context){
      $.ajax({
        url : 'http://localhost/vue_shopping/api/index_page',
        type:"GET",
        crossDomain : true,
        processData: false,
        async: false,
        cache: false,
        contentType: 'application/json; charset=UTF-8',
        success:function(res){
          const result = JSON.parse(res);
          let pc_banner = result['data']['pc_banner'];
          let mb_banner = result['data']['mb_banner']
          let display_pc=result['data']['display_pc_list'];
          let display_mb=result['data']['display_mb_list'];
          let display_nav_list=result['data']['display_nav_list'];
          
          console.log(display_nav_list);
          var obj = {
            pc_banner:pc_banner,
            mb_banner:mb_banner,
            display_pc:display_pc,
            display_mb:display_mb,
            display_nav_list:display_nav_list
          };
          context.commit('index_data',obj);
        }
      })
    }
  },
  modules: {
  }
});
