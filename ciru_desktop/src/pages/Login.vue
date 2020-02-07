
<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/img/ambulancia.svg">
          </q-avatar>
          Control de Inventario y Revisión Vehicular
        </q-toolbar-title>
        <div>Ciru v1.0</div>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-blue-grey-1">
      <card-login></card-login>
    </q-page-container>
    <q-footer class="bg-blue-grey-1">
      <div class="row justify-end content-center">.
        <q-btn  class="q-ma-md" color="dark" unelevated round @click="Dialogo(true)" icon="mdi-settings-transfer" />
      </div>
      <q-dialog v-model="openD" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Ingresar url del Servidor</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="textapi" autofocus @keyup.enter="Dialogo(false)"  placeholder="http://localhost:9090/api/">
            <template v-slot:prepend>
              <q-icon name="language" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn v-if="btnClos" flat color="red" label="Cancelar" @click="Dialogo(false)" />
          <q-btn v-if="btnD" flat label="Conectar" @click="Conectar(textapi)"/>
           <q-spinner-gears v-if="spnD" size="2.5em" color="green-9" />
           <q-btn color="blue-grey-10" flat label="Cerrar" v-if="btnCD" @click="Dialogo(false)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      textapi: ''
    }
  },
  computed: {
    ...mapState('Login', ['openD', 'btnD', 'spnD', 'btnCD', 'btnClos'])
  },
  methods: {
    ...mapMutations('Login', ['Dialogo']),
    ...mapActions('Login', ['Conectar'])
  }
}
</script>
