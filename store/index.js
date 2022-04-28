/* 
Imports
*/
    // VueX modules
    import { createStore } from "vuex";

    // Store modules
    import crud from './modules/crud';
    import ui from './modules/ui'
//

/* 
Definition and export
*/
    export default createStore({
        // Add store modules
        modules: {
            crud,
            ui,
        }
    });
//