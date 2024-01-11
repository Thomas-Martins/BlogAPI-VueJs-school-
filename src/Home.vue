<script >

import axios from 'axios';
import PostCard from './components/PostCard.vue'
  export default{
    components:{
      PostCard
    },
    data(){
      return{
        posts: [],
        input:"",
      }
    },
    methods:{
      getPost(){
        axios.get('https://dummyjson.com/posts?limit=10').then((response) => {
          this.posts = response.data.posts
          console.log(this.posts);
        })
      },
      searchPost(){
        const input = this.input.trim();
        axios.get(`https://dummyjson.com/posts/search?q=${input}`).then((response) => {
          this.posts = response.data.posts
        })
      }
    },
    mounted(){
      this.getPost();
    }
  }
</script>

<template>
  <div>
    <input type="text" placeholder="Rechercher ..." v-model="input" @keydown.enter="searchPost">
  </div>
  <div class="content">
    <PostCard v-for="post in posts" :PostsShow="post"/>
  </div>
</template>

<style>
  input{
    width: 98.5%;
    border: none;
    outline: none;
    padding: 10px;
    background: #282828;
    color: grey;
  }
  .content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 9px;
  }
</style>