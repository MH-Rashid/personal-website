import { FormspreeProvider } from "@formspree/react";
import NavBar from "./components/NavBar.jsx";

import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

export default function App() {
  return (
    <FormspreeProvider project="2501213207801101346">
      <NavBar />
      <Content />  
      <Footer />
    </FormspreeProvider>
  );
}
