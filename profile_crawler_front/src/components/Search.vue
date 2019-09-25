<template>
    <div>
        <div class="q-ma-lg row">
            <div class="col-7">
                <q-input color="teal" filled v-model="searchModel" label="Pesquisar" @keyup.enter="getMembers">
                    <template v-slot:prepend>
                        <q-icon name="search"/>
                    </template>
                </q-input>
            </div>
            <div class="flex col-5 justify-center">
                <q-btn label="Cadastrar novo usuario" color="blue" class="q-ma-sm" @click="CreateRedirect()"/>
            </div>
        </div>
        <div v-for="member in members" :key="member.id">
            <div class="q-pa-md q-gutter-sm">
                <q-banner inline-actions rounded class="bg-blue text-white">
                    Nome: {{member.name}}
                    <p>Twitter URL: {{member.shortened_url}}</p>
                    <template v-slot:action>
                        <q-btn flat label="Twitter" @click="twitterRedirect(member.shortened_url)" />
                        <q-btn flat label="Editar" @click="EditRedirect(member.id)"/>
                        <q-btn flat label="Visualizar" @click="ShowRedirect(member.id)"/>
                    </template>
            </q-banner>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      searchModel: '',
      members: {}
    }
  },

  methods: {
      getMembers () {
        const searchUrl = `http://localhost:3000/search?search=${this.searchModel}`
        axios
          .get(searchUrl)
          .then((res) => {
            this.members = res.data
          })
          .catch((err) => console.log(err))
      },
    
    twitterRedirect: function (url) {
       window.open(url, "_blank");    
    },

    ShowRedirect (memberId) {
        // router.push({ name: 'user', params: { userId: '123' } })
        this.$router.push({name: 'show', params: {
            id: memberId
        }})
    },
    CreateRedirect () {
        this.$router.push({name: 'create'})
    },
    EditRedirect (memberId) {
        this.$router.push({name: 'edit', params: {
            id: memberId
        }})
    }
  }
}
</script>

<style>

</style>
