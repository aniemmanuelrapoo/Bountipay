import React from 'react'

const Wallet1 = () => {
    return (
        <div>
            <h1 className="text-lg primary font-bold py-3">WALLET</h1>
            <div className="text-left md:grid md:grid-cols-2">
            <div className="border-r-2 lg:px-8">
                    <div className="flex flex-row text-base lg:text-xl primary font-bold border-b-2 pb-1">
                        <div className="lg:w-48 w-40">Rewards</div>
                        <div className="lg:w-16 w-14">-</div>
                        <div className="lg:w-32 w-28">N2000</div>
                    </div>
                    <div className="flex flex-row text-base lg:text-xl primary font-bold border-b-2 pb-1">
                        <div className="lg:w-48 w-40">Referral payment</div>
                        <div className="lg:w-16 w-14">-</div>
                        <div className="lg:w-32 w-28">N300</div>
                    </div>
                    <div className="flex flex-row text-base lg:text-xl secoundry font-bold  pb-2">
                        <div className="lg:w-48 w-40">Balance</div>
                        <div className="lg:w-16 w-14">-</div>
                        <div className="lg:w-32 w-28">N2300</div>
                    </div>
                </div>
                <div className="md:ml-16 md:mt-5">
                    <div className="mb-2"><button className="secoundry1 text-white px-3 font-bold lg:text-2xl text-lg">Deposit</button></div>
                    <div><button className="primary1 text-white px-3 font-bold lg:text-2xl text-lg">WithDraw</button></div>
                </div>
            </div>
            <div className="primary font-bold">
                <h1 className="lg:text-2xl md:text-lg font-bold md:p-5 py-3 text-center">BANK</h1>
            <form className="text-left">
                <div className="primary">
                    <label>Account Name*</label>
                    <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                </div>
                <div>
                    <div className="w-full mt-2">
                        <label>Account No*</label>
                        <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                    </div>
                    <div className="w-full mt-2">
                        <label>Bank Name*</label>
                        <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                    </div>
                </div>
                
                <div className="text-right mt-6">
                    <button className="primary1 text-white px-6 py-1 rounded-sm font-bold">Save</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Wallet1
