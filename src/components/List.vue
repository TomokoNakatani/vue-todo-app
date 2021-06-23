<template>
  <div>
    <h1>タスク一覧</h1>

    <table>
      <tr>
        <th>タイトル</th>
        <th>概要</th>
      </tr>
      <tr v-for="task in tasks" :key="task.title">
        <td>{{ task.title }}</td>
        <td>{{ task.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters({
      tasks: "getTasks",
    }),
  },
};
</script>
