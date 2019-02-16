import { observable } from "mobx";
import { persist } from "mobx-persist";

class UIStore {
  @persist
  @observable
  sometingFetched = false;

  @persist
  @observable
  text = "hello!";

  @observable isSuccess = false;
  @observable successMessage = "Success";

  @observable isError = false;
  @observable errorMessage = "Error";

  @observable
  fetchedFromPersist = false;
}

export default UIStore;