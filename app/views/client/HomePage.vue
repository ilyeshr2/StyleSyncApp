// app/views/client/HomePage.vue
<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout>
        <!-- Header with logo and menu -->
        <GridLayout rows="auto" columns="*, auto" backgroundColor="black" padding="15 20" height="60">
          <Image src="~/assets/images/logo.png" col="0" height="30" horizontalAlignment="left" />
          <Label col="1" text="≡" color="white" fontSize="30" @tap="onMenuTap" />
        </GridLayout>


<!-- Hero Section -->
<GridLayout rows="*" columns="*" height="550">
  <Image src="~/assets/images/hero-background.png" stretch="aspectFill" />
  
  <!-- Dark overlay -->
  <StackLayout backgroundColor="rgba(0, 0, 0, 0.5)" width="100%" height="100%"></StackLayout>
  
  <StackLayout verticalAlignment="center" horizontalAlignment="center">
    <Label text="SPÉCIALISTE DE LA COUPE DE CHEVEUX" class="text-center font-bold" color="white" fontSize="18" />
    <Label text="HOMME À LAVAL" class="text-center font-bold" color="white" fontSize="18" marginBottom="20" />
    
    <Label text="SALON DE" class="text-center font-black" color="white" fontSize="38" />
    <Label text="COIFFURE POUR" class="text-center font-black" color="white" fontSize="38" />
    <Label text="HOMMES À LAVAL" class="text-center font-black" color="white" fontSize="38" marginBottom="20" />
    
    <Label text="DÉCOUVREZ LE MEILLEUR SALON DE COIFFURE À" class="text-center font-regular" color="white" fontSize="14" textWrap="true" />
    <Label text="LAVAL POUR DES SERVICES DE COIFFURE," class="text-center font-regular" color="white" fontSize="14" textWrap="true" />
    <Label text="RASAGE ET SOINS PERSONNALISÉS." class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="30" />
    
    <Button text="PRENEZ RENDEZ-VOUS" backgroundColor="white" color="black" fontSize="16" width="250" height="50" borderRadius="0" fontWeight="bold" @tap="onTakeAppointment" />
  </StackLayout>
</GridLayout>

        <!-- About Section -->
        <StackLayout backgroundColor="#F5F5F1" padding="40 20">
          <Label text="À PROPOS DE NOUS" class="text-center" color="#8B7355" fontWeight="bold" fontSize="16" />
          
          <Label text="Votre barbier de" class="text-center font-black" fontSize="32" marginTop="10" />
          <Label text="confiance à Laval" class="text-center font-black" fontSize="32" marginBottom="20" />
          
          <Label text="Depuis plusieurs années, notre salon de coiffure à Laval est dédié à offrir des services de coiffure haut de gamme pour hommes. Nous combinons tradition et modernité pour répondre à tous vos besoins, qu'il s'agisse de coupes de cheveux tendance ou de soins pour la barbe." textWrap="true" class="text-center font-regular" fontSize="14" marginBottom="20" />
          
          <Label text="Notre équipe de barbiers professionnels s'engage à fournir une expérience personnalisée dans un cadre chaleureux et convivial. Notre mission : marier l'art du barbier traditionnel avec les tendances modernes pour sublimer votre style." textWrap="true" class="text-center font-regular" fontSize="14" marginBottom="30" />
          
          <!-- Bullet points -->
          <StackLayout marginBottom="30">
  <GridLayout rows="auto" columns="auto, *, auto" marginBottom="10">
    <Label row="0" col="0" text="•" fontSize="18" fontWeight="bold" horizontalAlignment="right" marginRight="10" />
    <Label row="0" col="1" text="Expertise de barbier reconnue à Laval" textWrap="true" horizontalAlignment="center" color="#8B7355" />
    <Label row="0" col="2" text="" width="10" />
  </GridLayout>
  
  <GridLayout rows="auto" columns="auto, *, auto" marginBottom="10">
    <Label row="0" col="0" text="•" fontSize="18" fontWeight="bold" horizontalAlignment="right" marginRight="10" />
    <Label row="0" col="1" text="Ambiance accueillante et moderne" textWrap="true" horizontalAlignment="center" color="#8B7355" />
    <Label row="0" col="2" text="" width="10" />
  </GridLayout>
  
  <GridLayout rows="auto" columns="auto, *, auto" marginBottom="10">
    <Label row="0" col="0" text="•" fontSize="18" fontWeight="bold" horizontalAlignment="right" marginRight="10" />
    <Label row="0" col="1" text="Services adaptés à tous les styles et âges" textWrap="true" horizontalAlignment="center" color="#8B7355" />
    <Label row="0" col="2" text="" width="10" />
  </GridLayout>
