import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Find the services and products you need  <br className="sm:block hidden" /> in just a few clicks.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore a wide range of services and products tailored to your needs, with a seamless browsing and selection experience.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
