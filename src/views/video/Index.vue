<template>
       <div class="video" style="background-color:#F6FBFF;">
        <!-- header -->
        <Header />
        <!-- end header -->
    <div class="jumbotron shadow-custom rounded-0 mt-3 mb-0">
    <div class="container">
        <div class="row mt-3 mb-0">
            <div class="col-md-8 offset-md-2 mb-0">
                <div class="text-homepage text-center" style="margin-top: 20px">
                    <div class="img-circle">
                       
                    </div>
                    <h3 class="text-dark font-weight-bold mt-3"> Tentang Kami </h3>
                    <h6 class="text-dark">Mari selamatkan Indonesia bersama 25 juta santri penghafal Al-Qur’an.</h6>
                </div>
            </div>
        </div>
    </div>
</div>
        <!-- main content -->

<div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">

            <div class="row">
      
                <div class="col-md-12">
                        <div class="card-body" style="border-radius: 20px;">
                            <h3>VISI</h3>
                            <hr>
                            <h5 class="text-secondary">
                               Mensurgakan Indonesia dengan Gerakan Sedekah yang Diberikan kepada Para Penghafal Al-Quran di Berbagai Daerah.
                            </h5>
                        </div>
                </div>
            </div>
              </div>
            </div>
            </div>

            <div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

       <div class="container">

            <div class="row">
      
                <div class="col-md-12">
                        <div class="card-body" style="border-radius: 20px;">
                            <h3>VISI</h3>
                            <hr>
                            <h5 class="text-secondary">
                               Mensurgakan Indonesia dengan Gerakan Sedekah yang Diberikan kepada Para Penghafal Al-Quran di Berbagai Daerah.
                            </h5>
                        </div>
                </div>
                </div>
            </div>
            </div>
           </div>

               <div class="container">    
        <div class="row mt-5 mb-0 bg-white shadow p-2 mb-5 bg-white " style="border-radius: 20px;">
        <div class="col-md-12 mb-5"></div>

             <div class="container">

            <div class="row">
      
                <div class="col-md-12">
                        <div class="card-body" style="border-radius: 20px;">

                            <h5 class="text-secondary">
                               SIDAQ adalah gerakan sedekah untuk 25 juta tahfidz Al-Quran di seluruh Indonesia. Berlokasi di Yogyakarta, pengelolaan program ini berada di bawah naungan Pondok Digital yang didirikan oleh Bang Een, seorang pimpinan Pondok Modern Munzalan Ash-Habul Yamin. Gerakan ini bertujuan untuk mendidik, memberdayakan, dan menggerakkan kebaikan umat.<br><br>

                                Anda pasti bertanya-tanya, kenapa dinamakan Selamatkan Indonesia dengan Al-Quran? Kenapa Indonesia perlu diselamatkan? Seberapa gentingkah keadaan Indonesia saat ini sehingga harus diselamatkan?<br><br>

                                Untuk menjawab pertanyaan ini, mari kita cek. Kapan terakhir kali membaca berita di internet? Berita tersebut kemungkinan besar tidak akan jauh-jauh dari berita kriminal, korupsi, perusakan alam, asusila, dan lain sebagainya. Semua itu adalah fakta, dan faktanya Indonesia sedang tidak baik-baik saja.<br><br>

                                Generasi saat ini sudah terlampau jauh dari Al-Quran. Perlu adanya penggerak untuk mengembalikan generasi saat ini kepada Al-Quran. Langkah konkretnya adalah dengan mendidik, memberdayakan, dan menggerakkan kebaikan umat untuk kepentingan pengajaran dan pengamalan Al-Quran.<br><br>

                                Oleh karena itu, gerakan ini dikembangkan dengan mengumpulkan orang-orang sholeh di seluruh penjuru negeri yang ingin membantu menyelamatkan Indonesia melalui patungan sedekah untuk mencetak 25 juta tahfidz di Indonesia. Angka ini kami pilih dengan mempertimbangkan sebuah hadits yang diriwayatkan oleh Sayyidina Ali RA.<br><br>

                                Dari Sayyidina Ali RA, Rasulullah SAW bersabda, “Barangsiapa membaca Al-Quran dan menghapalnya, dan menghalalkan apa yang dihalalkannya serta mengharamkan apa yang diharamkannya, maka Allah SWT akan memasukannya ke surga dan akan menerima syafaatnya untuk sepuluh orang keluarganya yang wajib masuk neraka.” (HR Ahmad, Tirmidzi, Ibnu Majah, dan Darami)<br><br>

                                Jika Indonesia saat ini berisi 250 juta jiwa, maka butuh 25 juta tahfidz agar seluruh populasi saat ini mendapat kesempatan untuk ke surga. Inilah alasan kuat kami mengadakan program untuk mencetak 25 juta tahfidz di Indonesia.<br><br>

                                Kami sadar, 25 juta jiwa sungguh bukan angka yang kecil. Jumlahnya kurang lebih 10% populasi Indonesia saat ini. Namun, atas Ridho Allah dan bantuan orang-orang sholeh seperti Anda, insyaallah, tujuan ini bisa tercapai.<br><br>
                            </h5>
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

    //import component
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'VideoCOmponent',

        components: {
            //loader component
         
            // component app
            Header,
            Footer
        },

        setup() {
            
            //define state
            const videos        = ref([]);
            const videos_loader = ref(4);
            let moreExists      = ref(false);
            let nextPage        = ref(0);

            //define method fetchDataVideos
            const fetchDataVideos = () => {
                axios.get('/api/video')
                    .then(response => {

                        //aassign data to state videos
                        videos.value = response.data.data.data

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
                axios.get(`/api/video?page=${nextPage.value}`)
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
                        
                        //push data to state videos
                        response.data.data.data.forEach(data => {
                            videos.value.push(data)
                        })
                    })
            }

            //run hook onMounted
            onMounted(() => {

                //run method fetchDataVideos
                fetchDataVideos();
            });

            return {
                videos,
                videos_loader,
                moreExists,
                loadMore
            }
        }
    }
</script>