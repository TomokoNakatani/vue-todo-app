<template>
  <div>
    <h1>タスク編集</h1>

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
        <input type="submit" @click="updateTask()" value="更新" />
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Edit",
  data() {
    return {
      title: this.$store.state.tasks[this.$route.params.id].title,
      body: this.$store.state.tasks[this.$route.params.id].body,
      currentTask: this.$store.state.tasks[this.$route.params.id],
    };
  },
  methods: {
    updateTask() {
      if (this.title == "") return alert("タイトルを入力してください");
      this.currentTask.title = this.title;
      this.currentTask.body = this.body;
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
