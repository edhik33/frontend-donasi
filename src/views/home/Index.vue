<template>
    <div class="home" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->


        <!-- main content -->
        <div class="jumbotron" ></div>
            <div class="container">
                <div class="row mt-20 mb-0 bg-white shadow p-3 mb-5 bg-white " style="border-radius: 20px;">
                    <div class="col-md-12 mb-5 bg-dark"></div>

                   
                        <h2 class="font-weight-bold">Mensurgakan Indonesia dengan Al-Qur’an!</h2>
                        <p class="lead mt-5" style="line-height: 35px;">Selamat datang di gerakan meng-Qur’an-kan Indonesia. Indonesia butuh bantuan Anda. Bergabunglah bersama kami untuk bersama-sama menyelamatkan Indonesia di dunia dan akhirat.</p>
                        <hr class="my-4">
                        <form action="" method="GET" class="card-search card-sm" style="margin-top: 20px">
                            <div class="card-body row no-gutters align-items-center mb-5" style="padding: .5rem">
                                <div class="col-auto">

                        </div>
                        <!--end of col-->
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" name="q" type="search" placeholder="Ketik Pembangunan Pondok">
                        </div>
                        <!--end of col-->
                        <div class="col-auto">
                            <div class="search" style="padding-right: 10px;margin-top: 6px;">
                                <i class="fa fa-search fa-lg"></i>
                            </div>
                        </div>
                        <!--end of col-->
                    </div>
                </form>
            </div>
            <div class="col-md-5 d-none d-md-block rounded d-lg-block text-right">
                <img src="/assets/1.png" class="w-100 text-right" style="height:364px">
            </div>
        </div>
  

         
               <!-- category section -->

   
<div v-if="categories.length > 0">
            <div class="container">
                <div class="row mt-3 bg-white shadow p-3 mb-5 bg-white " style="border-radius: 20px;">
                     <div class="col-md-12  bg-dark"></div>

                          <div class="col-md-3 col-3 mb-3 text-center " v-for="category in categories" :key="category.id">
                              <router-link :to="{name: 'detail_category', params:{slug: category.slug}}">
                                 <img :src="category.image" class="mt-3 rounded-circle bg-success"  style="width: 50px;text-align:center">
                              </router-link>
                              <p class="mt-2">{{ category.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
        
                  <div v-else>
                        <div class="row">
                            <div v-for="loader in categories_loader"
                                :key="loader">
                                <div class="card border-0 shadow-sm rounded-lg mb-3">
                                    <div class="card-body pt-4">
                                        <ListLoader />
                                    </div>
                                </div>
                           </div>      
                      </div>
                  </div>
                         
                       
 <!-- end category -->

<!-- PROGRAM -->
<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">
                  <div class="row mb-3 text-left">
                        <div class="col-md-12">
                <h4>Campaign</h4>
            </div>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4 mb-4" v-for="campaign in campaigns" :key="campaign.id">
                <div class="card h-100 shadow p-2" style="border-radius:12px">
                         <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover">
                             <div class="card-footer text-center" style="height: 40px;background: #fff;">
                                <span class="text-center text-dark" style="font-size: 15px;">{{ campaign.title }}</span>
                             </div>

                            <div class="container">
                                <div class="progress mt-2 mb-2">
                                    <div class="progress-bar bg-success rounded-0" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </div>

                            <div class="card-footer mt-2">
                                
                                  
                                       
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
                                         <span style="color:grey">Target Donasi</span>
                                                                         <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(campaign.target_donation) }}</h6> 
                                 </div>
                                  <div class="col-6 col-md-6 text-left">
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
       <div class="col-md-12 mb-4">
       <div class="text-center mt-3">
                <router-link :to="{name: 'campaign'}" class="btn btn-success shadow-sm p-2 mb-3 bg-white text-success rounded">Lihat Semua Program <i class="fa fa-long-arrow-alt-right"></i></router-link>
       </div>
    </div>
    
    

<!-- end PROGRAM -->


<!-- POST PROGRAM -->


<div class="container">
    <div class="row">
            <div class="col-md-12">
                <h4 class="font-weight-bold">Artikel</h4>
            </div>
        </div>

           <div class="row mt-5 mb-0 bg-white shadow p-3 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5 bg-dark"></div>
        
       
                    <div class="col-md-6 col-12 mb-4"  v-for="post in posts" :key="post.id">
                <a href="" class="text-decoration-none text-dark">
                    <div class="card  h-100 shadow p-3 mb-3 bg-white rounded">
                        <div class="row no-gutters p-2">
                            <div class="col-md-4">
                               <img :src="post.image"  class="w-100 rounded lazy" style="object-fit: cover">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body p-3">
                                     <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                            class="text-dark text-decoration-none">
                                            <h4>{{ post.title }}</h4>
                                        </router-link>
                                  <hr>
                                  <span class="text-secondary">{{ post.created_at }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>        
            </div>
        </div>
    </div>                   
      <div class="col-md-12 mb-4">
       <div class="text-center mt-3">
                <router-link :to="{name: 'campaign'}" class="btn btn-success shadow-sm p-2 mb-3 bg-white text-success rounded">Lihat Semua Artikel <i class="fa fa-long-arrow-alt-right"></i></router-link>
       </div>
    </div>

            
                        


<!-- END POST PROGRAM -->

<!-- BANNER-->



<!-- END BANNER-->


  
           
        <!-- footer -->
        <Footer />
        <!-- end footer -->
        </div>

</template>

<script>

    import {
        ListLoader
    } from 'vue-content-loader';

    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    

    export default {
        name: 'HomeComponent',

        components: {
            ListLoader,
            Header,
            Footer
        },
        
        setup() {
            const categories = ref([]);
            const categories_loader = ref(1);

            const campaigns = ref([]);
            const posts = ref([]);
            const sliders = ref([]);
           

            //hook onMounted
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

                       axios.get('/api/slider')
                    .then(response => {
                        sliders.value = response.data.data.data;
                    })



            });

            return {
                sliders,
                posts,
                campaigns,
                categories,
                categories_loader,
         
            }
        }
    }
</script>
