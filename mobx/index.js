import {action, observable} from "mobx";

class RootStore {
    @observable
    name="紫苑"

    @action
    changeName(name) {
        this.name=name
    }
}

export default new RootStore();