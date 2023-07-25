<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Se connecter" colSpan="2" />

        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content">
      <ScrollView>
        <StackLayout class="p-x-20">
          <TextField
            id="username"
            class="m-t-15"
            :text="username"
            hint="Votre username"
          />
          <TextField
            id="password"
            class="m-t-15"
            :text="username"
            hint="Votre mot de passe"
            secure="true"
          />
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from '~/shared/utils';
import { SelectedPageService } from '../shared/selected-page-service';

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage('Settings');
  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
