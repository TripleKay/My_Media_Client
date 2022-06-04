<template>
    <div>
        <section class="py-5 mt-5 min-vh-100" style="background-color: #0e1217;">
            <div class="row">
                <div class="col-8">
                    <div class="card bg-transparent">
                       <div class="card-body">
                            <img :src="postData.image" alt="" class="img-fluid" srcset="">
                            <h1 class="text-primary">{{ postData.title }}</h1>
                            <p class="text-white-50">{{ postData.description }}</p>
                       </div>
                    </div>

                </div>
                <div class="col-4"></div>
            </div>

        </section>
    </div>
</template>

<script src="../js/newsDetail.js"></script>

