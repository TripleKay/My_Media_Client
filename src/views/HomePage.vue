<template>
    
     <div class="row mt-5">
        <!-- blog card  -->
        <div class="col-6 col-md-12" v-for="(post , index) in postLists" :key="index">
            <div class="card mb-4 d-flex shadow blog-card">
                <div class="overflow-hidden img-container">
                    <img v-bind:src="post.image" class="h-100" alt="" srcset="">
                </div>
                <div class="card-body">
                    <div class="badge py-2 rounded-0 shadow  bg-info">prgramming</div>
                    <h5 class="text-white my-3">{{ post.title }}</h5>
                    <p class="text-secondary">{{ post.description }}</p>
                    <a href="" class="text-danger">Read More <i class="fas fa-arrow-right ms-3"></i></a>
                </div>
                </div>
        </div>
        <!-- blog card  -->
        
    </div>
    
</template>

<script src="../../public/js/homePage.js"></script>

<style lang="stylus" scoped>

</style>
