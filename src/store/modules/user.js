import { getUserDate } from '@/utils/auth'

const state = {
  userData: getUserDate(),
  role: getUserDate().role 
}

const getters = {
  roleCode: state => state.role.code,
  userName: state => state.userData.username
}

export default {
  state,
  getters
}
