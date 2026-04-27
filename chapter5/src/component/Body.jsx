import { useState } from "react"; 
import "./Body.css"; 

function Viewer() {
    console.log("viewer component update!");
    return <div>Viewer</div>;
}

function Body() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber (number + 1);
    };
    const onDecrease = () => {
        setNumber (number - 1);
    };
    return (
    <div className="body">
        <h2>{number}</h2>
        <Viewer />
        <div>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    </div>
);
}
export default Body;