</StackLayout>
          
          <!-- Image Gallery -->
          <GridLayout rows="auto" columns="*, *" marginBottom="30">
            <Image row="0" col="0" src="~/assets/images/cut-style-1.png" stretch="aspectFill" margin="5" borderRadius="8" height="150" />
            <Image row="0" col="1" src="~/assets/images/cut-style-2.png" stretch="aspectFill" margin="5" borderRadius="8" height="150" />
          </GridLayout>
          
          <!-- Service Icons Section-->
<!-- Service Icons Section -->
<GridLayout rows="auto, auto, auto" columns="auto, *" marginBottom="15">
  <Image row="0" col="0" src="~/assets/images/icon-coupe.png" width="40" height="40" verticalAlignment="top" />
  <StackLayout row="0" col="1" marginLeft="15">
    <Label text="Coupe Homme" fontWeight="bold" fontSize="18" />
    <Label text="Des coupes modernes et classiques adaptées à votre style." textWrap="true" fontSize="14" />
  </StackLayout>
</GridLayout>

<GridLayout rows="auto, auto, auto" columns="auto, *" marginBottom="15">
  <Image row="0" col="0" src="~/assets/images/icon-lineup.png" width="40" height="40" verticalAlignment="top" />
  <StackLayout row="0" col="1" marginLeft="15">
    <Label text="Line Up" fontWeight="bold" fontSize="18" />
    <Label text="Des finitions précises pour des contours nets et une barbe soignée." textWrap="true" fontSize="14" />
  </StackLayout>
</GridLayout>

<GridLayout rows="auto, auto, auto" columns="auto, *" marginBottom="15">
  <Image row="0" col="0" src="~/assets/images/icon-soin.png" width="40" height="40" verticalAlignment="top" />
  <StackLayout row="0" col="1" marginLeft="15">
    <Label text="Soin Capillaire" fontWeight="bold" fontSize="18" />
    <Label text="Des traitements adaptés pour des cheveux en pleine santé." textWrap="true" fontSize="14" />
  </StackLayout>
