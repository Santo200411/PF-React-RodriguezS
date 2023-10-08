import './checkoutForm.css'
import { useState } from 'react'

const CheckouForm = ({onConfirm}) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    

    return (
        <div className='formParent'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Name
                    <input 
                    type="text"
                    className='infoInput'
                    value={name}
                    onChange={({target}) => setName(target.value)} />

                </label>

                <label className='Label'>
                    Phone
                    <input 
                    type="text"
                    className='infoInput'
                    value={phone}
                    onChange={({target}) => setPhone(target.value)} />

                </label>

                <label className='Label'>
                    Email
                    <input 
                    type="email"
                    className='infoInput'
                    value={email}
                    onChange={({target}) => setEmail(target.value)} />

                </label>

                <div className="submitDiv">
                    <button type='submit' className="submit">Create Order</button>
                </div>
            </form>
              
        </div>
    )
}


export default CheckouForm