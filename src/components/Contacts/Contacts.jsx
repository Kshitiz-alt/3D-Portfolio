import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

import './Contacts.css'

const Contacts = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          console.log(error)
          setError(true)
        },
      );
  };
  return (
    <>
      <a className="relative top-[1rem] left-[1rem]" href="#Home">
        <img className="BackHome" src="Right.png" alt="" />
      </a>
      <div className="text-white h-screen flex" >
        <form className="w-1/2 relative top-[5rem] left-[2rem] BackGround" ref={form} onSubmit={sendEmail}>
          <h1 className="text-[2rem] TEXT">Lets keep in touch!</h1>
          <div className="flex flex-col gap-[10px]">
            <label>Name</label>
            <input className="FormItem" name="from_username" type="text" placeholder="ex: john" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>E-Mail</label>
            <input className="FormItem" name="from_user" type="email" placeholder="ex: john@gmail.com" />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <label>Description</label>
            <textarea className="FormItem" name="user_message" rows={10} placeholder="Write your Message here...."></textarea>
          </div>

          <button className="border-[1px] w-[43.5rem] relative top-[1rem] cursor-pointer " type="submit">Send</button>
          {success && <span className="relative top-[1rem]">Your Message has been sent!</span>}
          {error && <span className="">Something went wrong</span>}
        </form>

        <div className="w-1/2">
          <img className="w-[80%] relative top-[7rem] left-[7rem] IMG" src="Dev.png" alt="" />

        </div>



      </div>
    </>
  )
}

export default Contacts
