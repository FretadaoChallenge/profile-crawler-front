<template>
  <div id="q-app">
    <div>
    <q-toolbar class="bg-blue shadow-2">
      <q-btn label="Pagina de pesquisa" color="white text-blue" @click="SendToHomePage()"/>
      <q-space />
      <q-tabs shrink>
        <q-btn label="Cadastrar" color="white text-blue" class="q-ma-sm" @click="SendoToCreatePage()"/>
      </q-tabs>
    </q-toolbar>
  </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    SendToHomePage () {
      this.$router.push({name: 'home'})
    },
    
    SendoToCreatePage () {
      this.$router.push({name: 'create'})
    }
  }
}
</script>
