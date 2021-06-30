<template>
  <div>
    <h1>タスク編集</h1>
    <Form buttonText="更新" :title="title" :body="body" @submit="updateTask" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Form from "./Form";

export default {
  name: "Edit",
  components: {
    Form,
  },
  data() {
    return { title: "", body: "" };
  },
  created() {
    this.title = this.getTasks[this.taskId].title;
    this.body = this.getTasks[this.taskId].body;
  },
  methods: {
    ...mapActions(["updateTasks"]),
    updateTask(form) {
      if (form.title == "") return alert("タイトルを入力してください");
      this.updateTasks({
        taskId: this.taskId,
        title: form.title,
        body: form.body,
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
