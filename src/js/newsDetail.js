import axios from "axios";
export default {
    name: 'NewsDetail',
    data () {
        return {
            postId: 0,
            postData: {},
        }
    },
    methods: {
        loadPost (id) {
            let post = {
                postId : id,
            };
            axios.post("http://127.0.0.1:8000/api/post/detail",post).then((response) => {
                
                    if(response.data.post.image != null){
                        response.data.post.image = "http://127.0.0.1:8000/postImage/"+response.data.post.image;
                    }else{
                        response.data.post.image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                    }
              
                this.postData = response.data.post;
                console.log(this.postData);
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted(){
        // console.log(this.$route.params);
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);
    }
}