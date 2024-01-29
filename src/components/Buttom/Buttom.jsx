import * as A from './styles'

const Buttom = ({ id, title, className }) => {
    return (
        <>
            <button className={className} id={id} href="">{title}</button>
        </>
    )
}

export default Buttom