<template>
    <!-- slider section -->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" v-for="(slider, id) in sliders" :class="{ active: id==0 }" :key='slider.id'>
       <img :src="slider.image"  class="w-100 rounded lazy" style="object-fit: cover">
    </div>
    </div>
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <!-- end slider section -->
</template>

<script>
    //import content loader
  

    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    export default {
        name: 'SliderComponent',

        components: {
          
        },
        
        setup() {
            
            //define state
            const sliders = ref([]);

            //define state
            const sliders_loader = ref(1);

            //on mounted
            onMounted(() => {
                //get data
                axios.get('/api/slider')
                    .then(response => {
                        //set data
                        sliders.value = response.data.data.data;
                    })
                    .catch(() => {
                        //set data
                        sliders.value = [];
                    });
            });

            //return data
            return {
                sliders,
                sliders_loader
            }

        }

    }
</script>
