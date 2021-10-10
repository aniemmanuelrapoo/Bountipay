import React from 'react'

const Wallet = () => {
    return (
        <div>
            <h1 className="lg:text-2xl text-lg primary font-bold md:p-5 p-3">WALLET</h1>
            <div className="flex items-center  lg:px-20 text-left justify-between flex-wrap lg:flex-nowrap">
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
                <div className="flex items-start pr-8 flex-col">
                    <div className="mb-2"><button className="secoundry1 text-white px-3 font-bold lg:text-2xl text-lg">Deposit</button></div>
                    <div><button className="primary1 text-white px-3 font-bold lg:text-2xl text-lg">WithDraw</button></div>
                </div>
            </div>
            <div className="lg:px-24 text-left primary font-bold text-lg">
                <h1 className="lg:text-2xl md:text-lg font-bold md:p-5 p-3 text-center">BANK</h1>
                <div className="primary">
                    <label>Account Name*</label>
                    <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                </div>
                <div className="flex-row flex justify-center">
                    <div className="w-96 mr-3 md:mr-6 mt-2">
                        <label>Account No*</label>
                        <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                    </div>
                    <div className="w-96 ml-3 md:ml-6 mt-2">
                        <label>Bank Name*</label>
                        <input type="text" className="w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none" />
                    </div>
                </div>
            </div>
            <div className=" flex items-end justify-end mr-32 mt-8">
                <button className="primary1 text-white px-6 py-1 rounded-sm font-bold">Save</button>
            </div>
        </div>
    )
}

export default Wallet
