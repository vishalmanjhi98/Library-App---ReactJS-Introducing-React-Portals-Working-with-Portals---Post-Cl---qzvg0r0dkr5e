import React from 'react'
import { Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

export default withRouter(function LoginPage(props) {
    const userName = props.userName
    const setUserName = props.setUserName

    return (
        <div style={userName !== "" ? { display: "none" } : {}}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Enter your name</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setUserName(e.target.value)
                           
                        }
                    }}></input>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
})
