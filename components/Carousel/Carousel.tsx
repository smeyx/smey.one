import type { StaticImageData } from "next/image"
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselDot } from "@components/Carousel/";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import { InlineImage } from "@components/InlineImage";
import rgbPlaceholder from "@lib/placeholder";

interface CarouselProps {
  images: Array<StaticImageData>,
}

const Carousel: React.FC<CarouselProps> = ({ images }): JSX.Element => {
  const [scrollSnapList, setScrollSnapList] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [carouselRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      // AutoHeight()
    ]
  );

  const onNextClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onPrevClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnapList(emblaApi.scrollSnapList())
      emblaApi.on("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={carouselRef}>
          <div className="embla__container">
            {
              images.map((i, key) => (
                <InlineImage key={key} className="embla__slide">
                  <Image
                    className="embla__image"
                    src={i}
                    alt="image showing voss invoice software"
                    placeholder="blur"
                    blurDataURL={rgbPlaceholder(252, 223, 166)}
                    sizes="
                    (max-width: 600px) 100vw,
                    33vw"
                  />
                </InlineImage>
              ))
            }
          </div>
        </div>
      </div>
      <div className="embla__controls">
        <button className="embla__prev" onClick={onPrevClick}>
          <ArrowLeft size="3vh" />
        </button>
        <div className="embla__dots">
          {scrollSnapList.map((_, key) => (
            <CarouselDot
              selected={selectedIndex === key}
              key={key}
              onClick={() => scrollTo(key)}>
            </CarouselDot>
          ))
          }
        </div>
        <button className="embla__next" onClick={onNextClick}>
          <ArrowRight size="3vh" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;