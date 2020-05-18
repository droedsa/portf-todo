import {initialState} from "./initialState/initialState";
import prioritySettings from "./prioritySettings";
import categoriesPanel from "./categoriesPanel";
import bord from "./bord";

const reducer = (state = initialState, action) => {
    return {
        prioritySettings: prioritySettings(state.prioritySettings, action),
        categories: categoriesPanel(state.categories, action),
        bord: bord(state.bord, action)
    }
};

export default reducer;