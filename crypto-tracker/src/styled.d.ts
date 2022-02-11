import 'styled-components';

// extend
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}
