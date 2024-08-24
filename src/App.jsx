import { useState } from "react";
import banana from "./pngimg.com - banana_PNG835.png";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="app">
                <div className="counter">{count}</div>
                <img
                    src={banana}
                    alt="banana"
                    onClick={() => setCount(count + 1)}
                    className="banana"
                />
                <span className="dbd">
                    developed by&nbsp;
                    <a href="https://djavelin.vercel.app">djavelin</a>
                </span>
            </div>
        </>
    );
};

export default App;
