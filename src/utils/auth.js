import Cookies from 'js-cookie'

const UserData = 'hwUserData'
const UserToken = 'hwUserToken'
export function getUserDate() {
  return JSON.parse(Cookies.get(UserData))
}

export function getUserToken() {
  return Cookies.get(UserToken)
}
 
export function removeUser() {
  Cookies.remove(UserData)  
  Cookies.remove(UserToken)  
}

