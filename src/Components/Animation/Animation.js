import { useState, useEffect, useRef } from "react"

const Animation = () => {
    const [background, setBackground] = useState('pink')

    const divRef = useRef(10)

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current

            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'orange' : 'pink'

            setBackground(backgroundColor)

            return () => window.removeEventListener('scroll', handleScroll)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div>
            <div id='scroll' 
                ref={divRef}
                style={{ height: '180vh', background: background}}>
                <h1>Scrollear para cambiar el color de fondo</h1>
            </div>
        </div>
    )
}

export default Animation