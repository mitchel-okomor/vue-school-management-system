import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Admit from '../components/Admit';
import Admin from '../components/Admin';
import Dashboard from '../components/Dashboard';
import Students from '../components/Students';
import Overview from '../components/Overview';

Vue.use(VueRouter);


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
        path: "/dashboard/",
        name: "dashboard",
        component: Dashboard,

        children: [
            {
              path: 'overview',
              name: 'overview',
              component: Overview
            },
            {
              path: 'students',
              name: 'students',
              component: Students
            },
            {
              path: '',
              name: '',
              component: Admin
            }
         
          ]
    }
]

//Initialize a vue router
const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;
