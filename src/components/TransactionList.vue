<template>
<h3>History</h3>
  <ul id="list" class="list">
    <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{ transaction.text }} <span>{{ transaction.amount }}</span>
      <button @click="deleteTransaction(transaction.id)" class="delete-btn">X</button>
    </li>
  </ul>
</template>


<script setup lang="ts">



 // Define types for the transaction object and props
type Transaction =  {
  id: string;
  text: string;
  amount: number;
}


const emit = defineEmits<{
  (event: 'transactionDeleted', id: string): void;
}>();

 const props = defineProps<{
  transactions: Transaction[];
 }>();

 const deleteTransaction = (id: string): void => {
  emit('transactionDeleted', id)
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

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  margin: 0 auto; 
}

.list li {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.list li:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.transaction-info {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.transaction-text {
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.transaction-amount {
  font-weight: bold;
  font-size: 1.1rem;
}

.plus .transaction-amount {
  color: green;
}

.minus .transaction-amount {
  color: red;
}

.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #ff1a1a;
}

.delete-btn:focus {
  outline: none;
}

.transaction-date {
    font-size: 0.9rem;
    color: #777;
    margin-right: 10px;
  }
</style>