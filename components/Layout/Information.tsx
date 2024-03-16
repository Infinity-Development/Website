import React, { useEffect, useRef, useState } from "react";
import {
    FaTwitter,
    FaGithub,
    FaBlogger,
    FaGlobe,
    FaChevronDown,
} from "react-icons/fa";

const Introduction = () => {
    const [animationFinished, setAnimationFinished] = useState(false);

    const anim1Ref = useRef<HTMLParagraphElement>(null);
    const anim2Ref = useRef<HTMLHeadingElement>(null);
    const anim3Ref = useRef<HTMLParagraphElement>(null);
    const anim4Ref = useRef<HTMLDivElement>(null);
    const anim5Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (anim1Ref.current) {
                anim1Ref.current.classList.add("fade");
            }
        }, 250);

        const stopTimer = setTimeout(() => {
            if (
                anim2Ref.current &&
                anim3Ref.current &&
                anim4Ref.current &&
                anim5Ref.current
            ) {
                anim2Ref.current.classList.add("rightToLeft");
                anim3Ref.current.classList.add("rightToLeft");
                anim4Ref.current.classList.add("fade");
                anim5Ref.current.classList.add("fade");
                setAnimationFinished(true);
            }
        }, 250);

        return () => {
            clearTimeout(timer);
            clearTimeout(stopTimer);
        };
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <section
                id="home"
                className="text-white pt-28 sm:min-h-0 h-auto sm:pt-32 text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-8/12"
            >
                <p
                    className={`opacity-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl anim_1 ${
                        animationFinished ? "fade" : ""
                    }`}
                    ref={anim1Ref}
                >
                    Hello, We are
                </p>
                
                <h1
                    className={`text-3xl font-bold ml-4 my-1 opacity-0 sm:text-4xl md:text-5xl lg:text-6xl transform translate-x-8 anim_2 ${
                        animationFinished ? "rightToLeft" : ""
                    }`}
                    ref={anim2Ref}
                >
                    <span className={`${animationFinished ? "fade" : ""}`}>
                        Infinity Development,
                    </span>
                </h1>
                <p
                    className={`mt-12 font-light leading-relaxed font-bold opacity-0 anim_3 ${
                        animationFinished ? "rightToLeft" : ""
                    }`}
                    ref={anim3Ref}
                >
                    A{" "}
                    <span className="font-medium">
                        passionate group of developers
                    </span>{" "}
                    based all around the globe. Working together to provide you
                    with all the{" "}
                    <span className="font-medium">Discord Bots, Websites</span>{" "}
                    and{" "}
                    <span className="font-medium">
                        Services you know and love.
                    </span>
                </p>
                <div
                    className={`flex justify-center mt-12 gap-7 opacity-0 anim_4 ${
                        animationFinished ? "fade" : ""
                    }`}
                    ref={anim4Ref}
                >
                </div>
                <div
                    className={`chevron w-full mt-10 opacity-0 anim_5 ${
                        animationFinished ? "fade" : ""
                    }`}
                    ref={anim5Ref}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <FaChevronDown
                        className="bounce"
                        style={{ fontSize: "3rem" }}
                    />
                </div>
            </section>
        </div>
    );
};

export default Introduction;
