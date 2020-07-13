<template>

  <div class="content" style="background-color:#F7F8FA"> 
         <div style="background:#8965E0;height:80px"></div>
    <div style="height:20px"></div>
  <el-row :gutter="20" >
   <el-col :span="14" :offset="1">
     <div class="grid-content" style="height:300px">
       <br>
       <br>
       <div style="margin-left:100px;margin-right:100px">
         <p style="font-size:32px">{{affName}}</p>
         <img :src="active" style="height:100px;width:100px">
         <div style="display:inline;margin-left:50px;font-size:26px">activation</div>
         <div style="display:inline;margin-left:30px;color:#2688BE;font-size:30px">{{affActivation}}</div>
       </div>
       <div>
       
       </div>
     </div>
    </el-col>
  <el-col :span="8">
    <div class="grid-content" style="height:300px">
      <br>
      <br>
      <div style="margin-left:80px">
       <i class="nc-icon nc-notes" style="font-size:22px"></i>
       <div style="font-size:22px;display:inline;color:grey;margin-left:10px">papers</div>
       <div style="font-size:26px;display:inline;color:#2688BE;margin-left:60px">{{paperNum}}</div>
      </div>
      <br>
      <br>
       <div style="margin-left:80px">
       <i class="nc-icon nc-single-02" style="font-size:22px"></i>
       <div style="font-size:22px;display:inline;color:grey;margin-left:10px">authors</div>
       <div style="font-size:26px;display:inline;color:#2688BE;margin-left:60px">{{authorNum}}</div>
      </div>
       <br>
      <br>
      <div style="margin-left:80px">
       <i class="nc-icon nc-quote" style="font-size:22px"></i>
       <div style="font-size:22px;display:inline;color:grey;margin-left:10px">citation</div>
       <div style="font-size:26px;display:inline;color:#2688BE;margin-left:50px">{{citationNum}}</div>
      </div>
    </div>
  </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="7" :offset="1">
      <div class="grid-content" style="height:400px">
        <div id="chart1" style="height:400px;width:100%"></div>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content" style="height:400px">
         <div id="chart2" style="height:400px;width:100%"></div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content" style="height:400px">
       <div id="chart3" style="height:400px;width:100%"></div>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" :offset="1">
      <div class="grid-content" style="height:100px">
        <br>
        <img :src="authoricon" style="width:60px;height:60px;margin-left:40px">
        <div style="font-size:20px;margin-left:20px;display:inline">Follower List</div>
      </div>
    </el-col>
    <el-col :span="16" >
     <el-table @row-click="openDetails"
    :data="authorlist"
    style="width: 100%; -webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;-moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;box-shadow: rgb(145, 144, 144) 0px 0px 10px;"
    >
    <el-table-column
      prop="authorName"
      label="Author"
      width="180">
    </el-table-column>
    <el-table-column
      prop="articleNum"
      label="Count"
      width="180">
    </el-table-column>
    <el-table-column
      prop="reference"
      label="Citation"
      width="180">
    </el-table-column>
     <el-table-column
      prop="hindex"
      label="H-index"
      width="180">
    </el-table-column>
     <el-table-column
      prop="activation"
      label="activation"
      >
    </el-table-column>
  </el-table>
    </el-col>

  </el-row>
  </div>
