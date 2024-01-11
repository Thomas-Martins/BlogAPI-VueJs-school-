<script>

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <header>
    <router-link :to="{path:'/'}">Home</router-link>
  </header>
  <router-view></router-view>
  <footer>
    <p>A <span>Via Formation</span> project!</p>
  </footer>
</template>

<style>
header{
    text-align: center;
    padding: 10px;
    background: #222222;
    margin-bottom: 10px;
  }
  header a{
    text-decoration: none;
    color: white;
  }
  footer{
    text-align: center;
    background: #222222;
    padding: 10px;
    color: #ebebeba3;
    font-weight: 100;
  }
  footer span{
    color: white;
    font-weight: 400;
  }
</style>