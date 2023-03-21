import React from 'react'
import { MainFootetStyler } from '../StyledComponent/FooterStyled'
import { MiddleFooterContainer } from '../StyledComponent/FooterStyled'
import { CopyRightContainer } from '../StyledComponent/FooterStyled'
import { ServiceContainer } from '../StyledComponent/FooterStyled'

function Fotter() {
  return (
    <MainFootetStyler>
      <MiddleFooterContainer>
          <CopyRightContainer>
          Copyright © 2020 Liang Shehan Spare Ribs All Rights Reserved.
          </CopyRightContainer>
          <ServiceContainer>
          Customer service line: 02-2808-5598‧Service hours: Monday ~ Friday 08:30 ~ 17:30
          </ServiceContainer>
      </MiddleFooterContainer>
    </MainFootetStyler>
  )
}

export default Fotter
