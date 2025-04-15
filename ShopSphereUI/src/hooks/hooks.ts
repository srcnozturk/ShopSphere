import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch= useDispatch.withTypes<AppDispatch>(); // Custom hook to use the dispatch function with TypeScript support
export const useAppSelector = useSelector.withTypes<RootState>(); // Custom hook to use the selector function with TypeScript support