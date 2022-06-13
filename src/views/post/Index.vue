<template>
    <div class="post" style="background-color:#F6FBFF;">
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
                    <h3 class="text-dark font-weight-bold mt-3"> Program Kami </h3>
                    <h6 class="text-dark">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</h6>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- main content -->

<div class="container">    
        <div class="row mt-5 mb-5 bg-white shadow-sm p-3 mb-5 bg-body rounded" style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>


<div class="container mt-3">
    <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 mb-2" v-for="post in posts" :key="post.id">
            <div class="card border-0 mb-3 h-80 shadow p-3 bg-white rounded">
                 <img :src="post.image" class="card-img-top lazy" style="width: 100%;height: 200px;object-fit:cover">
                <div  style="width: 100%;height: 80px;">
                    <div class="topic">
                                                <div href="" class="badge badge-danger shadow-custom mt-3">{{ post.created_at }}</div>
                                             
                                            </div>
                   <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                            class="text-dark text-decoration-none">
                                             <h5 class="text-secondary font-weight-bolder">{{ post.title }}</h5>
                                        </router-link>
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
        name: 'postCmponent',

        components: {
            //loader component
         
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const posts = ref([]);
        
            //define state moreExists
            let moreExists = ref(false);
            let nextPage = ref(0);

            //define method
            const fetchDataposts = () => {
                axios.get('/api/post')
                    .then(response => {

                        //assign response to state posts
                        posts.value = response.data.data.data

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
                axios.get(`/api/post?page=${nextPage.value}`)
                    .then(response => {
                        if (response.data.data.current_page < response.data.data.last_page) {
                                
                                //set state moreExists to true
                                moreExists = true

                                //increment nextPage
                                nextPage = response.data.data.current_page + 1
                        } else {

                               response.data.data.data.forEach(data => {
                            posts.value.push(data)
                        })
                          //set state moreExists to false
                            moreExists.value = false
                        }
                        
                        //assign response to state posts
                        
                    })
            };

            //run hook onMounted
            onMounted(() => {

                //fetch data posts
                fetchDataposts()
            });

            //return data
            return {
                posts,
                moreExists,
                nextPage,
                loadMore
            }

        }
    }
</script>