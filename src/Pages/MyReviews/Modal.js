import React from 'react';

const Modal = ({serviceName, handleUpdate, setCardButton , cardButton}) => {
    return (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-md z-10 flex justify-center items-center'>
            <div>
                <form onSubmit={handleUpdate} className='bg-gray-500 p-5'>
                    <div className='text-center mb-3'>
                       {serviceName}
                    </div>
                    <div>
                        <textarea  placeholder='Update your review' style={{resize: "none"}} name="updatedReview" id="updatedReview" cols="30" rows="10" className='text-black'></textarea>
                    </div>
                    <div className='space-x-4 mt-2'>
                        <button onClick={() => setCardButton(!cardButton)} className='bg-white text-black py-2 px-3'>cancel</button>
                        <button type='submit' className='bg-white text-black py-2 px-3'>update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;