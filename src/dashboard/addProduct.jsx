import axios from 'axios';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const Addproduct = () => {
  const { register,reset, handleSubmit } = useForm();
   const [imageUrl,setImageUrl] = useState("")


  const onSubmit =async (data) => {



    const serviceData = { 

       name:data.name ,
       description: data.description ,
       price:data.price ,
       image : imageUrl,
    }

    
     const res = await axios.post("http://localhost:5000/addfooditem",serviceData)
     if(res.data){
       reset()
       setImageUrl("")
       toast.success('Add Item Succesfully')

     }
    

  }


  const uploadImage =(data)=>{
    const image = data.target.files[0]
    const formData = new FormData()

    formData.set("image",image);

  axios.post("https://api.imgbb.com/1/upload?key=900dac96ec3c7e9b2a1e46420fe469ce",formData).then((res)=>{
   setImageUrl(res.data.data.display_url)
  })


  }


  return (
    <div className='h-80vh items-center mx-auto card max-w-lg min-w-80 bg-base-100 shadow-xl px-6 mt-8 mb-10 sm:mt-20 '>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 🎁 Please Add Product 🎁 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">Product Name</span>
  </label>
      <input {...register("name")}  type="text" placeholder="Type here product name" className="input input-bordered w-full max-w-xs" /> <input/>


      <label className="label btn btn-success justify-center"  htmlFor='image' >Upload Image</label>
      <input  onChange={uploadImage} id='image' type="file" placeholder="Type here Photo Url" className="input input-bordered w-full hidden max-w-xs" />

      <label className="label">
    <span className="label-text">Product Price</span>
  </label>

      <input {...register("price")} type="number" placeholder="Type here price" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product Description</span>
  </label>
  <textarea {...register("description")} type="text" placeholder="Type here description" className="textarea textarea-bordered" ></textarea>
     
      <button className='btn btn-primary text-success text-xl  mb-7 mt-3' disabled={!imageUrl ? true : false} type="submit">Add Product</button>
    </form>
    </div>
  );
};

export default Addproduct;