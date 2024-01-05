<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTooltip from '@/components/common/BaseTooltip.vue';
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconUnlock from '@/components/icons/iconUnlock.vue';

const cataclysmDescription = `На протяжении десятков лет ученые всего мира проводили исследования и предпринимали
  попытки создания лекарства от болезни Альцгеймера. Последние испытания на обезьянах
  проходили успешно. Однако ученые не знали, что они создали самыйопасный штамп гриппа в
  истории. Обезьяны эволюционировали и начали истреблять людей. В рядах человечества посеяна
  паника, опасности приходится ждать отовсюду. Грипп способен заражать и людей, медицина
  бессильна, люди гибнут. Военные не могут оказать поддержку, города разгромлены...`;

const bunkerPlaces = 15;
const bunkerDescription = 'Построен недавно, у всех выживших общая комната';
const bunkerProps = [
  {
    name: 'Размер бункера:',
    value: '150 кв.м',
    tooltip: '',
  },
  {
    name: 'Время нахождения:',
    value: '3 года',
    tooltip: '',
  },
  {
    name: 'Кол-во еды:',
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
const player = {
  name: 'Тестовый игрок (Вы)',
  attrs: [
    {
      label: 'Профессия:',
      text: 'Строитель',
      open: false,
    },
    {
      label: 'Биологические характеристики:',
      text: 'Мужчина (21 год)',
      open: true,
    },
    {
      label: 'Здоровье:',
      text: 'Рак кожи',
      open: false,
    },
    {
      label: 'Хобби:',
      text: 'Комьютерные игры',
      open: false,
    },
    {
      label: 'Фобия:',
      text: 'Арахнофобия',
      open: false,
    },
    {
      label: 'Дополнительные навыки:',
      text: 'Навыки взлома',
      open: false,
    },
    {
      label: 'Человеческие качества:',
      text: 'Капризный',
      open: false,
    },
    {
      label: 'Багаж:',
      text: 'Семена пшеницы',
      open: true,
    },
  ],
  specs: [
    {
      text: 'Строитель',
      tooltip: 'Ваш специальный навык',
      used: true,
    },
    {
      text: 'Рак кожи',
      tooltip: 'Второй спец навык',
      used: false,
    },
  ],
};
const players = [
  {
    name: 'Тестовый игрок (Вы)',
    attrs: [
      {
        label: 'Профессия:',
        text: 'Строитель',
        open: false,
      },
      {
        label: 'Биологические характеристики:',
        text: 'Мужчина (21 год)',
        open: true,
      },
      {
        label: 'Здоровье:',
        text: 'Рак кожи',
        open: false,
      },
      {
        label: 'Хобби:',
        text: 'Комьютерные игры',
        open: false,
      },
      {
        label: 'Фобия:',
        text: 'Арахнофобия',
        open: false,
      },
      {
        label: 'Дополнительные навыки:',
        text: 'Навыки взлома',
        open: false,
      },
      {
        label: 'Человеческие качества:',
        text: 'Капризный',
        open: false,
      },
      {
        label: 'Багаж:',
        text: 'Семена пшеницы',
        open: true,
      },
    ],
    specs: [
      {
        text: 'Строитель',
        tooltip: 'Ваш специальный навык',
        used: true,
      },
      {
        text: 'Рак кожи',
        tooltip: 'Второй спец навык',
        used: false,
      },
    ],
  },
  {
    name: 'Тест',
    attrs: [
      {
        label: 'Профессия:',
        text: 'Строитель',
        open: false,
      },
      {
        label: 'Биологические характеристики:',
        text: 'Мужчина (21 год)',
        open: true,
      },
      {
        label: 'Здоровье:',
        text: 'Рак кожи',
        open: false,
      },
      {
        label: 'Хобби:',
        text: 'Комьютерные игры',
        open: false,
      },
      {
        label: 'Фобия:',
        text: 'Арахнофобия',
        open: false,
      },
      {
        label: 'Дополнительные навыки:',
        text: 'Навыки взлома',
        open: false,
      },
      {
        label: 'Человеческие качества:',
        text: 'Капризный',
        open: false,
      },
      {
        label: 'Багаж:',
        text: 'Семена пшеницы',
        open: true,
      },
    ],
    specs: [
      {
        text: 'Строитель',
        tooltip: 'Ваш специальный навык',
        used: true,
      },
      {
        text: 'Рак кожи',
        tooltip: 'Второй спец навык',
        used: false,
      },
    ],
  },
];
</script>

<template>
  <section class="container">
    <div class="lobby-info">
      <div class="lobby-info__cataclysm cataclysm">
        <div class="cataclysm__header">
          <h3 class="base-title">Катаклизм</h3>
          <base-button to="game-rules" variant="primary_flat">Как играть?</base-button>
        </div>
        <p class="cataclysm__description">{{ cataclysmDescription }}</p>
      </div>
      <div class="lobby-info__bunker bunker">
        <div class="bunker__header">
          <div class="bunker__title">
            <h4 class="base-title-h4">Информация о бункере</h4>
            <p class="bunker__description">{{ bunkerDescription }}</p>
          </div>
          <span class="bunker__place-count">Всего мест в бункере: {{ bunkerPlaces }}</span>
        </div>
        <div class="bunker__info">
          <ul class="bunker__properties">
            <li class="bunker__property" v-for="(prop, key) in bunkerProps" :key="key">
              <span class="bunker__property-title">{{ prop.name }}</span>
              <p class="bunker__property-value">
                <base-tooltip :title="prop.tooltip" placement="top">
                  <icon-info-circle></icon-info-circle>
                </base-tooltip>
                {{ prop.value }}
              </p>
            </li>
          </ul>
          <div class="bunker__items">
            <p>В бункере присутствует:</p>
            <ul>
              <li class="bunker__item" v-for="(item, key) in bunkerItems" :key="key">
                <base-tooltip title="wow" placement="top">
                  <icon-info-circle></icon-info-circle>
                </base-tooltip>
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="about-you">
      <div class="about-you__card">
        <img src="../assets/images/game-room-card.jpg" alt="Изображение не найдено" />
      </div>
      <div class="about-you__main">
        <div class="about-you__info">
          <h4 class="base-title-h4">Информация о вас</h4>
          <ul class="about-you__attrs">
            <li v-for="(attr, key) in player.attrs" :key="key">
              <span>{{ attr.label }}</span>
              <div class="about-you__attr">
                <base-tooltip placement="top" title="spec.tooltip">
                  <icon-info-circle></icon-info-circle>
                </base-tooltip>
                <p>
                  {{ attr.text }}
                </p>
                <icon-lock v-if="!attr.open" @click="attr.open = true"></icon-lock>
                <icon-unlock v-else></icon-unlock>
              </div>
            </li>
          </ul>
        </div>
        <div class="about-you__spec-conditions">
          <h4 class="base-title-h4">Специальные условия</h4>
          <ul>
            <li class="about-you__spec-condition" v-for="(spec, key) in player.specs" :key="key">
              <base-tooltip placement="top" title="spec.tooltip">
                <icon-info-circle></icon-info-circle>
              </base-tooltip>
              <p>
                {{ spec.text }}
              </p>
              <icon-lock v-if="!spec.used" @click="spec.used = true"></icon-lock>
              <icon-unlock v-else></icon-unlock>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="players">
      <h3 class="base-title">Игроки</h3>
      <div class="players__table">
        <table>
          <thead>
            <tr>
              <th>Игроки:</th>
              <th>Профессия:</th>
              <th>Пол/Возраст</th>
              <th>Здоровье</th>
              <th>Хобби</th>
              <th>Фобия</th>
              <th>Навыки</th>
              <th>Характер</th>
              <th>Багаж</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, key) in players" :key="key">
              <td>
                <span>{{ player.name }}</span>
              </td>
              <td v-for="(attr, key) in player.attrs" :key="key">
                <span>{{ attr.text }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
th {
  color: var(--reg, #d2d2d2);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
th:first-child {
  border-right: 2px solid var(--regreg, #2c394b);
}
td:first-child {
  border-right: 2px solid var(--regreg, #2c394b);
  padding: 24px 24px 0 0;
  span {
    display: flex;
    padding: 18px 24px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    color: var(--White, #fff);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-wrap: nowrap;
  }
}
td:not(:first-child) {
  span {
    display: flex;
    padding: 18px 24px;
    align-items: center;

    text-wrap: nowrap;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--regreg, #2c394b);
    color: var(--White, #fff);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.container {
  padding: 120px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  display: flex;
}
.lobby-info {
  border-radius: 42px;
  & .cataclysm {
    background-image: url('../assets/images/cataclysm-bg.jpg');
    display: flex;
    padding: 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
    }
    &__description {
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
  & .bunker {
    display: flex;
    padding: 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-right: 1px solid var(--regreg, #2c394b);
    border-bottom: 1px solid var(--regreg, #2c394b);
    border-left: 1px solid var(--regreg, #2c394b);
    &__header {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }
    &__title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      flex: 1 0 0;
    }
    &__description {
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    &__place-count {
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      border-radius: 12px;
      border: 1px solid var(--regreg, #2c394b);
      display: flex;
      padding: 18px 32px;
      align-items: center;
      gap: 12px;
    }
    &__info {
      display: flex;
      gap: 32px;
      flex-direction: column;
      width: 100%;
    }
    &__properties {
      display: flex;
      gap: 32px;
      justify-content: space-between;
    }
    &__property {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &__property-title {
      color: var(--reg, #d2d2d2);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &__property-value {
      display: flex;
      padding: 18px 24px;
      align-items: center;
      gap: 12px;
      align-self: stretch;
      border-radius: 8px;
      background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    }
    &__items {
      p {
        color: var(--reg, #d2d2d2);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 8px;
      }
      ul {
        display: flex;
        gap: 32px;
        justify-content: space-between;
      }
    }
    &__item {
      text-wrap: nowrap;
      display: flex;
      padding: 18px 24px;
      align-items: center;
      gap: 12px;
      align-self: stretch;
      border-radius: 8px;
      width: 100%;
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    }
  }
}

.about-you {
  display: flex;
  padding: 42px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 42px;
  border: 1px solid var(--regreg, #2c394b);
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 24px;
    img {
      width: 300px;
      border-radius: 24px;
    }
  }
  &__main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  }
  &__attrs {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    li {
      width: 31.7%;
    }
    span {
      color: var(--reg, #d2d2d2);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__attr {
    display: flex;
    padding: 18px 24px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    p {
      flex-grow: 1;
      color: var(--reg, #d2d2d2);
      font-family: Inter;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__spec-conditions {
    width: 100%;
    h4 {
      margin-bottom: 24px;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }
  }
  &__spec-condition {
    display: flex;
    padding: 18px 24px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    justify-content: space-between;
    background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    p {
      flex: 1 0 0;
      color: var(--White, #fff);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}
.players {
  width: 100%;
  h3 {
    margin-bottom: 24px;
  }
  &__table {
    border-radius: 42px;
    border: 1px solid var(--regreg, #2c394b);
    padding: 42px;
  }
}
</style>
