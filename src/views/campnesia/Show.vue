<template>
    <div class="campaign-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->

        <!-- main content -->
<div class="container mt-100">
    <div class="row justify-content-center">
        <div class="col-md-8 mb-4">
            <div class="card border-0 rounded shadow-custom" style="border-radius: 20px">
                <div class="card-body">
                    <h4 class="font-weight-bold text-center" style="margin-top: 0px">{{ campnesia.title }}</h4>
                     <hr>
                      <div class="author">
                        <div class="row">
                            <div class="col-md-1 col-2"> 
                            </div>
                        </div>
                    </div>
                 <img :src="campnesia.image" class="w-100 rounded lazy" style="object-fit: cover">
                  <hr>
                  <h6>{{ campnesia.crowdfunding }}    <img :src="campnesia.logo" class="align-items-left" style="width:20px;"></h6> 
                   
                     <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" :style="{ width: percentage(campnesia.donation , campnesia.target_donation) + '%'}"  aria-valuemin="0" aria-valuemax="100">{{ Math.round(percentage(campnesia.donation , campnesia.target_donation)) }} %</div>
                    </div>
                                                
                    <div class="row align-items-center jumbotron-santri-koding">
                        <div class="col-6 col-md-6 text-left">
                            <span style="color:grey"> Terkumpul</span> 
                                <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(campnesia.donation) }}</h6> 
                        </div>
                            <div class="col-6 col-md-6 text-right">
                            <span style="color:grey">Target Donasi</span>
                                <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(campnesia.target_donation) }}</h6> 
                            </div>                       
                        </div>
                                                                               
                    <router-link :to="{name: 'formulir', params: {slug: campnesia.slug }}" class="btn btn-success shadow-sm p-2 mb-3 bg-success text-white rounded  mx-auto" style="width:100%;font-size:15px"> Donasi <i class="fa fa-long-arrow-alt-right"></i>  </router-link>
                    <h6 class="mt-3 text-secondary" v-html="campnesia.description"></h6>
                    </div>
                </div>
            </div>
    </div>
</div>
    

        <!-- main content -->

        <!-- footer -->
        <Footer />

        <a href="https://kunjungi.website/ota-sidaq-new-2" class="float" target="_blank" onClick="fbq('track', 'Contact');">
            <i class="fa fa-whatsapp my-float"></i>
        </a>

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
            const campnesia              = ref({});
            const campnesias              = ref({});
           
            const route = useRoute();

           

            onMounted(() => {

                axios.get('/api/campnesia')
                    .then(response => {
                        campnesias.value = response.data.data.data;
                    })

       
                axios.get(`/api/campnesia/${route.params.slug}`)
                    .then(response => {
                        campnesia.value = response.data.data;
                    })
        

            });

            return {
                campnesias,
                campnesia,
            }

        }
    }
</script>

<style>
        .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}
    </style>
