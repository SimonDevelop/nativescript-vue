<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Home" colSpan="2" />

        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf015;" />
      <Label class="page__content-placeholder" :text="message" />

      <StackLayout>
        <Button @tap="moins" text="-" class="btn btn-outline" />
        <Button @tap="plus" text="+" class="btn btn-outline" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from '~/shared/utils';
import { SelectedPageService } from '../shared/selected-page-service';
import { mapActions } from 'vuex';

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage('Home');
  },
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    moins() {
      this.$store.commit('decrement');
    },
    plus() {
      this.$store.commit('increment');
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
