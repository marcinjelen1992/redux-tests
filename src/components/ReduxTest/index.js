import { useDispatch, useSelector } from "react-redux"
import { setInitialTestValue } from "../../redux/testReduxSlice/action"
import { getInitalTestValue } from "../../redux/testReduxSlice/selectors"

export const ReduxTest = () => {

    const dispatch = useDispatch();
    const getReduxInitialTestValue = useSelector((state)=> getInitalTestValue(state))

    return(<div className="container--redux-test">
        <button onClick={() => dispatch(setInitialTestValue())}>Redux Test</button>
        Redux Test State Value: {getReduxInitialTestValue}
    </div>)
}