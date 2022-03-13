// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        NEUTRAL_1: string, // dark
        ACCENT_1: string, // orange
        ACCENT_2: string, // yellow
        ACCENT_3: string, // dark-blue
        ACCENT_4: string, // loght-blue
        ACCENT_5: string, // orange-yellow
        ACCENT_6: string, // beige
        NEUTRAL_2: string, // light
      },
      fonts: {
        headline: string,
        normal: string,
      },
      fontSizes: {
        small: string,
        medium: string,
        large: string,
      },
  }
}