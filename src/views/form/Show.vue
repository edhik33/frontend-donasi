<template>
    <div class="form-index" style="background-color:#F6FBFF;">
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
                    <h3 class="text-dark font-weight-bold mt-3"> FORM DONASI </h3>
                    <h6 class="text-dark">{{ post.title }}.</h6>
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
 

<form id="form-order" class="loops-forms" action="https://app.loops.id/save-order/form-donasi-3" method="POST">
                              
        <div class="loops-group">
            <label for="name">Nama : <span class="red">*</span></label>
            <input type="text" id="name" name="name" value="" placeholder="Tulis nama Anda" required>
        </div>

        <div class="loops-group">
            <label for="phone">Nomor : <span class="red">*</span></label>
            <input type="text" id="phone" name="phone" value="" placeholder="Sebutkan nomor HP aktif Anda: contoh 081234567890" pattern="[0]{1}[0-9]{8,12}" required>
        </div>

          <div class="loops-group">
            <label for="variants">&nbsp;</label>
            <label for="variants-input">Umur<span class="red">*</span></label>
    
                                                                                        <input id="variants-input" type="number" name="variants[umur]" min="1" placeholder="umur" required>
            </div>

        
       
      
                <div class="loops-group">
        <input type="submit" value="Donasi Sekarang" class="loops-submit">
    </div>
    <input type="hidden" id="current" name="current" value="">
    <input type="hidden" name="redirect" value="">
    <input type="hidden" name="_loops_nonce" value="">
    <p class="loops-footer">Powered by <a href="https://sidaq.org/?utm_source=form-embed&utm_content=173087">Masbos Dev.</a>.</p>
</form>
</div>
                </div>
</div>
           </div>


        </div>
        <!-- main content -->
 
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

<style>
    .loops-group { display: block; margin-bottom: 20px; }
    .loops-group label { font-weight: bold; }
    .loops-group input { display: block; width: 100%; height: 36px; border: 1px solid #ccc; border-radius: 3px; }
    .loops-group textarea { display: block; width: 100%; border: 1px solid #ccc; border-radius: 3px; }
    .loops-group input.loops-submit { background: #81bd4b; color: #fff; }
    .loops-footer { font-size: 11px; color: #ccc; font-style: italic; }
    .red { color: #B30000; }
</style>