/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export default{
    /* 
        [STORE] State => https://bit.ly/3ua8avj
        Define store private states
    */
        state: {
            fetchresponse: undefined,
        },
    //

    /* 
        [STORE] Getters => https://bit.ly/3ua8avj
        Define methods to export state value
    */
        getters: {
            fetchresponse: (state) => state.fetchresponse,
        },
    //

    /* 
        [STORE] Muttation => https://bit.ly/3ua8avj
        Define setters to update state value
    */
        mutations: {
            FETCHRESPONSE( state, payload ){ state.fetchresponse = payload.data },
        },
    //

    /* 
        [STORE] Actions => https://bit.ly/3ua8avj
        Define dispatchers to call state mutations
    */
        actions: {
            getOperator( { dispatch, commit, state }, data ){
                console.log('getOperator', `http://localhost:9449/${data.query}`)
                fetch( `http://localhost:9449/${data.query}`, {
                    method: 'GET'
                })
                .then( apiResponse => {
                    if( apiResponse.ok ){ return apiResponse.json() }
                    else{ throw apiResponse } 
                })
                .then( jsonResponse => {
                    // Check jsonResponse
                    if( jsonResponse[0] ){
                        // Update 'fetchresponse' state
                        commit( 'FETCHRESPONSE', { data: {
                            ok: true,
                            from: 'getOperator',
                            data: jsonResponse[0]
                        }})

                        // Dispatch 'ui' module action
                        dispatch('setUiSate', { 
                            mutation: 'USERINFOS',
                            value: jsonResponse[0],
                        });

                        // Save user infos in LocalStorage
                        window.localStorage.setItem('userinfos', JSON.stringify(jsonResponse[0]) );
                    }
                })
                .catch( apiError => {
                    console.log('apiError', apiError)
                });
            }
        }
    //
}