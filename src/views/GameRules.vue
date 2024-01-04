<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue';
import IconLine from '@/components/icons/IconLine.vue';
import { ref } from 'vue';

const buttonsAnchors = [
  {
    name: 'Профессия',
    id: 'job',
  },
  {
    name: 'Здоровье',
    id: 'health',
  },
  {
    name: 'Биологические характеристики',
    id: 'biology',
  },
  {
    name: 'Человеческие качества',
    id: 'quality',
  },
  {
    name: 'Доп. навыки',
    id: 'skills',
  },
  {
    name: 'Хобби',
    id: 'hobby',
  },
  {
    name: 'Фобии',
    id: 'fobies',
  },
  {
    name: 'Специальные условия',
    id: 'spec',
  },
  {
    name: 'Багаж',
    id: 'bagage',
  },
];

const personCards = [
  {
    name: 'Професии - 50 карт',
    description: 'Профессия персонажа. У артиста хорошая харизма, но врятли это поможет ему в зомби апокалипсисе',
    image: '/src/assets/images/cardperson/man.jpg',
    id: 'job',
  },
  {
    name: 'Хобби - 30 карт',
    description: 'Хобби может повлиять на ход игры, если профессия персонажа не очень востребована',
    image: '/src/assets/images/cardperson/art.jpg',
    id: 'hobby',
  },
  {
    name: 'Здоровье - 30 карт',
    description: 'Заразные игроки или игроки со смертельными болезнями опасны для нахождения в бункере с остальными',
    image: '/src/assets/images/cardperson/hearth.jpg',
    id: 'health',
  },
  {
    name: 'Фобии - 30 карт',
    description: 'Обращайте внимание на фобию персонажа. Ведь если игрок боиться клоунов, а профессия другого игрока клоун, то врятли они уживуться в бункере',
    image: '/src/assets/images/cardperson/fobia.jpg',
    id: 'fobies',
  },
  {
    name: 'Биологические характеристики- 30 карт',
    description: 'Возраст, пол играют одну из ключевых ролей для выживания',
    image: '/src/assets/images/cardperson/travels.jpg',
    id: 'biology',
  },
  {
    name: 'Специальные условия - 50 карт',
    description: 'Вводят новую информацию для игроков во время игры.',
    image: '/src/assets/images/cardperson/idea.jpg',
    id: 'spec',
  },
  {
    name: 'Дополнительные навыки - 30 карт',
    description: 'Порой эти карты могут изменить баланс сил и возможно вас не вышвырнут из бункера',
    image: '/src/assets/images/cardperson/survive.jpg',
    id: 'skills',
  },
  {
    name: 'Багаж - 30 карт',
    description: 'У игрока может быть что-то полезное в багаже',
    image: '/src/assets/images/cardperson/tools.jpg',
    id: 'bagage',
  },
  {
    name: 'Человеческие качества - 30 карт',
    description: 'Персонаж с высокими моральными ценностями более предпочтителен в бункере',
    image: '/src/assets/images/cardperson/mask.jpg',
    id: 'quality',
  },
];
const activeId = ref(null);
const goToAcnhor = (btn) => {
  location.href = `#${btn.id}`;
  const tId2 = setTimeout(() => {
    activeId.value = btn.id;
    clearTimeout(tId2);
  }, 800);
  const tId = setTimeout(() => {
    activeId.value = null;
    clearTimeout(tId);
  }, 2000);
};
</script>

