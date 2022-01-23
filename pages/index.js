import styled from 'styled-components';
import React from "react";
import EmilyMameComedy from '../public/emilymamecomedy.svg';
import CodeEmily from '../public/codeemily.svg';
import Image from 'next/image'
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImage = styled(Image)`
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
`;

export default function Home() {
  return (
    <div>
        <Wrapper>
            <Link href='/emilymamecomedy'>
                <StyledImage src={EmilyMameComedy} />
            </Link>
            <Link href='/codeemily'>
                <StyledImage src={CodeEmily} />
            </Link>
        </Wrapper>
    </div>
  )
}
