import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // 상태 변화 코드 (카운트를 1 증가함)
    setCount(count + 1);
  };

  const onDecrease = () => {
    // 상태 변화 코드 (카운트를 1감소함)
    setCount(count - 1);
  };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
      </div>
    </div>
  );
}
export default TestComp;
