import './App.css';
import Benifits from './Benifits';
import Faq from './Faq';
import Feedback from './Feedback';
import Footer from './Footer';
import Header from './Header';
import Problems from './Problems';
import ReasonToChoose from './ReasonToChoose';
import Service from './Service';
import StickForm from './StickForm';

function App() {
  return (
    <div>
      <Header />
      <Service/>
      <Problems/>
      <Benifits/>
      <Feedback/>
      <ReasonToChoose/>
      <Faq/>
      <Footer/>
      <StickForm/>
    </div>
  );
}

export default App;
