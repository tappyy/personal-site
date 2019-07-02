<template>
  <Layout>
    <article>
      <div class="header-wrapper">
        <p class="category">{{$page.post.category.title}}</p>
        <h1>{{$page.post.title}}</h1>
        <p class="date">{{$page.post.date}}</p>
        <h2 class="excerpt">{{$page.post.description}}</h2>
      </div>
      <div id="post-content" v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "Do MMMM, YYYY")
    content
    category {
      title
    }
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="scss">
.header-wrapper {
  text-align: center;
  .category {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    color: #ff852c;
    margin: 0;
    font-size: 0.75rem;
  }
  h1 {
    margin-top: 0;
    font-weight: 500;
    margin-bottom: 0;
    font-family: "Roboto Slab", serif;
    font-size: 2.4rem;
  }
  .date {
    color: #c1c1c1;
    font-size: 0.75rem;
  }
}
.excerpt {
  font-weight: 300;
  font-family: "Roboto Slab", serif;
  text-align: left;
  margin: 40px 0;
}
#post-content {
  a {
    color: #ff2c96;
    text-decoration: none;
  }
  blockquote {
    font-style: italic;
  }
  hr {
    width: 50%;
    border-radius: 1px;
    border: none;
    height: 2px;
    background-color: #ff2c96;
  }
  pre,
  code {
    font-family: "Roboto Mono", monospace;
    text-shadow: none !important;
    background-color: #eee;
    font-weight: 400;
    font-size: 0.75rem;
  }
  code {
    border-radius: 3px;
    padding: 0 4px;
  }
  pre {
    padding: 10px;
    border-radius: 4px;
  }
  img {
    width: 100%;
    border-radius: 4px;
  }
  li > p {
    margin: 0;
  }
}
</style>