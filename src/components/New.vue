<template>
  <div>
    <h1>タスク新規作成</h1>

    <table>
      <tr>
        <th>タイトル</th>
        <td>
          <input type="text" size="30" v-model="title" />
        </td>
      </tr>
      <tr>
        <th>概要</th>
        <td>
          <textarea cols="30" v-model="body"></textarea>
        </td>
      </tr>
      <tr>
        <input type="submit" @click="addTodo()" value="追加" />
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "New",
  data() {
    return { title: "", body: "" };
  },
  methods: {
    addTodo() {
      if (this.title == "") return alert("タイトルを入力してください");
      this.tasks.push({
        title: this.title,
        body: this.body,
      });
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters({
      tasks: "getTasks",
    }),
  },
};
</script>
