import React, {useEffect, useRef, useState} from "react";

import {withRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";

import {Block} from "baseui/block";

import MButton from "../../../components/button-n";

const SectionCard = ({router, src, alt, title, content, destination}) => {
    return (
        <Block minHeight={"280px"} display={["grid", "grid", "flex"]} flexDirection={["column", "column", "row-reverse"]} alignItems={["", "", "center"]} justifyContent={["", "", "space-between"]}
               gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "unset"]} gridRowGap={["20px", "24px", "unset"]} marginBottom={["16px", "16px", "20px"]} paddingTop={["32px", "48px", "20px"]} paddingRight={["16px", "24px", "0px"]}
               paddingBottom={["32px", "48px", "0px"]}
               paddingLeft={["16px", "24px", "40px"]}
               overrides={{
                   Block: {
                       style: {
                           boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.05)",
                           ":last-child": {marginBottom: "60px"}
                       },
                   },
               }}
        >
            <Block position="relative" width="100%" maxWidth={["256px", "320px", "380px"]} marginRight={["auto", "auto", "0px"]} marginBottom={["12px", "24px", "0px"]} marginLeft="auto">
                <Image src={src} alt={alt} layout="responsive" width={1685} height={1053} quality={100}/>
            </Block>
            <Block>
                <Block marginBottom={["12px", "12px", "16px"]} font={["MinXTitle20", "MinXTitle28", "MinXTitle32"]} color="MinXPrimaryText">{title}</Block>
                <Block maxWidth="400px" marginBottom={["12px", "12px", "16px"]} font={["MinXParagraph14", "MinXParagraph16", "MinXParagraph20"]} color="MinXPrimaryText">{content}</Block>
                <MButton type="outline" display="block" width="72px" height="32px" font="MinXLabel14" color="MinXPrimaryText"
                         buttonStyle={{
                             paddingTop: "0px !important",
                             paddingRight: "0px !important",
                             paddingBottom: "0px !important",
                             paddingLeft: "0px !important",
                             borderColor: `#262626 !important`,
                             ":hover": {backgroundColor: `rgba(0, 0, 0, 0.05) !important`},
                             ":active": {backgroundColor: `rgba(0, 0, 0, 0.1) !important`}
                         }}
                         onClick={() => router.push(destination)} text={"Buy"}
                />
            </Block>
        </Block>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function Custom_Printing_Table_Cover({router}) {
    const refBanner = useRef(null);

    const [circleAD, setCircleAD] = useState(0);
    const [circleBD, setCircleBD] = useState(0);

    const size = useWindowSize();

    const goBuyingPage = () => router.push({pathname: "/custom-print/table-cover/fitted-table-cover"});

    useEffect(() => {
        if (refBanner && refBanner.current) {
            setCircleAD(refBanner.current.clientHeight);
            setCircleBD(refBanner.current.clientWidth / 2);
        }
    }, [size]);

    return (
        <React.Fragment>
            <Head>
                <title>Custom Printing Table Cover - WESTSHADE</title>
                {/*    <meta name="description"*/}
                {/*          content="Industry Leading Dependable Canopies & Umbrellas Welcome to the #1 dependable canopy manufacturer in the U.S! We are your exclusive supplier of indoor."/>*/}
            </Head>
            <Block ref={refBanner} position="relative" alignItems="center" paddingTop={["32px", "40px", "64px"]} paddingRight="30px" paddingBottom={["32px", "40px", "64px"]} paddingLeft="30px"
                   overflow="hidden"
                   overrides={{
                       Block: {
                           props: {
                               className: "container-display"
                           },
                           style: {
                               background: "linear-gradient(95.25deg, rgba(74, 223, 232, 0.85) 0%, rgba(194, 251, 255, 0) 52.6%, rgba(74, 223, 232, 0.85) 100%), #C2FBFF;"
                           }
                       },
                   }}
            >
                <Block maxWidth={["262px", "450px", "659px"]} marginBottom={["8px", "16px", "20px"]} font={["MinXTitle32", "MinXTitle44", "MinXTitle64"]} color="MinXPrimaryText"
                       overrides={{
                           Block: {
                               style: {textAlign: "center", zIndex: 1}
                           },
                       }}
                >
                    Customize It Your Way
                </Block>
                <MButton type="outline" width={["200px", "238px", "289px"]} height={["30px", "44px", "52px"]} marginBottom={["40px", "64px", "80px"]}
                         font={["MinXLabel14", "MinXLabel16", "MinXLabel20"]} color="MinXPrimaryText" text="Create My Table Cover"
                         buttonStyle={{
                             borderColor: `#262626 !important`,
                             backgroundColor: 'transparent !important',
                             ":hover": {backgroundColor: `rgba(0, 0, 0, 0.05) !important`},
                             ":active": {backgroundColor: `rgba(0, 0, 0, 0.1) !important`}
                         }}
                         overrides={{
                             Block: {
                                 style: {zIndex: 1}
                             },
                         }}
                         onClick={() => goBuyingPage()}
                />
                <Block position="relative" width="100%" height={["125px", "173px", "180px"]} marginRight="auto" marginLeft="auto"
                       overrides={{
                           Block: {
                               style: {zIndex: 1}
                           },
                       }}
                >
                    <Image src="images/custom-printing/table-cover/stretch-table-cover.png" alt="stretch table cover" layout="fill" objectFit="contain" quality={100}/>
                </Block>
                <div style={{position: "absolute", top: "-" + circleAD / 2 + "px", right: 0, width: circleAD + "px", height: circleAD + "px", background: "#97F02B", opacity: "0.8", filter: "blur(" + circleAD / 2 + "px)",}}/>
                <div style={{position: "absolute", bottom: "-" + circleBD / 2 + "px", left: 0, width: circleBD + "px", height: circleBD + "px", background: "#2275F2", opacity: "0.8", filter: "blur(" + circleBD / 2 + "px)",}}/>
            </Block>
            <Block paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]}
                   overrides={{
                       Block: {
                           props: {
                               className: "container-display"
                           }
                       },
                   }}
            >
                <Block display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between" marginBottom={["12px", "24px", "40px"]}>
                    <Block marginBottom="12px" font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >DESIGNED FOR<br/>YOUR SPECIALLY</Block>
                    <Block maxWidth="320px" marginBottom={["0", "0", "12px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        Westshade provides free mockup service. Give us your idea and we will give you the product you want.
                    </Block>
                </Block>
                <Block position="relative" width="100%" maxWidth="1920px" marginRight="auto" marginBottom={["12px", "24px", "32px"]} marginLeft="auto">
                    <Image src="images/custom-printing/table-cover/table-covers.jpg" alt="custom printing table covers" layout="responsive" width={1440} height={400} quality={100}/>
                </Block>
            </Block>
            <Block paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]}
                   overrides={{
                       Block: {
                           props: {
                               className: "container-display"
                           }
                       },
                   }}
            >
                <Block display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between" marginBottom={["12px", "24px", "40px"]}>
                    <Block width={["unset", "unset", "450px"]} marginBottom="12px" font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >FIT YOUR NEED AS WELL AS YOUR TABLE</Block>
                    <Block maxWidth="320px" marginBottom={["0", "0", "12px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        Westshade provides two types of table cover - fitted table cover and stretch table cover.
                    </Block>
                </Block>
                <SectionCard router={router} title={"Fitted Table Cover"} content={"The fitted table cover is made of the same fabric as canopy tent and features two zips at the back."}
                             src={"images/custom-printing/table-cover/back-zip.png"} alt={"back zip table cover"}
                             destination={"/products/market-umbrellas/santorini-aluminum-umbrella"}
                />
                <SectionCard router={router} title={"Stretch Table Cover"} content={"The stretch table cover is made of a lightweight stretch fabric. It secures itself with pocket at the bottom."}
                             src={"images/custom-printing/table-cover/self-secure.jpg"} alt={"self secure table cover"}
                             destination={"/products/cantilever-umbrellas/catalina-umbrella"}
                />
            </Block>
            <Block paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]}
                   overrides={{
                       Block: {
                           props: {
                               className: "container-display"
                           },
                       },
                   }}
            >
                <Block display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between" marginBottom={["32px", "40px", "72px"]}>
                    <Block marginBottom="12px" font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >FABRIC CLOSE LOOK</Block>
                    <Block maxWidth="320px" marginBottom={["0", "0", "12px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        Take a closer look at the two fabric and choose the one that suits your need.
                    </Block>
                </Block>
                <Block display="grid" gridColumnGap={["", "16px", "20px"]} gridRowGap={["8px", "12px", "16px"]} gridTemplateAreas={[`"a1" "a2" "a3" "b1" "b2" "b3"`, `"a1 b1" "a2 b2" "a3 b3"`,]}
                       overrides={{
                           Block: {
                               style: {textAlign: "center"}
                           },
                       }}
                >
                    <Block maxWidth={["232px", "216px", "376px"]} marginRight="auto" marginLeft="auto" font={["MinXHeading20", "MinXHeading20", "MinXHeading28"]} color={"MinXPrimaryText"} gridArea="a1">
                        320 gsm, 500D polyester with PVC coating
                    </Block>
                    <Block font="MinXParagraph16" color={"MinXPrimaryText"} gridArea="a2">This long-lasting fabric is used for canopy tent.</Block>
                    <Block position="relative" width="100%" height={["165px", "210px", "250px"]} gridArea="a3" marginBottom={["16px", "0px"]}>
                        <img width="100%" height="100%" src="/images/custom-printing/table-cover/fabric.png" alt="fabric" style={{objectFit: "cover"}}/>
                    </Block>
                    <Block maxWidth={["232px", "216px", "376px"]} marginRight="auto" marginLeft="auto" font={["MinXHeading20", "MinXHeading20", "MinXHeading28"]} color={"MinXPrimaryText"} gridArea="b1">
                        229 gsm stretch fabric
                    </Block>
                    <Block font="MinXParagraph16" color={"MinXPrimaryText"} gridArea="b2">This stretch fabric is firm fitting and lightweight.</Block>
                    <Block position="relative" width="100%" height={["165px", "210px", "250px"]} gridArea="b3">
                        <img width="100%" height="100%" src="/images/custom-printing/table-cover/stretch.gif" alt="fabric" style={{objectFit: "cover"}}/>
                    </Block>
                </Block>
            </Block>
            <Block paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]} marginBottom={["40px !important", "80px !important", "120px !important"]}
                   overrides={{
                       Block: {
                           props: {
                               className: "container-display"
                           },
                       },
                   }}
            >
                <Block display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between" marginBottom={["32px", "40px", "72px"]}>
                    <Block marginBottom="12px" font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >MULTIPLE SIZES</Block>
                    <Block maxWidth="320px" marginBottom={["0", "0", "12px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        Either a table for one person or a table for two, we have a size for you.
                    </Block>
                </Block>
                <Block display="grid" gridColumnGap={["", "16px", "20px"]} gridRowGap={["24px", "32px"]} gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                       overrides={{
                           Block: {
                               style: {textAlign: "center"}
                           },
                       }}
                >
                    <Block display="flex" flexDirection="column" alignItems="center">
                        <Block position="relative" width="100%" height={["123px", "207px"]} marginRight="auto" marginBottom={["8px", "8px", "16px"]} marginLeft="auto">
                            <Image src="images/custom-printing/table-cover/size-small.png" alt="size small table cover" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block marginBottom={["12px", "12px", "16px"]} font={["MinXLabel16", "MinXLabel16", "MinXLabel20"]} color="MinXPrimaryText">Small</Block>
                        <Block font={["MinXParagraph14", "MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">L=4’, W=2’, H=2’4’’</Block>
                    </Block>
                    <Block display="flex" flexDirection="column" alignItems="center">
                        <Block position="relative" width="100%" height={["123px", "207px"]} marginRight="auto" marginBottom={["8px", "8px", "16px"]} marginLeft="auto">
                            <Image src="images/custom-printing/table-cover/size-medium.png" alt="size medium table cover" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block marginBottom={["12px", "12px", "16px"]} font={["MinXLabel16", "MinXLabel16", "MinXLabel20"]} color="MinXPrimaryText">Medium</Block>
                        <Block font={["MinXParagraph14", "MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">L=6’1’’, W=2’6’’, H=2’4’’</Block>
                    </Block>
                    <Block display="flex" flexDirection="column" alignItems="center">
                        <Block position="relative" width="100%" height={["123px", "207px"]} marginRight="auto" marginBottom={["8px", "8px", "16px"]} marginLeft="auto">
                            <Image src="images/custom-printing/table-cover/size-large.png" alt="size large table cover" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block marginBottom={["12px", "12px", "16px"]} font={["MinXLabel16", "MinXLabel16", "MinXLabel20"]} color="MinXPrimaryText">Large</Block>
                        <Block font={["MinXParagraph14", "MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">L=8’, W=2’6’’, H=2’4’’</Block>
                    </Block>
                </Block>
            </Block>
        </React.Fragment>
    )
}

Custom_Printing_Table_Cover.getInitialProps = (context) => {
    return {
        newFooter: true,
    };
};

export default withRouter(Custom_Printing_Table_Cover);