<template>
    <div class="q-pa-md q-gutter-sm">
            <q-input color="teal" filled v-model="name"
                    label="Nome" :placeholder="memberData.name">
            </q-input>
            <q-input color="teal" filled v-model="twitterUrl"
                    label="Nome"
                    :placeholder="memberData.twitter_profile_address">
            </q-input>
            <q-btn label="Enviar" @click="SendInformations()" color="blue"/>
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
    }
  }
}
</script>

<style>

</style>
