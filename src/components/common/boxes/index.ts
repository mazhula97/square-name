import styled from '@emotion/styled';

const HorizontalBox = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  color?: string;
  svgColor?: string;
  margin?: string;
  width?: string;
  height?: string;
}>`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  gap: ${({ gap }) => (gap ? gap : '0')};
  color: ${({ color }) => (color ? color : 'inherit')};
  margin: ${({ margin }) => (margin ? margin : '0 0 0 0')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  svg {
    color: ${({ svgColor }) => (svgColor ? svgColor : 'currentColor')};
  }
`;

const VerticalBox = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
  gap: ${({ gap }) => (gap ? gap : '0')};
  color: ${({ color }) => (color ? color : 'inherit')};
`;

const CustomLabel = styled.div<{
  color?: string;
  fontSize?: string | number;
  fontWeight?: string;
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  color: ${({ color }) => (color ? color : 'inherit')};
`;
export { HorizontalBox, VerticalBox, CustomLabel };
