<template>
    <div class="about" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->



        <!-- breadcrumb -->
        
             <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
   
        <!-- end breadcrumb -->
 
<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-3 bg-white " style="border-radius: 20px;">


        <div class="container-fluid mt-2 mb-2">
            <div class="row">
                <div class="col-md-8">
                            <div class="card-body">
                                <h3>Visi</h3>
                                <hr>
                               <h5 class="text-secondary">Meng-Qurankan Indonesia dengan Gerakan Sedekah yang Diberikan kepada Para Penghafal Al-Quran di Berbagai Daerah.</h5>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
      </div>


      <div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">


        <div class="container-fluid mt-2 mb-2">
            <div class="row">
                <div class="col-md-8">
                            <div class="card-body">
                                 <h3>Misi</h3>
                                <hr>
                      
                                <h5 class="text-secondary">Mencetak Penghafal Al-Quran untuk Menciptakan Generasi Akhlakul Karimah.</h5><br>
                            
                                  <h5 class="text-secondary">Membangun Rumah Al-Quran sebagai Sarana Pendidikan Berbasis Al-Quran.</h5><br>
                             
                                  <h5 class="text-secondary">Meluaskan Bantuan, Baik Sarana, Prasarana, maupun Bantuan Operasional di Berbagai Kawasan Indonesia agar Terciptanya Pendidikan Berbasis Al-Quran yang Merata.</h5>
                             

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
        name: 'AboutComponent',
        components: {
            Header,
            Footer
        }
    }
</script>