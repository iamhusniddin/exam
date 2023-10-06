import React, { useEffect } from "react";
import "./App.css";
import MainLayout from "./layout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import NewPosts from "./components/NewPosts";
import NewMovies from "./components/NewMovies";
import News from "./components/News";
// import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Lesson from "./components/Lesson";
import MainSection from "./components/MainSection";
import Todo from "./components/Todo";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = React.useState(token || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  const [movies, setMovies] = React.useState([
     {
      title: "Forsaj 10",
      desc: "Eng yangi filmlardan",
      image: "https://s5.vcdn.biz/static/f/5970245441/image.jpg",
      views: "1.2m",
      duration: "2:32m",
      price: "100",
    },
    {
      title: "Spider man",
      desc: "Yoshlikdagi eng super kinolarimdan",
      image: "https://cdn.wallpapersafari.com/99/66/yokJde.jpg",
      views: "1.6m",
      duration: "2:15m",
      price: "$70",
    },
    {
      title: "Masha i Medved",
      desc: "Multfilmni iti",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/167/197/desktop-wallpaper-s-masha-and-the-bear-masha-and-the-bear.jpg",
      views: "521k",
      duration: "1:54m",
      price: "Free",
    },
    {
      title: "Transformers",
      desc: "Chotki lekin boru",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2023/06/Transformers-Rise-of-the-Beasts-poster.jpg?resize=1200%2C630&p=1",
      views: "2.1m",
      duration: "2:01m",
      price: "Free",
    },
    {
      title: "Avengers",
      desc: "Super qahramon film",
      image: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
      views: "1.2m",
      duration: "2:32m",
      price: "$150",
    },
    {
      title: "Uzuklar hukmdori",
      desc: "Ko'rmaganman lekin zo'r kino",
      image: "https://uzreport.news/fotobank/image/05de8feaeb9f6e2511a0c6e395813744.jpeg",
      views: "1.9m",
      duration: "2:25m",
      price: "$130",
    },
    {
      title: "Avatar",
      desc: "Eng kassabop film",
      image: "https://img.ixbt.site/live/topics/preview/00/03/68/46/f3571390bc.webp",
      views: "521k",
      duration: "1:54m",
      price: "Free",
    },
    {
      title: "Uch bahodir",
      desc: "Yana bitta shedevr",
      image: "https://www.soyuz.ru/public/uploads/files/2/7621929/202303201251518139e58d3d.jpg",
      views: "1 m",
      duration: "2:01m",
      price: "Free",
    },
    {
      title: "Interesteller",
      desc: "Eng yoqqan film",
      image: "https://s2-techtudo.glbimg.com/Kw5yfA6D37Bd1E_mTSrHFx_yexI=/0x0:1200x700/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/y/O/BNaKruQdKqtfANFq348w/20-filme.jpg",
      views: "2.2m",
      duration: "2:52m",
      price: "$200",
    },
  ]);
  const [miniSidebar, setMiniSidebar] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <MainLayout
              miniSidebar={miniSidebar}
              setMiniSidebar={setMiniSidebar}
            />
          }
        >
          <Route
            path="/"
            index
            element={
              <MainSection
                kinolar={movies}
                mini={miniSidebar}
                setMini={setMiniSidebar}
              />
            }
          />
          <Route path="/new-posts" element={<NewPosts />} />
          <Route path="/singers" element={<NewMovies />} />
          <Route path="/news" element={<News mini={miniSidebar}/>} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/dashboard" element={<Dashboard mini={miniSidebar} />} />
          <Route path="/lesson" element={<Lesson mini={miniSidebar} />} />
          <Route path="/todo" element={<Todo mini={miniSidebar} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
