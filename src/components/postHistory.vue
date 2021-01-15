<template>
  <div class="post-history">
    <div class="post-history__added-to-favorites added-to-favorites">
      <h2 class="added-to-favorites__title-2 title-2">
        Добавленно в избранное
      </h2>
      <span class="added-to-favorites__length">
        {{  addedToАFvorites.length > 0 ? addedToАFvorites.length : null  }}</span>
      <ul class="added-to-favorites__list">
        <li
          v-for="(post, index) in addedToАFvorites"
          :key="index"
          class="added-to-favorites__post post"
        >
          <span class="post__id">ID {{ post.id }}</span> 
          <span class="post__date">Дата добавления {{ post.dateAdd }}</span>
          <p>Title &#11015;</p>
          <h3 class="post__title-3 title-3">{{ post.title }}</h3>
        </li>
      </ul>
    </div>
    <div class="post-history__removed-from-favorites removed-from-favorites">
      <h2 class="removed-from-favorites__title-2 title-2">
        Удаленно из избранного
      </h2>
      <span class="removed-from-favorites__length">
        {{  removedFromFavorites.length > 0 ? removedFromFavorites.length : null  }}</span>

      <ul class="removed-from-favorites__list">
        <li
          v-for="(post, index) in removedFromFavorites"
          :key="index"
          class="removed-from-favorites__post post"
        >
          <span class="post__id">ID {{ post.id }}</span>
          <span class="post__date">Дата удаления {{ post.dateRemove }}</span>
          <p>Title &#11015;</p>
          <h3 class="post__title-3 title-3">{{ post.title }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "postHistory",
  computed: {
    addedToАFvorites() {
      return this.$store.state.addedToАFvorites;
    },
    removedFromFavorites() {
      return this.$store.state.removedFromFavorites;
    },
  },
};
</script>

<style scoped lang="scss">

.post-history {
  display: flex;
  border: 1px solid #da63a2;
  border-radius: 10px;

  &__added-to-favorites,
  &__removed-from-favorites {
    flex: 1;
  }

  &__added-to-favorites {
    border-right: 1px solid #da63a2;
  }

  &__length {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(69, 99, 182);
  }

}

.added-to-favorites {
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  &__title-2 {
    margin-bottom: 1rem;
  }

  &__length {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(69, 99, 182);
  }
}

.removed-from-favorites {
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  &__title-2 {
    margin-bottom: 1rem;
  }

  &__length {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(69, 99, 182);
  }
}
</style>