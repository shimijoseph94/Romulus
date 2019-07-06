<template>
<div class="navv">
<b-navbar  toggleable="lg" type="dark" variant="dark">
   <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <a href="Home"><b-nav-text><h3 style="color:white;font-weight:bold;">ROMULUS WHITAKER</h3></b-nav-text></a>
      <b-collapse is-nav id="nav_collapse">
        </b-collapse>
      
     <b-nav-item href="#" class="mx-auto"></b-nav-item>
      <b-nav-item class="navvink"  href="Home"><strong>Home</strong></a></b-nav-item>
     <!-- <b-nav-item  class="navvink"><router-link to="FAQ"><strong>FAQ</strong></router-link></b-nav-item>
      <b-nav-item  class="navvink"><router-link to="News"><strong>News</strong></router-link></b-nav-item>
      <b-nav-item  class="navvink"><router-link to="Aboutus"><strong>About Us</strong></router-link></b-nav-item>
     
      <b-nav-item  class="navvink"> <router-link to="Contactus"><strong>Contact Us</strong></router-link></b-nav-item>-->
     
     </b-navbar-nav toggleable="lg"> 
   <!--<b-navbar-brand>
       <a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>
      </b-navbar-brand>-->
  </b-navbar>
</div>
</template>

<script lang="js">
   export default    {
     name: 'app-header'
                     }
</script>

<style>
.bg-dark {
    background-color: cornflowerblue!important;
}
.navbar .nav-text .h3{
  text-align:center;
}
.navbar-toggler{
    
    background-color:black  !important;
  
}
.navvink{
  color:black !important;
  hover:black  !important;
}
.nav-item a{
  color:white  !important;
  hover:black  !important;
}
a:hover{
  color:black  !important;
}

@media (min-width: 1281px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item  {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px; 
     
}
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item .nav-text .h3 {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:200px;
    font-size:12px;
    text-align:center;  
}
}
@media (min-width: 768px) and (max-width:1024px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item  .nav-text .h3{
   
    margin-right: 15px;
    margin-left: 15px;
    padding-left:150px; 
}
}
@media (min-width: 481px) and (max-width: 767px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
   .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  hover-color:black  !important;
     text-decoration: none;
}

a {
  color: black;
  font-weight:normal !important;
  font-size:16px !important;
  
}
a:hover{
  color:black !important;
}
 a :hover{
    text-decoration: none !important;
}

</style>