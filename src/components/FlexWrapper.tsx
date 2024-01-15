import styled from "styled-components";

type flexWrapperProps = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  margin?:string
  width?: string
  test?:string
}

export const FlexWrapper = styled.div<flexWrapperProps>`
 /* border: 1px solid mediumvioletred;*/
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: 100%;
  margin: ${props => props.margin || ''};
  width: ${props => props.width || '100%' };
  text-align:  ${props => props.margin || 'center'};
`
