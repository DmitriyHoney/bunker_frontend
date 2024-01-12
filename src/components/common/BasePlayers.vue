<script setup>
defineProps({
  players: Object,
});
</script>

<template>
  <div class="table-box">
    <table>
      <thead>
        <tr>
          <th>Игроки:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, key) in players" :key="key">
          <td>{{ player.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table-box {
  padding: 42px;
  border-radius: 42px;
  border: 1px solid var(--regreg, #2c394b);
  width: 100%;
}
table {
  width: 100%;
}
</style>
