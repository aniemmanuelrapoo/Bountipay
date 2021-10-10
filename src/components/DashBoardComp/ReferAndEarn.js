import React from 'react'

const ReferAndEarn = () => {
    return (
        <div>
            <h1 className="primary to-black md:text-2xl text-xl font-bold p-6">Refer and Earn</h1>
            <div className="lg:px-8 text-left pt-6">
                <p className="primary text-base md:text-xl font-bold pb-11">Refer someone and earn N100 per person.</p>
                <div className="flex flex-row text-base md:text-xl primary font-bold pb-1">
                    <div className="md:w-48 w-40 border-b-2">Referals</div>
                    <div className="md:w-16 w-14">-</div>
                    <div className="md:w-32 w-28">3</div>
                </div>
                <div className="flex flex-row text-base md:text-xl primary font-bold pb-1">
                    <div className="md:w-48 w-40">Referral payment</div>
                    <div className="md:w-16 w-14">-</div>
                    <div className="md:w-32 w-28">N300</div>
                </div>
                <div>
                    <button className="secoundry1 text-white font-bold p-1 rounded-md mt-3 md:text-lg">Refer Someone</button>
                </div>
            </div>
        </div>
    )
}

export default ReferAndEarn
