import React from 'react'

const Help = () => {
    return (
        <div className="primary">
            <p className="primary text-lg font-bold py-4">HELP</p>
            <div className="text-left">
                <p className="secoundry text-base mb-2">Need help? Chat us now</p>
                <form className="items-center text-base w-96 font-bold">
                    <div className="mb-3">
                        <label>Name*</label><br />
                        <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-lg outline-none" />  
                    </div>
                    <div className="mb-3">
                        <label>Email*</label><br />
                        <input type="email" className="w-full md:p-2 p-1 border border-blue-900 rounded-lg outline-none" />  
                    </div>
                    <div className="mb-3">
                        <label>Message*</label><br />
                        <textarea name="" id="" cols="20" rows="5" className="w-full md:p-2 p-1 border border-blue-900 rounded-3xl outline-none"></textarea> 
                    </div>
                    <div className="text-right">
                        <button className="primary1 text-white px-6 py-1 rounded-md font-bold">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Help
