const AvatarJsx = (params) => {
    const src = `https://randomuser.me/api/portraits/lego/2.jpg`

    return (
        <picture>
            <img src={src} alt='Fran'/>
            Fran
        </picture>
    )
}

export default AvatarJsx
