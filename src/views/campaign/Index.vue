<template>
    <div class="campaign" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->
  <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">

                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> Kegiatan Kami </h3>
                    <h6 class="text-dark">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</h6>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- main content -->

<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow-sm  mb-3 bg-body rounded" style="border-radius: 20px;">
    


<div class="container mt-5">
    <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-4 mb-3" v-for="campaign in campaigns" :key="campaign.id">
     
                <div class="card h-80 shadow p-3" style="border-radius:12px">
                         <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover">
                             <div class="mt-3 " style="height: 40px;background: #fff;">
                                <span class=" text-dark" style="font-size: 15px;">{{ campaign.title }}</span>
                             </div>

                           
                                <div class="progress mt-2 mb-2">
                                    <div class="progress-bar bg-success rounded-0" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">28%</div>
                                    </div>
                              

                            <div class="mt-2">
                                <div class="row align-items-center jumbotron-santri-koding">
                                    <div class="card-body text-center">
                                       
                                          <div class="row align-items-left jumbotron-santri-koding">
                                               <div class="col-12 col-md-6 text-left">
                                                    <h5 class="font-weight-bolder text-dark">{{ campaign.crowdfunding }}    <img :src="campaign.logo" class="align-items-left" style="width:20px;"></h5> 
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
    
                            <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-success btn-md mb-3" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
                </div>

   
  
        </div>
        </div>
        </div>

      
       
</div>
        <!-- main content -->

        <!-- footer -->
        <Footer />
        <!-- end footer -->
    </div>
</template>

<script>
    //import content loader

    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'campaignCmponent',

        components: {
            //loader component
         
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const campaigns = ref([]);
        
            //define state moreExists
            let moreExists = ref(false);
            let nextPage = ref(0);

            //define method
            const fetchDataCampaigns = () => {
                axios.get('/api/campaign')
                    .then(response => {

                        //assign response to state campaigns
                        campaigns.value = response.data.data.data

                        //check if response has next page
                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            //set state moreExists to true
                            moreExists.value = true

                            //increment nextPage
                            nextPage.value = response.data.data.current_page + 1;
                        } else {

                            //set state moreExists to false
                            moreExists.value = false
                        }
                    })
            };

            //define method loadMore
            const loadMore = () => {
                axios.get(`/api/campaign?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                                
                                //set state moreExists to true
                                moreExists = true

                                //increment nextPage
                                nextPage = response.data.data.current_page + 1
                        } else {

                               response.data.data.data.forEach(data => {
                            campaigns.value.push(data)
                        })
                          //set state moreExists to false
                            moreExists.value = false
                        }
                        
                        //assign response to state campaigns
                        
                    })
            };

            //run hook onMounted
            onMounted(() => {

                //fetch data campaigns
                fetchDataCampaigns()
            });

            //return data
            return {
                campaigns,
                moreExists,
                nextPage,
                loadMore
            }

        }
    }
</script>