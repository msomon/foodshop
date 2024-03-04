
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit ,reset } = useForm();

  const sendEmail = async (e) => {
  
    e.preventDefault();
    emailjs.sendForm('service_z9i9y89', 'template_lijh3s7', e.target, 'VjdqwJv2RVXPZNrYM')
    .then((result) => {
     
      toast.success('Email Send Succesfully')
      reset()
      
    }, (error) => {
        
    });
    

  }
  return (
    <div id='contuctme' className="hero bg-base-200 mt-20 ">
    <div className="card bg-accent lg:w-2/5 md:w-3/5 sm:w-[320px] shadow-2xl  lg:mb-10 lg:mt-5 sm:mt-10">
   <h1 className='text-4xl text-primary text-center mt-6'> Contact Me </h1>
      <div className="card-body sm:ml-2">
        <form onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black ">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" {...register("name")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input name='email' type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-3">
        <label className="label">
            <span className="label-text text-black ">Message</span>
          </label>
  <textarea {...register("message")} name='message' className="textarea textarea-bordered h-24" placeholder="Message" required></textarea>
</div>
        <div className="form-control mt-6 mb-3 items-center">
        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Submit" />
        </div>
      </form>
      </div>
    </div>
</div>
  );
};


export default Contact;