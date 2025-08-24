import { useState } from "react";
import "./App.css";

const LandingPage = ({ setCurrentView }) => {
  const [noButtonText, setNoButtonText] = useState("Nie");

  const switchView = (view) => {
    setCurrentView(view);
  };

  const handleYesClick = () => {
    switchView("main");
  };

  const handleNoMouseOver = () => {
    setNoButtonText("Tak!");
  };

  const handleNoMouseOut = () => {
    setNoButtonText("Nie");
  };

  return (
    <div>
      <h1>Urodziny Elizki</h1>
      <p>Witaj na stronie urodzinowej Elizki!</p>
      <img src="./src/assets/daschund.gif" alt="Birthday Daschund" />
      <p>Czy jesteś gotowa, żeby świętować?</p>
      <p>Tylko spróbuj wybrać nie!</p>
      <button id="yes-button" onClick={handleYesClick}>
        Tak!
      </button>
      <button
        id="no-button"
        onMouseOver={handleNoMouseOver}
        onMouseOut={handleNoMouseOut}
        onClick={handleYesClick}
      >
        {noButtonText}
      </button>
    </div>
  );
};

const MainPage = ({ setCurrentView }) => {
  return (
    <div>
      <h1>Tak??? To świętujemy !!!</h1>
      <img src="./src/assets/celebration.gif" alt="Celebration" />
      <br />
      <button onClick={() => setCurrentView("cake")}>Dalej</button>
    </div>
  );
};

const CakePage = ({ setCurrentView }) => {
  return (
    <div>
      <h1>To jest twój tort</h1>
      <img src="./src/assets/tort.jpg" alt="Birthday Cake" />
      <br />
      <p> (jest w stylu SATC....) </p>
      <button onClick={() => setCurrentView("party")}>Następna strona</button>
    </div>
  );
};

const PartyPage = ({ setCurrentView }) => {
  return (
    <div>
      <h1>To jest twoja impreza</h1>
      <img
        src="./src/assets/party_theme.jpg"
        alt="Birthday Party"
        width="400"
        height="automatic"
      />
      <br />
      <p> (tyle że to vision board....) </p>
      <button onClick={() => setCurrentView("present")}>Prezent</button>
    </div>
  );
};

const PresentPage = ({ setCurrentView }) => {
  return (
    <div>
      <h1>To jest twój prezent</h1>
      <img
        src="./src/assets/present.jpeg"
        alt="Present"
        width="700"
        height="automatic"
      />
      <br />
      <p>
        {" "}
        (niestety nie mogę go tu wysłać, anie nie stać mnie na niego
        jeszcze....){" "}
      </p>
      <button onClick={() => setCurrentView("wishes")}>Życzenia</button>
    </div>
  );
};

const WishesPage = ({ setCurrentView }) => {
  return (
    <div>
      <h1>Wszystkiego najlepszego Elizka!</h1>
      <img
        src="./src/assets/happy_bday.gif"
        alt="Birthday Wishes"
        width="400"
        height="automatic"
      />
      <br />
      <button onClick={() => setCurrentView("end")}>Kliknij mnie</button>
    </div>
  );
};

const EndPage = () => {
  return (
    <div>
      <p>
        Elizka, przede wszystkim chciałbym powiedzieć, że strasznie mi przykro
        po tylu latach nie być z Tobą w tym ważnym dniu. Ale nadal chciałbym
        abyś czuła dzisiaj moją obecność. Mam nadzieję, że ta mała stroną
        przyniosła Tobie chociaż odrobinę szczęścia.
      </p>
      <p>
        Jesteś najcudowniejsza osobą jaką znam i naprawdę nie przesadzam. Jesteś
        mądra, empatyczna, zawzięta, ciężko pracujesz, opiekujesz się swoi~mi
        bliskimi, zależy ci na osobach w twoim otoczeniu, nie jesteś samolubna,
        jesteś przekochana, ale i do bólu szczera, zawsze potrafisz dobrze
        doradzić, zawsze potrafisz sprawić, że atmosfera będzie lekka, jesteś
        kochająca, oddana i masz wiele wiele innych cech, o których mógłbym
        pisać do jutra.
      </p>
      <p>
        Cieszę się, że jedziesz z Wiksa i Werą na wakacje, mam nadzieję, że
        najesz się tam pysznych dań, wypijesz jeszcze lepsze drinki, zobaczysz
        cudowne widoki i opalisz się jak brazylijka. Wysyłaj mi mnóstwo zdjęć
        (oprócz tych w bikini...) z każdego miejsca w Albanii. A i nie daj się
        sprzedać za wielbłądy......
      </p>
      <p>
        Przykro mi, że jesteśmy w tej sytuacji, nigdy nie chciałem, abyśmy tak
        spędzali twoje urodziny, ale teraz trzeba już iść do przodu i mieć
        nadzieję, że nasze linie się kiedyś jeszcze przetną. Codziennie modlę
        się abyś była zdrowa, aby Bóg miał nie tylko Ciebie ale i twoich
        bliskich w swojej opiece.
      </p>
      <p>
        Wierze, że możesz wszystko co tylko chcesz i zawsze będę w to wierzył.
      </p>
      <p>Wszystkiego najlepszego Elizka.</p>
      <p>Kocham cię zawsze.</p>
      <p>Dominik</p>
      <button onClick={() => window.location.reload()}>Jeszcze raz?</button>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState("landing");

  const views = {
    landing: <LandingPage setCurrentView={setCurrentView} />,
    main: <MainPage setCurrentView={setCurrentView} />,
    cake: <CakePage setCurrentView={setCurrentView} />,
    party: <PartyPage setCurrentView={setCurrentView} />,
    present: <PresentPage setCurrentView={setCurrentView} />,
    wishes: <WishesPage setCurrentView={setCurrentView} />,
    end: <EndPage />,
  };
  return <div>{views[currentView]}</div>;
};

export default App;
