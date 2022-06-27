<template>
    <div class="sidaq-index">
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
                    <h5 class="text-dark font-weight-bold mt-3"> {{ categoryInfo.message }} </h5>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- end breadcrumb -->

        <!-- main content -->

<div class="container">
     <div class="row mt-3 mb-5 bg-white shadow p-2 bg-white" style="border-radius: 20px;">
        <div class="col-md-8 mb-5"></div>
            <div class="container mb-3">

                <div v-if="sidaqs.length > 0" class="row">
                    <div class="col-md-4 mb-4" v-for="sidaq in sidaqs" :key="sidaq.id">
                        <div class="card h-100  shadow mb-4" style="border-radius:12px">
                            <div class="card-img">

                                <img :src="sidaq.image" class="w-100 rounded lazy" style="object-fit: cover">
                            </div>
                            <div class="card-body">
                                <router-link :to="{name: 'detail_sidaq', params: {slug: sidaq.slug}}"
                                    class="text-dark text-decoration-none">
                                    <h6>{{ sidaq.title }}</h6>
                                </router-link>
                            </div>
                            <div class="card-footer bg-white">

                                 <div class="row align-items-left jumbotron-santri-koding">
                                    <div class="col-12 col-md-6 text-left">
                                        <h5 class="font-weight-bolder text-dark">{{ sidaq.crowdfunding }}    <img :src="sidaq.logo" class="align-items-left" style="width:20px;"></h5> 
                                    </div>                   
                                 </div>

                                <div class="row align-items-center jumbotron-santri-koding">
                                    <div class="col-6 col-md-6 text-left">
                                        <span style="color:grey"> Terkumpul</span> 
                                        <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. {{ formatPrice(sidaq.donation) }}</h6> 
                                </div>
                                 
                                <div class="col-6 col-md-6 text-right">
                                    <router-link :to="{name: 'detail_sidaq', params: {slug: sidaq.slug}}" class="text-dark text-decoration-none">
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
            const sidaqs         = ref([]);
            const categoryInfo  = ref({});
            let moreExists      = ref(false);
            let nextPage        = ref(0);

            const route = useRoute();

            const fetchDatasidaqsByCategory = () => {
                axios.get(`/api/category/${route.params.slug}`)
                    .then(response => {
                        
                    
                        categoryInfo.value = response.data.response

                        sidaqs.value = response.data.data.data

                      

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
                            sidaqs.value.push(data)
                        })
                    })

            }

            onMounted(() => {
                fetchDatasidaqsByCategory()
            })
            watch(() => route.params.slug, () => {
                    fetchDatasidaqsByCategory();
                }
            )

            return {
          
                sidaqs,
                categoryInfo,
                moreExists,
                loadMore
            }
        }
    }
</script>
