import { useState } from 'react';
import emailjs from 'emailjs-com';
import NavigationBar from '../components/NavigationBar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const company = formData.get('company');
    const email = formData.get('email');
    const message = formData.get('message');
   

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_SUBMISSION?.toString(), {
      company,
      first_name: `${formData.get('first-name')}`,
      last_name: ` ${formData.get('last-name')}`,
      from_email: email,
      message,
      subject: `New query from ${company}`
    }, process.env.REACT_APP_PUBLIC_KEY?.toString())
      .then((result) => {

        emailjs.send(process.env.REACT_APP_SERVICE_ID?.toString(), process.env.REACT_APP_TEMPLATE_ID_AUTO_REPLY?.toString(), {
          from_email: email,
          subject: `Thankyou for reaching out to Enactus VJTI.`
        }, process.env.REACT_APP_PUBLIC_KEY?.toString()).then((result)=>{
          alert('Message sent successfully!');
        },(error)=>{
          console.log("Error sending reply: ",error.text);
        })



        
       
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <div className="isolate bg-yellow-700 px-6 py-24 sm:py-32 lg:px-8">
      <div style={{ marginTop: "-7.5rem", marginBottom: '10vh' }}><NavigationBar /></div>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FFDD00] to-[#FFD700] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 style={{ marginTop: '-5vh' }} className="text-3xl font-bold tracking-wide text-white sm:text-4xl">Get in Touch with Us</h2>
        <p style={{ marginBottom: "-10vh" }} className="mt-2 text-lg leading-8 text-white">
          Whether you have questions, feedback, or just want to say hello, we're here to listen. Fill out the form below or reach out through our contact details, and we'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div className="flex flex-row items-center justify-center space-x-6">
            <div>
              <label htmlFor="first-name" className="block text-lg font-normal leading-6 text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-lg sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-lg font-normal leading-6 text-white">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-lg sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center space-x-6">
            <div>
              <label htmlFor="company" className="block text-lg font-normal leading-6 text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-lg sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-normal leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-lg sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-center'>
            <label htmlFor="message" className="block text-lg font-normal leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5 w-full">
              <textarea
                name="message"
                id="message"
                rows={12}
                className="h-20 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-lg sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="privacy-policy"
            id="privacy-policy"
            className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600"
            required
          />
          <label htmlFor="privacy-policy" className="ml-2 block text-lg text-white">
            By selecting this, you agree to our{' '}
            <a href="#" className="font-normal text-yellow-100">
              privacy policy
            </a>
            .
          </label>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-900 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
