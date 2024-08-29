import { Button } from "antd";
import ReactDOM from "react-dom";

function CounterWarning({close}) {
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }
    const handleClose = () => {
        close()
    }
    const counterWarning = <div style={overlayStyle}>
        <div style={{
            backgroundColor: "white", display: "flex", justifyContent: 'center',
            alignItems: 'center', padding: "24px", flexDirection: "column"
        }}>
            <h1>Dont increment further there might be error</h1>
            <Button type="primary" danger onClick={handleClose}>Ok</Button>
        </div>
    </div>;
    return ReactDOM.createPortal(counterWarning, document.getElementById('portal-div'));
}
export default CounterWarning;