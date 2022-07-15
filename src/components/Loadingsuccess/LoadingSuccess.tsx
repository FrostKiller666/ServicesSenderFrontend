import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

interface Props {
    message: string;
}

const LoadingSuccess = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <Modal
                show={true}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>{props.message}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Proszę wcisnąć przycisk "Dalej" by kontynuować swoją podróż z usługami Services-Sender ^^"
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => navigate("/",{replace: true})}>
                        Dalej
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export {
    LoadingSuccess,
}
