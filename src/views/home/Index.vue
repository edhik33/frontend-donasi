<template>
    <div class="home" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <div class="jumbotron" >    </div>
            <div class="container">
                <div class="row mb-0 bg-white shadow p-3 mb-5 bg-white " style="border-radius: 20px;">
            
                   <div class="col-md-12">  
              <Slider />
    
        </div>
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
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-3 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

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
                                <span class=" text-dark" style="font-size: 15px;">{{ campaign.title }}</span>
                             </div>

                          
                                <div class="progress mt-2 mb-2">
                                    <div class="progress-bar bg-success rounded-0" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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
       <div class="text-center mt-3">
                <router-link :to="{name: 'campaign'}" class="btn btn-success shadow-sm p-2 mb-3 bg-white text-success rounded">Lihat Semua Program <i class="fa fa-long-arrow-alt-right"></i></router-link>
       </div>
    </div>
    
    

<!-- end PROGRAM -->


<!-- POST PROGRAM -->


<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-3 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">
                  <div class="row mb-3 text-left">
                        <div class="col-md-12">
                <h4>Artikel</h4>

            </div>
                </div>
       </div>
                    <div class="col-12 col-md-4 col-lg-4 mb-4"  v-for="post in posts" :key="post.id">
                <a href="" class="text-decoration-none text-dark">
                    <div class="card  h-100 shadow p-3 mb-3 bg-white rounded">
                        <div class="row no-gutters p-2">
                            <div class="col-md-12">
                                  <router-link :to="{name: 'detail_post', params: {slug: post.slug}}">
                                  <img :src="post.image"  class="w-100 rounded lazy" style="object-fit: cover"></router-link>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body p-3">
                                     <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                            class="text-dark text-decoration-none">
                                             <h5 class="text-secondary font-weight-bolder">{{ post.title }}</h5>
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
    import Slider from "@/components/Slider";
    import Footer from "@/components/Footer";
     
 
    
    

    export default {
        name: 'HomeComponent',

        components: {
            Slider,
            ListLoader,
            Header,
            Footer,
         
        },
        
        setup() {
            const categories = ref([]);
            const categories_loader = ref(1);

            const campaigns = ref([]);
            const posts = ref([]);
          
           

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

                   

                    


            });

            return {
                posts,
                campaigns,
                categories,
                categories_loader,
          
         
            }
        }
    }
</script>
