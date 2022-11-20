import User from "../../components/user/User";
import UsersList from "../../components/userList/UsersList";
function UsersPage() {
    const user = {
        name: "Tilek",
        username: "Taalai",
        age:17

    }
    const users = ["Tilek" , "Ali" , "Maha"]

    return (
        <>
            <h1>Info about one user</h1>
            <User userInfo = {user}/>
            <h1>-------------------</h1>
            <h1>Users list</h1>
            <UsersList usersList={users}/>
        </>

    );
}

export default UsersPage;