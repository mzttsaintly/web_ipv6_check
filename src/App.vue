<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';

import getAddress from './api/modules/getEmbyIpv6Address'

const ipv6Address = ref('')

async function getIpv6() {
  getAddress.getEmbyIpv6Address().then((res) => {
    ipv6Address.value = res.data
  })
}

onMounted(() => {
  getIpv6()
})
</script>

<template>
  <h1>Hello World</h1>
  <p>Your IPv6 address is: {{ ipv6Address }}</p>

</template>

<style scoped>
/*  */
</style>
