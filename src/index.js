import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'antd/dist/antd.css';
import State from './State';
import { observer } from "mobx-react";

const App = observer(class app extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  componentDidMount() {
    State.WishList.add({ name: 'lista_2.1', price: 1 })
    State.WishList.add({ name: 'lista_2.2', price: 2 })
    State.WishList.add({ name: 'lista_2.3', price: 3, image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s3d8a2bc7536f18c5/image/i79df4c739d868452/version/1482865057/image.png' })
    State.WishList.items[0].set({ price: 142937440 })
    State.WishList.items.map(item => { console.log(`Nombre: ${item.name}, precio $${item.price}`) })
  }

  render() {

    return <div><Hello totalPrice={State.WishList.TotalPrice} />{State.WishList.items.map(item => (<div key={item.name}><p >Nombre: {item.name}</p><p >Price: ${item.price}</p><img style={{ width: 20 }} src={item.image}></img><hr /></div>))}</div>
  }
})

render(<App />, document.getElementById('root'));
