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
                    <h4 class="text-dark font-weight-bold mt-3"> Program </h4>
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

                           
                              <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" :style="{ width: percentage(campaign.donation , campaign.target_donation) + '%'}"  aria-valuemin="0" aria-valuemax="100">{{ Math.round(percentage(campaign.donation , campaign.target_donation)) }} %</div>
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
            const campaigns = ref([]);
      
            let moreExists = ref(false);
            let nextPage = ref(0);

            const fetchDataCampaigns = () => {
                axios.get('/api/campaign')
                    .then(response => {
                        campaigns.value = response.data.data.data
                        if (response.data.data.current_page < response.data.data.last_page) {
                            moreExists.value = true
                            nextPage.value = response.data.data.current_page + 1;
                        } else {
                            moreExists.value = false
                        }
                    })
            };

            const loadMore = () => {
                axios.get(`/api/campaign?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                                
                                moreExists = true
                                nextPage = response.data.data.current_page + 1
                        } else {

                               response.data.data.data.forEach(data => {
                            campaigns.value.push(data)
                        })
                            moreExists.value = false
                        }
                        
                    })
            };

            onMounted(() => {
                fetchDataCampaigns()
            });
            return {
                campaigns,
                moreExists,
                nextPage,
                loadMore
            }

        }
    }
</script>