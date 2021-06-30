<template>
  <div>
    <h1>タスク新規作成</h1>
    <Form buttonText="追加" :title="title" :body="body" @submit="addTask" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Form from "./Form";

export default {
  name: "New",
  components: {
    Form,
  },
  data() {
    return { title: "", body: "" };
  },
  methods: {
    ...mapActions(["addTasks"]),
    addTask(form) {
      if (form.title == "") return alert("タイトルを入力してください");
      this.addTasks({
        title: form.title,
        body: form.body,
      });
      this.$router.push("/");
    },
  },
};
</script>
