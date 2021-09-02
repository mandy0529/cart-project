import {useGlobalContext} from './context';
import Item from './Item';

const Hero = () => {
  const {cart, clearItems, total} = useGlobalContext();
  if (cart.length === 0) {
    return <h2 className="loading">no item in your cart</h2>;
  }
  return (
    <section className="hero">
      {cart.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
      {cart.length !== 0 && (
        <>
          <span className="total">
            <span>total : $ {total}</span>
          </span>
          <button onClick={clearItems} className="clear-btn">
            clear all
          </button>
        </>
      )}
    </section>
  );
};

export default Hero;
