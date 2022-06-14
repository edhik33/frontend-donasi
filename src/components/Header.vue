<template>

    <nav  class="navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top">
        <div class="container" >
             <router-link :to="{name: 'home'}" class="navbar-brand"><img id="logo" src="https://sidaq.org/wp-content/uploads/2022/05/sidaq-logo-fix-new.png" style="max-height: 45px"></router-link>
                
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav">
        <!-- Megamenu-->

          <li class="nav-item ">
        <router-link :to="{name: 'campaign'}"  href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">PROGRAM</router-link>
        </li>

        <li class="nav-item ">
        <router-link :to="{name: 'post'}" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">BERITA</router-link>
        </li>

          <li class="nav-item ">
        <router-link :to="{name: 'video'}" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">VIDEO</router-link>
        </li>

          <li class="nav-item " >
         <router-link :to="{name: 'about'}" href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">ABOUT</router-link>
        </li>


         <li class="nav-item">
         <router-link :to="{name: 'contact'}"   href="" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold text-uppercase">KONTAK</router-link>
        </li>
   
    </ul>
 
     </div>
     </div>
 </nav>


</template>

<script>

 export default {
  name : 'HeaderComponent'
 }
</script>

