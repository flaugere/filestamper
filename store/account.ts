export const state = () => ({
    address: null
})

export const mutations = {
    set(state, address: string) {
        state.address = address;
    }
}