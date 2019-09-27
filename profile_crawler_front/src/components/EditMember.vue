<template>
  <div class="q-pa-lg">
    <q-banner rounded class="bg-white text-black edit-baner">
      <div class="q-pa-md q-gutter-sm">
          <q-input color="teal" outlined v-model="name"
                  label="Nome" :placeholder="memberData.name">
          </q-input>
          <q-input color="teal" outlined v-model="twitterUrl"
                  label="Nome"
                  :placeholder="memberData.twitter_profile_address">
          </q-input>
          <q-btn label="Enviar" @click="SendInformations()" color="blue"/>
          </q-input>
          <q-btn label="Cancelar" @click="Cancelar()" color="white" text-color="black" />
      </div>
    </q-banner>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      memberData: {},
      name: '',
      twitterUrl: ''
    }
  },

  created () {
    const id = this.$route.params.id
    this.getMember(id)
  },

  methods: {
      getMember (id) {
        const searchUrl = `http://localhost:3000/members/${id}`
        axios
          .get(searchUrl)
          .then((res) => {
            this.memberData = res.data
            this.name = res.data.name
            this.twitterUrl = res.data.twitter_profile_address
          })
          .catch((err) => console.log(err))
    },

    SendInformations () {
      axios
        .put(`http://localhost:3000/members/${this.memberData.id}`, {
            name: this.name,
            twitter_profile_address: this.twitterUrl
        })
        .then((response) => {
            this.$router.push({name: 'show', params: {
                id: response.data.id
            }})
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    Cancelar () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>
.edit-baner {
  min-width: 450px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
}
</style>
