import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import about from "./views/about.vue";
import searchPaper from "./views/Search.vue";
import afflication from './views/AfflicationDetail.vue';
import author from './views/AuthorDetail.vue';
import conference from './views/CoferenceDetail.vue';
import keyword from './views/keywordDetail.vue';
import searchObj from './views/SearchObj.vue';
import interest from './views/interest.vue';
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/searchObj",
      name: "searchObj",
      components: {
        header: AppHeader,
        default:searchObj,
        footer: AppFooter
      }
    },
    // {
    //   path: "/",
    //   name: "components",
    //   components: {
    //     header: AppHeader,
    //     default: Components,
    //     footer: AppFooter
    //   }
    // },
    {
      path:'/',
      redirect:'/searchObj'
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/interest",
      name: "interest",
      components: {
        header: AppHeader,
        default: interest,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: about,
        footer: AppFooter
      }
    },
    {
      path: "/searchPaper",
      name: "searchPaper",
      components: {
        header: AppHeader,
        default:searchPaper,
        footer: AppFooter
      }
    },

    {
      path: "/afflication/:id",
      name: "afflication",
      components: {
        header: AppHeader,
        default:afflication,
        footer: AppFooter
      }
    },
    {
      path: "/author/:id",
      name: "author",
      components: {
        header: AppHeader,
        default:author,
        footer: AppFooter
      }
    },
    {
      path: "/conference/:id",
      name: "conference",
      components: {
        header: AppHeader,
        default:conference,
        footer: AppFooter
      }
    },
    {
      path: "/keyword/:id",
      name: "keyword",
      components: {
        header: AppHeader,
        default:keyword,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
