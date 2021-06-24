<template>
  <div>
    <h1>タスク一覧</h1>
    <router-link to="/new" tag="button">
      新規作成
    </router-link>

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

<style scoped>
tr {
  border-bottom: 1px solid #999;
}
</style>
