import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p,
.navbar,
.brand,
.btn-simple,
.alert,
a,
.td-name,
td,
button.close {
  font-family: 'Roboto';
  font-weight: 400;
  color: #263238;
}

button {
  font-size: 1.4rem;
}

#root {
    width: 100%;
    height: 100%;
}

html {
  font-size: 62.5%;
  overflow: overlay;
  height:100%;
  min-width: 1300px !important;
}

body {
  background: #f4f6f8;
  min-width: 280px !important;
  font-size:1.6rem;
  height:100%;
  width:100%;
  min-width: 1300px !important;
}`;
