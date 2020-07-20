<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>Jessica Jones
                <span class="font-weight-light">的收藏夹</span>
              </h3>
              <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Bucharest, Romania</div>
              <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
              </div>
              <div><i class="ni education_hat mr-2"></i></div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9 uparea">
                  <p>这是您的收藏夹</p>
                  <div class="body">
                    <div>
                      <div class="typeimg">

                      </div>
                      <div class="des">
                        <h4>机构</h4>
                        <p>收藏夹</p>
                      </div>
                    </div>
                    <div>
                      <div class="typeimg">
                      </div>
                      <div class="des">
                        <h4>研究方向</h4>
                        <p>收藏夹</p>
                      </div>
                    </div>
                    <div>
                      <div class="typeimg">

                      </div>
                      <div class="des">
                        <h4>会议</h4>
                        <p>收藏夹</p>
                      </div>
                    </div>
                    <div>
                      <div class="typeimg author">

                      </div>
                      <div class="des">
                        <h4>作者</h4>
                        <p>收藏夹</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'collect',
  data () {
    return {
        userName:"",
        userId:"",
    }
  },
  methods: {

  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.body {
  width: 600px;
  height: 560px;
  /* background-color: skyblue; */
  /* border: 1px solid rgba(0, 0, 0, 2); */
  margin: 10px auto;
}
.body > div {
  width: 240px;
  height: 260px;
  /* background-color: pink; */
  /* box-shadow: 2px 2px rgba(0, 0, 0, .2) ; */
  border: 1px solid rgba(0 , 0 , 0, .1);
  float: left;
  /* text-align: center; */
  margin: 15px 10px 0px 40px;
}
.typeimg {
  height: 150px;
  width: 220px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0 , 0 , 0, .1);
  text-align: center;
}
h {
  margin-top: 75px;
}
.des {
  text-align: left;
  text-indent: 1.5em;
}
.body > div:hover{
  cursor: pointer;
}
</style>
