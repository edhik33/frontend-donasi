<template>
    <div class="pb-20 pt-20 text-center">
       
      
<div class="container">  
        <div class="row mt-3 mb-0 bg-white shadow p-2 bg-white" style="border-radius: 20px;">
        <div class="col-md-8 mb-5"></div>
<div class="container mb-3">

            <div class="row">
                <div class="col-md-12">
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
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import { ref, onMounted } from 'vue';

    import { useRoute } from 'vue-router';

 

    export default {
        name: 'CampaignsDetailComponent',

        components: {
         
        },

        setup() {
            const campaign              = ref({});
            const campaigns              = ref({});
           
            const route = useRoute();

            onMounted(() => {

                  axios.get('/api/campaign')
                    .then(response => {
                        campaigns.value = response.data.data.data;
                    })

       
                axios.get(`/api/campaign/${route.params.slug}`)
                    .then(response => {
                        campaign.value = response.data.data;
                    })

            });

            return {
                campaigns,
                campaign,
            }

        }
    }
</script>
