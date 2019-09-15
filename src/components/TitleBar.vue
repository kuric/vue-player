<template>
  <v-system-bar window>
    <v-menu offset-y transition="slide-y-transition">
      <template v-slot:activator="{on}">
        <v-btn text small right v-on="on">
          <v-icon>headset</v-icon> MENU
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="dialog = true">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="dialog" max-width="320">
      <v-card>
        <v-card-title><h3>Vue Music Player</h3></v-card-title>
        <v-card-text>Version 1.0.0</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-spacer></v-spacer>
    VUE MUSIC PLAYER
    <v-spacer></v-spacer>
    <v-icon>remove</v-icon>
    <v-icon>check_box_outline_blank</v-icon>
    <v-icon>close</v-icon>
  </v-system-bar>
</template>
<script>
export default {
	name: 'TitleBar',
  data() {
    return {
      dialog: false
    }
  },
}
</script>
<style scoped lang="scss">
</style>
