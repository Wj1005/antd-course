export default {
  singular: true, // 页面存放为page   不写就默认页面存放为pages  
  plugins: [
    ['umi-plugin-react',{

    }],
  ],
  routes: [{
    path: '/',
    component: './helloworld'
  }]
};