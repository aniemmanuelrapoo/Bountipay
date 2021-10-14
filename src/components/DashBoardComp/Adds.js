import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import addss from '../../images/addss.jpg'

const ADDs = styled.div`
    ${tw`lg:w-60 md:w-40 sm:w-36 w-28 xl:w-72 rounded-lg text-white font-bold mt-1 md:text-xl text-sm shadow-lg overflow-hidden`}
`

const Adds = () => {
    return (
        <>
            <ADDs><img src={addss} alt="" /></ADDs>
            <ADDs><img src={addss} alt="" /></ADDs>
            <ADDs><img src={addss} alt="" /></ADDs>
        </>
    )
}

export default Adds
