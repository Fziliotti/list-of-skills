<template>
  <div class="hello">
    <div class="holder">

      <form @submit.prevent="addexpense">
        <input type="text" placeholder="Enter a expense you have.." v-model="expense" v-validate="'min:5'" name="expense">

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('expense')">{{ errors.first('expense') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in expenses" :key='index'>
            {{ data.expense }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      <p>These are the expenses that you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "expenses",
  data() {
    return {
      checked: false,
      expense: "",
      expenses: JSON.parse(localStorage.getItem('lista_expenses')) || []
    };
  },
  methods: {
    addexpense() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.expenses.push({ expense: this.expense });
          this.expense = "";
          this.saveToStorage();
        }
      });
    },
    remove(id) {
      this.expenses.splice(id, 1);
    },
    saveToStorage(){
      localStorage.setItem('lista_expenses', JSON.stringify(this.expenses));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #B89685;
  border-left: 5px solid #504746;
  margin-bottom: 2px;
  color: #f1f1f1;
  
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
  transition: 0.3s all;
}

i:hover {
  color: crimson;
}
</style>
