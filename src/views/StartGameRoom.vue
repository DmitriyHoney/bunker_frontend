<script setup>
// Vue
import { onBeforeUnmount, onMounted, reactive, watch } from 'vue';

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import IconStar from '@/components/icons/IconStar.vue';
import IconUserCheck from '@/components/icons/IconUserCheck.vue';
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue';
import IconUserAvatar from '@/components/icons/IconUserAvatar.vue';

import { useGameStore } from '@/stores/game.js';
import { useRouter } from 'vue-router';
const gameStore = useGameStore();
const router = useRouter();
const state = reactive({
  isLoading: false,
  intIds: [],
});

const methods = {
  async handleClickCopyLink() {
    state.isLoading = true;
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    const aux = document.createElement('input');
    aux.setAttribute('value', gameStore.roomLink);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    state.isLoading = false;
  },
  async handleStartGame() {
    await gameStore.startGameCreateDistributeDeck();
    // router.push({ name: 'game-room' });
  },
};

onMounted(() => {
  const tId = setInterval(gameStore.getCurrentRoomAndDefineCurrentUser, 5000);
  state.intIds.push(tId);
});
onBeforeUnmount(() => state.intIds.forEach((i) => clearInterval(i)));

watch(() => gameStore.game, () => {
  if (gameStore.game) router.push({ name: 'game-room' });
});

</script>

<template>
  <section class="start-player-section start-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules">Как играть?</base-button>
      <h2 class="base-title">Пригласить друзей в комнату</h2>
      <div class="start-player-section__link">
        <div class="start-player-section__content">
          <form class="start-player-section__form">
            <base-input label="Ссыллка" :model-value="gameStore.roomLink" />
            <base-button
              @click="methods.handleClickCopyLink"
              variant="primary_outlined"
              :isLoading="state.isLoading"
              >Копировать ссылку</base-button
            >
          </form>
          <p class="start-game-room__info">
            <span>Внимание!</span> Чтобы начать игру нужно минимум 6 человек, максимум 16
          </p>
        </div>
      </div>
      <div class="player-list-wrap">
        <h4 class="player-list-wrap__title base-title-h4">Игроки</h4>
        <div class="player-list">
          <div class="player-list__item" v-for="player in gameStore.players" :key="player.id">
            <div class="player-list__item-avatar">
              <icon-user-avatar />
            </div>
            <div class="player-list__item-info">
              {{ player.username }}
              <icon-user-check v-if="player.isMy" style="position: relative; top: 2px; margin-left: 2px" />
              <icon-star v-if="player.is_owner" color="#fff" style="position: relative; top: 2px; margin-left: 2px" />
            </div>
          </div>
        </div>
      </div>
      <base-button v-if="gameStore.isOwner" class="center" @click="methods.handleStartGame" :disabled="!gameStore.isGameCanStart">Начать игру</base-button>
      <p v-else class="info-tag center">
        <icon-info-circle />
        Ждите пока создатель игры запустит её
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.start-player-section {
  &__content {
    width: fit-content;
    margin: auto;
  }
  p {
    text-align: left;
  }
}
.start-game-room {
  background-image: url('../assets/images/startgameroom-bg.jpg');
  &__info {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
    & span {
      color: #ff4c29;
    }
  }
}

.player-list-wrap {
  margin-top: 72px;
  margin-bottom: 32px;
  &__title {
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
    border: 1px solid #fff;
    &-info {
      padding: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &-avatar {
      width: 53px;
      border-right: 1px solid #fff;
      padding: 8px;
      padding-bottom: 0;
      background-color: #ff4c29;
      border-radius: 8px 0px 0px 8px;
      position: relative;
      flex-shrink: 0;
      & svg {
        position: absolute;
        bottom: 0px;
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
      }
    }
  }
}

.info-tag {
  color: #d2d2d2;
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
