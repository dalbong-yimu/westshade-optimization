import React, {useEffect, useState} from "react";

import {withRouter} from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import {Block} from "baseui/block";
import ChevronRight from "baseui/icon/chevron-right";

import BannerDisplay from "../../../components/sections/BannerDisplay";
import MButton from "../../../components/button-n";
import Utils from "../../../utils/utils";

import styles from "../umbrella.module.scss";

const utils = new Utils();

function Marco({router}) {
    const [productList, setProductList] = useState([]);

    const goBuyingPage = () => router.push({pathname: "/products/market-umbrellas/marco-umbrella"});

    useEffect(async () => {
        let products0 = await utils.getProductByWooId(19212);
        setProductList([products0, products0, products0, products0]);
    }, []);

    const ProductItem = ({detail}) => {
        let imageSrc = '/images/default-product.jpg';
        let link = 'https://www.westshade.com/products/accessories/?id=' + detail.id;

        const setMainImage = (images) => {
            if (!images || images.length === 0) return;
            imageSrc = images[0].src.replace(/^http:\/\/54\.212\.246\.17/i, "https://checkout.westshade.com");
        };

        if (detail.hasOwnProperty("image")) {
            setMainImage([detail.image]);
        } else if (detail.hasOwnProperty("images")) {
            setMainImage(detail.images);
        }

        return (
            <Block display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                <Block display="flex" flexDirection="column" alignItems="center" flex={1}>
                    <Block position="relative" width="100%" maxHeight="120px" marginBottom={["8px", "12px", "16px"]}>
                        <img src={imageSrc} width="100%" height="100%" style={{objectFit: "contain"}}/>
                    </Block>
                    <Block marginBottom="12px" font="MinXLabel14" color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {textAlign: "center"}
                               },
                           }}
                    >{detail.name}</Block>
                </Block>
                <Block width={"100%"} display="flex" flexDirection="column" alignItems="center">
                    <Block marginBottom={["8px", "12px", "16px"]} font="MinXLabel12" color="MinXSecondaryText">{"$" + parseFloat(detail.price).toFixed(2)}</Block>
                    <MButton type="solid" height="28px" marginRight="auto" marginLeft="auto" font="MinXLabel12" text='Buy'
                             buttonStyle={{paddingTop: "8px !important", paddingRight: "20px !important", paddingBottom: "8px !important", paddingLeft: "20px !important"}}
                             onClick={() => router.push(link)}
                    />
                </Block>
            </Block>
        )
    }

    return (
        <React.Fragment>
            <Head>
                <title>Umbrella Marco - WESTSHADE</title>
                {/*    <meta name="description"*/}
                {/*          content="Industry Leading Dependable Canopies & Umbrellas Welcome to the #1 dependable canopy manufacturer in the U.S! We are your exclusive supplier of indoor."/>*/}
            </Head>
            <Block position="sticky" top={["48px", "48px", "96px"]} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
                   height={["44px", "60px"]} paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]} backgroundColor="white"
                   font={["MinXLabel14", "MinXLabel14", "MinXLabel16"]} color="MinXPrimaryText"
                   overrides={{
                       Block: {
                           style: {zIndex: 2, boxShadow: "rgb(0 0 0 / 14%) 0px 4px 5px 0px"},
                       },
                   }}>
                <div>Umbrella Marco</div>
                <Block display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Block display="flex" justifyContent="center" alignItems="center" width="56px" height={["24px", "40px"]} marginRight="16px" marginLeft="16px"
                           font={["MinXLabel14", "MinXLabel14", "MinXLabel16"]} color="MinXPrimaryText"
                    >
                        <Link href={{pathname: "/umbrella/spec", query: {primary: 3}}} as="/umbrella/spec">Spec</Link>
                    </Block>
                    <MButton width={["105px", "113px"]} height={["24px", "40px"]} font={["MinXLabel14", "MinXLabel14", "MinXLabel16"]} text="Buy Now"
                             onClick={() => goBuyingPage()}
                    />
                </Block>
            </Block>
            <BannerDisplay title="MARCO" subtitle="Push up outdoor umbrella" url="images/umbrella/marco/marco_display.png" alt="marco display" imageObjectFit="contain"
                           titleMarginBottom={["12px", "16px", "20px"]} titleFont={["MinXTitle28", "MinXTitle32", "MinXTitle44"]} subtitleFont={["MinXSubtitle16", "MinXSubtitle20", "MinXSubtitle24"]}
                           containerStyle={{display: "flex", justifyContent: "center", paddingBottom: "0 !important"}} containerHeight={["160px", "180px", "200px"]} containerMarginBottom={["24px", "40px", "60px"]}
                           containerBackground="transparent" backgroundColor="#C5E4F2" textColor="MinXPrimaryText" renderButton={<></>}
            />
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
                    >SAFE TO ENJOY<br/>THE OUTDOOR</Block>
                    <Block maxWidth="320px" marginBottom={["0", "0", "12px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        Features with UPF 50+ protected premium fabric cover. Available in two fabrics, European made Acrylic Polyester.
                    </Block>
                </Block>
                <Block position="relative" width="100%" maxWidth="960px" marginRight="auto" marginBottom={["12px", "24px", "32px"]} marginLeft="auto">
                    <Image src="images/umbrella/marco/roof.png" alt="marco roof" layout="responsive" width={912} height={324} quality={100}/>
                </Block>
                <Block display="flex" flexDirection={["column", "row"]} justifyContent="space-around" width="100%" maxWidth="662px" marginRight="auto" marginLeft="auto">
                    <Block display="flex" flexDirection={["row", "column"]} alignItems="center" marginRight="auto" marginBottom={["32px", "unset"]} marginLeft="auto">
                        <Block position="relative" width={["60px", "80px"]} height={["60px", "80px"]} marginRight={["22px", "0"]} marginBottom={["0", "24px", "32px"]}>
                            <Image src="images/umbrella/marco/icon_upf.png" alt="marco udf" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block width="100%" maxWidth={["unset", "167px"]} color="MinXPrimaryText"
                               overrides={{
                                   Block: {
                                       props: {
                                           className: styles["text-section-card"]
                                       },
                                   },
                               }}
                        >
                            <Block marginBottom={["4px", "20px"]} font={["MinXHeading14", "MinXHeading16", "MinXHeading20"]}>UPF 50+</Block>
                            <Block font="MinXParagraph14">The fabric blocks 98% harmful UV rays</Block>
                        </Block>
                    </Block>
                    <Block display="flex" flexDirection={["row", "column"]} alignItems="center" marginRight="auto" marginBottom={["32px", "unset"]} marginLeft="auto">
                        <Block position="relative" width={["60px", "80px"]} height={["60px", "80px"]} marginRight={["22px", "0"]} marginBottom={["0", "24px", "32px"]}>
                            <Image src="images/umbrella/marco/icon_water.png" alt="marco water" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block width="100%" maxWidth={["unset", "167px"]} color="MinXPrimaryText"
                               overrides={{
                                   Block: {
                                       props: {
                                           className: styles["text-section-card"]
                                       },
                                   },
                               }}
                        >
                            <Block marginBottom={["4px", "20px"]} font={["MinXHeading14", "MinXHeading16", "MinXHeading20"]}>Waterproof</Block>
                            <Block maxWidth={["unset", "167px"]} font="MinXParagraph14">The fabric has a waterproof treatment</Block>
                        </Block>
                    </Block>
                    <Block display="flex" flexDirection={["row", "column"]} alignItems="center" marginRight="auto" marginBottom={["unset"]} marginLeft="auto">
                        <Block position="relative" width={["60px", "80px"]} height={["60px", "80px"]} marginRight={["22px", "0"]} marginBottom={["0", "24px", "32px"]}>
                            <Image src="images/umbrella/marco/icon_wind.png" alt="marco wind" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        <Block width="100%" maxWidth={["unset", "167px"]} color="MinXPrimaryText"
                               overrides={{
                                   Block: {
                                       props: {
                                           className: styles["text-section-card"]
                                       },
                                   },
                               }}
                        >
                            <Block marginBottom={["4px", "20px"]} font={["MinXHeading14", "MinXHeading16", "MinXHeading20"]}>Wind resistant</Block>
                            <Block maxWidth={["unset", "167px"]} font="MinXParagraph14">The fabric stands a 50-70km/h wind</Block>
                        </Block>
                    </Block>
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
                <Block marginBottom={["32px", "64px"]} font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                       overrides={{
                           Block: {
                               style: {lineHeight: "0.8 !important"}
                           },
                       }}
                >NO DETAILS<br/>WILL BE MISSED</Block>
                <Block width="100%" maxWidth="960px" marginRight={["unset", "auto"]} marginLeft={["unset", "auto"]} display="grid" gridTemplateAreas={["\"a\"\n" + "\"b\"\n" + "\"c\"\n", "\"a b\"\n" + "\"c b\"\n", "\"a b c\""]}
                       gridColumnGap={["unset", "18px", "64px"]} gridRowGap={["32px", "40px", "0"]}>
                    <Block display="flex" flexDirection="column" alignItems="center" justifySelf={["start", "center"]} gridArea="a" font={["MinXLabel14", "MinXLabel16", "MinXLabel20"]}>
                        <Block position="relative" width={["215px", "215px", "326px"]} height={["138px", "138px", "211px"]} marginBottom={["12px", "16px", "24px"]} overflow="hidden"
                               overrides={{
                                   Block: {
                                       style: {borderRadius: "32px"}
                                   },
                               }}>
                            <Image src="images/umbrella/marco/detail1.png" alt="marco detail" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        Stainless steel fixings
                    </Block>
                    <Block display="flex" flexDirection="column" alignItems="center" justifySelf={["end", "center"]} gridArea="b" font={["MinXLabel14", "MinXLabel16", "MinXLabel20"]}>
                        <Block position="relative" width={["204px", "204px", "240px"]} height={["268px", "268px", "316px"]} marginBottom={["12px", "16px", "24px"]} overflow="hidden"
                               overrides={{
                                   Block: {
                                       style: {borderRadius: "32px"}
                                   },
                               }}>
                            <Image src="images/umbrella/marco/detail2.png" alt="marco detail" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        Stainless steel fixings
                    </Block>
                    <Block display="flex" flexDirection="column" alignItems="center" justifySelf={["start", "center"]} gridArea="c" font={["MinXLabel14", "MinXLabel16", "MinXLabel20"]}>
                        <Block position="relative" width={["200px", "215px", "200px"]} height={["200px", "215px", "200px"]} marginBottom={["12px", "16px", "24px"]} overflow="hidden"
                               overrides={{
                                   Block: {
                                       style: {borderRadius: "32px"}
                                   },
                               }}
                        >
                            <Image src="images/umbrella/marco/detail3.png" alt="marco detail" layout="fill" objectFit="contain" quality={100}/>
                        </Block>
                        Stainless steel fixings
                    </Block>
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
                    <Block marginBottom="12px" font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >6 PREMADE COLORS</Block>
                    <Block width="100%" maxWidth="320px" marginBottom={["4px", "6px", "8px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        <div>We provide 6 premade colors. You can also custom print any color or pattern.</div>
                        <Block color="MinXPrimaryText">
                            <Link color="inherit" href="/custom-printing/umbrella">Learn about Custom Printing ></Link>
                        </Block>
                    </Block>
                </Block>
                <Block position="relative" maxWidth="960px" width="100%" height={["138px", "282px", "546px"]} marginRight="auto" marginBottom="12px" marginLeft="auto" overflow="hidden"
                       overrides={{
                           Block: {
                               style: {borderRadius: "32px"}
                           },
                       }}
                >
                    <Image src="images/umbrella/marco/colors.jpg" alt="marco color" layout="fill" objectFit="cover" quality={100}/>
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
                <Block marginBottom={["32px", "64px"]} font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                       overrides={{
                           Block: {
                               style: {lineHeight: "0.8 !important"}
                           },
                       }}
                >SIZE AND SHAPES</Block>
                <Block position="relative" maxWidth="366px" width="100%" marginRight="auto" marginBottom="12px" marginLeft="auto" overflow="hidden"
                       overrides={{
                           Block: {
                               style: {borderRadius: "32px"}
                           },
                       }}
                >
                    <Image src="images/umbrella/marco/size.png" alt="marco size 6.5'" layout="responsive" objectFit="contain" width={1193} height={643} quality={100}/>
                </Block>
                <Block marginRight="auto" marginBottom="12px" marginLeft="auto" font="MinXLabel16" color="MinXPrimaryText">6.5’ Square</Block>
                <MButton type="solid" height="40px" marginRight="auto" marginLeft="auto" font="MinXLabel16" text='Buy'
                         buttonStyle={{paddingTop: "12px !important", paddingRight: "32px !important", paddingBottom: "12px !important", paddingLeft: "32px !important"}}
                         endEnhancer={() => <ChevronRight size={24}/>} onClick={() => router.push("/products/market-umbrellas/marco-umbrella")}
                />
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
                    >CUSTOMIZE IT<br/>YOUR WAY</Block>
                    <Block width="100%" maxWidth="320px" marginBottom={["4px", "6px", "8px"]} font={["MinXParagraph14", "MinXParagraph16"]} color="MinXSecondaryText">
                        <div>Showcase your design, attach your logo, advertise your product, present eye-catching pictures, the choices are limitless.</div>
                        <Block color="MinXPrimaryText">
                            <Link color="inherit" href="/custom-printing/umbrella">Learn more ></Link>
                        </Block>
                    </Block>
                </Block>
                <Block width="100%" maxWidth="960px" marginRight={["unset", "unset", "auto"]} marginLeft={["unset", "unset", "auto"]} display="grid" gridTemplateAreas={["\"b\"\n" + "\"a\"\n", "\"b\"\n" + "\"a\"\n", "\"a b\""]}
                       gridRowGap={["24px", "32px", "0"]} alignItems="end"
                >
                    <Block position="relative" justifySelf={["start", "start", "center"]} gridArea="a" width={["243px", "345px", "524px"]}>
                        <Image src="images/umbrella/marco/custom1.jpg" alt="marco custom" layout="responsive" objectFit="contain" width={1200} height={1000} quality={100}/>
                    </Block>
                    <Block position="relative" justifySelf={["end", "end", "center"]} gridArea="b" width={["189px", "290px", "368px"]}>
                        <Image src="images/umbrella/marco/custom2.jpg" alt="marco custom" layout="responsive" objectFit="contain" width={1200} height={1000} quality={100}/>
                    </Block>
                </Block>
            </Block>
            {productList.length > 0 ? (
                <Block paddingRight={["16px", "16px", "24px"]} paddingLeft={["16px", "16px", "24px"]}
                       overrides={{
                           Block: {
                               props: {
                                   className: "container-display"
                               }
                           },
                       }}
                >
                    <Block marginBottom={["32px", "64px"]} font={["MinXHeading32", "MinXHeading44", "MinXHeading64"]} color="MinXPrimaryText"
                           overrides={{
                               Block: {
                                   style: {lineHeight: "0.8 !important"}
                               },
                           }}
                    >ACCESSORIES</Block>
                    <Block maxWidth="960px" width="100%" display="grid" gridTemplateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gridColumnGap="16px" gridRowGap="32px" marginRight="auto" marginBottom="32px"
                           marginLeft="auto">
                        {productList.map((item, index) => {
                            return (
                                <ProductItem key={index} detail={item}/>
                            )
                        })}
                    </Block>
                </Block>
            ) : null}
        </React.Fragment>
    )
}

Marco.getInitialProps = () => {
    return {
        newFooter: true,
    };
};

export default withRouter(Marco);