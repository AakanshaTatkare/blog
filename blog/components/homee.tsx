import React from 'react'
import Link from 'next/link'

export default function homee() {
  return (
    <div>
      <h1  className='  text-3xl  flex font-sans font-thin justify-center  '>BLOGS START</h1>
      <div className='  flex justify-between mt-16'>
      <div className="card bg-slate-200 justify-center   rounded-md mr-20 ml-20 mt-0 p-4">
  <img className='rounded-lg justify-center ' src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Avatar" width={500}/>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas magnam, distinctio ipsum eligendi atque adipisci ducimus ea suscipit dolor maiores dolorem, consequatur accusantium quo alias? Harum voluptas vitae similique omnis odit nesciunt excepturi. Quas ea esse ex cumque nihil, itaque quaerat tempora aliquam, quo neque eaque nulla vero nisi!</p>
  </div>
  <Link href="/blog1" className="button">Go to Blog</Link>
</div>
<br />
<div className="card bg-slate-200   rounded-md mr-20   ml-20 p-4">
  <img className='rounded-lg justify-center ' src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Avatar" width={500}/>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas magnam, distinctio ipsum eligendi atque adipisci ducimus ea suscipit dolor maiores dolorem, consequatur accusantium quo alias? Harum voluptas vitae similique omnis odit nesciunt excepturi. Quas ea esse ex cumque nihil, itaque quaerat tempora aliquam, quo neque eaque nulla vero nisi!</p>
  </div>
  <a href="./blog1" className="button">Go to Blog</a>
</div>
<br />
 
</div>
<div className='  flex justify-between mt-16'>
      <div className="card bg-slate-200 justify-center   rounded-md mr-20 ml-20  mb-4 mt-0 p-4">
  <img className='rounded-lg justify-center ' src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Avatar" width={500}/>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas magnam, distinctio ipsum eligendi atque adipisci ducimus ea suscipit dolor maiores dolorem, consequatur accusantium quo alias? Harum voluptas vitae similique omnis odit nesciunt excepturi. Quas ea esse ex cumque nihil, itaque quaerat tempora aliquam, quo neque eaque nulla vero nisi!</p>
  </div>
  <Link href="/blog1" className="button">Go to Blog</Link>
</div>
<br />
<div className="card bg-slate-200   rounded-md mr-20 mb-4  ml-20 p-4">
  <img className='rounded-lg justify-center ' src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Avatar" width={500}/>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas magnam, distinctio ipsum eligendi atque adipisci ducimus ea suscipit dolor maiores dolorem, consequatur accusantium quo alias? Harum voluptas vitae similique omnis odit nesciunt excepturi. Quas ea esse ex cumque nihil, itaque quaerat tempora aliquam, quo neque eaque nulla vero nisi!</p>
  </div>
  <a href="./blog1" className="button">Go to Blog</a>
</div>
<br />
</div>
    </div>
  )
}
