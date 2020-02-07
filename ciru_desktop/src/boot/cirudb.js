// import something here
// import Vue from 'vue'
import Dexie from 'dexie'

var db = new Dexie('cirudb')

db.version(1).stores({
  urlapi: '++id, urlApi'
})

// Vue.prototype.$db = db

export { db }
