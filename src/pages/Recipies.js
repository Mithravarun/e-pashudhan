import React from "react";
import "../styles/RecipieStyles.css";

const Recipies = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <section className="container1">
        <div className="cards1">
          <div className="card-image car-1"></div>
          <h2>Paneer Butter Masala</h2>
          <p>
            Paneer Butter Masala is one of India’s most popular paneer gravy
            recipes, and with good reason! Indian cottage cheese cubes are
            smothered in a creamy, lightly spiced tomato sauce that is downright
            delicious.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="cards1">
          <div className="card-image car-2"></div>
          <h2>Fruit custard</h2>
          <p>
            {" "}
            Fruit custard is one of those desserts that reminds me of childhood.
            Growing up, we would eat Carrot Halwa, Rice Kheer, Besan Ladoo or a
            fruit custard like this one for our sweet treat.{" "}
          </p>

          <a href="">Read More</a>
        </div>
        <div className="cards1">
          <div className="card-image car-3"></div>
          <h2>Mac & Cheese</h2>
          <p>
            Macaroni and cheese—also called mac and cheese in Canada and the
            United States and macaroni cheese in the United Kingdom is a dish of
            cooked macaroni pasta and a cheese sauce, most commonly Cheddar
            sauce. The traditional macaroni and cheese is a casserole baked in
            the oven; however, it may be prepared in a sauce pan on top of the
            stove or using a packaged mix.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="cards1">
          <div className="card-image car-4"></div>
          <h2>Doodh Peda</h2>
          <p>
            Peda or Pera is a sweet dish hailing from the Indian subcontinent.
            It originated from Mathura, Uttar Pradesh, India. Usually prepared
            in thick, semi-soft, its main ingredients are khoa, sugar and
            traditional flavorings including cardamom seeds, pistachio nuts and
            saffron.
          </p>
          <a href="">Read More</a>
        </div>
      </section>
    </div>
  );
};

export default Recipies;
