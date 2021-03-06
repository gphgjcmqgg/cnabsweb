import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/users', component: '../pages/users/index' },
        { path: '/login', component: '../pages/login/index' },
        { path: '/users/list', component: '../pages/users/list' }

      ]
    }
  ],
  proxy: {
    "/api": {
      "target": "http://10.1.1.221:10000/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-dva',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
