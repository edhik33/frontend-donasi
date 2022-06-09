<template>
     <footer class="mt-70">
        <div class="m-0">
           <div class="footer-top">
                <div class="container bg-white">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 order-sm-0 order-md-0 bg-white py-3" >
                            <img src="https://sidaq.org/wp-content/uploads/2022/05/sidaq-logo-fix-new.png" class="mt-3 text-center" style="width: 200px">
                            <p class="mt-2">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</p>
                            <div class="social mt-4" style="margin-bottom: 30px">
                                <a href=""><img src="https://santrikoding.com/images/045-facebook.svg" style="width: 25px;" class="icon-footer"></a>
                                <a href=""><img src="https://santrikoding.com/images/002-youtube.svg" class="icon-footer"></a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-8 order-sm-2 order-md-1 bg-light-custom py-4">
                            <div class="row">

                                <div class="col-md-4 col-6">
                                    <h6 class="font-weight-bold">Menu</h6>
                                    <hr>
                                    
                                           <router-link :to="{name: 'campaign'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-secondary">Program</router-link>

                                           <router-link :to="{name: 'post'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-secondary ">Berita</router-link>
                                   
                                             <router-link :to="{name: 'contact'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-secondary">Kontak</router-link>
                                        
                                             <router-link :to="{name: 'about'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-secondary">About</router-link>
                             
                              </div>
                                <div class="col-md-4 col-6">
                                    <h6 class="font-weight-bold">ALAMAT</h6>
                                    <hr>
                                    <ul>
                                        <li class="link-footer"><a href=""> Jl. Nyi Wiji Adhisoro No.3, RT.1/RW.1, Prenggan, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55172</a></li>
                                       
                                    </ul>
                                </div>
                                </div>
               
            </div>
            </div>
                </div>
   </div>
        </div>
    </footer>
    <footer class="dcd-bg-gray footer-bottom">
        <div class="container">
            <div class="row py-3">
                <div class="col-md-12 mb-2 mb-lg-0 text-center small">
                    © 2022 SIDAQ . Hak Cipta Dilindungi Undang-Undang.
                    <span class="px-1 text-muted">|</span>
                    Dibuat dengan ♥ untuk 🇮🇩
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
 
    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    export default {
        name: 'FooterComponent',

        components: {
        },
        
        setup() {
            
            //define state
            const tags = ref([]);
             const campaigns = ref([]);

            //on mounted
            onMounted(() => {
                
                axios.get('/api/campaign')
                    .then(response => {
                        campaigns.value = response.data.data.data;
                    })

                axios.get('/api/tag')
                    .then(response => {
                        tags.value = response.data.data.data;
                    })
                    .catch(() => {
                        tags.value = [];
                    });
            })

            //return data
            return {
                tags,
                campaigns
            }
        }
    }
</script>