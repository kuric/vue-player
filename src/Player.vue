<template>
    <v-app dark>
      <v-content>
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" lg=6 md=8>
                <TitleBar></TitleBar>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
</template>
<script>
import TitleBar from './components/TitleBar.vue';
export default {
    components: {
      TitleBar
    }
}
</script>
<style>

</style>
