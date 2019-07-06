<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="2"   :progress="true" :autoPlay="true" :playSpeed="5000">
    
      <slide>
          <div class="col-md-12">
              <h4 style="color:black!important;text-align:left!important;">SNAKE PARK CHENNAI</h4>
              <p class="para">Whitaker was the founder director of the Snake Park in Chennai. The park was conceived to rehabilitate the Irula tribe who are known for their expertise in catching snakes. The tribals were left jobless after the ban of snake trading. Whitaker helped the Irula tribe to get involved in extracting snake venom used for the production of antivenom drugs. Rom is the Founder-Director of the Madras Crocodile Bank Trust Centre for Herpetology, actively involved in crocodile breeding and conservation programs.</p>
              <router-link to="/Snakepark" class="square_btn" style="text-align: center;">KNOW MORE</router-link> 
          </div>  
        </slide> 
    <slide>
      <div class="col-md-12">
        <h4 style="color:black!important;text-align: justify!important;">MADRAS CROCODILE BANK TRUST</h4>
        <p class="para">The Madras Crocodile Bank Trust and Centre for Herpetology (or Croc Bank) was the brain child of the legendary Romulus Whitaker and a handful of like-minded conservation visionaries who began work on the facility in 1976, in a desperate effort to save India’s dwindling crocodilian populations. Today, after more than 30 formidable years of cutting edge science and grassroots education, the Croc Bank remains a world leader in the field of frontline conservation and the preservation of natural landscapes.
        </p>
           <router-link to="/CrocodileBank" class="square_btn" style="text-align: center;">KNOW MORE</router-link> 
      </div>  
    </slide> 
   
      <slide>
        <div class="col-md-12">
          <h4 style="color:black!important;text-align: justify!important;">INDIAN SNAKEBITE INITIATIVE</h4>
          <p class="para">Romulus Whitaker is the guiding force of the Indian Snakebite Initiative who always leads by example and keeps the team charged with his unmatched energy and wisdom. The Indian Snakebite Initiative is managed by a nationwide network of organizations, experts and institutions with a common aim to reduce snakebite mortality by 50% across India by 2030.The initiative is led by a group of experts and supported by an expert panel of advisors and organizational partners across the country.
          </p>
             <router-link to="/IndianSnake" class="square_btn" style="text-align: center;">KNOW MORE</router-link> 
        </div>  
      </slide> 

    
   
  

    

   
   
      
   
    
  <!-- <hooper-navigation slot="hooper-addons" style="padding-left:80px!important;"></hooper-navigation>-->
  </hooper>
</div>

</template>
<script>
  import {
  Hooper,
  Slide,
  Navigation as HooperNavigation 
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
     components: {
    Hooper,
    Slide,
    HooperNavigation
  },
 }
</script>
<style>
.bgt{
  height:auto;
  width:auto;
 
}
@media (min-width: 576px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto !important; 
}
}

@media (min-width:375px) {

.bgt{
  height:auto;
  width:300px;
 
}
}
@media (min-width:375px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1281px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1441px) {
.hooper{
    position: relative;
   
    width: auto;
    height: auto; 
}
}
@media (min-width:1025px) {
.hooper{
    position: relative;
  
    width: auto;
    height: auto; 
}
}
@media (min-width:768px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:320px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}

h1, h2 {
  font-weight: normal;
}
@media (min-width:1441px) {
.bgt{
  height:auto;
  width:auto; 
}
}

a{
  color:black!important;
  font-weight:bold!important;
}
.bk{
  background-color:grey;
}
.two {
  border-style: solid;
  border-width: 1px;
  border-color:black;
 
}

.so{
 background-color: brown!important;
}
.para {
    color: black !important;
      font-size: 15px !important ;
      line-height: 1.5 !important;
      text-align: justify !important;
      display: block !important;
      margin-block-start: 1em !important;
      margin-block-end: 1em !important;
      margin-inline-start: 0px !important;
      margin-inline-end: 0px !important;
  }
  .square_btn
  {
      display: inline-block;
      padding: 7px 20px;
      border-radius: 25px;
      text-decoration: none;
      color: #FFF;
      background: cornflowerblue;
      transition: .4s;
  }
</style>
