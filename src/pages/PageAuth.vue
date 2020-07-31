<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md " style="max-width: 600px">
      <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
           <login-register />
          </q-tab-panel>

          <q-tab-panel name="register">
           <login-register />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    'login-register': require('components/LoginRegister.vue').default
  }
}
</script>

<style></style>
