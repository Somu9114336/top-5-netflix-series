
import './App.css';
import Cards from "./Cards";


function App() {

  return (
    <>
      <h1 className="heading_style">List of top 5 Netflix Series</h1>
      <Cards
        imgsrc='https://static.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time1.png '
        title="A Netflix Original Series" sname="Daredevil"
        link="https://www.netflix.com/in/title/80018294 " />

      <Cards
        imgsrc='https://static.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time4.png '
        title="A Netflix Original Series" sname="Top Boy"
        link="https://www.netflix.com/in/title/80217669 " />

      <Cards
        imgsrc='https://wallpapercave.com/wp/wp1917154.jpg '
        title="A Netflix Original Series" sname="Stranger Thing"
        link="https://www.netflix.com/in/title/80057281 " />

      <Cards
        imgsrc='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnucwE5cwWG_OGp-YvfpkLABpNXuAqnO-5jFYrozw69ebo4Ice '
        title="A Netflix Original Series" sname="NARCOS"
        link="https://www.netflix.com/in/title/80025172 " />

      <Cards
        imgsrc='https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326 '
        title="A Netflix Original Series" sname="MONEY HEIST"
        link="https://www.netflix.com/in/title/80192098 " />

    </>

  );
}

export default App;
