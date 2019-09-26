<template>
    <div class="q-pa-md q-gutter-sm">
        <q-banner rounded class="bg-white text-black show-banner">
          <div class="row">
            <div class="col-10 text-show">
              <p> <b>Nome:</b> {{memberData.name}} </p>
              <p> <b>Twitter URL:</b> {{memberData.twitter_profile_address}} </p>
              <p> <b>Twitter username:</b> {{memberData.twitter_username}} </p>
              <p> <b>Twitter Description:</b> {{memberData.twitter_description}} </p>
            </div>
              <div class="flex col-2 justfy-end q-pa-xl">
                <q-btn label="Excluir" color="red" class="q-ma-sm" @click="DeleteMember()"/>
              </div>
          </div>
        </q-banner>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      memberData: {}
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
          })
          .catch((err) => console.log(err))
      },
    
    twitterRedirect: function (url) {
       window.open(url, "_blank");    
    },

    DeleteMember () {
      axios
        .delete(`http://localhost:3000/members/${this.memberData.id}`)
        .then((res) => {
          this.$router.push({name: 'home'})
        })
        .catch((err) => {
          console.log("Deletion Error!")
        })
      
    }
  }
}
</script>

<style>
.text-show {
  font-size: 15px;
  font-style: inherit
}
.show-banner {
  min-width: 450px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
}
</style>
