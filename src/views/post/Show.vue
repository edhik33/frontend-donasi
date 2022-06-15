<template>
    <div class="post-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
<div class="container mt-100">
    <div class="row justify-content-center">
        <div class="col-md-8 mb-4" >
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
                        <div class="row">
                                  
                            <div class="card-body">
                                <h4 class="font-weight-bold"><i class="fa fa-tags"></i> TAGS</h4>
                                <hr>
                            <router-link :to="{name: 'detail_tag', params: { slug: tag.slug }}" v-for="tag in tags" :key="tag.id"><span class="badge badge-info shadow-custom mr-2 mb-2">{{ tag.name.toUpperCase() }}</span>
                            </router-link>
                        
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
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    export default {
        name: 'PostDetailComponent',
        components: {
            Header,
            Footer
        },
       
        setup() {
            const post              = ref({});
            const posts              = ref({});
            const route = useRoute();

               //define state
            const tags = ref([]);

            //on mounted
            onMounted(() => {
                axios.get('/api/tag')
                    .then(response => {
                        tags.value = response.data.data.data;
                    })
                    .catch(() => {
                        tags.value = [];
                    });
            })
          
            onMounted(() => {
                axios.get('/api/post')
                    .then(response => {
                        posts.value = response.data.data.data;
                    })
                axios.get(`/api/post/${route.params.slug}`)
                    .then(response => {
                        post.value = response.data.data;
                    })
            });
            
            return {
                tags,
                posts,
                post,
              
               
            }
        }
    }
</script>