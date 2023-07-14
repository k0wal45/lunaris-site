import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Newsletter() {
  const [text, setText] = useState('')
  const form = useRef();

  const sendNews = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8dmshk', 'template_ijs64mk', form.current, 'ndJQ_h_5ky4hUoY7h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      toast("Dziękujemy za przesłanie wiadomości, wkrótce się skontaktujemy", {toastId: 'news'});

      setText('')
  };

  const handleChange = (e) => {
    setText(e.target.value)
  }


  return (
    <section>
			<span class="footer-title">Newsletter</span> 
			<form class="form-control w-80" ref={form} onSubmit={sendNews}>
				<label class="label">
					<span class="label-text">Wpisz swój Email aby otrzymywać najnowsze informacje</span>
				</label> 
				<div class="relative">
					<input type="text" placeholder="Wpisz swój Email tutaj" class="input input-bordered w-full pr-16" name='email' onChange={handleChange} value={text} required/> 
					<button type='submit' class="btn btn-primary absolute top-0 right-0 rounded-l-none">Zapisz się</button>
				</div>
			</form>
			<p className="opacity-70">Wpisując email akceptujesz naszą <Link to='/politykaprywatnosci' className="underline hover:opacity-50">polityke prywatności</Link></p>
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
      theme="light"
      limit={1}
    />
		</section>
  )
}

export default Newsletter
