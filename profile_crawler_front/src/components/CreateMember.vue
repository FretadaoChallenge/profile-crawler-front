<template>
    <div>
        <div class="q-ma-lg row">
            <div class="col-7">
                <q-input color="teal" filled v-model="name" label="Nome">
                </q-input>
            </div>
            <div class="col-7">
                <q-input color="teal" filled v-model="twitterUrl" label="Twitter Url">
                </q-input>
            </div>
            <div class="col-7">
                <q-btn flat label="Enviar" @click="SendInformations()"/>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      twitterUrl: ''
    }
  },

  methods: {
      SendInformations () {
        axios
            .post('http://localhost:3000/members', {
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
