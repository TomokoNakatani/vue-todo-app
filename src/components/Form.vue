<template>
  <table>
    <tr>
      <th>タイトル</th>
      <td>
        <input type="text" size="30" v-model="form.title" />
      </td>
    </tr>
    <tr>
      <th>概要</th>
      <td>
        <textarea cols="30" v-model="form.body"></textarea>
      </td>
    </tr>
    <tr>
      <input type="submit" @click="submit()" :value="buttonText" />
    </tr>
  </table>
</template>

<script>
export default {
  name: "Form",
  props: {
    buttonText: String,
    title: String,
    body: String,
  },
  data() {
    return {
      form: {
        title: this.title,
        body: this.body,
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
