<template>
    <div>
        <div class="q-pa-lg rw">
            <q-banner rounded class="bg-white seach-baner">
                <div class="q-ma-lg row">
                    <div class="col-7">
                        <q-input color="teal" outlined v-model="searchModel" label="Pesquisar" @keyup.enter="getMembers">
                            <template v-slot:prepend>
                                <q-icon name="search"/>
                            </template>
                        </q-input>
                    </div>
                </div>
            </q-banner>
        </div>
        <div>
            <div v-for="member in members" :key="member.id">
                <div class="q-pa-md q-gutter-sm">
                    <q-banner inline-actions rounded class="bg-white text-black seach-baner">
                        <div class="text-format">
                            <b>Nome:</b> {{member.name}}
                            <p><b>Twitter URL:</b> {{member.shortened_url}}</p>
                        </div>
                        <template v-slot:action>
                            <q-btn color="white text-blue" label="Twitter" @click="twitterRedirect(member.shortened_url)" />
                            <q-btn color="white text-blue" label="Editar" @click="EditRedirect(member.id)"/>
                            <q-btn color="white text-blue" label="Visualizar" @click="ShowRedirect(member.id)"/>
                        </template>
                </q-banner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { Notify } from 'quasar'

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
            Notify.create({
              message: 'Pesquisa retornou com sucesso',
              color: 'blue',
              position: 'bottom',
            });
          })
          .catch((err) => {
              console.log(err)
              Notify.create({
                message: 'Não existem usuários cadastrados com esse nome',
                color: 'blue',
                position: 'bottom',
              });
          })
      },
    
    twitterRedirect: function (url) {
       window.open(url, "_blank");    
    },

    isEmpty(obj) {
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
        
        return JSON.stringify(obj) === JSON.stringify({});
    },

    ShowRedirect (memberId) {
        // router.push({ name: 'user', params: { userId: '123' } })
        this.$router.push({name: 'show', params: {
            id: memberId
        }})
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
.seach-baner {
    min-width: 450px;
    background: white;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
}
.text-format {
    font-size: 15px;
    font-style: inherit
}
</style>
