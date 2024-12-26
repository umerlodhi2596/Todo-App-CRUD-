import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/features/userSlice';
import { ToastContainer, toast } from 'react-toastify';

function TodoList() {

    const dispatch = useDispatch();
    const notify = () => toast.error("User Deleted Successfully!");
    const users = useSelector(state => state.users);

    const handleDelete = (id) => {
        dispatch(removeTask(id));
        notify();
    }

    return (
        <>
            <div className="container pt-5">
                <div className="redirect-btn mb-4">
                    <Link to={'/'} className="btn btn-success">Create User</Link>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            users.length > 0 ? <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{user.fullName}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Link to={`/update/${user.id}`} className='table-btn success me-2'>Update</Link>
                                                    <Link onClick={() => handleDelete(user.id)} className='table-btn danger'>Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table> :
                                <h5>No User Found...</h5>
                        }
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

export default TodoList
