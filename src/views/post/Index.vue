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
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>


<div class="container mt-3">
    <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-4 mb-5" v-for="post in posts" :key="post.id">
            <div class="card border-0 mb-3 h-100 shadow p-3 mb-5 bg-white rounded">
                 <img :src="post.image" class="card-img-top lazy" style="width: 100%;height: 200px;object-fit:cover">
                <div class="card-body" style="width: 100%;height: 80px;">
                    <div class="topic">
                                                <a href="https://santrikoding.com/tag/laravel" class="badge badge-danger shadow-custom">{{ post.created_at }}</a>
                                             
                                            </div>
                    <a class="link-article text-decoration-none" href="https://santrikoding.com/tips-mengatasi-error-mengirim-email-menggunakan-smtp-gmail-di-laravel">
                        <h6 class="card-title font-weight-bold text-dark" style="line-height: 30px;">{{post.title}}</h6>
                    </a>
                </div>

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
        name: 'PostCmponent',

        components: {
            //loader component
         
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const posts = ref([]);
            const posts_loader = ref(6);

            //define state moreExists
            let moreExists = ref(false);
            let nextPage = ref(0);

            //define method
            const fetchDataPosts = () => {
                axios.get('/api/post')
                    .then(response => {

                        //assign response to state posts
                        posts.value = response.data.data.data

                        //check if response has next page
                        if (response.data.data.current_page < response.data.data.last_page) {
                            
                            //set state moreExists to true
                            moreExists.value = true

                            //increment nextPage
                            nextPage.value = response.data.data.current_page + 1
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

                                //set state moreExists to false
                                this.moreExists = false
                        }
                        
                        //assign response to state posts
                        response.data.data.data.forEach(data => {
                            posts.value.push(data)
                        })
                    })
            };

            //run hook onMounted
            onMounted(() => {

                //fetch data posts
                fetchDataPosts()
            });

            //return data
            return {
                posts,
                posts_loader,
                moreExists,
                nextPage,
                loadMore
            }

        }
    }
</script>