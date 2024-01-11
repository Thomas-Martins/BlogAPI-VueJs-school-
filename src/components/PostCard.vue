<script>
    export default {
        props: ['PostsShow']
    }
</script>
<template>
    <main>
        <div class="postCard">
            <div class="postThumbnail">
                <img :src="'https://loremflickr.com/400/300?random='+Math.random()*100" alt="PostImage">
            </div>
            <div class="postTitle">
                <h1>{{ PostsShow.title }}</h1>
            </div>
            <div class="postInfo">
                <div class="abc">
                    <div class="postTag">
                        <p v-for="tag in PostsShow.tags">{{tag}}</p>
                    </div>
                    <div class="postReaction">
                        <p>{{ PostsShow.reactions }}</p>
                        <img src="../assets/images/icons8-thumbs-up-48.png" alt="thumbs up">
                    </div>
                </div>
                <p>{{PostsShow.body}}</p>
                <div class="postMore">
                    <router-link class="moreBtn" :to="{path:'/posts/' + PostsShow.id}" >Lire plus</router-link>
                </div>
            </div>
            
        </div>
    </main>
</template>
<style scoped>
    .postCard{
        position: relative;
        width: 48vw;
        height: 500px;
        margin: 10px auto;
    }
    .postThumbnail {
        height: 300px;
    }
    .postThumbnail img{
        width: 48vw;
        height: 395px;
        object-fit: cover;
        position: absolute;
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
        height: 200px;
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
    .moreBtn{
        text-decoration: none;
        color: white;
        background: #282828;
        padding: 10px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(0%, 140%);
    }
</style>