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
                    <h4 class="font-weight-bold text-center" style="margin-top: 0px">{{ sidaq.title }}</h4>
                     <hr>
                      <div class="author">
                        <div class="row">
                            <div class="col-md-1 col-2"> 
                            </div>
                        </div>
                    </div>
                 <img :src="sidaq.image" class="w-100 rounded lazy" style="object-fit: cover">
                  <hr>
                  <h6>{{ sidaq.crowdfunding }}    <img :src="sidaq.logo" class="align-items-left" style="width:20px;"></h6> 
                   
                     <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" :style="{ width: percentage(sidaq.donation , sidaq.target_donation) + '%'}"  aria-valuemin="0" aria-valuemax="100">{{ Math.round(percentage(sidaq.donation , sidaq.target_donation)) }} %</div>
                    </div>
                                                
                    <div class="row align-items-center jumbotron-santri-koding">
                        <div class="col-6 col-md-6 text-left">
                            <span style="color:grey"> Terkumpul</span> 
                                <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(sidaq.donation) }}</h6> 
                        </div>
                            <div class="col-6 col-md-6 text-right">
                            <span style="color:grey">Target Donasi</span>
                                <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(sidaq.target_donation) }}</h6> 
                            </div>                       
                        </div>
                                                                               
                    <router-link :to="{name: 'form', params: {slug: sidaq.slug }}" class="btn btn-success shadow-sm p-2 mb-3 bg-success text-white rounded  mx-auto" style="width:100%;font-size:15px"> Donasi <i class="fa fa-long-arrow-alt-right"></i>  </router-link>
                    <h6 class="mt-3 text-secondary" v-html="sidaq.description"></h6>
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
        name: 'sidaqsDetailComponent',

        components: {
            Header,
            Footer
        },


        setup() {
            const sidaq              = ref({});
            const sidaqs              = ref({});
           
            const route = useRoute();

           

            onMounted(() => {

                axios.get('/api/sidaq')
                    .then(response => {
                        sidaqs.value = response.data.data.data;
                    })

       
                axios.get(`/api/sidaq/${route.params.slug}`)
                    .then(response => {
                        sidaq.value = response.data.data;
                    })
        

            });

            return {
                sidaqs,
                sidaq,
            }

        }
    }
</script>


