<template>
  <q-page class="q-pa-md fit row  justify-center">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:350px;height:485px;">
          <q-card-section class="bg-amber-8">
            <h4 class="text-h6 text-white q-my-md">Acceso a Sistema</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="user" type="text" label="Usuario">
                <template v-slot:prepend>
                  <q-icon name="mdi-account" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Contraseña">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Ingresar" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Desarrollado por Carcamo-Software</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'CardLogin',
  data () {
    return {
      password: '',
      user: ''
    }
  }
}
</script>
