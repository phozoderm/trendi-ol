export function UserInfoComponent({username, password}) {
    return (
        <>
            <p>Merhaba <u>{username}</u>! sifreniz <span style={{color:"red"}}>{password}</span>. Hosgeldiniz</p>

        </>
    )

}
