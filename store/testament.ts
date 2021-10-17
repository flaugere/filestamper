class DataStore {
    hash: null|String
    constructor() {
        this.hash = null;
    }
}
export const state = () => (new DataStore());

export const mutations = {
    setHash(state: DataStore, hash: string) {
        state.hash = hash;
    }
}
