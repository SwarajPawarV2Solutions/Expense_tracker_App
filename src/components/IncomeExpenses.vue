<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money_plus">{{ income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money_minus">{{ expenses }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">


// Defining types for props

type IncomeExpenseProps = {
  income: number;
  expenses: number
}

const props = defineProps<IncomeExpenseProps>()
</script>

<style scoped>
  .inc-exp-container {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 20px auto; /* Centering the container */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.inc-exp-item {
  text-align: center;
  width: 45%; /* Allow each section to take half of the container width */
}

h4 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

.money_plus, .money_minus {
  font-size: 2rem;
  font-weight: bold;
  display: block;
}

.money_plus {
  color: green;
}

.money_minus {
  color: red;
}


.inc-exp-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>