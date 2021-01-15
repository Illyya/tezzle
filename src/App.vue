<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главня</router-link> |
      <router-link to="/about">История</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => (this.$store.state.posts = json));
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.title-2 {
  font-size: 2rem;
  text-align: center;
}

.title-3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

#app {
  padding: 1rem 1.5rem;
}

#nav {
  text-align: center;
  margin-bottom: 20px;
}

.post {
  position: relative;
  max-width: 90%;
  margin-bottom: 2rem;

  &__id {
    margin-right: 2rem;
  }

  &__favorites {
    position: absolute;
    top: 50%;
    right: -8%;
    font-size: 2rem;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.2s ease-out;

    &_add:hover {
      color: rgb(53, 241, 84);
    }

    &_remove:hover {
      color: rgb(238, 15, 26);
    }
  }
}
</style>
