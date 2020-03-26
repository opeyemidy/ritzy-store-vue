import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { title: 'Fashion', link: 'fddff' },
      { title: 'Computing', link: 'dffwe' },
      { title: 'Phones & tablets', link: 'fffdfdf' },
      { title: 'Grocery', link: 'fffdfdf' },
      { title: 'Health & Beauty', link: 'dfdfdff' }
    ],
    products: [
      {
        id: 1,
        name: 'Elegant Designer Athletic Sneakers V2- Gold & Black',
        pics: '/shoe.jpg',
        images: [
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/486062/1.jpg?7638'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/486062/2.jpg?7638'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/486062/3.jpg?7638'
          }
        ],
        price: 2500,
        description: 'rrrewe',
        route: '/product'
      },
      {
        id: 2,
        name: 'God Over Everything Print T-Shirt - Navy Blue',
        pics: '/shirt.jpg',
        images: [
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/08/26775/1.jpg?3486'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/08/26775/2.jpg?5417'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/08/26775/3.jpg?5000'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/08/26775/4.jpg?5905'
          }
        ],
        price: 5000,
        description: 'were',
        route: '/product'
      },
      {
        id: 3,
        name: 'HS121L (93-Litre) Single Door Fridge - Silver',
        pics: '/fridge.jpg',
        price: 10000,
        images: [
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/63/863164/1.jpg?7722'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/63/863164/2.jpg?7722'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/63/863164/3.jpg?7722'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/63/863164/4.jpg?7722'
          }
        ],
        description: 'qwqw',
        route: '/product'
      },
      {
        name: 'LED Backlight Sport Waterproof Quartz Wrist Watches-Black',
        pics: '/watch.jpg',
        price: 15000,
        images: [
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/1.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/2.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/3.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/4.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/5.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/6.jpg?4437'
          },
          {
            name:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/783761/7.jpg?4437'
          }
        ],
        description: 'ttr',
        route: '/product'
      }
    ],
    selectedProduct: null
  },
  mutations: {
    setSelectedProductValue(state, product) {
      state.selectedProduct = product
    }
  },
  actions: {},
  modules: {}
})
