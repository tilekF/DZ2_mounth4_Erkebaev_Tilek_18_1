import Title from "./title/title";


function User(props) {
    console.log(props)


    const text = {
        title: "hello",
        subtitle: "lorem lorem lorem"
    }

    return (
        <>
            <h1>Title and SubTitle</h1>
            <Title userinfo = {text}/>



        </>
    );
}

export default User;