
import { Notify } from 'quasar'
import { db } from '../../boot/cirudb.js'
import Axios from 'axios'

/*
export function someAction (context) {

} */
export async function Conectar ({ commit }, payload) {
  var urlapi = payload
  commit('spinnerC', { spnD: true, btnD: false, btnClos: false })
  await Axios.get(urlapi += 'conexion').then((response) => {
    mensanje('Conexión Exitosa', 'done', 'amber-8')
    db.open()
    db.urlapi.toArray().then((arr) => {
      if (arr.length === 0) {
        db.urlapi.add({ urlApi: payload })
      } else {
        db.urlapi.update(1, { urlApi: payload })
      }
    })

    setTimeout(() => {
      commit('spinnerC2', { spnD: false, btnCD: true })
    }, 4000)
  }).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      var m1 = 'Error: ' + error.response.data.message + ' , Status = ' + error.response.status + ' , ' + 'o revise la Url de la Api'
      setTimeout(() => {
        commit('spinnerC', { spnD: false, btnD: true, btnClos: true })
      }, 4000)
      mensanje(m1, 'warning', 'negative')
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      var m2 = 'Error: ' + error.request + ' , ' + 'Revise la Conexion del Internet o el Servidor'
      setTimeout(() => {
        commit('spinnerC', { spnD: false, btnD: true, btnClos: true })
      }, 4000)
      mensanje(m2, 'warning', 'negative')
    } else {
      // Something happened in setting up the request that triggered an Error
      var m3 = 'Error: ' + error.message
      setTimeout(() => {
        commit('spinnerC', { spnD: false, btnD: true, btnClos: true })
      }, 4000)
      mensanje(m3, 'warning', 'negative')
    }
  })
}

function mensanje (m, i, c) {
  Notify.create({
    message: m,
    icon: i,
    color: c,
    multiLine: true,
    timeout: 4000,
    position: 'top-right'
  })
}
