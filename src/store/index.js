import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import loading from './modules/loading'
import checkout from './modules/checkout'
import user from './modules/user'
import auth from './modules/auth'
import role from './modules/role'
import attachment from './modules/attachment'
import proposal from './modules/proposal'
import zegrisId from './modules/zegrisId'
import contract from './modules/contract'
import settings from './modules/settings'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    messages,
    loading,
    checkout,
    auth,
    role,
    user,
    attachment,
    proposal,
    zegrisId,
    contract,
    settings
  },
  strict: debug
})
