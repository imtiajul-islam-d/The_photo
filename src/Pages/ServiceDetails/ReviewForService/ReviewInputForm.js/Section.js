import React from 'react';

const Section = ({handleOnsubmit}) => {
    return (
    <section className="w-full h-[80vh] flex items-center justify-center bg-gray-200">
        <div className=" text-black p-7 w-full container mx-auto">
            <form onSubmit={ handleOnsubmit} className="w-full" action="">
                <textarea className="w-full p-5 outline-none" name="review" id="review" cols="30" rows="10" placeholder="Add your review here" style={{resize: 'none'}}></textarea>
                <input type="submit" value="Add review" className="bg-orange-400 py-2 px-3 text-white hover:text-orange-400 hover:bg-white"/>
            </form>
        </div>
    </section>
    );
};

export default Section;