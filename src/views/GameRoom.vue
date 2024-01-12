<script setup>
import LobbyInfo from '@/components/GameRoom/LobbyInfo.vue';

const title = 'Катаклизм';
const description = `На протяжении десятков лет ученые всего мира проводили исследования и предпринимали
  попытки создания лекарства от болезни Альцгеймера. Последние испытания на обезьянах
  проходили успешно. Однако ученые не знали, что они создали самыйопасный штамп гриппа в
  истории. Обезьяны эволюционировали и начали истреблять людей. В рядах человечества посеяна
  паника, опасности приходится ждать отовсюду. Грипп способен заражать и людей, медицина
  бессильна, люди гибнут. Военные не могут оказать поддержку, города разгромлены...`;
const lobbyImg = '../assets/images/creategameroom-bg.jpg';
const bunkerCards = [
  {
    name: 'Размер бункера:',
    value: '150 кв.м',
    tooltip: 'От размера бункера зависит его вместимость и количество комнат',
  },
  {
    name: 'Время нахождения:',
    value: '3 года',
    tooltip: 'Сколько игрокам после того как они попадут в бункер нужно переждать катаклизм',
  },
  {
    name: 'Кол-во еды:',
    value: 'В большом количестве',
    tooltip: 'Количество еды в бункере определяет кого необходимо взять в бункер',
  },
];
</script>

<template>
  <section class="container">
    <lobby-info
      :title="title"
      :description="description"
      :img="lobbyImg"
      bunkerAvailableCardsCount="5"
      bunkerPlaces="15"
      :bunkerCards="bunkerCards"
    />
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 120px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
}
</style>
