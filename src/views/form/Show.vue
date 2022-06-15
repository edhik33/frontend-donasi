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
                    <h5 class="text-dark font-weight-bold mt-3"> FORM DONASI </h5>
                    <h6 class="text-dark">{{ campaign.title }}</h6>
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
            const campaign              = ref({});
            const campaigns              = ref({});
           

            const route = useRoute();

            onMounted(() => {

                  axios.get('/api/campaign')
                    .then(response => {
                        campaigns.value = response.data.data.data;
                    })

                axios.get(`/api/campaign/${route.params.slug}`)
                    .then(response => {
                        campaign.value = response.data.data;
                    })       

            });

            return {
                campaigns,
                campaign,
               
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