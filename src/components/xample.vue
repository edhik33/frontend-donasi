<template>
    <div class="campaign-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
     

        <!-- breadcrumb -->
      
        <!-- end breadcrumb -->

            
<div class="container">  
        <div class="row mt-3 mb-0 bg-white shadow p-2 bg-white" style="border-radius: 20px;">
        <div class="col-md-8 mb-5"></div>
<div class="container mb-3">

            <div v-if="campaigns.length > 0" class="row">

                <div class="col-md-12" v-for="campaign in campaigns" :key="campaign.id">
                            <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover" >
                                 <div class="row mt-3 text-left">
                        <div class="col-md-12">
                <h4 class="text-secondary font-weight-bolder">{{ campaign.title }}</h4>
                <h6>
                                                    {{ campaign.crowdfunding }}    <img :src="campaign.logo" class="align-items-left" style="width:20px;"></h6> 
                                                
                  <div class="progress mt-2 mb-2">
                                    <div class="progress-bar bg-success rounded-0" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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
                                                   
                                          </div>
                                          </div>
                                          </div>
                                        
                                        <router-link :to="{name: 'form', params: {slug: form}}" class="btn btn-success shadow-sm p-2 mb-3 bg-success text-white rounded fixed-bottom mx-auto" style="width:70%;font-size:15px"> Donasi <i class="fa fa-long-arrow-alt-right"></i>  </router-link>
             
                           
                            
                            </div>
                            
                        </div>
                        <div v-else>
                    <div class="alert alert-danger">
                        DATA BERITA TERBARU BELUM TERSEDIA !
                    </div>
                </div>
                    </div>
              
           
       
                

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-md" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
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
     //import axios
    import axios from 'axios';

    //import hook watch from vue
    import { ref, onMounted, watch } from 'vue';

    //import hook useRoute
    import { useRoute } from 'vue-router';

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'CategoryComponent',

        components: {
            Header,
            Footer
        },
        
        setup() {
            
            //define state
            const campaigns         = ref([]);
            const categoryInfo  = ref({});
            let moreExists      = ref(false);
            let nextPage        = ref(0);

            //define route
            const route = useRoute();

            //define method fetchDataPostsByCategory
            const fetchDataCampaignsByCategory = () => {
                axios.get(`/api/category/${route.params.slug}`)
                    .then(response => {
                        
                        //assign data to state categoryInfo
                        categoryInfo.value = response.data.response

                        //assign data to state posts
                        campaigns.value = response.data.data.data

                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            //set state moreExists to true
                            moreExists.value = true

                            //set state nextPage to next page
                            nextPage.value = response.data.data.current_page + 1
                        } else {

                            //set state moreExists to false
                            moreExists.value = false
                        }

                    })
            }

            //define method loadMore
            const loadMore = () => {
                axios.get(`/api/category/${route.params.slug}?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            //set state moreExists to true
                            moreExists.value = true

                            //set state nextPage to next page
                            nextPage.value = response.data.data.current_page + 1
                        } else {

                            //set state moreExists to false
                            moreExists.value = false
                        }

                        //push data to state posts
                        response.data.data.data.forEach(data => {
                            campaigns.value.push(data)
                        })
                    })
            }

            //run hook onMounted
            onMounted(() => {

                //run method fetchDataPostsByCategory
                fetchDataCampaignsByCategory()
            })

            //watch route
            watch(() => route.params.slug, () => {
                    
                    //fetchDataPostsByCategory
                    fetchDataCampaignsByCategory();
                }
            )

            return {
                campaigns,
                categoryInfo,
                moreExists,
                loadMore
            }
        }
    }
</script>