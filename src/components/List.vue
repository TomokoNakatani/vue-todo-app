<template>
  <div>
    <h1>タスク一覧</h1>
    <router-link to="/new">
      <button>新規作成</button>
    </router-link>

    <table>
      <tr>
        <th>タイトル</th>
        <th>概要</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>
          <router-link :to="{ name: 'show', params: { id: index } }">
            {{ task.title }}
          </router-link>
        </td>
        <td>{{ task.body }}</td>
        <td>
          <router-link :to="{ name: 'edit', params: { id: index } }">
            <button>編集</button>
          </router-link>
        </td>
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
