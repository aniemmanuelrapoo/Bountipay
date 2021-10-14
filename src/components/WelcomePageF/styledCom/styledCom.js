import styled from 'styled-components'
import tw from 'twin.macro'

export const GeneralContainer = styled.div`${tw`justify-center bg-white`} height: 600px;`
export const MainContainer = styled.div`${tw`grid md:grid-cols-3 items-center justify-center md:pr-20 lg:pr-36 mb-3 md:mb-0`}`
export const ImageMover = styled.div`
    ${tw`flex flex-nowrap overflow-x-hidden relative col-span-2`}
    height: 600px;
`
export const FooterContainer = styled.div`
    ${tw`flex items-center justify-between font-bold flex-col md:flex-row`}
    color: #010080;
`