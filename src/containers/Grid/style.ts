import styled from '@emotion/styled';

const GirdContainer = styled.div<{
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  smAutoFlow?: 'row' | 'row dense' | 'column' | 'column dense';
  mdAutoFlow?: 'row' | 'row dense' | 'column' | 'column dense';
  lgAutoFlow?: 'row' | 'row dense' | 'column' | 'column dense';
  xlAutoFlow?: 'row' | 'row dense' | 'column' | 'column dense';
  xxlAutoFlow?: 'row' | 'row dense' | 'column' | 'column dense';
}>`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  padding: 0.5rem 0;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    grid-template-columns: ${({ sm }) => `repeat(${sm}, minmax(0, 1fr))`};
    grid-template-rows: ${({ sm }) => `repeat(${sm}, minmax(0, 1fr))`};
    grid-auto-flow: ${({ smAutoFlow }) => smAutoFlow ?? 'row dense'};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, minmax(0, 1fr))`};
    grid-template-rows: ${({ md }) => `repeat(${md}, minmax(0, 1fr))`};
    grid-auto-flow: ${({ mdAutoFlow }) => mdAutoFlow ?? 'row dense'};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: ${({ lg }) => `repeat(${lg}, minmax(0, 1fr))`};
    grid-template-rows: ${({ lg }) => `repeat(${lg}, minmax(0, 1fr))`};
    grid-auto-flow: ${({ lgAutoFlow }) => lgAutoFlow ?? 'row dense'};
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: ${({ xl }) => `repeat(${xl}, minmax(0, 1fr))`};
    grid-template-rows: ${({ xl }) => `repeat(${xl}, minmax(0, 1fr))`};
    grid-auto-flow: ${({ xlAutoFlow }) => xlAutoFlow ?? 'row dense'};
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    grid-template-columns: ${({ xxl }) => `repeat(${xxl}, minmax(0, 1fr))`};
    grid-template-rows: ${({ xxl }) => `repeat(${xxl}, minmax(0, 1fr))`};
    grid-auto-flow: ${({ xxlAutoFlow }) => xxlAutoFlow ?? 'row dense'};
  }
`;

export { GirdContainer };
