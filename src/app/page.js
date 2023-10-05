import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import NavComponent from "./components/NavConponent";
import SectionAmbassadeur from "./components/SectionAmbassadeur";
import SectionAttentes from "./components/SectionAttentes";
import SectionAvantages from "./components/SectionAvantages";
import SectionBlog from "./components/SectionBlog";
import SectionCalen from "./components/SectionCalen";
import SectionFaq from "./components/SectionFaq";
import SimpleSection from "./components/SimpleSection";

export default function Home() {
  return (
    <main>
      <HeaderComponent/>
      <SimpleSection opacity={0.8} id="about">
      <p>
        Minim eu magna id eiusmod non ipsum reprehenderit veniam labore non commodo.
        Dolore laborum voluptate sint ut exercitation nulla adipisicing officia et.
        Aliquip Lorem deserunt Lorem enim occaecat enim tempor. Dolor nostrud eu ea dolore veniam.
        Excepteur in ea in proident velit laboris. Irure nisi ullamco pariatur exercitation qui veniam ut duis sint velit et cillum.
        Minim eu magna id eiusmod non ipsum reprehenderit veniam labore non commodo.
        Dolore laborum voluptate sint ut exercitation nulla adipisicing officia et.
        Aliquip Lorem deserunt Lorem enim occaecat enim tempor. Dolor nostrud eu ea dolore veniam.
        Excepteur in ea in proident velit laboris. Irure nisi ullamco pariatur exercitation qui veniam ut duis sint velit et cillum.
      </p>
      </SimpleSection>
      <SimpleSection reverse={true} titre="Notre vision" image="vision.jpeg" id="about" opacity={0.3}>
      <p>
        Minim eu magna id eiusmod non ipsum reprehenderit veniam labore non commodo.
        Dolore laborum voluptate sint ut exercitation nulla adipisicing officia et.
        Aliquip Lorem deserunt Lorem enim occaecat enim tempor. Dolor nostrud eu ea dolore veniam.
        Excepteur in ea in proident velit laboris. Irure nisi ullamco pariatur exercitation qui veniam ut duis sint velit et cillum.
        Minim eu magna id eiusmod non ipsum reprehenderit veniam labore non commodo.
        Dolore laborum voluptate sint ut exercitation nulla adipisicing officia et.
        Aliquip Lorem deserunt Lorem enim occaecat enim tempor. Dolor nostrud eu ea dolore veniam.
        Excepteur in ea in proident velit laboris. Irure nisi ullamco pariatur exercitation qui veniam ut duis sint velit et cillum.
      </p>
      </SimpleSection>
      <SectionAmbassadeur/>
      <SectionAttentes/>
      <SectionAvantages/>
      <SectionFaq/>
      <SectionCalen/>
      <SectionBlog/>
      <Footer/>
    </main>
  )
}
