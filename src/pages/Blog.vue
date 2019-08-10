<template>
  <Layout>
    <h1>Blog</h1>
    <BlogCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :title="edge.node.title"
      :excerpt="edge.node.excerpt"
      :category="edge.node.category.title"
      :slug="edge.node.slug"
      :date="edge.node.date"
    />
  </Layout>
</template>

<page-query>
query AllPosts {
  posts: allPost(filter: { published: { eq: true }}) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
       node {
        id
        published
        title
        excerpt
        slug
        date (format: "Do MMMM, YYYY")
        category {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import BlogCard from "../components/BlogCard";

export default {
  components: {
    BlogCard
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin-top: 0;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2.4rem;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  li {
    display: inline-block;
    a {
      font-family: "Roboto Mono", monospace;
      font-weight: 500;
      color: #c1c1c1;
      margin: 0;
      font-size: 0.75rem;
      text-decoration: none;
      &.active {
        color: #ff852c;
      }
    }
  }
}
</style>