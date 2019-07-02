<template>
  <article class="blog-card">
    <p class="blog-card__category">{{category}}</p>
    <div class="blog-card__meta">
      <h4 class="blog-card__title">{{title}}</h4>
      <p v-if="date" class="blog-card__date">{{date}}</p>
    </div>
    <p class="blog-card__excerpt">{{excerpt}}</p>
    <g-link class="blog-card__link" :to="`post/${slug}`">Read More</g-link>
  </article>
</template>

<style scoped lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.blog-card__meta {
  display: flex;
  justify-content: space-between;
  .blog-card__title {
    margin-top: 0;
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 0;
    font-family: "Roboto Slab", serif;
  }
  .blog-card__date {
    font-size: 0.75rem;
    color: #c1c1c1;
    margin: 0;
    align-self: last baseline;
  }
}
.blog-card__category {
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  color: #ff852c;
  margin: 0;
  font-size: 0.75rem;
}
.blog-card__link {
  border: none;
  background-color: #22d0fa;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 3px;
  margin-top: auto;
  align-self: flex-end;
  text-decoration: none;
}
</style>

<script>
export default {
  props: {
    title: String,
    excerpt: String,
    slug: String,
    category: String,
    date: String
  }
};
</script>

