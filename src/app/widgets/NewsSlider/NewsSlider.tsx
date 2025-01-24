import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./NewsSlider.scss";
import { useAppDispatch } from "@common/lib/hooks/useAppDispatch";
import { fetchNews } from "@store/slices/newsSlice";
import SliderIcon from "@assets/icons/slider-btn.svg?react";
import { IStateSchema } from "@app/providers/StoreProvider";

export type RootState = IStateSchema;

export const NewsSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const { news, loading, error } = useSelector((state: RootState) => state.news);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    const updateCardWidth = () => {
        if (sliderRef.current) {
            const card = sliderRef.current.querySelector<HTMLElement>(".slider__card");
            const sliderContent = sliderRef.current.querySelector<HTMLElement>(".slider__content");

            if (card && sliderContent) {
                const styles = window.getComputedStyle(sliderContent);
                const gap = parseInt(styles.gap || "0", 10);
                setCardWidth(card.offsetWidth + gap); 
            }
        }
    };

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        updateCardWidth(); 
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);
    }, [news.length]); 

    const handleNext = () => {
        if (currentIndex < news.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    if (loading) return <div className="loader">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <section className="news">
            <h2 className="title news__title">Current news from the world of finance</h2>
            <h3 className="subtitle news__subtitle">
                We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
            </h3>
            <div className="news__slider slider" ref={sliderRef}>
                <div
                    className="slider__content"
                    style={{transform: `translateX(-${currentIndex * cardWidth}px)`}}
                >
                    {news.map((item, index) => (
                        <a
                            key={index}
                            className="slider__card"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="slider__img"
                                src={item.urlToImage ?? undefined}
                                alt={item.title || "No image available"}
                            />
                            <h3 className="slider__card-title">{item.title}</h3>
                            <p className="slider__card-subtitle">{item.description}</p>
                        </a>
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="slider__button prev-btn"
                    data-testid="prev-button"
                >
                    <SliderIcon />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= news.length - 3}
                    className="slider__button next-btn"
                >
                    <SliderIcon />
                </button>
            </div>
        </section>
    );
};
