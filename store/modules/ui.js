/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export default{
    /* 
        [STORE] State => https://bit.ly/3ua8avj
        Define store private states
    */
        state: {
            userinfos: JSON.parse(window.localStorage.getItem('userinfos')) || null,
        },
    //

    /* 
        [STORE] Getters => https://bit.ly/3ua8avj
        Define methods to export state value
    */
        getters: {
            userinfos: (state) => state.userinfos
        },
    //

    /* 
        [STORE] Muttation => https://bit.ly/3ua8avj
        Define setters to update state value
    */
        mutations: {
            USERINFOS( state, payload ){ state.userinfos = payload.data; console.log('[DEBUG] Mutation USER', state.userinfos) }
        },
    //

    /* 
        [STORE] Actions => https://bit.ly/3ua8avj
        Define dispatchers to call state mutations
    */
        actions: {
            setUiSate( { dispatch, commit, state }, data ){
                commit( data.mutation, { data: data.value } )
            }
        }
    //
}