<template>
    <div>
        <Navbar></Navbar>
        <div class="container" style="padding-top:40px!important;">
                <div class="verticalLine">
                <p class="para">Romulus Whitaker is the guiding force of the Indian Snakebite Initiative who always leads by example and keeps the team charged with his unmatched energy and wisdom. The Indian Snakebite Initiative is managed by a nationwide network of organizations, experts and institutions with a common aim to reduce snakebite mortality by 50% across India by 2030.The initiative is led by a group of experts and supported by an expert panel of advisors and organizational partners across the country.</p>
               <p class="para">ISI is headed by a team of committed experts and is a mission dedicated towards the reduction of snakebites across the country. The activities undertaken reach far and wide into the country, especially into rural areas where such outreach can have the desired impact on the ground. It addresses the snakebite mortality challenge in a planned and systematic manner with clearly defined action plans and partnerships.</p>
            
            <h5 style="color:black!important;text-align:left!important;font-size:18px!important;"><strong>The Lead Team</strong></h5>
                <p class="para" >1. <strong>Romulus Whitaker:</strong> Renowned wildlife conservationist and herpetologist, film maker and founder of Madras Crocodile Bank Trust, Rom wears many hats and is one of the leading authorities on snakes across the world. He is the guiding force of the Indian Snakebite Initiative who always leads by example and keeps the team charged with his unmatched energy and wisdom.</p>
                <p class="para"> 2. <strong>Jose Louies:</strong> Wildlife conservationist and founder of indiansnakes.org, Jose works with Wildlife Trust of India (WTI) and lives by the mantra “Specialization is for insects!“ He works across the country on a variety of wildlife conservation issues, leads the national level Snake Rescuer Network and spends the rest of time with his gang of techies shaping technology into tools for wildlife conservation.</p>
                 <p class="para">3. <strong>Gerry Martin:</strong> Gerry is the Education and Outreach Expert in the group and is an allrounder conservationist. He studies the habitat usage of Russell’s vipers and educates communities on the art of living with snakes. He interacts with thousands of students every year sharing his knowledge and enthusiasm for everything related to nature and wildlife. Gerry is an inspiration to many upcoming conservationists in the country.</p>
                <p class="para"> 4. <strong>Kedar Bhide:</strong>Kedar brings in global corporate and snake conservation expertise disguised as an extremely talented photographer. His passion for snakes motivated him to start a nation-wide initiative by the name of ‘Zero Bites’ with likeminded individuals and NGOs with an aim, motto and vision to achieve zero deaths due to snake bites. To this effect, he conducts training programmes for communities, Forest Department, medical professionals and wildlife enthusiasts as well.  His vast experience enables him to gauge projects and activities in a larger perspective and with precision thereby ensuring that everything goes according to plan.
                </p>
                 </div></div>
            <br>
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
</style>