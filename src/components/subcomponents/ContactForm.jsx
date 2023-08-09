import { Link } from "react-router-dom"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8dmshk', 'template_pojq8ao', form.current, 'ndJQ_h_5ky4hUoY7h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    toast.success("Dziękujemy za przesłanie wiadomości, wkrótce się skontaktujemy", {toastId: 'main'});


    setName('')
    setSurname('')
    setEmail('')
    setPhone('')
    setText('')

  };

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeSurname = (e) => {
    setSurname(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  return (

    <form className="shadow-2xl bg-base-100 rounded-sm p-4" ref={form} onSubmit={sendEmail}>
      
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="w-full">
                <label className="label font-bold">
                  <span className="label-text text-xl font-hussar">Imie</span>
                </label>
                <input type="text" placeholder="Imie" className="input input-bordered w-full" name='imie' onChange={handleChangeName} value={name}/>
              </div>

              <div className="w-full">
                <label className="label font-bold">
                  <span className="label-text text-xl font-hussar">Nazwisko</span>
                </label>
                <input type="text" placeholder="Nazwisko" className="input input-bordered w-full" name='nazwisko' onChange={handleChangeSurname} value={surname}/>
              </div>

            </div>

            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text text-xl font-hussar">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" name='email' required onChange={handleChangeEmail} value={email}/>
            </div>

            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text text-xl font-hussar">Numer Telefonu</span>
              </label>
              <input type="number" placeholder="Numer Telefonu" className="input input-bordered" name='telefon' onChange={handleChangePhone} value={phone}/>
            </div>

            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text text-xl font-hussar">Czego potrzebujesz?</span>
              </label>
              <textarea type="text" placeholder="Napisz nam czego potrzebujesz a my odezwiemy się do ciebie" className="input input-bordered h-32 p-2" name="wiadomosc" onChange={handleChangeText} value={text}/>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-lg">Wyślij Wiadomość</button>
            </div>
          <p className="opacity-70">Klikając przycisk automatycznie akceptujesz naszą <Link to='/politykaprywatnosci' className="underline hover:opacity-50">politykę prywatności</Link></p>
          </div>

          <ToastContainer 
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
          />
        </form>

  )
}

export default ContactForm
