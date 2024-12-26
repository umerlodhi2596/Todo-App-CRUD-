import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.users.push(action.payload);

        },
        removeTask: (state, action) => {
            const filterUsers = state.users.filter((user) => user.id !== action.payload);
            state.users = filterUsers;
        },
        updateTask: (state, action) => {
            const { id, updateName, updateEmail } = action.payload;
            const currentUser = state.users.find(user => user.id == id);
            currentUser.fullName = updateName;
            currentUser.email = updateEmail;
        }
    }
})

export const { addTask, removeTask, updateTask } = userSlice.actions;
export default userSlice.reducer;