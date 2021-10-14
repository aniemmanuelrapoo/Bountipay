import styled from "styled-components";
import tw from "twin.macro";

export const NavContainer = styled.div`
    ${tw`fixed w-full`}
`
export const MainContainer = styled.div`
    ${tw`grid`}
`
export const SidebarContainer = styled.div`
     ${tw`text-white h-full w-28 md:w-56 flex-col md:gap-60 sm:gap-72 gap-64 py-9 pr-8 pl-4 md:pr-3 md:pl-5 shadow-inner mt-14 fixed flex`}
    background-color:#010080;
`
export const SideMain = styled.div`
    ${tw` mt-20 ml-28 md:ml-64`}
`
export const AddsContainer = styled.div`
    ${tw`flex justify-around items-center text-center`}
`