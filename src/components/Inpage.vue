<template>
<div>
  <Navbar></Navbar>
 <!-- <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h4 class="text-white">Collapsed content</h4>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>-->
  <!--<div class="top" style="background-color:cornflowerblue!important;">
   <h5 style="color:white!important;text-align: left!important;"><a href="/" style="color: white!important;text-decoration: none!important;">ROMULUS WHITAKER</a></h5>
   <h5 style="color:white!important;text-align: left!important;"><a href="/" style="color: white!important;text-decoration: none!important;float: right!important;">Home</a></h5>
   
   
 </div>-->

  <div class="container" style="padding-top:40px!important;">
    <h3 style="color:black!important;"><strong>ROMULUS WHITAKER</strong></h3>
    <h4 style="color:black!important;">Indian herpetologist, Wildlife conservationist </h4>
    <br>
    <div class="verticalLine">
    <p class="para">Rom is Honorary Consultant, International Union for the Conservation of Nature and Natural Resources/Species Survival Commission (IUCN/SSC), Vice Chairman (Western Asia), IUCN/SSC Crocodile Specialist Group, Member, IUCN/SSC Indian Subcontinent Reptile and Amphibian Group and Member, IUCN/SSC Sea Turtle Specialist Group.200 billion dollar dry venome per month production of dry venome by reptile park chennai. Which is the largest among the world.

      He is a Member of the Advisory Committee and the Editorial Board of the Bombay Natural History Society, as well as Correspondent, The Society for the Study of Amphibians and Reptiles, USA; Advisor, Irula Tribal Women's’ Welfare Society, Afforestation Project; Member, Centre for Science and Education, New Delhi; Member, Centre for Environment Education, Ahmedabad and Founder-Member, Tamil Nadu Society for Social Forestry Research. He is also Chief Technical Advisor, Irula Snake Catchers’ Industrial Cooperative Society; Convenor, Indian National Trust for Art and Cultural Heritage (INTACH), Andaman and Nicobar Islands Chapter; and Founder – Member, Palni Hills Conservation Council.</p>
    </div>
     </div>
<br>
<!-- 3rd Section-->
<div class="container" style="padding-top:30px!important;padding-bottom: 20px!important;">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
        
          <b-card-img :src="require('../assets/ro.jpg')" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Romulus Whitaker" style="color:black!important;font-weight: bold!important;">
            <b-card-text>
               <p class="po">Born:        23 May 1943 United States</p>
               <p class="po">Nationality: Indian</p>
               <p class="po">Education: BSc (wildlife management)</p>
               <p class="po">Alma mater: Pacific Western University</p>
               <p class="po">Occupation: Herpetologist, Conservationist</p>
               <p class="po">Known for: Wildlife film-making, Herpetology, Rolex Award</p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>


    
</div>
</template>
<script>
 
  import Navbar from "./Navbar";
  
  
  export default {
  name: "Inpage",
  components: {
    Navbar
  },
  }
 
</script>
<style>
    
.top {
  border-style: solid!important;
  border-width: 1px!important;
  border-color:#eee !important;
  padding-top:30px;
  padding-bottom:30px;
}
.para {
  margin: 0;
    color: black!important;
    font-size: 15px!important;
    line-height: 1.5 !important;
    text-align: justify !important;
    display: block !important;
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 0px !important;
    margin-inline-end: 0px !important;
}
.verticalLine {
  border-left: thick solid cornflowerblue;
  padding-left:20px!important;
}
.card {
        margin: 0 auto; 
        float: none; 
        margin-bottom: 10px;
}
.po{
  margin: 0;
    color: black!important;
    font-size: 15px!important;
    line-height: 1.5 !important;
    text-align:left!important;
    display: block !important;
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 0px !important;
    margin-inline-end: 0px !important;

}


</style>
