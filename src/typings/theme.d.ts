// this is a declaration file for global style
import 'styled-components';

import { theme } from '../styles';

// Get the value type of a variable
// You can get the type of a variable using the typeof keyword
// type - type keyword with alias name creates a 'new name' to refer to that type but don't create a new type
type Theme = typeof theme; 
// Note: type alias is commonly use to describe complex objects with short name

// NOTE: The "d. ts" file is used to provide typescript type information about an API that's written in JavaScript.
// That's why using 'declare module' with styled-components API
declare module 'styled-components' {
  // now DefaultTheme extends our type Theme
  export interface DefaultTheme extends Theme {}
}
