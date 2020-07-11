<template>
    <div class="echartLayout" id="container" style="width: 100%;height: 100%;background-color: white"></div>


</template>
<script>
  import echarts from 'echarts'
  import $ from  'jquery';

export default {
  name:'echartsAuthor',
  props:{
    chartData:{
      type:Array,
      default: ()=>[]
    },
    chartLink:{
      type:Array,
      default: ()=>[]
    },
  },
  data() {
    return {
      authorName:"",
      myChart: null,
      relationNodes:{},
      relationLinks:{},
    }
  },
  mounted() {
    this.initEchart()

  },
  methods: {
    getRandomColor(){
      console.log('#'+Math.floor(Math.random()*16777215).toString(16));
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    },
    initEchart() {
      var getRandomColor = function(){
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      }
      let dom = document.getElementById("container");
      this.myChart = echarts.init(dom);
      this.dataEChart();
      this.chartData=this.relationNodes;
      // this.chartLink=this.linkEChart();
      this.chartLink=this.relationLinks;
      this.chartData.forEach(function (node) {
        if (node.symbolSize>200){
          node.symbolSize=200;
        }
        node.itemStyle = {
          normal: {
            symbolSize: (parseFloat(node.symbolSize)+5)*100,
            color: getRandomColor()
          }
        };
      });
      this.chartLink.forEach(function (link) {
        link.lineStyle={
          normal: {
            width: 5,
            curveness: 0.3,
            opacity: 0.9,
            value:link.value/100,
          },
          emphasis: {
            width:10
          }
        };
        link.label={
          normal:{
            show:true,
            formatter:function (link) {
              return link.data.value;
            }
          }
        }
      });
      let option = {
        tooltip:{
          show:false
        },
        series: [
          {
            edgeLabel: {
              normal: {
                formatter:"{c}",
                show:true
              }
            },
            force:{
              repulsion:1000
            },
            layout:'force',
            // circular:{
            //     rotateLabel:false
            // },
            forceNodeAdjancy:'true',
            roam:true,
            focusNodeAdjacency: true,
            itemStyle:{
              normal:{
                color: this.getRandomColor()
              },
              //鼠标放上去有阴影效果
              emphasis: {
                shadowColor: '#3721db',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40,
              },
            },
            label:{
              normal:{
                show:true
              }
            },
            //头像
            symbol:'circle',
            //symbol: `image://${imgSrc}`,
            symbolSize:86,
            type:'graph',
            links: this.chartLink,
            data:this.chartData
          }
        ]
      };
      this.myChart.setOption(option);
      var _this=this;
      this.myChart.on('click', function (params) {
        console.log(params.data)//获取点击的头像的数据信息
        var id=params.data.id;//获取作者id
        //TODO
        id=parseInt(id);
        console.log("tid:",id);
        //跳转到对应的author
        _this.$router.push('/admin/author/'+id);
        location.reload();
      });
    },
    /**
     * 数据集合
     */
    /**
     * 数据集合
     */
    dataEChart(){
      var _this=this;
      var tid=this.$route.params.id;
      if (tid!=999999999) {
        $.ajax({
          type: "get",
          async: false,
          url: "http://47.101.165.107:3180/chart/linkedDataByAuthor",
          data: {
            authorId: tid//TODO
          },
          success: function (response) {
            console.log("responseNodes:", response);
            _this.relationNodes = response.data.nodes;
            _this.relationLinks = response.data.edges;
            // let data=_this.relationNodes;
            _this.relationNodes.forEach(o => {
              o.id = String(o.id);
            });
            _this.relationLinks.forEach(o => {
              o.value = String(o.value);
              o.source = String(o.source);
              o.target = String(o.target);
            });
            console.log("nodes:", _this.relationNodes);
            console.log("links:", _this.relationLinks)
          }
        })
      }
      else {//所有作者的关系图
        $.ajax({
          type: "get",
          async: false,
          url: "http://47.101.165.107:3180/chart/totalAuthorLinkedData",
          success: function (response) {
            console.log("responseNodes:", response);
            _this.relationNodes = response.data.nodes;
            _this.relationLinks = response.data.edges;
            // let data=_this.relationNodes;
            _this.relationNodes.forEach(o => {
              o.id = String(o.id);
            });
            _this.relationLinks.forEach(o => {
              o.value = String(o.value);
              o.source = String(o.source);
              o.target = String(o.target);
            });
            _this.relationNodes=_this.relationNodes.slice(0,300);
            _this.relationLinks= _this.relationLinks.slice(0,300);
            console.log("nodes:", _this.relationNodes);
            console.log("links:", _this.relationLinks);
          }
        })
      }
    },
  }
}
</script>
