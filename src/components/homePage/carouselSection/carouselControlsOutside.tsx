import { useEffect } from "react";
import GLide from "@glidejs/glide";
import CardCarousel from "./CardCarousel";
import useGetTableDB from "../../../hook/useConnectDB";
import { CardReview } from "../../../types/CardReview";

export default function CarouselControlsOutside() {
  const arrayCardReview: CardReview[] = useGetTableDB(
    "Recensioni"
  );

  useEffect(() => {
    setTimeout(() => {
      const slider = new GLide(".glide-08", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 2000,
        animationDuration: 500,
        gap: 24,
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();
      return () => {
        slider.destroy();
      };
    }, 2000);
  }, []);

  return (
    <div>
      <div className="relative w-full glide-08">
        <div className="space-x-5 overflow-hidden " data-glide-el="track">
          <CardCarousel arrayCardDB={arrayCardReview} />
        </div>
      </div>
    </div>
  );
}
