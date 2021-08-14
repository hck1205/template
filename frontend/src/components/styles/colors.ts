const COLORS: {
  [key: string]: string;
} = {
  'BLUE-50': '#1890FF',

  'GRAY-50': '#FAFAFA',
};

const getColors = (color: string, code: number) => COLORS[`${color}-${code}`];

export const BLUE = (code: number) => getColors('BLUE', code);
export const GRAY = (code: number) => getColors('GRAY', code);
