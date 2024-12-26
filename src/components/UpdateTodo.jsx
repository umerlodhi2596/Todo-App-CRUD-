import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../redux/features/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UpdateTodo() {
    const notify = () => toast.success("User Update Successfully");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const users = useSelector(state => state.users);
    const currUser = users.find((users) => users.id == id);

    const [updateName, setUpdateName] = useState(currUser ? currUser.fullName : '');
    const [updateEmail, setUpdateEmail] = useState(currUser ? currUser.email : '');


    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTask({
            id,
            updateName,
            updateEmail,
        }))
        notify();
        setTimeout(() => {
            navigate('/users');
        }, 3000)
    }


    return (
        <>
            <div className="container pt-5">
                <div className="redirect-btn pb-4">
                    <Link to={'/users'} className='btn btn-success'>All Users</Link>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-10">
                        <form action="#" onSubmit={handleUpdate}>
                            <div className='mb-3'>
                                <input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} placeholder='Username' className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <input type="text" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} placeholder='Email' className='form-control' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Update User</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
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

export default UpdateTodo
