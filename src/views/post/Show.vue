<template>
    <div class="post-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
<div class="container mt-100">
    <div class="row justify-content-center">
        <div class="col-md-8 mb-4">
            <div class="card border-0 rounded shadow-custom">
                <div class="card-body">
                    <h4 class="font-weight-bold" style="margin-top: 0px">{{ post.title }}</h4>
                     <hr>
                      <div class="author">
                        <div class="row">
                            <div class="col-md-1 col-2"> 
                            </div>
                        </div>
                    </div>
                    <img :src="post.image" class="w-100 rounded lazy" style="object-fit: cover">

                  <hr>
                            <h6 class="mt-3 text-secondary" v-html="post.content"></h6>
                    </div>

            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card rounded border-0 shadow-custom mb-4">
                <div class="card-body">
                    <h5 class="font-weight-600" style="margin-top: 0px"> <i class="fa fa-book"></i> Artikel Terkait</h5>
                    <hr>
                    <div class="row">
                                                    <div class="col-md-12" v-for="post in posts" :key="post.id">
                                <div class="article-related">
                                   <router-link :to="{name: 'detail_post', params: {slug: post.slug}}">
                                  <img :src="post.image"  class="w-100 rounded lazy" style="object-fit: cover"></router-link>
                                    <p class="mt-2" style="font-size: 12px;color: #847e7e">
                                        Oleh <strong>Quranesia</strong> {{ post.created_at }}
                                    </p>
                                      <hr>
                                </div>
                            </div>
                            <div class="col-md-12">
                           
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

    //import hook useRoute
    import { useRoute } from 'vue-router';

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'PostDetailComponent',

        components: {
            //loader component
         
            //component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const post              = ref({});
            const posts              = ref({});
           
         

            //define route
            const route = useRoute();

            //run hook onMounted
            onMounted(() => {

                  axios.get('/api/post')
                    .then(response => {
                        posts.value = response.data.data.data;
                    })

                //get post detail
                axios.get(`/api/post/${route.params.slug}`)
                    .then(response => {
                        post.value = response.data.data;
                    })

             

            });

            return {
                posts,
                post,
               
            }

        }
    }
</script>