<template>
  <section class="game-rules">
    <div class="game-rules__bg">
      <img src="../assets/images/gamerule-bg.jpg" alt="Правила игры">
    </div>
    <div class="game-rules__wrap">
      <div class="container">
        <div class="game-rules__intro">
          <p>“Бункер” - это дискуссионная карточная игра с постапалиптическим сюжетом.</p>
          <h4 class="base-title-h4">Сюжет:</h4>
          <p>
            На земле произошла катастрофа. Часть людей находится возле спасительного бункера, и каждый мечтает попасть в него и выжить. Но количество спасительных мест ограничено. В бункер попадет только половина, остальные оснутся в лесу. Каждый круг проходит госование, по которому участники решают, кто из людей попадает в бункер. Финалисты будут возрождать быт и население Земли. Игроки должны выбрать самых полезных людей для восстановления жизни на постапокалиптической планете. Именно они попадут в бункер. У каждого персонажа есть набор характеристик:
          </p>
          <div class="game-rules__intro-anchors">
            <base-button
              v-for="btn in buttonsAnchors"
              :key="btn.id"
              @click="goToAcnhor(btn)"
              variant="primary_dark">{{ btn.name }}</base-button>
          </div>
          <p>По ним участники оценивают персонажа, насколько он будет полезен после выхода из бункера. Оружие и насилия нет, только дискуссия и обоснование соей важности и необходимости.</p>
        </div>
        <icon-line />
        <div class="game-rules__offer">
          <h2 class="base-title">Правила игры</h2>
          <base-button>
            <icon-info-circle color="#fff" />
            Участники от 6-16 человек
          </base-button>
        </div>
        <icon-line />
        <div class="game-rules__main-categories">
          <h2 class="base-title-h4">Игровые карты разбиты на категории</h2>
          <div class="row gy-4">
            <div class="col-md-6">
              <div class="game-rules__category-card">
                <div class="game-rules__category-card__image">
                  <img src="../assets/images/desaster.jpg" alt="desaster">
                </div>
                <div class="game-rules__category-card__content">
                  <h5>Карта катастроф - 7 карт</h5>
                  <p>Выбор катастрофы для игры. Каждая катастрофа носит определенные характеристики климата и оставшегося населения</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="game-rules__category-card">
                <div class="game-rules__category-card__image">
                  <img src="../assets/images/bunker.jpg" alt="bunker">
                </div>
                <div class="game-rules__category-card__content">
                  <h5>Описание бункера - 30 карт</h5>
                  <p>Описание карты бункера, отображает в какой местности находится, кол-во мест, на сколько старый бункер, требуется ли его обслуживание.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="game-rules__main-categories">
          <h2 class="base-title-h4">Карты персонажа</h2>
          <div class="row gy-4">
            <div class="col-md-6" v-for="card in personCards" :key="card.id" :id="card.id">
              <div class="game-rules__category-card game-rules__category-card_sm" :class="{'highlight': activeId === card.id}">
                <div class="game-rules__category-card__image">
                  <img :src="card.image" :alt="card.name">
                </div>
                <div class="game-rules__category-card__content">
                  <h5>{{ card.name }}</h5>
                  <p>{{ card.description }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="game-rules__category-card game-rules__category-card_sm">
                <div class="game-rules__category-card__image"></div>
                <div class="game-rules__category-card__content">
                  <h5></h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <icon-line />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.game-rules {
  &__wrap {
    padding: 60px 0px 120px 0px;
    border-radius: 120px;
    background-color: #000F1A;
    margin-top: -120px;
    position: relative;
    z-index: 2;
  }
  &__intro {
    display: flex;
    gap: 24px;
    flex-direction: column;
    color: #FFF;
    margin-bottom: 60px;
    &-anchors {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    & p:nth-child(1) {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__bg {
    height: 488px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }
  &__offer {
    margin: 60px 0px 60px 0px;
    position: relative;
    background: url("../assets/images/gamerule-card-bg.jpg") no-repeat center 50% / cover;
    z-index: 1;
    padding: 42px;
    border-radius: 42px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
    & > * {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 42px;
    }
  }
}
.game-rules__main-categories {
  margin: 60px 0px 42px;
  & .base-title-h4 {
    margin-bottom: 24px;
  }
}
.highlight {
  transition: all .5s ease;
  transform: scale(1.03);
  box-shadow: 0 0 15px rgb(234 234 234 / 23%);
}
.game-rules__category-card {
  transition: all .5s ease;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 42px;
  border-radius: 12px;
  height: 100%;
  background: linear-gradient(315deg, rgba(51, 71, 86, 0.10) 0%, rgba(210, 210, 210, 0.10) 100%);
  &_sm {
    & .game-rules__category-card__image {
      flex-shrink: 0;
      & img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
      }
    }
  }
  &__image {
    flex-shrink: 0;
    & img {
      width: 211px;
      height: 211px;
      border-radius: 100%;
    }
  }
  &__content {
    color: #fff;
    & h5 {
      color: #FFF;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 24px;
    }
    & p {
      color: #FFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
