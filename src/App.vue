<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
table {
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid #999;
}
th {
  overflow: auto;
  padding: 10px;
}
td {
  overflow: auto;
  padding: 10px;
}
</style>
