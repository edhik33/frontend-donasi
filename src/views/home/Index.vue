<template>

<div class="home" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->

            <!-- Slider -->
<div class="jumbotron" ></div>
    <div class="container">
    <div class="row mb-0 bg-white shadow-sm p-3 mb-3 bg-body rounded " style="border-radius: 20px;">
        <Slider />
    </div>
</div>
            <!-- end slider -->

            <!-- category section -->

   

    <div class="container">
        <div class="row mt-3 bg-white shadow-sm mb-3 bg-body rounded " style="border-radius: 17px;">
            <div class="col-md-12  bg-dark"></div>

                <div class="col-md-3 col-3  text-center " v-for="category in categories" :key="category.id">
                    <router-link :to="{name: 'detail_category', params:{slug: category.slug}}">
                        <img :src="category.image" class="mt-3 rounded-circle bg-success"  style="width: 50px;text-align:center">
                    </router-link>
                    <p class="mt-2">{{ category.name }}</p>
                </div>
            </div>
        </div>
 
  

 
                       
 <!-- end category -->

<!-- PROGRAM -->
<div class="container">    
        <div class="row mt-3 mb-0 bg-white shadow-sm  mb-3 bg-body rounded " style="border-radius: 17px;">
        <div class="col-md-12 mb-3"></div>

        <div class="container">
            <div class="row mb-3 text-left">
                <div class="col-md-12">
                    <h4>Campaign</h4>
                </div>
            </div>
        </div>

<div class="col-12 col-md-4 col-lg-4 mb-4" v-for="campaign in campaigns" :key="campaign.id">
    <div class="card h-80 shadow p-2" style="border-radius:12px">

        <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover">
            <div class="mt-3" style="height: 40px;background: #fff;">
                <span class=" text-secondary text-center" style="font-size: 15px;">{{ campaign.title }}</span>
            </div>

        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" :style="{ width: percentage(campaign.donation , campaign.target_donation) + '%'}"  aria-valuemin="0" aria-valuemax="100">{{ percentage(campaign.donation , campaign.target_donation) }}%</div>
        </div>
                            
        <div class="mt-2">        
            <div class="row align-items-left jumbotron-santri-koding">
                <div class="col-12 col-md-6 text-left">
                    <h5 class="text-dark">{{ campaign.crowdfunding }}<img :src="campaign.logo" class="align-items-left" style="width:20px;"></h5> 
                </div>                   
            </div>

        <div class="row align-items-center jumbotron-santri-koding">
            <div class="col-6 col-md-6 text-left">
                    <span style="color:grey"> Terkumpul</span> 
                    <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(campaign.donation) }}</h6> 
            </div>
                
            <div class="col-6 col-md-6 text-right">
                    <router-link :to="{name: 'detail_campaign', params: {slug: campaign.slug}}" 
                        class="text-dark text-decoration-none">
                        <button type="button" class="btn btn-success shadow-sm p-2 mb-3 bg-success rounded">Selengkapnya</button>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
        </div>

            <div class="col-md-12 mb-4">
                <div class="text-center mt-4">
                    <router-link :to="{name: 'campaign'}" class="btn btn-success shadow-sm p-2 mb-1 mt-1 bg-white text-success rounded">Lihat Semua Program <i class="fa fa-long-arrow-alt-right"></i>
                    </router-link>
                </div>
            </div>

<!-- end PROGRAM -->

<!-- POST -->

<div class="container">    
    <div class="row mb-0 bg-white shadow-sm mb-3 bg-body rounded" style="border-radius: 17px;">
        <div class="col-md-12 mb-3"></div>
            <div class="container">
                <div class="row mb-3 text-left">
                        <div class="col-md-12">
                        <h4>Artikel</h4>
                        </div>
                </div>
            </div>

        <div class="col-12 col-md-4 col-lg-4 mb-4"  v-for="post in posts" :key="post.id">
                <a href="" class="text-decoration-none text-dark">
                    <div class="card  h-100 shadow p-3 bg-white rounded">
                        <div class="row no-gutters">

                            <div class="col-md-12">
                                  <router-link :to="{name: 'detail_post', params: {slug: post.slug}}">
                                  <img :src="post.image"  class="w-100 rounded lazy" style="object-fit: cover"></router-link>
                            </div>
                            
                            <div class="col-md-8 mt-3">
                               
                                     <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                            class="text-dark text-decoration-none">
                                             <span class="text-secondary font-weight-bolder">{{ post.title }}</span>
                                        </router-link>
                                  <hr>
                                  <span class="text-secondary">{{ post.created_at }}</span>
                                </div>
                          
                        </div>
                    </div>
                </a>        
            </div>
        </div>

     
                 
      <div class="col-md-12 mb-3">
       <div class="text-center mt-3">

                <router-link :to="{name: 'post'}" class="btn btn-success shadow-sm p-2 mb-1 mt-1 bg-white text-success rounded">Lihat Semua Artikel <i class="fa fa-long-arrow-alt-right"></i></router-link>

                

       </div>
    </div>
</div>
<!-- END POST PROGRAM --> 



<!-- POST -->

<div class="container">    
    <div class="row mb-0 bg-white shadow-sm  mb-3 bg-body rounded " style="border-radius: 17px;">
        <div class="col-md-12 mb-3"></div>
            <div class="container">
                <div class="row mb-3 text-left">
                        <div class="col-md-12">
                        <h4>Kegiatan</h4>
                        </div>
                </div>
            </div>

        <div class="col-12 col-md-4 col-lg-4 mb-4"  v-for="video in videos" :key="video.id">
                <div class="text-decoration-none text-dark">
                    <div class="card  h-100 shadow p-3  bg-white rounded">
                        <div class="row no-gutters">

                            <div class="col-md-12">
                                   <iframe
                                            style="width:100%;height:200px;border-top-left-radius:.3rem;border-top-right-radius:.3rem"
                                            :src="video.embed" frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                            </div>
                            
                            <div class="col-md-8">
                              
                                  
                                  <hr>
                                    <div class="text-dark text-decoration-none">
                                             <span class="text-secondary font-weight-bolder">{{ video.title }}</span>
                                        </div>
                                
                                </div>
                         
                        </div>
                    </div>
                </div>        
            </div>
        </div>

     
                 
      <div class="col-md-12 mb-3">
       <div class="text-center mt-3">

                <router-link :to="{name: 'video'}" class="btn btn-success shadow-sm p-2 mb-1 mt-1 bg-white text-success rounded">Lihat Semua Video <i class="fa fa-long-arrow-alt-right"></i></router-link>

                

       </div>
    </div>

<!-- END POST PROGRAM -->
        <!-- footer -->
        <Footer />

        <!-- end footer -->
</div>

</template>

<script>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    import Header from "@/components/Header";
    import Slider from "@/components/Slider";
    import Footer from "@/components/Footer";

    export default {
        name: 'HomeComponent',

        components: {
            Slider,
            Header,
            Footer,
         
        },
        
        setup() {
            const categories = ref([]);
            const campaigns = ref([]);
            const posts = ref([]);
            const videos = ref([]);

            
          
            onMounted(() => {

                axios.get('/api/category')
                    .then(response => {
                        categories.value = response.data.data.data;
                    })

                 axios.get('/api/campaign')
                    .then(response => {
                        campaigns.value = response.data.data.data;
                    })

                    axios.get('/api/post')
                    .then(response => {
                        posts.value = response.data.data.data;
                    })

                    axios.get('/api/video')
                    .then(response => {
                        videos.value = response.data.data.data;
                    })
            });

            return {
                videos,
                posts,
                campaigns,
                categories,
            }
        }
    }
</script>
