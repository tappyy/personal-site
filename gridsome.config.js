module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  siteName: "Andy Pottage",
  plugins: [
    // {
    //   // add blog posts collection
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: "blog/**/*.md",
    //     typeName: "Post",
    //     route: 'post/:slug',
    //     refs: {
    //       // Auto create a collection for all categories
    //       category: {
    //         typeName: 'Category',
    //         route: 'category/:slug',
    //         create: true
    //       }
    //     }
    //   }
    // },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-43666868-2",
      },
    },
  ],
  // transformers: {
  //   remark: {
  //     plugins: [
  //       '@gridsome/remark-prismjs'
  //     ]
  //   }
  // }
};
