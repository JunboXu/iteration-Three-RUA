<template>
  <div class="home" >
    <div v-if="!sear" class="searchBox" >
      <div class="note1" :style="note1" style="height: 540px" >
        <h1 class="searchObjTitle">Search your target</h1>
        <div class="ipBox">
          <el-input style="width: 50%;margin-left: 25%" placeholder="请输入你想搜索的实体" v-model="objName" class="input-with-select" >
            <el-select v-model="objType" slot="prepend" placeholder="请选择" style="width: 120px">
              <el-option label="Author" value="1"></el-option>
              <el-option label="Afflication" value="2"></el-option>
              <el-option label="Publication" value="3"></el-option>
              <el-option label="Keyword" value="4"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" style="background-color: #0e0e0e;width: 70px" @click="searchObj"></el-button>
          </el-input>
          <div class="abstractShow">
            <el-row style="text-align: center">
              <el-col :span="1" style="margin-left: 13%">
                <div style="margin-top: 50px;font-size: 50px" >
                  <i class="el-icon-s-custom" ></i>
                </div>
              </el-col>
              <el-col :span="3">
                <div style="margin-top: 30px;margin-left: 0;font-size: 30px">4,417</div>
                <div style="margin-top: 10px;font-size: 15px">Author Number</div>
              </el-col>
              <el-col :span="1"></el-col>
              <el-col :span="1" style="margin-left: 50px">
                <div style="margin-top: 50px;font-size: 50px" >
                  <i class="el-icon-paperclip" ></i>
                </div>
              </el-col>
              <el-col :span="3">
                <div style="margin-top: 30px;margin-left: 0;font-size: 30px">7,952</div>
                <div style="margin-top: 10px;font-size: 15px">Reference Number</div>
              </el-col>
              <el-col :span="1"></el-col>
              <el-col :span="1" style="margin-left: 50px">
                <div style="margin-top: 50px;font-size: 50px" >
                  <i class="el-icon-s-cooperation" ></i>
                </div>
              </el-col>
              <el-col :span="3">
                <div style="margin-top: 30px;margin-left: 0;font-size: 30px">1,543</div>
                <div style="margin-top: 10px;font-size: 15px">Affiliation Number</div>
              </el-col>
              <el-col :span="1"></el-col>
              <el-col :span="1" style="margin-left: 50px">
                <div style="margin-top: 50px;font-size: 50px" >
                  <i class="el-icon-document" ></i>
                </div>
              </el-col>
              <el-col :span="3">
                <div style="margin-top: 30px;margin-left: 0;font-size: 30px">1,297</div>
                <div style="margin-top: 10px;font-size: 15px">Paper Number</div>
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </div>
          <div class="rankIntro">
            <p style="color: white;font-size: 40px;position: absolute;margin-left: 37%;margin-top: 40px;">——活跃度排行——</p>
          </div>
        </div>
      </div>
      <div class="ranks">
        <div class="rankWraper" style="color: #2688BE">
            <el-col :span="8" >
              <div class="rankBox" >
                <div class="rankHead yinying" style="color: black">
                  <el-col :span="1">
                    <span style="font-size: 40px;">
                    <i class="el-icon-apple" style="margin-top: 40px;margin-left: 17px"></i>
                    </span>
                  </el-col >
                  <el-col :span="1" class="appleText">
                    <span style="white-space: nowrap;font-size: 35px;">Top Author</span>
                  </el-col>
                </div>
                <div class="rankBody yinying " style="white-space: nowrap;" >
                    <div v-for="(author,index) in topAuthorsA" :key="author.authorId" class="itemRow bomb">
                      <span style="float: left;">
                          <a href="" > {{index+1}} | </a >
                        </span>
                        <span style="float: left;">
                          <div @click="searchAuthHuaR(author.authorId)" style="color: #2688BE;cursor: pointer;text-decoration: #45c0fd  " > {{author.authorName | ellipsis}}</div>
                        </span>
                        <span style="float: right">
                          <strong class="" style="color: #2688BE;font-size: 17px;color: #2688BE;">{{author.activation}} 活跃度</strong>
                        </span>
                    </div>
                </div>
              </div>
            </el-col>
            <el-col :span="2"></el-col>
          <el-col :span="8">
            <div class="rankBox">
              <div class="rankHead yinying" style="color: black">
                <el-col :span="1">
                    <span style="font-size: 40px;">
                    <i class="el-icon-apple" style="margin-top: 40px;margin-left: 20px"></i>
                    </span>
                </el-col >
                <el-col :span="1" class="appleText">
                  <span style="white-space: nowrap;font-size: 35px;">Top Affiliation</span>
                </el-col>
              </div>
              <div class="rankBody yinying">
                <div v-for="(aff,index) in topaffiliationA" :key="aff.affiliationId" class="itemRow bomb">
                  <span style="float: left;">
                          <a href="" > {{index+1}} | </a >
                  </span>
                  <span style="float: left;">
                          <div @click="searchAffiHuaR(aff.affiliationId)" style="color: #2688BE;cursor: pointer;text-decoration: #45c0fd  "> {{aff.affiliationName | ellipsis}}</div>
                  </span>
                  <span style="float: right">
                          <strong class="" style="color: #2688BE; font-size: 17px;">{{aff.activation}} 活跃度</strong>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
            <el-col :span="2"></el-col>
          <el-col :span="8">
            <div class="rankBox">
              <div class="rankHead yinying" style="color: black">
                <el-col :span="1">
                    <span style="font-size: 40px;">
                    <i class="el-icon-apple" style="margin-top: 40px;margin-left: 20px"></i>
                    </span>
                </el-col >
                <el-col :span="1" class="appleText">
                  <span style="white-space: nowrap;font-size: 35px;">Top KeyWords</span>
                </el-col>
              </div>
              <div class="rankBody yinying">
                <div v-for="(k,index) in topKeywordsA" :key="k.keywordId" class="itemRow bomb">
                  <span style="float: left;">
                          <a href="" > {{index+1}} | </a >
                  </span>
                  <span style="float: left;">
                          <div @click="searchkKHua(k.keywordId)" style="color: #2688BE;text-overflow: ellipsis;overflow: hidden;cursor: pointer;text-decoration: #45c0fd  "> {{k.keyword| ellipsis}}</div>
                  </span>
                  <span style="float: right">
                          <strong class="" style="color: #2688BE; font-size: 17px;">{{k.keywordActivation}} 活跃度</strong>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
            <el-col :span="2"></el-col>
          <el-col :span="2"></el-col>
        </div>
      </div>
      <div class="entranceSet">
        <div style="color: #2688BE;font-size: 40px;margin-left: 38%;margin-top: 40px;margin-bottom: 40px">——趣味入口——</div>
        <el-row>
          <el-col :span="7">
            <div class="entrance">
              <div>  <img  @click="seeRelationGraph" style="cursor: pointer" src="../assets/img/gps.png" class="entrancepic bomb yinying"></div>
              <div style="color: #2688BE;font-size: 23px;margin-left: 110px;margin-top: 20px">实体关系图谱</div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="entrance">
              <div>  <img  v-image-preview style="cursor: pointer" src="../assets/img/KeywordByNum_1.jpg" class="entrancepic bomb yinying"></div>
              <div style="color: #2688BE;font-size: 23px;margin-left: 110px;margin-top: 20px">关键词云图</div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="entrance">
              <div>  <img  @click="goToInterest" style="cursor: pointer"  src="../assets/img/hot.png" class="entrancepic bomb yinying"></div>
              <div style="color: #2688BE;font-size: 23px;margin-left: 110px;margin-top: 20px">兴趣点探寻</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-if="searchAuthor" class="searchResultBox"  v-loading="loading"     element-loading-text="LOADING..."
         element-loading-spinner="el-icon-loading">
      <div class="autTable">
        <h1 style="color:#2688BE;">Following Results May satisfy you:</h1>
        <el-table
          :data="authors"
          @row-click="searchAuthorHua"
          stripe
          style="width: 100%;font-size: 20px; -webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   -moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   box-shadow: rgb(145, 144, 144) 0px 0px 10px; "
          :header-row-style="{height:'80px'}"
          :row-style="{height:'100px',textAlign:'center',padding: '20px 0 20px 0'}"
          :cell-style="{padding:'20px 0 20px 0'}">
          <el-table-column
            type="index"
            style="color: #45c0fd"
            width="150"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="authorName"
            label="姓名"
            width="200"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="affiliation"
            label="所属机构"
            width="280"
            :show-overflow-tooltip="true" >
          </el-table-column>
          <el-table-column
            prop="reference"
            label="论文总引用数"
            STYLE="padding-left: 20px;"
            width="150px"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="hindex"
            label="hindex"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column>
            <el-button >查看</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-if="searchAffili" class="searchResultBox"  v-loading="loading"     element-loading-text="LOADING..."
         element-loading-spinner="el-icon-loading">
      <div class="autTable">
        <h1 style="color:#2688BE;">Following Results May satisfy you:</h1>
        <el-table
          :data="affis"
          stripe
          @row-click="searchAffiHua"
          style="width: 100%;font-size: 20px;-webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   -moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   box-shadow: rgb(145, 144, 144) 0px 0px 10px; "
          :header-row-style="{height:'80px'}"
          :row-style="{height:'100px',textAlign:'center',padding: '20px 0 20px 0'}"
          :cell-style="{padding:'20px 0 20px 0'}">
          <el-table-column
            type="index"
            style="color: #45c0fd;box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.9); "
            width="100"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="affiliationName"
            label="机构名称"
            width="280"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="subAuthorNum"
            label="机构人数"
            width="170"
            :show-overflow-tooltip="true" >
          </el-table-column>

          <el-table-column
            prop="totalArticle"
            label="文章总数"
            STYLE="padding-left: 20px;"
            width="170px"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="reference"
            label="总应用数"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column>
            <el-button>查看</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-if="searchKeyWs" class="searchResultBox"  v-loading="loading"     element-loading-text="LOADING..."
         element-loading-spinner="el-icon-loading">
      <div class="autTable">
        <h1 style="color:#2688BE;">Following Results May satisfy you:</h1>
        <el-table
          :data="keyws"
          stripe
          @row-click="searchKHua"
          :style="bomb"
          style="width: 100%;font-size: 20px;-webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   -moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
   box-shadow: rgb(145, 144, 144) 0px 0px 10px; color: #2688BE "
          :row-style="{height:'100px',textAlign:'center',padding: '20px 0 20px 0'}"
          :header-row-style="{height:'80px'}">
          <el-table-column
            type="index"
            style="color: #45c0fd;box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.9); "
            width="150"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="keyword"
            label="关键词名称"
            width="380"
            :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="searchTime"
            label="检索次数"
            width="230"
            :show-overflow-tooltip="true" >
          </el-table-column>
          <el-table-column>
              <el-button>查看</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SearchObj',
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 10) {
        return value.slice(0, 10) + '..'
      }
      return value
    }
  },
  data () {
    return {
      find: true,
      sear: false,
      searchAuthor: false,
      searchAffili: false,
      searchKeyWs: false,
      loading: false,
      objType: '',
      objName: '',
      topAuthorsA: [],
      topaffiliationA: [],
      topKeywordsA: [],
      toprefs: [],
      authors: [],
      affis: [],
      keyws: [],
      note: {
        backgroundImage: 'url(' + require('@/assets/img/fin.png') + ') ',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note1: {
        backgroundImage: 'url(' + require('@/assets/img/halfPic.jpg') + ') ',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  },
  mounted () {
    var _this = this
    this.$axios.get('http://47.93.36.92:3180/rank/topKeywordByActivation').then(function (response) {
      // console.log(response.data.data);//这一步可执行
      _this.topKeywordsA = response.data.data// 这一步报错说undefined
      console.log('getKeywordByActivation成功！')
      console.log(_this.topKeywordsA)
    })
    this.$axios.get('http://47.93.36.92:3180/rank/topAffiliationByActivation').then(function (response) {
      _this.topaffiliationA = response.data.data
      // console.log("gettopaffiliationA成功！");
      // console.log(_this.topaffiliationA);
    })
    this.$axios.get('http://47.93.36.92:3180/rank/topAuthorByActivation').then(function (response) {
      _this.topAuthorsA = response.data.data
      // console.log("topAuthorsA成功！");
      // console.log(_this.topAuthorsA);
    })
    this.$axios.get('http://47.93.36.92:3180/rank/topReference').then(function (response) {
      _this.toprefs = response.data.data
      // console.log("toprefs成功！");
      // console.log(_this.toprefs);
    })
  },
  methods: {
    goToInterest: function () {
      this.$router.push('/interest')
    },
    seeRelationGraph: function () {
      // TODO
      // 跳转到显示全局关系图的页面
      this.$confirm('此操作将耗费较长时间, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '正在继续!'
        })
        this.$router.push('/echartsAuthor/' + 999999999)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    searchAuthHuaR: function (id) {
      this.$router.push('/author/' + id)
    },
    searchAffiHuaR: function (id) {
      this.$router.push('/afflication/' + id)
    },
    searchkKHua: function (id) {
      console.log('in!!id:::', id)
      this.$router.push('/keyword/' + id)
    },
    searchObj: function () {
      var objT = this.objType
      var objN = this.objName
      var _this = this
      if (this.objType == '') {
        this.$alert('请选择你要搜索的实体类别', '操作错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
        return
      }
      _this.sear = true
      _this.loading = true
      if (objT == 1) {
        this.searchAuthor = true
        this.$axios.get('http://47.93.36.92:3180/entity/searchAuthor', {
          params: {
            authorName: objN
          }
        }).then(function (response) {
          _this.authors = response.data.data
          _this.loading = false
        })
      } else if (objT == 2) {
        this.searchAffili = true
        this.$axios.get('http://47.93.36.92:3180/entity/searchAffiliation', {
          params: {
            affiliationName: objN
          }
        }).then(function (response) {
          _this.affis = response.data.data
          _this.loading = false
        })
      } else if (objT == 3) {
        this.$router.push('/conference/' + objN)
      } else if (objT == 4) {
        this.searchKeyWs = true
        this.$axios.get('http://47.93.36.92:3180/entity/searchKeyword', {
          params: {
            keyword: objN
          }
        }).then(function (response) {
          _this.keyws = response.data.data
          _this.loading = false
        })
      }
    },
    searchAuthorHua: function (row, event, column) {
      console.log('alreadyin')
      console.log(row, event, column)
      var aId = row.authorId
      console.log('aid:' + aId)
      this.$router.push('/author/' + aId)
    },
    searchAffiHua: function (row, event, column) {
      console.log(row, event, column)
      var affid = row.affiliationId
      console.log('affid:' + affid)
      this.$router.push('/afflication/' + affid)
    },
    searchKHua: function (row, event, column) {
      console.log(row, event, column)
      var kid = row.keywordId
      console.log('kid:' + kid)// 获取成功
      this.$router.push('/keyword/' + kid)// TODO
    }

  }

}
</script>

<style scoped>
  .yinying{
    -webkit-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
    -moz-box-shadow: rgb(145, 144, 144) 0px 0px 10px;
    box-shadow: rgb(145, 144, 144) 0px 0px 10px;
  }
  .bomb{
    transition: all 1s linear;
  }
  .bomb:hover{
    cursor: pointer;
    transition: 0.1s;
    transition-duration:1s;
    transform:scale(1.1);
    transition-timing-function:ease-in-out;
  }
  .entranceSet{
    height: 800px;
    /*background-color: #2688BE;*/
    margin-top: 40px;
    margin-bottom: 20px;

  }
  .entrance{
    width: 100%;
    height: 200px;
    /*background: #2688BE;*/
    /*display: flex;*/
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 40px;
    margin-bottom: 190px;
  }
  .entrancepic{
    width: 350px;
    height: 400px;
    max-width: 100%;
    max-height: 300px;

  }
  .rankIntro{
    text-align: center;

  }
  .appleText{
    position: absolute;margin-left: 85px;margin-top: 25px; font-size: 28px;
  }
  .autTable{
    margin: 5% 10% auto 10% ;
    height: 100%;
  }
  .searchResultBox{
    padding: 5px;
  }
  .itemRow{
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    height: 60px;
    padding: 20px 20px 20px 20px;
    border-bottom: black solid 1px;
  }
  .rankBox{
    width: 80%;
    margin-left: 13%;
  }
  .rankBody{
    border: white solid 1px;
    border-radius: 10px;
    /*height: 400px;*/
  }
  .rankHead{
    /*border: blue solid 1px;*/
    height: 100px;
    background:#F2F6FC;
    border-radius: 14px;
    color: #161616;
  }
  .ranks{
    /*border: #1D62F0 solid 1px;*/
    padding: 10px 10px  10px 10px;
    height: 800px;
    margin: 70px 10px  10px 10px;
  }
  .rankWraper{
    /*border:darkmagenta solid 1px;*/
    /*height: 600px;*/
    position: absolute;
    width: 97%;
    margin-left: 0.5%;
  }
  .abstractShow{
    color: white;
    height: 120px;
    margin-top: 50px;
  }
  .ipBox{
    height: 270px;
  }
  .searchObjTitle{
  text-align: center;
  font-size: 60px;
  color: white;
  padding-top: 80px;
  margin-bottom: 40px;
}
  .searchBox {
    /*background-color: #2688BE;*/
    color:#2688BE;
    height: 540px;
  }

</style>
