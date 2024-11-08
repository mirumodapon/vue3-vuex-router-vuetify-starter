<script setup>
import { dashboard_nav } from '@/router'
import { ref } from 'vue'

const drawer = ref(null)
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" class="py-2">
      <v-list-item title="Options" />
      <v-divider />
      <v-list-item
        v-for="{ label, name, icon } in dashboard_nav.filter(nav => nav.label)"
        :key="name"
        :prepend-icon="icon"
        :to="{ name }" link :title="label"
      />
    </v-navigation-drawer>

    <v-app-bar order="-1">
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <router-link v-slot="{ navigate }" :to="{ name: 'dashboard-index' }" custom>
        <v-app-bar-title @click="navigate">
          Application
        </v-app-bar-title>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
