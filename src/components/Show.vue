<template>
  <div>
    <h1>タスク詳細</h1>

    <table>
      <tr>
        <th>タイトル</th>
        <td>{{ title }}</td>
      </tr>
      <tr>
        <th>概要</th>
        <td>{{ body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Show",
  data() {
    return { title: "", body: "" };
  },
  created() {
    this.title = this.getTasks[this.taskId].title;
    this.body = this.getTasks[this.taskId].body;
  },

  computed: {
    ...mapGetters(["getTasks"]),
    taskId() {
      return this.$route.params.id;
    },
  },
};
</script>
