<template>
  <div class="balance-container">
    <h4>Your Balance</h4>
    <h1 :style="balanceStyle">{{ total }}</h1>
  </div>
</template>

<style scoped>
  .balance-container {
  background-color: #fff;
  padding: 20px;
  margin: 20px auto;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h4 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
  font-weight: bold;
  text-decoration: underline;
}

h1{
  font-weight: bold;
}

#balance {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.balance-container:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>

<script setup lang="ts">
 import {computed } from 'vue';

 type BalanceProps = {
  total: number
 }

 const props = defineProps<BalanceProps>();

 const balanceStyle = computed(() => {
    return {
      color: props.total > 0 ? 'green' : (props.total < 0 ? 'red' : 'black')
    };
  });
 
</script>