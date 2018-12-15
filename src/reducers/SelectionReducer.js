

export default ( state = null,actions )=>{
console.log('--------->Inside SelectedReducer<----------',state,actions)
switch (actions.type){
    case "select_item":
    return actions.payload;

    default:
    return state;
}
};