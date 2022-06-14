<template>
    <div class="campaign-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->

            <div class="jumbotron shadow-custom rounded-0 mt-3 mb-5">

        <!-- main content -->
<div class="container mt-50">
    <div class="row justify-content-center">
        <div class="col-md-8 mb-4">
            <div class="card border-0 rounded shadow-custom" style="border-radius: 20px">
                <div class="card-body">
                    <h4 class="font-weight-bold text-center" style="margin-top: 0px">{{ campaign.title }}</h4>
                     <hr>
                      <div class="author">
                        <div class="row">
                            <div class="col-md-1 col-2"> 
                            </div>
                        </div>
                    </div>
                 <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover">
                  <hr>
                  <h6>{{ campaign.crowdfunding }}    <img :src="campaign.logo" class="align-items-left" style="width:20px;"></h6> 
                   
                     <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" :style="{ width: percentage(campaign.donation , campaign.target_donation) + '%'}"  aria-valuemin="0" aria-valuemax="100">{{ Math.round(percentage(campaign.donation , campaign.target_donation)) }} %</div>
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
                                       
                                        
                                        <router-link :to="{name: 'form', params: {slug: form}}" class="btn btn-success shadow-sm p-2 mb-3 bg-success text-white rounded fixed-bottom mx-auto" style="width:45%;font-size:15px"> Donasi <i class="fa fa-long-arrow-alt-right"></i>  </router-link>
                    <h6 class="mt-3 text-secondary" v-html="campaign.description"></h6>
                    </div>
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
    import axios from 'axios';

    import { ref, onMounted } from 'vue';

    import { useRoute } from 'vue-router';

    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'CampaignsDetailComponent',

        components: {
            Header,
            Footer
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

                setTimeout(() => {
                    return { x: 0, y: 0 } }, 100);
        

            });

            return {
                campaigns,
                campaign,
                setTimeout
            }

        }
    }
</script>
