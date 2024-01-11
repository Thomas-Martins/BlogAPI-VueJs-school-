<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                postToShow: [],
                comments: [],
            }
        },
        methods:{
            loadPost(){
                const id = this.$route.params.id;
                axios.get(`https://dummyjson.com/posts/${id}`).then((response) => {
                    this.postToShow = response.data;
                    // console.log(this.postToShow);
                })
            },
            loadComments(){
                const id = this.$route.params.id;
                axios.get(`https://dummyjson.com/comments/post/${id}`).then((response) => {
                    this.comments = response.data;
                    console.log(this.comments);
                })
            }
            
        },
        mounted(){
            this.loadPost();
            this.loadComments();
        }
    }
</script>

<template>
    <div class="postCard">
            <div class="postThumbnail">
                <img :src="'https://loremflickr.com/400/300?random='+Math.random()*100" alt="PostImage">
            </div>
            <div class="postTitle">
                <h1>{{ postToShow.title }}</h1>
            </div>
            <div class="postInfo">
                <div class="abc">
                    <div class="postTag">
                        <p v-for="tag in postToShow.tags">{{tag}}</p>
                    </div>
                    <div class="postReaction">
                        <p>{{postToShow.reactions }}</p>
                        <img src="./assets/images/icons8-thumbs-up-48.png" alt="thumbs up">
                    </div>
                </div>
                <p>{{postToShow.body}}</p>
            </div>
    </div>
    <div v-for="comment in comments.comments" class="commentCard">
        <h3>Comment by {{ comment.user.username }}</h3>
        <p>{{comment.body}}</p>
    </div>
</template>

<style>
 .postCard{
        position: relative;
        width: 49vw;
        height: 500px;
        margin: 10px auto;

    }
    .postThumbnail {
        height: 300px;
    }
    .postThumbnail img{
        width: 49vw;
        height: 395px;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }
    .postTitle{
        font-size: 10px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        color: #ebebeba3;
    }
    .postInfo{
        padding: 5px;
        background: #353535;
        height: 125px;
    }
    .postInfo p{
        color: #ebebeba3;
        font-size: 15px;
        font-weight: 300;
    }
    .abc{
        display: flex;
        justify-content: space-between;
    }
    .postTag{
        width: 50%;
        display: flex;
        margin-bottom: 10px;
    }
    .postTag p{
        padding: 5px 8px;
        font-size: 12px;
        background: #282828;
        color: #ebebeba3;
        margin-right: 10px;
    }
    .postTag p::first-letter{
        text-transform: capitalize;
    }
    .postReaction{
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .postReaction p{
        font-size: 12px;
        margin-right: 5px;
    }
    .postReaction img{
        width: 15px;
    }
    .postMore router-link{
        text-decoration: none;
        color: white;
        background: #282828;
        padding: 10px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(0, -55%);
    }
    .commentCard{
        background: #353535;
        color: #ebebeba3;
        width: 47.5vw;
        margin: 0 auto 20px auto;
        padding: 10px;
    }
    .commentCard p {
        padding: 10px 0;
    }

</style>