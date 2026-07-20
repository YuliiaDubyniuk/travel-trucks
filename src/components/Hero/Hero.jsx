import Container from '../Container/Container';
import Button from '../Button/Button';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.hero}>
      <Container className={css.heroWrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <Button to="/catalog" className={css.heroBtn}>
          View Now
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
