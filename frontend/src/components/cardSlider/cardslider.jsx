import "./cardSlider.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./cardcompo";
import Carousel from "./Carousel";
import ring from "../../components/resources/ring1.webp";
import earing from "../../components/resources/earring1.webp";
import bangle from "../../components/resources/bangles1.jpg";
import bracs from "../../components/resources/bres1.jpg";
import neck from "../../components/resources/neckles1.jpg";
// import ring from "../../components/resources/ring1.webp";

function CardSlider() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={ring}
          title="Ring"
          subtitle="Adorn your fingers with elegance and grace - our exquisite rings are crafted to make your every moment shine"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={earing}
          title="Earrings"
          subtitle="Embrace the allure of our ethereal earrings, where beauty meets sophistication, bringing enchantment to your style"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={bangle}
          title="Bangle"
          subtitle="Wrap your wrists in splendor with our bangles, each one a timeless piece of art that complements your every move"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={bracs}
          title="Bracelet"
          subtitle="Celebrate life's precious moments with our bracelets, a symphony of fine craftsmanship and exquisite design"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={neck}
          title="Necklace"
          subtitle="Drape yourself in the luxury of our necklaces, where opulence meets passion, making you the center of admiration"
        />
      ),
    },
  ];
  return (
    <div className="CardSlider">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CardSlider;
