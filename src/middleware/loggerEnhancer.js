export const loggerEnhancer = store => next => action => {
    console.log(`Type: ${action.type}, Payload: ${action.payload}`);
    console.log(store.getState());
    return next(action);
};