<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <!-- <template> -->
                            <!-- <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div> -->
                            <!-- <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div> -->
                        <!-- </template> -->
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="userName"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="pswd"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            v-model="profession"
                                            placeholder="profession 教师 or 学生"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div> -->
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="register()">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'register',
    data () {
        return{
            userName:"",
            email: "",
            pswd: "",
            profession:""
        }
    },
    methods:{
        //表单验证没有做
        register: function(){
            var _this= this;
            this.$axios.post('http://47.93.36.92:3180/user/register', {
                userName: this.email,
                password: this.pswd,
                email: this.email,
                profession: this.profession
            }).then(function (response) {
                console.log("已发送: username"+_this.userName+_this.email+" pas: "+_this.pswd+" profession: "+_this.profession);
                console.log(response);
                //TODO 设置名字缓存，并跳转到首页
            }).catch(function (error) {
                console.log('注册失败！')
                console.log(error)
            })
        }
    }
};
</script>
<style>
</style>
