<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email :</label>
      <input type="email" v-model="email" required>

      <label>Mot de passe :</label>
      <input type="password" v-model="password" required> <br>
      <div v-if="passwordError" class="error">{{ passwordError }} </div>

      <div class="button">
        <button class="submit" type="submit">Se connecter</button>
      </div>
    </form>

    <p> Email: {{ email }} </p>
    <p> Mot de passe: {{ password }} </p>

  </div>
</template>


<script>
export default{

  data() {
    return {
      email: '',
      password: '',
      passwordError: ''
    }
  },
  methods: {

    handleSubmit() {
      //Validate password field length
      this.passwordError = this.password.length > 8 ?
          '' : 'Le mot de passe doit comporter plus de 8 caractères!';
      if(!this.passwordError) {
        console.log(this.email);
        console.log(this.password);
      }
    }
  }

}
</script>


<style scoped>

form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display:inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: bordre-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width:16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0 ;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background: #eee;
}

button {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>