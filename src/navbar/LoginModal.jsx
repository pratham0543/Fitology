const LoginModal=()=>{
    return(
        <div className="modal fade" id="ModalForm" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="btn-close btn-close-white close-button" aria-label="Close"><a href="./Navbar.jsx"></a></button>
                    <div className="myform">
                        <h1 className="text-center">Login Form</h1>
                        <form>
                            <div className="mb-3 mt-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label><br />
                                <input type="email" className="myinput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="myinput"/>
                            </div>
                            <button type="submit" className="btn btn-light mt-3" >LOGIN</button>
                            <p className="login_para">Not a member? <a href="#">Signup now</a></p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginModal;