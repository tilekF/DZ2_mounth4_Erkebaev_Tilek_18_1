function Title(props) {
    console.log(props)


    return (
        <>
            <p>title: {props.userinfo.title}</p>
            <p>subtitle:{props.userinfo.subtitle} </p>
        </>
    );
}

export default Title;