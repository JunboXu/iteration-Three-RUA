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
                <span class="font-weight-light">, 27</span>
              </h3>
              <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Bucharest, Romania</div>
              <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
              </div>
              <div><i class="ni education_hat mr-2"></i>管理员, 您好！</div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9 uparea">
                  <p>请按照规定，规范上传csv文件。</p>
                  <form id="uploadCSV" enctype="multipart/form-data" method="post" @submit.prevent="uploadModelFile">
                    <input type="file" name="csvFile" accept=".csv ">
                    <input type="submit">
                  </form>
                  <!-- <iframe style="display:none" name="hideiframe" id="hideiframe"/> -->
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
  name: 'uploadCSV',
  data () {
    return {}
  },
  methods: {
    uploadModelFile: function () {
      if ($('#uploadCSV input').val() === '') {
        alert("请选择要上传的文件")
        return;
      }
      let options = {
        clearForm: true,
        url: 'http://47.93.36.92:3180/upload/csvFile',
        success: function (res) {
          console.log(res)
          alert(res.status.msg)
        },
        error: function (err) {
          console.log(err)
          alert('上传失败！')
        }
      }
      $('#uploadCSV').ajaxSubmit(options)
      return false
    }
  }
}
</script>
<style>
  .uparea {
    width: 300px;
    height: 200px;


  }

  .uploadbtn {
    margin: 30px auto;

    height: 60px;

  }

  .sub {
    margin-left: 10px;

  }
</style>
