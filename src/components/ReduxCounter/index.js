import { useDispatch, useSelector } from "react-redux"
import { setInitialTestValue } from "../../redux/testReduxSlice/action"
import { getInitalTestValue } from "../../redux/testReduxSlice/selectors"
import { getInitalCounterValue } from "../../redux/counterReduxSlice/selectors";
import { setIncrement } from "../../redux/counterReduxSlice/action";

export const ReduxCounter = () => {

    const dispatch = useDispatch();

    const getReduxCounterValue = useSelector ((state)=> getInitalCounterValue(state))

    return(<div className="container--redux-test">
        <button onClick={() => dispatch(setIncrement())}>Redux Count</button>
        Redux Counter: {getReduxCounterValue}
    </div>)
}