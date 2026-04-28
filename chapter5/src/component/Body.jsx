import { useRef, useState } from "react"; 
import "./Body.css"; 

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);    // 리렌더링 ~~
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
        }else{
            alert(text);
            setText("");
        }
    };
    return (
        <div className="body">
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}

export default Body;