</GridLayout>
        </StackLayout>

        <!-- Services Section-->
        <StackLayout backgroundColor="black" padding="40 20">
          <Label text="SERVICES SUR MESURE" class="text-center" color="#8B7355" fontWeight="bold" fontSize="16" marginBottom="15" />
          <Label text="Nos services d'exception" class="text-center font-black" color="white" fontSize="32" marginBottom="30" />
          
          <!-- Service Cards-->
          <GridLayout rows="auto" columns="*" marginBottom="20">
            <Image src="~/assets/images/wedding-service.jpg" stretch="aspectFill" borderRadius="10" height="200" />
            <StackLayout backgroundColor="rgba(0,0,0,0.5)" borderRadius="10" padding="20" verticalAlignment="center">
              <Label text="Coupe Mariage" class="text-center font-bold" color="white" fontSize="24" marginBottom="10" />
              <Label text="Une coupe impeccable pour le grand jour, incluant soins, retouches barbe et service à domicile pour une préparation sans stress" class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="15" />
              <Button text="Voir plus" backgroundColor="transparent" color="white" borderColor="white" borderWidth="1" width="120" height="40" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
          
          <GridLayout rows="auto" columns="*" marginBottom="20">
            <Image src="~/assets/images/corporate-service.jpg" stretch="aspectFill" borderRadius="10" height="200" />
            <StackLayout backgroundColor="rgba(0,0,0,0.5)" borderRadius="10" padding="20" verticalAlignment="center">
              <Label text="Service Corporatif" class="text-center font-bold" color="white" fontSize="24" marginBottom="10" />
              <Label text="Un service de barbier dédié aux entreprises, équipes et événements spéciaux. Idéal pour les séances photo, les tournées ou les besoins privés de groupe" class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="15" />
              <Button text="Voir plus" backgroundColor="transparent" color="white" borderColor="white" borderWidth="1" width="120" height="40" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
          
          <GridLayout rows="auto" columns="*" marginBottom="20">
            <Image src="~/assets/images/wellness-service.jpg" stretch="aspectFill" borderRadius="10" height="200" />
            <StackLayout backgroundColor="rgba(0,0,0,0.5)" borderRadius="10" padding="20" verticalAlignment="center">
              <Label text="Soin Bien-Être" class="text-center font-bold" color="white" fontSize="24" marginBottom="10" />
              <Label text="Un moment de détente complet : coupe, lavage, massage du cuir chevelu et soin visage purifiant pour une allure rafraîchie" class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="15" />
              <Button text="Learn More" backgroundColor="transparent" color="white" borderColor="white" borderWidth="1" width="120" height="40" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
        </StackLayout>

        <!-- Pricing Section -->
        <StackLayout backgroundColor="#F5F5F1" padding="40 20">
          <Label text="NOS TARIFS" class="text-center" color="#8B7355" fontWeight="bold" fontSize="16" />
          <Label text="Des services de qualité" class="text-center font-black" fontSize="32" marginTop="10" />
          <Label text="à prix compétitifs" class="text-center font-black" fontSize="32" marginBottom="30" />

          <Label text="SERVICE RÉGULIER" class="text-center" color="#8B7355" fontWeight="bold" fontSize="16" marginBottom="15" />
          
          <!--pricing layout -->
          <GridLayout rows="auto, auto, auto, auto" columns="*, auto" marginBottom="5">
            <Label row="0" col="0" text="Coupe avec barbe" fontSize="16" verticalAlignment="center" marginBottom="10" />
            <Label row="0" col="1" text="$35" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="1" col="0" text="Coupe sans barbe" fontSize="16" verticalAlignment="center" marginBottom="10" />
            <Label row="1" col="1" text="$30" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="2" col="0" text="Line up barbe" fontSize="16" verticalAlignment="center" marginBottom="10" />
            <Label row="2" col="1" text="$15" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="3" col="0" text="Cheveux long à court sans barbe" fontSize="16" verticalAlignment="center" marginBottom="10" textWrap="true" />
            <Label row="3" col="1" text="$40" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
          </GridLayout>

          <Label text="SERVICE SPÉCIAL" class="text-center" color="#8B7355" fontWeight="bold" fontSize="16" marginTop="20" marginBottom="15" />
          
          <GridLayout rows="auto, auto, auto, auto" columns="*, auto" marginBottom="5">
            <Label row="0" col="0" text="Coupe avec barbe et lavage cheveux" fontSize="16" verticalAlignment="center" textWrap="true" marginBottom="10" />
            <Label row="0" col="1" text="$45" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="1" col="0" text="Coupe ciseaux avec barbe et lavage cheveux" fontSize="16" verticalAlignment="center" textWrap="true" marginBottom="10" />
            <Label row="1" col="1" text="$60" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="2" col="0" text="Coupe ciseaux avec barbe" fontSize="16" verticalAlignment="center" textWrap="true" marginBottom="10" />
            <Label row="2" col="1" text="$50" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
            
            <Label row="3" col="0" text="Coupe ciseaux sans barbe" fontSize="16" verticalAlignment="center" textWrap="true" marginBottom="10" />
            <Label row="3" col="1" text="$40" fontSize="16" fontWeight="bold" verticalAlignment="center" marginBottom="10" />
          </GridLayout>

          <!-- Remaining pricing sections... -->
        </StackLayout>

        <!-- Call to Action -->
        <StackLayout backgroundColor="#8B7355" padding="40 20">
          <Label text="Coupe et soins pour" class="text-center font-black" color="white" fontSize="28" />
          <Label text="hommes à Laval" class="text-center font-black" color="white" fontSize="28" marginBottom="20" />
          
          <Label text="Réservez votre coupe ou votre soin dès aujourd'hui et profitez de l'expertise de notre équipe dans un cadre chaleureux et professionnel." class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="25" />
          
          <Button text="PRENEZ RENDEZ-VOUS" backgroundColor="white" color="black" fontSize="16" width="250" height="50" borderRadius="0" fontWeight="bold" @tap="onTakeAppointment" />
        </StackLayout>

        <!-- Contact Section-->
        <StackLayout backgroundColor="black" padding="40 20">
          <Label text="Contact" class="text-center font-black" color="white" fontSize="28" marginBottom="20" />
          
          <Label text="44 Boulevard des Laurentides Local 8, Laval, QC H7G 2S6" class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="15" />
          
          <Label text="(438) 223-5188" class="text-center font-bold" color="white" fontSize="20" marginBottom="15" />
          
          <Label text="Binksbarbershop@gmail.com" class="text-center font-regular" color="white" fontSize="16" textDecoration="underline" marginBottom="25" />
          
          <!-- Social Icons -->
          <GridLayout rows="auto" columns="auto, auto" horizontalAlignment="center" marginBottom="40">
            <Label col="0" text="Instagram" color="white" fontSize="16" marginRight="20" />
            <Label col="1" text="TikTok" color="white" fontSize="16" />
          </GridLayout>

          <!-- Hours section-->
          <Label text="Horaires d'ouverture" class="text-center font-black" color="white" fontSize="28" marginBottom="20" />
          
          <GridLayout rows="auto, auto, auto, auto, auto, auto, auto" columns="*, *" marginBottom="40">
            <Label row="0" col="0" text="Lundi" color="white" fontSize="16" marginBottom="10" />
            <Label row="0" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="1" col="0" text="Mardi" color="white" fontSize="16" marginBottom="10" />
            <Label row="1" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="2" col="0" text="Mercredi" color="white" fontSize="16" marginBottom="10" />
            <Label row="2" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="3" col="0" text="Jeudi" color="white" fontSize="16" marginBottom="10" />
            <Label row="3" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="4" col="0" text="Vendredi" color="white" fontSize="16" marginBottom="10" />
            <Label row="4" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="5" col="0" text="Samedi" color="white" fontSize="16" marginBottom="10" />
            <Label row="5" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
            
            <Label row="6" col="0" text="Dimanche" color="white" fontSize="16" marginBottom="10" />
            <Label row="6" col="1" text="10:00 - 23:00" color="white" fontSize="16" horizontalAlignment="right" marginBottom="10" />
          </GridLayout>

          <!-- Newsletter section -->
          <Label text="Ne manquez aucune nouveauté !" class="text-center font-bold" color="white" fontSize="20" marginBottom="15" />
          
          <Label text="Inscrivez-vous à notre newsletter pour recevoir nos tendances, promotions et conseils coiffure." class="text-center font-regular" color="white" fontSize="14" textWrap="true" marginBottom="20" />
          
          <TextField hint="Courriel" backgroundColor="#F5F5F1" padding="15" borderRadius="0" marginBottom="15" />
          
          <Button text="S'inscrire" backgroundColor="#8B7355" color="white" fontSize="16" height="50" borderRadius="0" marginBottom="40" />
          
          <!-- Footer-->
          <Image src="~/assets/images/logo.png" width="120" horizontalAlignment="center" marginBottom="15" />
          
          <Label text="Copyright © 2024 Binks Barbershop. Réalisé avec soin par Benzita SEO. Tous droits réservés." class="text-center font-regular" color="white" fontSize="12" textWrap="true" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  methods: {
    onMenuTap() {
      // Implement menu tap action later
      console.log("Menu tapped");
    },
    onTakeAppointment() {
      // Navigate to appointment page
      this.$navigateTo(require('./AppointmentPage').default);
    }
  }
}
</script>