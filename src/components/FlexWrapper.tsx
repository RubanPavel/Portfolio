import styled from "styled-components";

type FlexWrapper = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};

`