<template>
    <div class="q-pa-md q-gutter-sm">
        <q-banner inline-actions rounded class="bg-blue text-white">
            <p> Nome: {{memberData.name}} </p>
            <p> Twitter URL: {{memberData.shortened_url}} </p>
            <p> Twitter username: {{memberData.twitter_username}} </p>
            <p> Twitter Description: {{memberData.twitter_description}} </p>
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
    }
  }
}
</script>

<style>

</style>
