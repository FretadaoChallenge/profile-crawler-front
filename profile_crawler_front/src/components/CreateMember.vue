<template>
    <div class="row">
        <div class="flex col-12 justify-center q-pa-lg">
            <q-banner inline-actions rounded class="bg-white text-black baner">
                <div class="row justify-center">
                    <q-input color="teal" outlined v-model="name" label="Nome" class="name">
                    </q-input>
                </div>
                <div class="row justify-center q-pt-sm">
                    <q-input color="teal" outlined v-model="twitterUrl" label="Twitter Url" class="twitter">
                    </q-input>
                </div>
                <div class="row q-pt-sm justify-center">
                    <q-btn label="Enviar" color="blue" @click="SendInformations()"/>
                </div>
            </q-banner>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { Notify } from 'quasar'
// import { LoadingBar } from 'quasar'
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'

export default {
  data () {
    return {
      name: '',
      twitterUrl: ''
    }
  },

  methods: {
      SendInformations () {
        //   LoadingBar.start()
          axios
            .post('http://localhost:3000/members', {
                name: this.name,
                twitter_profile_address: this.twitterUrl
            })
            .then((response) => {
                Notify.create({
                    message: 'Usuário cadastrado com sucesso',
                    color: 'blue',
                    position: 'bottom',
                });
                this.$router.push({name: 'show', params: {
                    id: response.data.id
                }})
            })
            .catch((error) => {
                console.log(error.response.data);
                Notify.create({
                    message: 'Erro na criação do usuario',
                    color: 'blue',
                    position: 'bottom',
                });
            });
            // LoadingBar.stop()
      }
  }
}
</script>

<style scoped>
.baner {
    min-width: 450px;
    background: white;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
}
.name {
    min-width: 350px
}
.twitter {
    min-width: 350px
}
</style>
