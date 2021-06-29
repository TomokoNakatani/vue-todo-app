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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Edit",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  created() {
    this.title = this.getTasks[this.taskId].title;
    this.body = this.getTasks[this.taskId].body;
  },
  methods: {
    ...mapActions(["updateTasks"]),
    updateTask() {
      if (this.title == "") return alert("タイトルを入力してください");
      this.updateTasks({
        taskId: this.taskId,
        title: this.title,
        body: this.body,
      });
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getTasks"]),
    taskId() {
      return this.$route.params.id;
    },
  },
};
</script>
