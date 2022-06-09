<template>
    <div class="post-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->

<div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">
                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> Berita </h3>
                </div>
            </div>
        </div>
    </div>
</div>
      
<div class="container">  
        <div class="row mt-3 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-8 mb-5"></div>
<div class="container mb-3">

            <div class="row">

                <div class="col-md-12">
                 <div class="card-body">
                                <img :src="post.image" class="w-100 rounded lazy" style="object-fit: cover" >
                                         <div class="row mt-3 text-left">
                        <div class="col-md-12">
                      <h4 class="text-secondary font-weight-bolder">{{ post.title }}</h4>
                      
                                <hr>

                                  <h5 class="mt-3 text-secondary" v-html="post.content"></h5>
                            </div>
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