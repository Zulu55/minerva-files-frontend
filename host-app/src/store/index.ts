import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  CompanySlice,
  activitySlice,
  TypeSlice,
  DepartmentSlice,
  DocumentTypeSlice,
} from "../app_setting/reducers";

const rootReducer = combineReducers({
  Company: CompanySlice,
  Department: DepartmentSlice,
  ActivityState: activitySlice,
  RequestType: TypeSlice,
  DocumentType: DocumentTypeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
