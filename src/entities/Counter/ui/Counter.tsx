import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCountValue } from '../model/selector/counterSelector';
import { Button } from '@/shared/ui/Button/Button';

export const Counter = () => {
    const count = useSelector(getCountValue);
    const dispatch = useDispatch();

    const increments = () => {
        dispatch(counterActions.increment());
    };

    const decrements = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{count}</h1>

            <Button data-testid="increment-btn" onClick={increments}>increment</Button>

            <Button data-testid="decrement-btn" onClick={decrements}>decrement</Button>
        </div>
    );
};
