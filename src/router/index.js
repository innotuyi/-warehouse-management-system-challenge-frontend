import Vue from "vue";
import Router from "vue-router";
import CategoryEdit from "@/components/EditProduct";
import ProductList from "@/components/ProductList";
import Stock from "@/components/Stock";
import Order from "@/components/Order";
import AddProduct from "@/components/AddProduct";
import CreateStock from "@/components/CreateStock";
import MakeOrder from "@/components/MakeOrder";
import UpdateOrder from "@/components/UpdateOrder";
import Login from "@/components/Login";
import Statistics from "@/components/Statatistics";
import Dashboard from "@/components/Dashboard";
import home from "../Views/HomeView";


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
      name: "statistics",
      path: "/statistics",
      component: Statistics,
    },
    {
      name: "dashboard",
      path: "/admin/dashboard",
      component: Dashboard,
    },
  ]
});



export default router;
