import './checkoutForm.css'

const CheckouForm = ({onConfirm}) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleEventConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                </label>
            </form>
              
        </div>
    )
}