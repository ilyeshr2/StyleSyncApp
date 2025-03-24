// app/views/client/AppointmentPage.vue
<template>
  <Page>
    <ActionBar title="Prendre Rendez-vous" backgroundColor="black" color="white">
      <NavigationButton text="Retour" @tap="$navigateBack" color="white" />
    </ActionBar>

    <StackLayout padding="20">
      <Label text="Réservation de Rendez-vous" class="text-center" fontWeight="bold" fontSize="24" />
      <Label text="Sélectionnez la date et l'heure qui vous conviennent" class="text-center" textWrap="true" marginTop="10" />
      
      <!-- This is where we'll add calendar and service selection later -->
      <Label text="Calendrier à venir" class="text-center" marginTop="20" />
      
      <Button text="Continuer" backgroundColor="black" color="white" marginTop="20" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  // Appointment page logic will go here
}
</script>