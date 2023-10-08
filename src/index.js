import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Zeytinyağlı İtalyan hamuru ve biberiye",
    price: 250,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margarita Pizza",
    ingredients: "Domates ve mozarella peyniri",
    price: 280,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Ispanaklı Pizza",
    ingredients: "Domates, mozarella peyniri, ıspanak ve İtalyan peyniri",
    price: 335,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Funghi Pizza",
    ingredients: "Domates, mozarella peyniri, mantar ve soğan",
    price: 335,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino Pizza",
    ingredients: "Domates, mozarella peyniri and peperoni",
    price: 420,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Prosciutto Pizza",
    ingredients: "Domates, mozarella peyniri, jambon, roka ve burrata peyniri",
    price: 500,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header title="Şekip Pizzaları" />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObj, style, situation }) {
  return (
    <li className="pizzalar" style={style}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredients}</p>
      <p>{pizzaObj.price}₺</p>
      <h2 style={{ marginTop: "-10px" }}>{situation}</h2>
    </li>
  );
}

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>
        <span>-</span> Adımıza bakıp önyargıya kapılma <span>-</span>
        <br />
        Gel Şekip'e ye İtalyan pizza{" "}
      </p>
    </header>
  );
};

const Menu = () => {
  return (
    <>
      <h2 className="menulerimiz">- Menülerimiz -</h2>
      <p className="sekipUsta">
        Şekip Usta farkıyla birbirinden lezzetli İtalyan pizzalar.{" "}
      </p>
      <main className="main">
        <ol className="pizza-list">
          {pizzaData.map((pizza) =>
            pizza.soldOut ? (
              <Pizza
                key={pizza.name}
                pizzaObj={pizza}
                situation="Şu an mevcut değil"
                style={{ filter: "grayscale(100%)", cursor: "not-allowed" }}
              />
            ) : (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            )
          )}
        </ol>
      </main>
    </>
  );
};

const Footer = () => {
  const currentHour = new Date().getHours();
  console.log(currentHour);
  const shopOpeningTime = 12;
  const shopClosingTime = 22;

  return (
    <>
      {/* make button disabled when the shop is closed */}
      <button
        disabled={
          currentHour < shopOpeningTime || currentHour > shopClosingTime
        }
      >
        Sipariş Ver
      </button>

      <footer className="footer">
        <p>
          {new Date().toLocaleTimeString()} -{" "}
          {currentHour >= shopOpeningTime && currentHour <= shopClosingTime
            ? "Şu anda açığız."
            : `Şu anda kapalıyız. Mesai saatlerimiz: ${shopOpeningTime}:00 - ${shopClosingTime}:00 arasındadır.`}
        </p>

        <p className="copyright">©2023 Şekip Pizza. Tüm hakları saklıdır.</p>

        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "0.8rem",
            fontStyle: "italic",
            paddingTop: "1.5rem",
          }}
        >
          Created by MSE
        </p>
      </footer>
    </>
  );
};
