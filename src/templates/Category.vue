<template>
  <Layout>
    <h1>{{ $page.category.title }}</h1>
    <ul>
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="`/post/${edge.node.slug}`">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Category($id: String! ) {
  category(id: $id) {
    title
    belongsTo {
      edges {
        node {
           ... on Post{
            id
            title
            excerpt
            slug
          }
        }
      }
    }
  }
}
</page-query>