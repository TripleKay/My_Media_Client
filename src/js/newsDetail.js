import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'NewsDetail',
    data () {
        return {
            postId: 0,
            postData: {},
            viewCount : 0,
            // categoryId: 0,
            relatedPost: {},
        }
    },
    computed: {
        ...mapGetters(["getToken","getUserData"]),
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
                // console.log(this.postData);
            }).catch((error) => {
                console.log(error);
            });
        },
        home(){
            this.$router.push({
                name: "home",
            })
        },
        login(){
            this.$router.push({
                name: "login",
            })
        },
        logout(){
            this.$store.dispatch("setToken",null);
            this.login();
        },
        viewCountLoad(id){
            // for view count
            let data = {
                user_id: this.getUserData.id,
                post_id : id,
            };
            axios.post("http://127.0.0.1:8000/api/post/actionLog",data).then((response) => {
                this.viewCount = response.data.post.length;
            });
        },
        loadRelatedPost(id){
            let post = {
                postId : id,
            };
            axios.post("http://127.0.0.1:8000/api/post/relatedPost",post).then((response) => {
                
                for(let i=0; i < response.data.post.length ; i++){
                    if(response.data.post[i].image != null){
                        response.data.post[i].image = "http://127.0.0.1:8000/postImage/"+response.data.post[i].image;
                    }else{
                        response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                    }
                }
                this.relatedPost = response.data.post;
            }).catch((error) => {
                console.log(error);
            });
            
        },
        //news card btn
        newsDetail(id){
            // console.log(id);
            this.postId = id;
            this.loadPost(this.postId);
            this.viewCountLoad(this.postId);
        },
    },
    mounted(){
        //load post detail
        this.postId = this.$route.params.newsId;
        // for view count
        this.viewCountLoad(this.postId);
        this.loadPost(this.postId);
        this.loadRelatedPost(this.postId);
    }
}