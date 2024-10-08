import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {...mapGetters(['reqs']),

  },
  methods: {...mapActions(['setReqs']),

    addRequest(article) {
      let reqList = []
      if (this.reqs.length > 0) {
       reqList = this.reqs.slice(0)
      }
      reqList.push(JSON.stringify(article))
      this.setReqs(reqList);
      console.log('add request in managecart')
    },
    removeRequest(article) {
      let reqList = this.reqs.map((req) => JSON.parse(req))
        .filter((req) => req._id !== article._id)
        .map((req) => JSON.stringify(req))
      this.setReqs(reqList);
      console.log('remove request in managecart')
    },
    clearRequests() {
     this.setReqs([])
    },

  }
}
