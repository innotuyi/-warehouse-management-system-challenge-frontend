import Vue from "vue";
import Router from "vue-router";
import CategoryEdit from "@/components/EditProduct";
import ProductList from "@/components/ProductList";
import Stock from "@/components/Stock";
import SaleReport from "@/components/SalesReport";
import Order from "@/components/Order";
import AddProduct from "@/components/AddProduct";
import CreateStock from "@/components/CreateStock";
import MakeOrder from "@/components/MakeOrder";
import UpdateOrder from "@/components/UpdateOrder";
import Login from "@/components/Login";
import Register from "@/components/Register";
import LogoutView from "@/components/Logout";
import Statistics from "@/components/Statatistics";
import Dashboard from "@/components/Dashboard";
import home from "../Views/HomeView";
import customerDashboard from "../Views/customerDashboard";


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
      component: ProductList
    },
    {
      name: "productEdit",
      path: "/product/:id/edit",
      component: CategoryEdit,
    
    },
    {
      name: "AddProduct",
      path: "/category/add",
      component: AddProduct,
     
    },

    {
      name: "AddStock",
      path: "/stock/add",
      component: CreateStock,
    },

    {
      name: "stock",
      path: "/stock",
      component: Stock,
    },

    {
      name: "order",
      path: "/order",
      component: Order
    },

    {
      name: "createOrder",
      path: "/order/add",
      component: MakeOrder
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
    },
    {
      name: "dashboard",
      path: "/admin/dashboard",
      component: Dashboard,
    },
    {
      name: "customerDashborad",
      path: "/customer/dashboard",
      component: customerDashboard,
    },

    {
      name: "reports",
      path: "/reports",
      component: SaleReport,
    },
  ]
});



export default router;
