import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import './styles.scss';

interface ISlides{
    image: string | undefined
}

export function Slides(props: ISlides) {
  const { image } = props;
  return (
    <div className="swiper_img">
      <img src={image} alt="" />
    </div>
  );
}
