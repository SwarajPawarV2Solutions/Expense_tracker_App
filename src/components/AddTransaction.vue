<template>
   <h3>Add new transaction</h3>
   <form id="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" id="text" v-model="text" placeholder="Enter text..."/>
      </div>
      <div class="form-control">
        <label for="amount">Amount <br />(negative -expense, positive - income)</label>
        <input type="text" id="amount" v-model="amount" placeholder="Enter amount..."/>
      </div>
      <button class="btn">Add transaction</button>
   </form>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import {useToast} from 'vue-toastification'

const text = ref<string>('');
const amount = ref<string>('')

const emit = defineEmits<{
  (event: 'transactionSubmitted', transactionData: { text: string; amount: number }): void;
}>();

const toast = useToast();

  const onSubmit = () => {
    if(!text.value || !amount.value){
      toast.error('Both Fields must be filled');
      return;
    }
    const transactionData = {
      text: text.value,
      amount:  parseFloat(amount.value)
    }

emit('transactionSubmitted', transactionData);

    text.value = '';
    amount.value = '';
    
  }
</script>

<style scoped>
  h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

form {
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-control {
  margin-bottom: 15px;
}

.form-control label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

.form-control input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-control input:focus {
  outline: none;
  border-color: #007bff;
}

button.btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.btn:hover {
  background-color: #0056b3;
}

button.btn:active {
  background-color: #004085;
}

button.btn:focus {
  outline: none;
}
</style>
