<template>

    <nav  class="navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top">
        <div class="container" >
             <router-link :to="{name: 'home'}" class="navbar-brand"><img id="logo" src="https://sidaq.org/wp-content/uploads/2022/05/sidaq-logo-fix-new.png" style="max-height: 45px"></router-link>
                
            <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse">
              <ul class="navbar-nav">
        <!-- Megamenu-->

          <li class="nav-item dropdown megamenu">
        <router-link :to="{name: 'campaign'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">PROGRAM</router-link>
        </li>

        <li class="nav-item dropdown megamenu">
        <router-link :to="{name: 'post'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">BERITA</router-link>
        </li>

          <li class="nav-item dropdown megamenu">
         <router-link :to="{name: 'about'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">ABOUT</router-link>
        </li>


         <li class="nav-item dropdown megamenu">
         <router-link :to="{name: 'contact'}" id="megamneu" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">KONTAK</router-link>
        </li>

       
     
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="d-none d-md-block d-lg-block">
            <a data-toggle="modal" data-target="#search" class="nav-link" style="cursor: pointer"><i class="fa fa-search"></i></a>
        </li>
        <li class="d-block d-md-none d-lg-none mb-2 mt-2">
            <a data-toggle="modal" data-target="#search" class="nav-link btn btn-secondary text-white btn-sm font-weight-bold"> <i class="fa fa-search"></i> SEARCH</a>
        </li>
   </ul>
        </div>   
     </div>
 </nav>


</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>