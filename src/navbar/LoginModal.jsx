const LoginModal=()=>{
    return(
        <div className="modal fade" id="ModalForm" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                    <div className="myform">
                        <h1 className="text-center">Login Form</h1>
                        <form>
                            <div className="mb-3 mt-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
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