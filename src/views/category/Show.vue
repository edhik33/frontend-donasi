<template>
    <div class="campaign-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- breadcrumb -->
<div class="jumbotron shadow-custom rounded-0 mt-3 mb-5">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">
                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> {{ categoryInfo.message }} </h3>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- end breadcrumb -->

        <!-- main content -->

<div class="container">
     <div class="row mt-3 mb-0 bg-white shadow p-2 bg-white" style="border-radius: 20px;">
        <div class="col-md-8 mb-5"></div>
            <div class="container mb-3">

                <div v-if="campaigns.length > 0" class="row">
                    <div class="col-md-4" v-for="campaign in campaigns" :key="campaign.id">
                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="card-img">
                                <img :src="campaign.image" class="w-100 rounded lazy" style="object-fit: cover">
                            </div>
                            <div class="card-body">
                                <router-link :to="{name: 'detail_campaign', params: {slug: campaign.slug}}"
                                    class="text-dark text-decoration-none">
                                    <h6>{{ campaign.title }}</h6>
                                </router-link>
                            </div>
                            <div class="card-footer bg-white">

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
                                    <router-link :to="{name: 'detail_campaign', params: {slug: campaign.slug}}" class="text-dark text-decoration-none">
                                    <button type="button" class="btn btn-success shadow-sm p-2 mb-3 bg-success rounded">Selengkapnya</button>
                                    </router-link>

                                    
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="alert alert-danger">
                        DATA BERITA TERBARU BELUM TERSEDIA !
                    </div>
                </div>

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-md" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
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
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

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

            const route = useRoute();

            const fetchDataCampaignsByCategory = () => {
                axios.get(`/api/category/${route.params.slug}`)
                    .then(response => {
                        
                    
                        categoryInfo.value = response.data.response

                        campaigns.value = response.data.data.data

                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            moreExists.value = true

                            nextPage.value = response.data.data.current_page + 1
                             } else {
                            moreExists.value = false
                        }

                    })
            }

            const loadMore = () => {
                axios.get(`/api/category/${route.params.slug}?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                            moreExists.value = true
                            nextPage.value = response.data.data.current_page + 1
                        } else {
                            moreExists.value = false
                        }

                        response.data.data.data.forEach(data => {
                            campaigns.value.push(data)
                        })
                    })
            }

            onMounted(() => {
                fetchDataCampaignsByCategory()
            })
            watch(() => route.params.slug, () => {
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