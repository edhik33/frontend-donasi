<template>
     <div class="post-index" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->
  <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
        <!-- main content -->

<div class="container">    
        <div class="row mt-5 mb-5 bg-white shadow-sm mb-5 bg-body rounded" style="border-radius: 20px;">
        <div class="col-md-12 mb-3"></div>


<div class="container mt-3">
    <div v-if="posts.length > 0" class="row  justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 mb-2" v-for="post in posts" :key="post.id">
            <div class="card border-0 mb-3 h-80 shadow p-2 bg-white rounded">
                 <img :src="post.image" class="card-img-top lazy" style="width: 100%;height: 200px;object-fit:cover">
                <div  style="width: 100%;height: 80px;">
                    <div class="topic">
                        <div href="" class="badge badge-danger shadow-custom mt-3">{{ post.created_at }}</div>
                            </div>
                   <router-link :to="{name: 'detail_post', params: {slug: post.slug}}"
                                            class="text-dark text-decoration-none">
                                             <span class="text-secondary font-weight-bolder">{{ post.title }}</span>
                                        </router-link>
                     </div>
                </div>
            </div>
                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-success btn-md mb-3" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
                </div>
  
        </div>
        <div v-else>
                    <div class="alert alert-danger">
                        DATA BERITA TERBARU BELUM TERSEDIA !
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
    //import axios
    import axios from 'axios';

    //import hook watch from vue
    import { ref, onMounted, watch } from 'vue';

    //import hook useRoute
    import { useRoute } from 'vue-router';

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'TagComponent',

        components: {
            Header,
            Footer
        },

        setup() {
            
            //define state
            const posts     = ref([]);
            const tagInfo   = ref({});
            let moreExists  = ref(false);
            let nextPage    = ref(0);

            //define route
            const route = useRoute();

            //define method fetchDataPostsByTag
            const fetchDataPostsByTag = () => {
                axios.get(`/api/tag/${route.params.slug}`)
                    .then(response => {
                        
                        //assign data to state tagInfo
                        tagInfo.value = response.data.response

                        //assign data to state posts
                        posts.value = response.data.data.data

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
                axios.get(`/api/tag/${route.params.slug}?page=${nextPage.value}`)
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

                    //push data to state posts
                    response.data.data.data.forEach(data => {
                        posts.value.push(data)
                    });
                })
            }

            //run hook onMounted
            onMounted(() => {

                //run method fetchDataPostsByTag
                fetchDataPostsByTag()
            })

            //watch route
            watch(() => route.params.slug, () => {
                    
                    //fetchDataPostsByTag
                    fetchDataPostsByTag();
                }
            )

            return {
                posts,
                tagInfo,
                moreExists,
                loadMore
            }

        }
    }
</script>