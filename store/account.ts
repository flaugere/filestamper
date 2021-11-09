class DataStore {
    address: null|String
    constructor() {
        this.address = null;
    }
}
export const state = () => (new DataStore());

export const mutations = {
    setAddress(state: DataStore, address: string) {
        state.address = address;
    },
}
