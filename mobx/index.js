import {observable} from "mobx";

class RootStore {
    @observable
    name="紫苑"
}

export default new RootStore();