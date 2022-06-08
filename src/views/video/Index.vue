<template>
       <div class="video" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->
    <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">
                        <img src="https://sidaq.org/wp-content/uploads/2022/05/sidaq-logo-fix-new.png" style="width: 150px;">
                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> Tentang Kami </h3>
                    <h6 class="text-dark">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</h6>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- main content -->

<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">

            <div class="row">
      
                <div class="col-md-12">
                        <div class="card-body" style="border-radius: 20px;">
                            <h3>VISI</h3>
                            <hr>
                            <h4 class="text-secondary">
                               Mensurgakan Indonesia dengan Gerakan Sedekah yang Diberikan kepada Para Penghafal Al-Quran di Berbagai Daerah.
                            </h4>
                        </div>
                </div>
            </div>
              </div>
            </div>
            </div>

            <div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">

            <div class="row">
      
                <div class="col-md-12">
                        <div class="card-body" style="border-radius: 20px;">
                            <h3>VISI</h3>
                            <hr>
                            <h4 class="text-secondary">
                               Mensurgakan Indonesia dengan Gerakan Sedekah yang Diberikan kepada Para Penghafal Al-Quran di Berbagai Daerah.
                            </h4>
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
    //import content loader
   
    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'VideoCOmponent',

        components: {
            //loader component
         
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const videos        = ref([]);
            const videos_loader = ref(4);
            let moreExists      = ref(false);
            let nextPage        = ref(0);

            //define method fetchDataVideos
            const fetchDataVideos = () => {
                axios.get('/api/video')
                    .then(response => {

                        //aassign data to state videos
                        videos.value = response.data.data.data

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
                axios.get(`/api/video?page=${nextPage.value}`)
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
                        
                        //push data to state videos
                        response.data.data.data.forEach(data => {
                            videos.value.push(data)
                        })
                    })
            }

            //run hook onMounted
            onMounted(() => {

                //run method fetchDataVideos
                fetchDataVideos();
            });

            return {
                videos,
                videos_loader,
                moreExists,
                loadMore
            }
        }
    }
</script>