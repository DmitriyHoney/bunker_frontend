<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { reactive, ref } from 'vue';

const form = reactive({ link: 'https://bunker-online.com/game?game=etifBeG' });


const players = [
  {
    id: 1,
    name: 'Дмитрий',
  },
  {
    id: 2,
    name: 'Максим',
  },
  {
    id: 3,
    name: 'Сергей',
  },
  {
    id: 4,
    name: 'Сергей',
  },
  {
    id: 5,
    name: 'Дмитрий',
  },
  {
    id: 6,
    name: 'Максим',
  },
  {
    id: 7,
    name: 'Сергей',
  },
  {
    id: 8,
    name: 'Сергей',
  },
  {
    id: 9,
    name: 'Дмитрий',
  },
  {
    id: 10,
    name: 'Максим',
  },
  {
    id: 11,
    name: 'Сергей',
  },
  {
    id: 12,
    name: 'Сергей',
  },
  {
    id: 13,
    name: 'Дмитрий',
  },
  {
    id: 14,
    name: 'Максим',
  },
  {
    id: 15,
    name: 'Сергей',
  },
  {
    id: 16,
    name: 'Сергей',
  },
];
const isOwner = ref(true);
const isLoading = ref(false);

const handleClickCopyLink = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  const aux = document.createElement('input');
  aux.setAttribute('value', form.link);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  isLoading.value = false;
};
</script>

<template>
  <section class="start-player-section start-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules" blank>Как играть?</base-button>
      <h2 class="base-title">Пригласить друзей в комнату</h2>
      <form class="start-player-section__form">
        <base-input label="Ссыллка" v-model="form.link" />
        <base-button @click="handleClickCopyLink" variant="primary_outlined" :isLoading="isLoading">Копировать ссылку</base-button>
      </form>
      <p class="start-game-room__info">
        <span>Внимание!</span> Чтобы начать игру нужно минимум 6 человек, максимум 16
      </p>
      <div class="player-list-wrap">
        <h3 class="player-list-wrap__title">Игроки</h3>
        <div class="player-list">
          <div class="player-list__item" v-for="player in players" :key="player.id">
            <div class="player-list__item-avatar">
              <img src="../assets/images/user-avatar.svg" alt="user-avatar">
            </div>
            <div class="player-list__item-info">
              {{ player.name }}
            </div>
          </div>
        </div>
      </div>
      <base-button v-if="isOwner" class="center">Начать игру</base-button>
      <p v-else class="info-tag center">
        <img src="../assets/images/info-circle.svg" alt="info-circle">
        Ждите пока создатель игры запустит её
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.start-game-room {
  background-image: url('../assets/images/startgameroom-bg.jpg');
  &__info {
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
    & span {
      color: #FF4C29;
    }
  }
}

.player-list-wrap {
  margin-top: 72px;
  margin-bottom: 32px;
  &__title {
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 32px;
  }
}


.player-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 900px;
  margin: 0px auto;
  &__item {
    width: calc(25% - 18px);
    display: flex;
    border-radius: 8px;
    border: 1px solid #FFF;
    &-info {
      padding: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &-avatar {
      width: 53px;
      border-right: 1px solid #FFF;
      padding: 8px;
      padding-bottom: 0;
      background-color: #FF4C29;
      border-radius: 8px 0px 0px 8px;
      & img {
        position: relative;
        bottom: -7px;
      }
    }
  }
}

.info-tag {
  color: #D2D2D2;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  & img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}
</style>
