import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { About } from './Pages/about/components/about';
import { Transfers } from './Pages/transfer';
import { BookComponent } from './Pages/Booking';
import { SignInPage } from './Pages/Auth';
import { SignUp } from './Pages/Auth/Components/SingUp';
import { NotFound } from './Pages/Other/notFound';
import { RequestResetPasswordPage } from './Pages/Auth/Components/RequestResetPassword';
import { ResetPassword } from './Pages/Auth/Components/ResetPassword';
import { LetterSent } from './Pages/Auth/Components/LetterSent';
import { Home } from './Pages/Home/Components/home';
import { Footer } from './Components/Footer/Component/footer/footer';
import ToursHeader from './Pages/tours';
import TourInfoPage from './Pages/tourInfoPage';
import Reviews from './Pages/reviews';
import { ExpiredLink } from './Pages/Auth/Components/expiredActivationLink';
import Navbar from './Components/Navbar';
import Admin from './Pages/admin';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursHeader />} />
        <Route path="/tourInfoPage" element={<TourInfoPage />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookComponent />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/requestresetpassword" element={<RequestResetPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/sentletter" element={<LetterSent />} />
        <Route path="/expiredLink" element={<ExpiredLink />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
