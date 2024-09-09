import { apiSlice } from "./services/apiSlice";
import { setRedirectPath } from "./services/appSlice";

const apiMiddleware = (store) => (next) => (action) => {
  if (
    action.type === "api/executeQuery/fulfilled" ||
    action.type === "api/executeMutation/fulfilled"
  ) {
    const state = store.getState();
    switch (action?.meta?.arg?.endpointName) {
      case "getPosts":
        console.log(action?.payload);
        // store.dispatch(apiSlice.endpoints.addPost.initiate({ test: "12345" }));
        break;
      case "addPost":
        console.log(action?.meta?.arg?.originalArgs);
        console.log(action?.payload);
        // store.dispatch(
        //   apiSlice.util.updateQueryData("getPosts", undefined, (draft) => {
        //     const newData = {
        //       ...state.api.queries["getPosts(undefined)"]?.data,
        //       ...action?.payload,
        //     };
        //     console.log(newData, "new data");
        //     return newData;
        //   })
        // );
        // store.dispatch(setRedirectPath('/login'));
        break;
      default:
        break;
    }
  }

  return next(action);
};

export default apiMiddleware;
