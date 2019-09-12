export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
      }
    ]
  ],
  routes: [
    {
      path: "/",
      component: "../layout/",
      routes: [
        {
          path: "/",
          component: "./HelloWorld"
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: '/hello',
          component: './hello'
        },
        {
          path: '/dashboard',
          routes: [
            {path: '/dashboard/analysis', component:'Dashboard/Analysis'},
            {path: '/dashboard/monitor', component:'Dashboard/Monitor'},
            {path: '/dashboard/workplace', component:'Dashboard/Workplace'},
          ]
        },
        {
          path: '/cache',
          routes: [
            {path: '/cache/LocalStorage', component:'cache/LocalStorage'},
            {path: '/cache/SessionStorage', component:'cache/SessionStorage'},
            {path: '/cache/RequestStorage', component:'cache/RequestStorage'},
          ]
        },
        {
          path: '/life',
          routes: [
            {path: '/life/index', component:'Lifecircle/index'},
          ]
        },
        {
          path: '/getpost',
          routes: [
            {path: '/getpost', component:'GetPost/v2ex.js'},
          ]
        },
        {
          path: '/list',
          routes: [
            {path: '/list', component: 'list/index'},
            {path: '/list/form', component: 'list/form'},
          ]
        },
        {
          path: '/tree',
          component: 'tree',
        }

      ]
    },
  ],
  // proxy: {
  //   '/dev': {
  //     // target: 'http://jsonplaceholder.typicode.com/',
  //     target: 'https://www.v2ex.com/api/topics/',
  //     changeOrigin: true,
  //     pathRewrite: {"^/dev": ""}
  //   },
  // },
};