</template>
<script>
  import ChartCard from '@/components/Cards/ChartCard.vue'
  import StatsCard from '@/components/Cards/StatsCard.vue'
  import LTable from '@/components/Table.vue'
  import active from '@/assets/img/active.png'
  import authoricon from '@/assets/img/autho.png'
  var echarts = require('echarts');
  export default{
     components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data(){
      return{
        paperNum:0,
        authorNum:0,
        citationNum:0,
        active:active,
        authoricon:authoricon,
        affName:"0",
        affActivation:0,
        
        authorlist:[1,2,3]
        }
    },
    mounted(){
      let id=this.$route.params.id;
      var _this=this;
       this.$axios.get('http://47.93.36.92:3180/entity/affiliationPortrait',{
          params:{
               affiliationId:id
           }
          
        }).then(function (response) {
          console.log(response.data.data);
          _this.paperNum=response.data.data.articleNum;
          _this.authorNum=response.data.data.subAuthorNum;
          _this.citationNum=response.data.data.reference;
          _this.affName=response.data.data.affiliationName;
          _this.affActivation=response.data.data.activation;
        }).catch(function (error) {
          console.log("获得机构画像失败！");
          console.log(error);
        });
         this.$axios.get('http://47.93.36.92:3180/entity/getSubAuthorsByAffiliation',{
          params:{
               affiliationId:id
           }
          
        }).then(function (response) {
          console.log(response.data.data);
          _this.authorlist=response.data.data
        }).catch(function (error) {
          console.log("获得机构画像失败！");
          console.log(error);
        });
        
        this.drawchart1();
        this.drawchart2();
        this.drawchart3();
    },
    methods:{
      openDetails (row) {
        console.log(row);
        this.$router.push('/author/'+row.authorId);      
    },
    drawchart1(){
        let id=this.$route.params.id;
         let x=[];
         let y=[];
       
        this.$axios.get('http://47.93.36.92:3180/chart/hindexPerYearByAffiliation',{
          params:{
                affiliationId:id
           }
        }).then(function (response) {
          console.log(response.data.data);
          var mychart1=echarts.init(document.getElementById("chart1"));
          x=response.data.data.yearList;
          console.log(x);
          y=response.data.data.hindexList;
          console.log("成功获得引用！");
          let option = {
            title: {
              text: "H-index amount statics"
            },
            tooltip: {},
            legend: {
             
            },
            xAxis: {
              data: x
            },
            yAxis: {},
            series: [
              {

                type: "bar",
                data: y,
                itemStyle: {
                  normal: {
                  color: '#2688BE',//设置柱子颜色
                    label: {
                      show: true,//柱子上显示值
                      position: 'top',//值在柱子上方显示
                      textStyle: {
                        color: '#2688BE'//值得颜色
                      }
                    }
                  }
                },
                barWidth: 40

              }
            ]
          };
         mychart1.setOption(option);
        }).catch(function (error) {
          console.log("获得引用失败！");
          console.log(error);
        });
      },
      drawchart2(){
          let id=this.$route.params.id;
         let x=[];
         let y=[];
       
        this.$axios.get('http://47.93.36.92:3180/chart/articlePerYearByAffiliation',{
          params:{
                affiliationId:id
           }
        }).then(function (response) {
          console.log(response.data.data);
          var mychart2=echarts.init(document.getElementById("chart2"));
          x=response.data.data.yearList;
          console.log(x);
          y=response.data.data.articleNumList;
          console.log("成功获得引用！");
          let option = {
            title: {
              text: "paper amount statics"
            },
            tooltip: {},
            legend: {
             
            },
            xAxis: {
              data: x,
           
            },
            yAxis: {
              //min:-2
            },
            series: [
              {

                type: "bar",
                data: y,
                itemStyle: {
                  normal: {
                  color: '#2688BE',//设置柱子颜色
                    label: {
                      show: true,//柱子上显示值
                      position: 'top',//值在柱子上方显示
                      textStyle: {
                        color: '#2688BE'//值得颜色
                      }
                    }
                  }
                },
                barWidth: 40

              }
            ]
          };
         mychart2.setOption(option);
        }).catch(function (error) {
          console.log("获得引用失败！");
          console.log(error);
        });
      },
      drawchart3(){
         let id=this.$route.params.id;
         let x=[];
         let y=[];
       
        this.$axios.get('http://47.93.36.92:3180/chart/keywordDistribution',{
          params:{
                affiliationId:id
           }
        }).then(function (response) {
          console.log(response.data.data);
          var mychart3=echarts.init(document.getElementById("chart3"));
          var len=response.data.data.keywordList.length;
          var keywords=new Array();
          console.log(len);
          for(var i=0;i<len;i++){
            console.log(response.data.data.keywordList[i]);
            keywords.push({"value":response.data.data.articleNumList[i],"name":response.data.data.keywordList[i]});
            
          }
          console.log(keywords);
          //console.log("成功获得引用！");
          let option = {
            title: {
              text: "research keywords"
            },
           series : [
                	{
                    name: '访问来源',
					label: {
						normal: {
							formatter: '{b}' + '\n\r' + '({d}%)',
							show: true,
							position: 'left'
						},
               
            		},
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '35%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data:keywords
                }
            ]
          };
         mychart3.setOption(option);
        }).catch(function (error) {
          console.log("获得引用失败！");
          console.log(error);
        });
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background:white;
  }
  .bg-purple {
    background: white;
    -webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   -moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   box-shadow: rgb(145, 144, 144) 0px 0px 10px;
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
        background: white;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: white;
  }
</style>