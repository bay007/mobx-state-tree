
import { types as t } from 'mobx-state-tree';

const WishListItem = t.model('WishListItem', {
  name: t.optional(t.string, ''),
  price: t.optional(t.number, 0),
  image: t.optional(t.string, "https://www.diariofemenino.com/uploads/psicologia/188786-sonar-regalos.jpg")
}).actions(self => ({
  set(item) {
    if (item.name) {
      self.name = item.name
    }
    if (item.price) {
      self.price = item.price
    }
    if (item.image) {
      self.image = item.image
    }
  },
}))


const WishList = t.model('WishList', {
  items: t.optional(t.array(WishListItem), [])
}).actions(self => ({
  add(WishListItem) {
    self.items.push(WishListItem)
  }
})).views(self => ({
  get TotalPrice() {
    let totalPrice = 0
    self.items.map(item => {
      totalPrice += item.price
    })
    return totalPrice
  }
}))


const State = {
  WishList: WishList.create()
}
export default State;

