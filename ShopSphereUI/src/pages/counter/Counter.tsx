import { Button, ButtonGroup, Typography } from "@mui/material";
import { decrement, increment, incrementByAmount,  } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export default function Counter() {
    const count =useAppSelector((state) => state.counter.value) // Accessing the counter value from the Redux store)
    const dispatch = useAppDispatch(); // Getting the dispatch function from the Redux store

    return (
        <>
        <Typography>{count}</Typography>
       <ButtonGroup>
        <Button onClick={()=> dispatch(increment())}>increment</Button>
        <Button onClick={()=> dispatch(decrement())}>decrement</Button>
        <Button onClick={()=> dispatch(incrementByAmount(5))}>incrementByAmount</Button>
        </ButtonGroup>
        </>
    );
}