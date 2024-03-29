import monitor from './assets/monitor.jpg'
import mouse from './assets/mouse.jpg'
import store from "@/store";

export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    getProducts: () => { return store.state.products }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    getProducts: () =>  { return store.state.products }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    getProducts: () =>  { return store.state.products }
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: monitor,
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 2,
    photo: mouse,
    title: 'Product 1',
    type: 'Mouse',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: mouse,
    title: 'Product 1',
    type: 'Mouse',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 3,
    date: '2017-06-29 12:09:33'
  }
]
