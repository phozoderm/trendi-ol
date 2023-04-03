import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

export function ToastComponent(props){
    return(
        <ToastContainer position="bottom-end" containerPosition="fixed">
            <Toast
                onClose={props.onClose}
                show={props.showToast}
                delay={3000}
                autohide
                bg="danger">
                <Toast.Header>
                    <strong className="me-auto">Trendi-ol</strong>
                </Toast.Header>
                <Toast.Body>{props.toastMessage}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
