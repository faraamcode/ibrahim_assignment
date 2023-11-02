import React from 'react'
import styled from 'styled-components'
interface StyledComponentProps {
  width?: string
  height?: string
  color?: string
  background?: string
}

const ButtonStyled = styled.button<StyledComponentProps>`
  background-color: ${props => props.background || '#131316'};
  color: ${props => props.color || '#fff'};
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '50px'};
  padding: 8px 18px;
  border-radius: 100px;
  border: none;
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4000000059604645px;
  text-align: center;
`
const LinkStyled = styled.div`
    color: #56616B;
    display: flex;
    gap:4px;
    font-size:  1rem;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    span{
        margin-bottom : 0;
        align
    }

  `

interface ButtonProps {
  text: string
  Icon?: React.ReactNode
  width?: string
  height?: string
  color?: string
  background?: string
  onClick?: () => void
}

export const SmallButton: React.FC<Partial<ButtonProps>> = props => {
  const { text, Icon, color, background, onClick } = props
  return (
    <ButtonStyled
      onClick={onClick}
      color={color || ''}
      background={background || ''}
    >
      {Icon && Icon}
      {text}
    </ButtonStyled>
  )
}

export const NavLink: React.FC<ButtonProps> = props => {
  const { text, Icon } = props

  return (
    <LinkStyled>
      {Icon}
      <span>{text}</span>
    </LinkStyled>
  )
}
