<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" name="" id="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" name="" id="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input
      type="text"
      name=""
      id="skill"
      v-model="tempSkill"
      @keyup.alt="addSkill"
    />
    <div
      v-for="(skill, index) in skills"
      :key="skill"
      class="pill"
      @click="removeSkill(skill, index)"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" name="" id="terms" required v-model="checkTerms" />
      <label for="">Accept Terms and Conditions</label>
    </div>

    <!-- <div>
      <input type="checkbox" name="" id="" value="Naruto" v-model="names">
      <label for="">Naruto</label>
    </div>
    <div>
      <input type="checkbox" name="" id="" value="Mario" v-model="names">
      <label for="">Mario</label>
    </div>
    <div>
      <input type="checkbox" name="" id="" value="Superman" v-model="names">
      <label for="">Superman</label>
    </div> -->

    <div class="submit">
      <button type="submit">Create An Account</button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ checkTerms }}</p>
  <p>Skills: {{ skills }}</p>
  <!-- <p>Names: {{ names }}</p> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      checkTerms: false,
      tempSkill: "",
      skills: [] as string[],
      // names: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e: KeyboardEvent) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(item: string, index: number) {
      // this.skills.splice(index, 1); // method 1
      this.skills = this.skills.filter((skill) => skill !== item); // method 2
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";
      if (!this.passwordError) {
      }
    },
  },
});
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
