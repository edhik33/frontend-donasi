<template>
     <footer class="mt-40">
        <div class="m-0">
           <div class="footer-top">
                <div class="container bg-white">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 order-sm-0 order-md-0 bg-white py-3" >
                            <img src="/assets/img/logo.png" class="mt-3 text-center p-2" style="width: 90px">
                            <img src="/assets/img/logoq.png" class="mt-3 text-center p-2" style="width: 90px">
                            <p class="mt-2">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</p>
                            <div class="social mt-4" style="margin-bottom: 30px">
                                <a href="https://www.facebook.com/sidaq.or.id"><img src="/assets/img/fb.svg" style="width: 25px;" class="icon-footer"></a>
                                <a href="https://www.youtube.com/c/SelamatkanIndonesiaDenganAlQuran"><img src="/assets/img/yt.svg" class="icon-footer"></a>
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
                    <span class="px-1 text-muted"></span>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>


    export default {
        name: 'FooterComponent',

        components: {
        },
      
    }
</script>