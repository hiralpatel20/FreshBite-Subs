import React from 'react';
import './DetailsPage.css';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const DetailsPage = () => {

  const navigate = useNavigate();
  const addToCart = (sub) => {
    navigate('/cart');
  };

  // Here I created the design for the details page using the simple form elements
    return (
      <>
      <Navbar />
      <div class="details-page">
    <div class="details-sectiion">
      <div class="SubSize">
       <h3>Choose your sub size:</h3> 
       <form class="grid-container">
        <div class="grid-item">
       <input type="radio" id="small" name="subSize" value="small"></input>
       <label for="small">Small (6-inch)</label><br></br>
        </div>
        <div class="grid-item">
       <input type="radio" id="large" name="subSize" value="large"></input>
       <label for="large">Large (12-inch)</label><br></br>
       </div>
       </form>
      </div> <br></br>

      <div class="BreadChoice">
       <h3>Choice of Bread or Wrap:</h3> 
       <form class="grid-container">
        <div class="grid-item">
       <input type="radio" id="mediterranean-herb" name="breadChoice" value="mediterranean-herb"></input>
        <label for="mediterranean-herb">Mediterranean Herb</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="cheddar-bliss" name="breadChoice" value="cheddar-bliss"></input>
        <label for="cheddar-bliss">Cheddar Bliss</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="wholesome-multigrain" name="breadChoice" value="wholesome-multigrain"></input>
        <label for="wholesome-multigrain">Wholesome Multigrain</label><br></br>
        </div>
        
        <div class="grid-item">
        <input type="radio" id="classic-white" name="breadChoice" value="classic-white"></input>
        <label for="classic-white">Classic White</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="whole-wheat-tortilla-wrap" name="breadChoice" value="whole-wheat-tortilla-wrap"></input>
        <label for="whole-wheat-tortilla-wrap">Whole Wheat Tortilla Wrap</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="white-tortilla-wrap" name="breadChoice" value="white-tortilla-wrap"></input>
        <label for="white-tortilla-wrap">White Tortilla Wrap</label>
        </div>
        </form>
      </div> <br></br>

      <div class="CheeseChoice">
      <h3>Choice of Cheese:</h3>
      <form class="grid-container">
        <div class="grid-item">
        <input type="radio" id="mozzarella" name="cheeseChoice" value="mozzarella"></input>
        <label for="mozzarella">Mozzarella Cheese</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="cheddar" name="cheeseChoice" value="cheddar"></input>
        <label for="cheddar">Cheddar Cheese</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="mozza-cheddar-blend" name="cheeseChoice" value="mozza-cheddar-blend"></input>
        <label for="mozza-cheddar-blend">Shredded Mozza-Cheddar Blend</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="habanero" name="cheeseChoice" value="habanero"></input>
        <label for="habanero">Habanero Cheese</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="parmesan" name="cheeseChoice" value="parmesan"></input>
        <label for="parmesan">Parmesan Cheese</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="feta" name="cheeseChoice" value="feta"></input>
        <label for="feta">Feta Cheese</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="no-cheese" name="cheeseChoice" value="no-cheese"></input>
        <label for="no-cheese">No Cheese</label>
        </div>
        </form>
      </div> <br></br>

    <div class="ToppingsChoice">
    <h3>Choose your toppings:</h3>
    <form class="grid-container">
        <div class="grid-item">
        <input type="checkbox" id="lettuce" name="toppingChoice" value="lettuce"></input>
        <label for="lettuce">Lettuce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="tomato" name="toppingChoice" value="tomato"></input>
        <label for="tomato">Tomato</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="onions" name="toppingChoice" value="onions"></input>
        <label for="onions">Onions</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="cucumber" name="toppingChoice" value="cucumber"></input>
        <label for="cucumber">Cucumber</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="pickles" name="toppingChoice" value="pickles"></input>
        <label for="pickles">Pickles</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="mushrooms" name="toppingChoice" value="mushrooms"></input>
        <label for="mushrooms">Mushrooms</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="jalapeno" name="toppingChoice" value="jalapeno"></input>
        <label for="jalapeno">Jalapeno</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="green-olive" name="toppingChoice" value="green-olive"></input>
        <label for="green-olive">Green Olive</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="black-olive" name="toppingChoice" value="black-olive"></input>
        <label for="black-olive">Black Olive</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="pineapple" name="toppingChoice" value="pineapple"></input>
        <label for="pineapple">Pineapple</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="french-fried-onions" name="toppingChoice" value="french-fried-onions"></input>
        <label for="french-fried-onions">French Fried Onions</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="spinach" name="toppingChoice" value="spinach"></input>
        <label for="spinach">Spinach</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="salt" name="toppingChoice" value="salt"></input>
        <label for="salt">Salt</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="pepper" name="toppingChoice" value="pepper"></input>
        <label for="pepper">Pepper</label>
        </div>
    </form>
    </div> <br></br>

    <div class="SauceChoice">
    <h3>Choose your sauce:</h3>
    <form class="grid-container">
        <div class="grid-item">
        <input type="checkbox" id="sub-sauce" name="sauceChoice" value="sub-sauce"></input>
        <label for="sub-sauce">Sub Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="mayonise" name="sauceChoice" value="mayonise"></input>
        <label for="mayonise">Mayonnaise</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="mustard" name="sauceChoice" value="mustard"></input>
        <label for="mustard">Mustard</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="honey-mustard" name="sauceChoice" value="honey-mustard"></input>
        <label for="honey-mustard">Honey Mustard</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="hot-sauce" name="sauceChoice" value="hot-sauce"></input>
        <label for="hot-sauce">Hot Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="barbeque-sauce" name="sauceChoice" value="barbeque-sauce"></input>
        <label for="barbeque-sauce">Barbeque Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="steak-sauce" name="sauceChoice" value="steak-sauce"></input>
        <label for="steak-sauce">Steak Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="ceasar-sauce" name="sauceChoice" value="ceasar-sauce"></input>
        <label for="ceasar-sauce">Caesar Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="ranch-sauce" name="sauceChoice" value="ranch-sauce"></input>
        <label for="ranch-sauce">Ranch Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="chipotle-sauce" name="sauceChoice" value="chipotle-sauce"></input>
        <label for="chipotle-sauce">Chipotle Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="pizza-sauce" name="sauceChoice" value="pizza-sauce"></input>
        <label for="pizza-sauce">Pizza Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="sweet-onion-sauce" name="sauceChoice" value="sweet-onion-sauce"></input>
        <label for="sweet-onion-sauce">Sweet Onion Sauce</label><br></br>
        </div>

        <div class="grid-item">
        <input type="checkbox" id="no-sauce" name="sauceChoice" value="no-sauce"></input>
        <label for="no-sauce">No Sauce</label>
        </div>
    </form>
    </div> <br></br>

    <div class="Extras choice">
    <h3>Choose your extras:</h3>
    <form class="grid-container">
            <div class="grid-item">
            <label for="super-size">Super size your sub - Double the meat and cheese<br></br>+$3.50</label><br></br>
            <input type="number" id="super-size" name="super-size" min="0"></input>
            </div>
            
            <div class="grid-item">
            <label for="extra-meat-small">Extra Meat Small<br></br>+$2.50</label><br></br>
            <input type="number" id="extra-meat-small" name="extra-meat-small" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-meat-large">Extra Meat Large<br></br>+$3.50</label><br></br>
            <input type="number" id="extra-meat-large" name="extra-meat-large" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-bacon">Extra Bacon<br></br>+$2.00</label><br></br>
            <input type="number" id="extra-bacon" name="extra-bacon" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-mozzarella">Extra Mozzarella Cheese<br></br>+$1.50</label><br></br>
            <input type="number" id="extra-mozzarella" name="extra-mozzarella" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-cheddar">Extra Cheddar Cheese<br></br>+$1.50</label><br></br>
            <input type="number" id="extra-cheddar" name="extra-cheddar" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-feta">Extra Feta Cheese<br></br>+$1.50</label><br></br>
            <input type="number" id="extra-feta" name="extra-feta" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-parmesan">Extra Parmesan Cheese<br></br>+$1.50</label><br></br>
            <input type="number" id="extra-parmesan" name="extra-parmesan" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="extra-mozza-cheddar-blend">Extra Mozza-Cheddar Blend<br></br>+$1.50</label><br></br>
            <input type="number" id="extra-mozza-cheddar-blend" name="extra-mozza-cheddar-blend" min="0"></input>
            </div>

            <div class="grid-item">
            <label for="no-thank-you">No, thank you</label><br></br>
            </div>
    </form>
</div> <br></br>

<div class="Grilled sub choice">
    <h3>Would you like your sub grilled?</h3>
    <form class="grid-container">
        <div class="grid-item">
        <input type="radio" id="grilled" name="grilledChoice" value="grilled"></input>
        <label for="grilled">Grilled Sub</label><br></br>
        </div>

        <div class="grid-item">
        <input type="radio" id="not-grilled" name="grilledChoice" value="not-grilled"></input>
        <label for="not-grilled">Not Grilled</label>
        </div>
    </form>
</div> <br></br>

<div class="add-to-cart">
    <button type="button" onClick={() => addToCart()}>Add to Cart</button>
</div> <br></br>
</div>

      </div>
      <Footer />
      </>
      
    );
  };
  
  export default DetailsPage;