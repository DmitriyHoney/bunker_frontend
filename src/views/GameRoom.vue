<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

const cataclysmDescription = `На протяжении десятков лет ученые всего мира проводили исследования и предпринимали
  попытки создания лекарства от болезни Альцгеймера. Последние испытания на обезьянах
  проходили успешно. Однако ученые не знали, что они создали самыйопасный штамп гриппа в
  истории. Обезьяны эволюционировали и начали истреблять людей. В рядах человечества посеяна
  паника, опасности приходится ждать отовсюду. Грипп способен заражать и людей, медицина
  бессильна, люди гибнут. Военные не могут оказать поддержку, города разгромлены...`;

const bunkerPlaces = 15;
const bunkerDescription = 'Построен недавно, у всех выживших общая комната';
const bunkerInfo = [
  {
    name: 'Размер бункера',
    value: '150 кв.м',
    tooltip: '',
  },
  {
    name: 'Время нахождения',
    value: '3 года',
    tooltip: '',
  },
  {
    name: 'Кол-во еды',
    value: 'В большом количестве',
    tooltip: '',
  },
];

const bunkerItems = [
  {
    value: 'Медпункт',
    tooltip: '',
  },
  {
    value: 'Аптечка (10 шт)',
    tooltip: '',
  },
  {
    value: 'Оборудованная теплица и семена овощей',
    tooltip: '',
  },
];
</script>

<template>
  <section class="container">
    <div class="cataclysm">
      <div class="cataclysm__info">
        <div class="cataclysm__title">
          <h3 class="base-title">Катаклизм</h3>
          <base-button to="game-rules" variant="primary_flat">Как играть?</base-button>
        </div>
        <p class="cataclysm__description">
          {{ cataclysmDescription }}
        </p>
      </div>
      <div class="cataclysm__bunker bunker">
        <div class="bunker__header">
          <div class="bunker__title">
            <h4 class="base-title-h4">Информация о бункере</h4>
            <p class="bunker__description">{{ bunkerDescription }}</p>
          </div>
          <span class="bunker__place-count"> Всего мест в бункере: {{ bunkerPlaces }} </span>
        </div>
        <ul class="bunker__info">
          <li v-for="(item, key) in bunkerInfo" :key="key" class="bunker__item">
            <p class="item__name">{{ item.name }}:</p>
            <div class="item__value">{{ item.value }}</div>
          </li>
        </ul>
        <p class="bunker__items">В бункере присутствует:</p>
        <ul class="bunker__info">
          <li v-for="(item, key) in bunkerItems" :key="key" class="bunker__item">
            <div class="item__value">{{ item.value }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
.container {
  padding-top: 120px;
}
.cataclysm {
  border-radius: 42px;
  &__info {
    background-image: url('/frontend/src/assets/images/cataclysm-bg.jpg');
    background-repeat: round;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding: 42px;
    gap: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  &__description {
    font-family: Inter;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
  & .bunker {
    &__items {
      margin-bottom: 8px;
      color: #d2d2d2;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    padding: 42px;
    border: solid 1px #2c394b;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top: none;
    &__header {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-bottom: 32px;
    }
    &__title {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    &__description {
      font-family: Inter;
      font-size: 18px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }
    &__place-count {
      font-size: 18px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      color: #fff;
      padding: 18px 32px 18px 32px;
      border-radius: 12px;
      border: solid 1px #2c394b;
    }

    &__info {
      display: flex;
      gap: 24px;
      margin-bottom: 32px;
    }
    &__item {
      width: 100%;
      .item__value {
        display: flex;
        padding: 18px 24px;
        align-items: center;
        gap: 12px;
        flex: 1 0 0;
        border-radius: 8px;
        background: linear-gradient(315deg, #2c394b 0%, #334756 100%);
        color: #fff;
      }
      & p {
        margin-bottom: 8px;
        color: #d2d2d2;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
</style>
