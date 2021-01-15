<template>
  <div class="posts">
    <div class="posts__list-of-posts list-of-posts">
      <h2 class="list-of-posts__title-2 title-2">Посты</h2>
      <span class="posts__length">
        {{  filteredList.length > 0 ? filteredList.length : null  }}
      </span>
      <input 
        v-model="enteredData" 
        class="list-of-posts__input" 
        type="text" 
      />
      <ul class="list-of-posts__list">
        <li
          class="list-of-posts__post post"
          v-for="(post, index) in filteredList"
          :key="index"
        >
          <h3 class="post__title-3 title-3">{{ post.title }}</h3>
          <p class="post__text">{{ post.body }}</p>
          <span
            @click="toFavorites(post, index)"
            class="post__favorites post__favorites_add"
          >
            &#10010;
          </span>
        </li>
      </ul>
    </div>
    <div class="posts__featured-posts featured-posts">
      <h2 class="featured-posts__title-2 title-2">Избранное</h2>
      <span class="posts__length">
        {{  featuredPostList.length > 0 ? featuredPostList.length : null  }}
      </span>
      <ul>
        <li
          class="featured-posts__post post"
          v-for="(post, index) in featuredPostList"
          :key="index"
        >
          <h3 class="post__title-3 title-3">{{ post.title }}</h3>
          <p class="post__text">{{ post.body }}</p>
          <span
            @click="fromFavorites(post, index)"
            class="post__favorites post__favorites_remove"
          >
            &ndash;
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      enteredData: "",
      featuredPostList: this.$store.state.featuredPostList,
    };
  },
  methods: {
    toFavorites(post, index) {
      this.featuredPostList.push(post);
      this.filteredList.splice(index, 1);
      const dateNow = new Date();
      post.dateAdd = `
        ${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.  getMinutes()}:${dateNow.getSeconds()}
        `;
      this.$store.state.addedToАFvorites.push(post);
    },
    fromFavorites(post, index) {
      this.filteredList.push(post);
      this.featuredPostList.splice(index, 1);
      const dateNow = new Date();
      post.dateRemove = `
        ${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}
        `;
      this.$store.state.removedFromFavorites.push(post);
    },
  },
  computed: {
    filteredList() {
      if (this.enteredData.length > 0) {
        return this.$store.state.posts.filter((el) =>
          el.title.includes(this.enteredData));
      } else {
        return this.$store.state.posts;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.posts {
  display: flex;
  border: 1px solid #da63a2;
  border-radius: 10px;

  &__list-of-posts,
  &__featured-posts {
    flex: 1;
  }

  &__list-of-posts {
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

.list-of-posts {
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  &__title-2 {
    margin-bottom: 1rem;
  }

  &__input {
    padding: 0.5rem 1rem;
    border: 1px solid #da63a2;
    border-radius: 5px;
    margin-bottom: 1rem;
    transition: .2s ease-out;

    &:hover {
      box-shadow: 0 0 2px #2e2e2e;
    }
  }
}

.featured-posts {
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  &__title-2 {
    margin-bottom: 1rem;
  }
}
</style>
