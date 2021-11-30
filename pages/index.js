import React, {useRef} from "react";

import {withRouter} from "next/router";
import Head from "next/head";

import BannerDisplay from "../components/sections/BannerDisplay";

function Home({router}) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const scrollDownToNextSection = (ref) => {
        // TODO: 滚轮下滑和button点击下滑不兼容, 未找到解决办法
        // if (typeof window !== "undefined") {
        //     let frame = window.document.getElementById("WestShadeFrame");
        //     frame.classList.remove("scroll-container");
        //     setTimeout(() => {
        //         window.scrollTo(0, ref.current.offsetTop);
        //         setTimeout(() => frame.classList.add("scroll-container"), 500)
        //     }, 500)
        // }
    }

    return (
        <React.Fragment>
            <Head>
                <title>WESTSHADE | #1 Canopy and Umbrella in Southern California</title>
                <meta name="description" content="#1 canopy and umbrella in Southern California. Industry leading quality instant canopies and market umbrellas for all occasions. Easy set up."/>
            </Head>
            <BannerDisplay refD={ref1} title="CUSTOM PRINTING" subtitle="Custom the product to light up your special occasions." url="/images/home/custom_printing.webp"
                           router={router} destination="/custom-printing" onClickScrollDown={() => scrollDownToNextSection(ref2)} home/>
            <BannerDisplay refD={ref2} title="CANOPY TENT" subtitle="The most heavy duty canopy on the market with unchallenged strength and durability." url="/images/home/tent.webp" containerBackgroundPosition="bottom"
                           router={router} destination="/canopy-tent" onClickScrollDown={() => scrollDownToNextSection(ref3)} home/>
            <BannerDisplay refD={ref3} title="UMBRELLA" subtitle="Easy to adjust any desired angle for shade coverage with a simple push button." url="/images/home/umbrella.webp" containerBackgroundPosition="bottom"
                           router={router} destination="/umbrella" home/>
        </React.Fragment>
    )
}

Home.getInitialProps = () => {
    return {
        homePage: true,
    };
};

export default withRouter(Home);
