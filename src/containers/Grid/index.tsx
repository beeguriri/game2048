import { GirdContainer } from './style';

type Props = {
  children: React.ReactNode;
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
};

/**
 *
 * @param sm : landscape phones column, row counts
 * @param md : tablets column, row counts
 * @param lg : desktops column, row counts
 * @param xl : large desktops column, row counts
 * @param xxl : larger desktops column, row counts
 * @param smAutoFlow : landscape phones  배치 알고리즘
 * @param mdAutoFlow : tablets  배치 알고리즘
 * @param lgAutoFlow : desktops  배치 알고리즘
 * @param xlAutoFlow : large desktops  배치 알고리즘
 * @param xxlAutoFlow : larger desktops  배치 알고리즘
 * @returns Grid Container
 */
const Grid = ({
  sm = 8,
  md = 8,
  lg = 8,
  xl = 8,
  xxl = 8,
  smAutoFlow = 'row dense',
  mdAutoFlow = 'row dense',
  lgAutoFlow = 'row dense',
  xlAutoFlow = 'row dense',
  xxlAutoFlow = 'row dense',
  children,
}: Props) => {
  return (
    <GirdContainer
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      smAutoFlow={smAutoFlow}
      mdAutoFlow={mdAutoFlow}
      lgAutoFlow={lgAutoFlow}
      xlAutoFlow={xlAutoFlow}
      xxlAutoFlow={xxlAutoFlow}
    >
      {children}
    </GirdContainer>
  );
};

export default Grid;
