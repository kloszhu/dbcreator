<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"  width="300" style="background: #fff">
      <div class="logo" />
    <div>
    <a-collapse accordion>
      <a-collapse-panel key="1" header="This is panel header 1">
      <a-row>
          <a-col :span="12"> <a-button type="primary">测试123</a-button></a-col>
           <a-col :span="12"> <a-button type="primary">测试123</a-button></a-col>
      </a-row>
        <a-button type="primary">测试123</a-button>
         <a-button type="primary">测试123</a-button>
          <a-button type="primary" @click="test">测试OK</a-button>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
       <a-button type="primary">测试123</a-button>
         <a-button type="primary">测试123</a-button>
          <a-button type="primary">测试123</a-button>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
      <!--菜单的拖拽按钮-->
      <vuedraggable class="wrapper" 
      :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
       v-model="list">
        <transition-group>
          <div v-for="item in list" :key="item.id" class="item">
            <a-button type="primary">{{item.code}}</a-button>
          </div>
        </transition-group>
      </vuedraggable>
      </a-collapse-panel>
    </a-collapse>
  </div>

    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div class="container" >
        <!--
            <vuedraggable class="wrapper" v-model="list">
        <transition-group>
          <div v-for="item in list" :key="item" class="item">
            <a-button type="primary">{{item}}</a-button>
          </div>
        </transition-group>
      </vuedraggable>
        -->
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        设计器20200511
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import vuedraggable from 'vuedraggable';
import uuidv1 from 'uuid/v1' 
export default {

  components: {vuedraggable},
  props: {
  },
  data() {
    return {
      list: [],
      loading: false,
    }
  },
  updated() {
    console.log(this.list)
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
    uuid(){
      return uuidv1();
    },
    test(){
      this.$message.info(this.uuid());
       console.log('lsitdata', this.listkeyvalue)
    }
  },
  created() {
    this.list=this.listkeyvalue;
    console.log('lsitdata', this.list)
  },
  computed: {
    listkeyvalue(){
      var array=new Array();
      for (let index = 0; index < 20; index++) {
        var item={};
        item.id=index;
        item.code=this.uuid();
        array.push(item);
      }
      console.log(array);
      
      return array;
    }
  },
}
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
html,body,#components-layout-demo-fixed-sider{
        width: 100%;
        height: 100%;
    }
.container {
height:100%;
/*网格背景*/
    /*90度直线，100灰度，0.1透明度，5%宽度，0透明度背景*/
    background: linear-gradient(90deg, rgba(100, 100, 100, 0.1) 5%, transparent 0), 
    /*0度直线，100灰度，0.1透明度，5%宽度，0透明度背景*/
                 linear-gradient(rgba(100, 100, 100, 0.1) 5%, transparent 0);
    /*横纵向宽距*/
    background-size: 20px 20px;
}
</style>