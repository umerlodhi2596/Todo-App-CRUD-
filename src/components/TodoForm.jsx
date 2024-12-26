import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/features/userSlice'
import { ToastContainer, toast } from 'react-toastify';

function TodoForm() {

    const dispatch = useDispatch();

    const notify = () => toast.success("User Created Successfully");

    const notifyWarning = () => toast.warning("Fields is required");

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        id: Date.now(),
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.fullName && input.email !== '') {
            dispatch(addTask(input));
            notify()
        } else {
            notifyWarning();
        }

        setInput({
            fullName: '',
            email: ''
        })
    }


    return (
        <>

            <div className="container pt-5">
                <div className="redirect-btn pb-4">
                    <Link to={'/users'} className='btn btn-success'>All Users</Link>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-10">
                        <form action="#" onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <input type="text" onChange={(e) => setInput({ ...input, fullName: e.target.value })} value={input.fullName} placeholder='Username' className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <input type="text" onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} placeholder='Email' className='form-control' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Create User</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default TodoForm
