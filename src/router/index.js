import { createRouter, createWebHistory } from 'vue-router';

import axios from 'axios';

axios.defaults.baseURL = "https://donasi.masbosblaster.com";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "Home" */ "@/views/home/Index"),
    },
    {
        path: '/video',
        name: 'video',
        component: () => import( /* webpackChunkName: "VideoIndex" */ "@/views/video/Index")
    },
    {
        path: '/post',
        name: 'post',
        component: () => import( /* webpackChunkName: "PostIndex" */ "@/views/post/Index"),
    },
    {
        path: '/campaign',
        name: 'campaign',
        component: () => import( /* webpackChunkName: "PostIndex" */ "@/views/campaign/Index"),
    },
    {
        path: '/tag/:slug',
        name: 'detail_tag',
        component: () => import( /* webpackChunkName: "TagShow" */ "@/views/tag/Show")
    },
    {
        path: '/category/:slug',
        name: 'detail_category',
        component: () => import( /* webpackChunkName: "CategoryShow" */ "@/views/category/Show")
    },
    {
        path: '/event',
        name: 'event',
        component: () => import( /* webpackChunkName: "EventIndex" */ "@/views/event/Index")
    },
    {
        path: '/event/:slug',
        name: 'detail_event',
        component: () => import( /* webpackChunkName: "EventShow" */ "@/views/event/Show")
    },
   
    {
        path: '/about',
        name: 'about',
        component: () => import( /* webpackChunkName: "VideoIndex" */ "@/views/about/Index")
    },

    {
        path: '/form',
        name: 'form',
        component: () => import( /* webpackChunkName: "VideoIndex" */ "@/views/form/Show")
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import( /* webpackChunkName: "ContactIndex" */ "@/views/contact/Index")
    },
    {
        path: '/:slug',
        name: 'detail_post',
        component: () => import( /* webpackChunkName: "PostShow" */ "@/views/post/Show")
    },

    {
        path: '/campaign/:slug',
        name: 'detail_campaign',
        component: () => import( /* webpackChunkName: "CampaignShow" */ "@/views/campaign/Show")
    },

    {
        path: '/search',
        name: 'search',
        component: () => import( /* webpackChunkName: "search" */ '@/views/search/Index.vue')
     },

  
    
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router
