import { observable } from "mobx";
import { persist } from "mobx-persist";

class UserStore {
  @persist
  @observable
  authToken = "guesttoken";

  @observable username = "";
  @persist('object')
  @observable details = {};
}

export default UserStore;