import { API } from '../../api/user'

const state = {}

const mutations = {}

const actions = {
  fetchPagedUsers({ commit }, criteria) {
    const params = {
      page: 1,
      take: 10,
      email: null,
      role: null,
      orderBy: 'Role',
      orderByDesc: false,
      ...criteria
    }

    return API.fetchPagedUsers(params).then(result => {
      return {
        users: result.users || [],
        page: params.page,
        totalPage: Math.ceil(result.count / params.take)
      }
    })
  },

  addUser({ commit }, user) {
    return API.addUser(user).then(result => {
      return result
    })
  },

  fetchUser({ commit }, userId) {
    return API.fetchUser(userId).then(result => {
      return result
    })
  },

  editUser({ commit }, user) {
    return API.editUser(user).then(result => {
      return result
    })
  },

  deleteUser({ commit }, id) {
    return API.deleteUser(id).then(result => {
      return result
    })
  },

  checkUserEmail({ commit }, email) {
    return API.checkUserEmail(email).then(result => {
      return result
    })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
