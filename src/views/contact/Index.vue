<template>
    <div class="contact" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->

  
        <!-- breadcrumb -->
           <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">
                        <img src="assets/phone-02.png" style="width: 60px;">
                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> Hubungi Kami</h3>
                    <h6 class="text-dark">Kami dengan senang hati menerima pertanyaan, saran, ataupun hal serupa lainnya dari Anda. Silakan hubungi kami di bawah ini.</h6>
                </div>
            </div>
        </div>
    </div>
</div>

        <!-- end breadcrumb -->
        
<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>


        <div class="container-fluid mt-5 mb-5">

            <div class="row">
                <div class="col-md-7">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.56372239357!2d110.38925847067618!3d-7.801370600857166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b04635a099%3A0x999298dfd69c9f5f!2sMasbos%20Corporation!5e0!3m2!1sid!2sid!4v1656078749318!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="w-100"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card border-0 shadow-sm rounded mt-3">
                        <div class="card-body">
                            <h3>KONTAK KAMI</h3>
                            <hr>
                            <h5 class="mt-3 text-secondary">
                                <i class="fa fa-map-marker" aria-hidden="true"></i> Alamat: Jl. Nyi Wiji Adhisoro No.3, RT.1/RW.1, Prenggan, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55172
                            </h5>
                            <h5 class="mt-3  text-secondary" >
                                <i class="fas fa-phone"></i> 0818-0499-9907
                            </h5>
                            <h5 class="mt-3  text-secondary">
                                <i class="fas fa-envelope"></i> sidaq@gmail.com
                            </h5>
                              <h5 class="mt-3  text-secondary">
                                <i class="fab fa-youtube"></i> Surgakan Indonesia Dengan Al Quran
                            </h5>
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
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";


    export default {
        name: 'ContactComponent',
        components: {
            Header,
            Footer
        }
    }
</script>