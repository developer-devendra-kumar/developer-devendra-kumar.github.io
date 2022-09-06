import { About } from "./Components/About/about";
import { Certificates } from "./Components/Certificate/certificates";
import { Contact } from "./Components/Contact/contact";
import { WorkHistory } from "./Components/Experience/work-history";
import { Header } from "./Components/Header/header";
import { HomeLayout } from "./Components/HomeLayouts/home-layout";
import { Intro } from "./Components/Intro/intro";
import { SocialLink } from "./Components/SocialLinks/social-links";
import { Trainings } from "./Components/Trainings/training";

function App() {
  return (
    <HomeLayout>
      <Header />
      <Intro />
      <About />
      <WorkHistory />
      <Trainings />
      <Certificates />
      <Contact />
      <SocialLink />
    </HomeLayout>
  );
}

export default App;
