import "../css/style.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/pages/home/Home";
import TourPage from "../src/pages/tour/TourPage";
import Tracks from "../src/pages/tracks/Tracks";
import Crew from "../src/pages/about/Crew";
import News from "../src/pages/news/News";
import Merch from "../src/pages/shop/Merch";
import Contact from "../src/pages/contact/Contact";

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tour" element={<TourPage />} />
        {/* <Route path="/tour:prev" element={<PastTour />} /> */}
        <Route path="/tracks" element={<Tracks />} />
        {/* <Route path="/tracks:lyrics" element={<Lyrics />} />
        <Route path="/tracks:albums" element={<Albums />} />
        <Route path="/tracks:video" element={<Video />} /> */}
        <Route path="/about" element={<Crew />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/news:id" element={<NewsArticle/>}/> */}
        <Route path="/shop" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </div>
);

export default App;
