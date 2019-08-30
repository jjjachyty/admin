<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>亚鑫达</span>
        <span class="font-weight-light">后台</span>
      </v-toolbar-title>
      <v-spacer>
        <v-btn>新闻<v-btn>
      </v-spacer>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
