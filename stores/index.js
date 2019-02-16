import { create } from "mobx-persist";
import clientPersist from "client-persist";
import UIStore from "./ui";
import UserStore from "./user";

class Store {
  constructor() {
    this.ui = new UIStore(this);
    this.user = new UserStore(this);
  }
}

const store = new Store();
export default store;

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

const hydrate = create({
  storage: clientPersist
});

const p1 = hydrate("authToken", store.user);
const p2 = hydrate("details", store.user);

Promise.all([p1, p2]).then(() => {
  console.log("Hydration complete");
  store.ui.fetchedFromPersist = true;
});