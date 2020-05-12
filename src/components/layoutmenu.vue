    <template>
    <div v-if="menulist.menutype==1" >
    <a-collapse accordion v-for="(item, index) in this.toTree(this.menulist.Data)" :key="index">
      <a-collapse-panel key="item.id" header="item.name" >
      <a-row v-if="item.children.length>0">
          <a-col v-for="(child, index1) in item.children" :key="index1" :span="child.width"> 
          <a-button type="primary">{{child.name}}</a-button>
          </a-col>
      </a-row>
      
    </a-collapse>
  </div>
  </template>
  <<script>
  export default {
      name:"layoutmenu",
      data() {
          return {
              menulist:{menutype:1,
              Data:
              [
                  {id:1,name:"标题1" },
                  {id:2,name:"按钮1" ,pid:1,width:12 },
                  {id:3,name:"按钮2" ,pid:1,width:12 },
              ]
              }
          }
      },
      created() {
          console.log(this.toTree(this.menulist.Data));
      },
      methods: {
          toTree:function (data) {
        // 删除 所有 children,以防止多次调用
        data.forEach(function (item) {
            delete item.children;
        });
 
        // 将数据存储为 以 id 为 KEY 的 map 索引数据列
        var map = {};
        data.forEach(function (item) {
            map[item.id] = item;
        });
//        console.log(map);
        var val = [];
        data.forEach(function (item) {
            // 以当前遍历项，的pid,去map对象中找到索引的id
            var parent = map[item.pid];
            // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
            if (parent!=null) {
           
                //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                val.push(item);
            }
        });
        return val;
    }
      },
  }
  </script>