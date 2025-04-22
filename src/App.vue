<template>
  
  <div class="container">
   <Header/>
    <div class="info">
      <Balance :total="total"/>
      <IncomeExpenses :income="+income" :expenses="+expenses"/>
      <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue';
import { useToast } from 'vue-toastification';

import {ref, computed, onMounted} from 'vue'

// Define the type for transaction
type Transaction  = {
  id: string;
  text: string;
  amount: number;
}


const toast = useToast();
const transactions = ref<Transaction[]>([]); // empty array where data is added 

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if(savedTransactions){
    transactions.value = savedTransactions;
  }
})

 // Get Total
 const total = computed(() => {
  return transactions.value.reduce((acc, transaction)=>{
    return acc + transaction.amount;
  }, 0)
 })

 // Get Income

 const income = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount > 0)
  .reduce((acc, transaction)=>{
    return acc + transaction.amount;
  }, 0)
 })


 // Get Expenses

 const expenses = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction)=>{
    return acc + transaction.amount;
  }, 0)
  .toFixed(2)
 })

 //Add transaction

 const handleTransactionSubmitted = (transactionData: {text: string; amount: number}) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  });

  saveTransactionsToLocalStorage();

  toast.success('Transaction added');
 };

 // Generate Unique ID

 const generateUniqueId = (): string =>{
  return Math.floor(Math.random() * 1000000).toString();
 }

 // Delete Transaction
 const handleTransactionDeleted = (id: string) => {
   transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

   saveTransactionsToLocalStorage();
   toast.success('Transaction Deleted')
 }

 // Save to LocatStorage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions',JSON.stringify(transactions.value));
}
</script>
  <style scoped>

.container {
  border: 2px solid black; 
  padding: 20px;
  border-radius: 8px; 
} 

.info {
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px; 
}
</style>