import Vue from "vue";
import Router from "vue-router";
import CategoryEdit from "@/components/EditProduct";
import ProductList from "@/Views/ProductList";
import Stock from "@/Views/Stock";
import SaleReport from "@/components/SalesReport";
import Order from "@/Views/Order";
import AddProduct from "@/components/AddProduct";
import CreateStock from "@/components/CreateStock";
import MakeOrder from "@/components/MakeOrder";
import UpdateOrder from "@/components/UpdateOrder";
import Login from "@/components/Login";
import Register from "@/components/Register";
import LogoutView from "@/components/Logout";
import Statistics from "@/Views/Statatistics";
import Dashboard from "@/Views/Dashboard";
import home from "../Views/HomeView";
import customerDashboard from "../Views/customerDashboard";
import {isAuthenticated} from '../Service/authService'


Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [

    {
      path: '/',
      component: home,
      
    },
    
    {
      name: "productList",
      path: "/product",
      component: ProductList,
      meta: { requiresAuth: true }
    },
    {
      name: "productEdit",
      path: "/product/:id/edit",
      component: CategoryEdit,
      meta: { requiresAuth: true }
    
    },
    {
      name: "AddProduct",
      path: "/product/add",
      component: AddProduct,
      meta: { requiresAuth: true }
     
    },

    {
      name: "AddStock",
      path: "/stock/add",
      component: CreateStock,
      meta: { requiresAuth: true }
    },

    {
      name: "stock",
      path: "/stock",
      component: Stock,
      meta: { requiresAuth: true }
    },

    {
      name: "order",
      path: "/order",
      component: Order,
      meta: { requiresAuth: true }
    },

    {
      name: "createOrder",
      path: "/order/add",
      component: MakeOrder,
      meta: { requiresAuth: true }
    },

    {
      name: "register",
      path: "/register",
      component: Register
    },

    {
      name: "updateOrder",
      path: "/order/:id/edit",
      component: UpdateOrder
    },

    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "logout",
      path: "/logout",
      component: LogoutView
    },

    {
      name: "statistics",
      path: "/statistics/dashboard",
      component: Statistics,
      meta: { requiresAuth: true }
    },
    {
      name: "dashboard",
      path: "/admin/dashboard",
      component: Dashboard,
      meta: { requiresAuth: true }

    },
    {
      name: "customerDashborad",
      path: "/customer/dashboard",
      component: customerDashboard,
      meta: { requiresAuth: true }
    },

    {
      name: "reports",
      path: "/reports",
      component: SaleReport,
      meta: { requiresAuth: true }
    },
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth) && !isAuthenticated()) {
     next({ name: "login" });
  } else {
     next();
  }
});




export default router;
