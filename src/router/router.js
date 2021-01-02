import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Admit from "../components/Admit";
import Admin from "../components/Admin";
import Dashboard from "../components/Dashboard";
import studentDashboard from "../components/studentDashboard";
import Students from "../components/Students";
import Overview from "../components/Overview";
import StaffLogin from "../components/staffLogin";
import StaffRegister from "../components/staffRegister";
import StudentLogin from "../components/studentLogin";
import School from "../components/school";
import Staffs from "../components/Staffs";
import Evaluations from "../components/Evaluations";
import Info from "../components/info/Info";
import NewInfo from "../components/New-info";
import Books from "../components/Books";


//import store from '../store/index';

Vue.use(VueRouter);

// //check staff authentication
// const ifStaffIsNotAuthenticated = (to, from, next) => {
//   console.log(store.getters.staffIsLoggedIn)
//   if (!store.getters.staffIsLoggedIn) {
//     next()
//     return
//   }
//   next('/dashboard')
// }

// const ifStaffIsAuthenticated = (to, from, next) => {
//   console.log(store.getters.staffIsLoggedIn)
//   if (store.getters.staffIsLoggedIn) {
//     next();
//     return;
//   }
//   next('/staff/login');
// }

// //check student authentication
// const ifStudentIsNotAuthenticated = (to, from, next) => {
//   console.log(store.getters.staffIsLoggedIn)
//   if (!store.getters.staffIsLoggedIn) {
//     next();
//     return;
//   }
//   next('/sudent/dashboard');
// }

// const ifStudentIsAuthenticated = (to, from, next) => {
//   console.log(store.getters.staffIsLoggedIn)
//   if (store.getters.staffIsLoggedIn) {
//     next()
//     return
//   }
//   next('/student/login');
// }

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/admission",
    name: "admit",
    component: Admit,
  },
  {
    path: "/staff/login",
    component: StaffLogin,
    // beforeEnter: ifStaffIsNotAuthenticated,
  },
  {
    path: "/staff/employ",
    component: StaffRegister,
  },
  {
    path: "/student/login",
    name: "student-login",
    component: StudentLogin,
    // beforeEnter: ifStudentIsNotAuthenticated
  },

  //admin dashbord routes
  {
    path: "/dashboard/",
    component: Dashboard,
    //  beforeEnter: ifStaffIsAuthenticated,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
      {
        path: "students",
        name: "students",
        component: Students,
      },
      {
        path: "school/",
        name: "school",
        component: School,

        children: [{ path: "info", name: "info", component: Info }, {
          path: "new-info", name: "new-info", component: NewInfo
        }],
      },
      {
        path: "staffs",
        name: "staffs",
        component: Staffs,
      },
      {
        path: "books",
        name: "books",
        component: Books,
        children: [
          //dynamic
          {
            path: "jss1",
            name: "JSS1",
          },
        ],
      },
      {
        path: "evaluations",
        name: "evaluations",
        component: Evaluations,
      },
      {
        path: "register",
        name: "register",
        component: Admit,
      },
      {
        path: "employ",
        name: "employ",
        component: StaffRegister,
      },

      //default route
      {
        path: "",
        name: "",
        component: Admin,
      },
    ],
  },
  //students dashbourd routes
  {
    path: "/student/dashboard/",
    component: studentDashboard,
    // beforeEnter: ifStudentIsAuthenticated,
    children: [
      {
        path: "overview",
        name: "student-overview",
        component: Overview,
      },
      {
        path: "students",
        name: "students",
        component: Students,
      },
      //default route
      {
        path: "",
        name: "",
        component: Admin,
      },
    ],
  },
];

//Initialize a vue router
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
