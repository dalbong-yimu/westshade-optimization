import React, {useEffect, useRef, useState} from "react";

import {withRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";

import {Block} from "baseui/block";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {ChevronRight} from "baseui/icon";

import Button from "Components/button-n";
import {BannerDisplay, Section, SectionTitle} from "Components/sections";
import ThemeProvider from "Components/ThemeProvider";

import UMBRELLA from "Assets/spec-umbrella-chart.json";

const SectionBlock = ({title, content, displayList = []}) => {
    return (
        <Section upperContainerProps={{hidden: true}}
                 content={
                     <Block display="grid" gridRowGap={["24px", null, "64px"]}>
                         <SectionTitle.V2 category="Umbrella" title={title} content={content}/>
                         <Block display="grid" gridTemplateColumns={["1fr", null, "repeat(" + displayList.length + ", minmax(auto, 410px))"]} gridColumnGap="20px" gridRowGap="24px" margin="auto" alignItems="baseline">
                             {displayList.map(({url, alt, title, content, titleImageUrl}, index) =>
                                 <Block key={index} display={["flex", null, "grid"]} gridTemplateColumns="1fr" gridRowGap="16px" flexDirection={[index % 2 === 0 ? "row" : "row-reverse", null, "unset"]} justifyItems="center"
                                        overflow="hidden"
                                        $style={{gap: "16px"}}>
                                     <Block position="relative" width={["130px", null, "100%"]} height={["130px", null, "300px"]} backgroundColor="#F7F7F7" overflow="hidden" $style={{borderRadius: "16px"}}>
                                         <Image src={url} alt={alt} layout="fill" objectFit="cover"/>
                                     </Block>
                                     <Block display="grid" flex={1} gridTemplateRows="max-content" gridRowGap={["8px", null, "16px"]}>
                                         {titleImageUrl ? (
                                             <Block position="relative" marginRight="auto" marginLeft={["unset", null, "auto"]} height={["16px", null, "20px"]} $style={{aspectRatio: "7/2"}}>
                                                 <Image src={titleImageUrl} alt={title} width={84} height={24} layout="responsive" objectFit="contain"/>
                                             </Block>
                                         ) : (
                                             <Block marginRight="auto" marginLeft={["unset", null, "auto"]} width="fit-content" font={["MinXHeading16", "MinXHeading16", "MinXHeading20"]} color="MinXPrimaryText"
                                                    overrides={{
                                                        Block: {
                                                            style: {fontWeight: "500 !important", lineHeight: "1em !important"}
                                                        },
                                                    }}
                                             >{title}</Block>
                                         )}
                                         <Block justifyItems="flex-start" font="MinXParagraph16" color="MinXSecondaryText">{content}</Block>
                                     </Block>
                                 </Block>
                             )}
                         </Block>
                     </Block>
                 }
        />
    )
}

function Umbrella({router, size}) {
    const ref = useRef(null);

    const [compareColumnWidth, setCompareColumnWidth] = useState(0);
    const [signDisplay, setSignDisplay] = useState(true);

    useEffect(() => {
        if (size.width && ref && ref.current) setCompareColumnWidth(ref.current.clientWidth);
    }, [size, ref]);

    return (
        <ThemeProvider.V1>
            <Head>
                <title>Umbrella - WESTSHADE</title>
                <meta name="description" content="Best commercial umbrella in Southern California. Find your desired umbrella with different frames, different shape and different fabric!"/>
            </Head>
            <FlexGrid flexGridColumnCount={1} flexGridRowGap={["scale1600", "scale2400", "scale3200"]} paddingTop={["scale600", null, "scale1600"]} paddingBottom={["scale600", null, "scale1600"]}>
                <FlexGridItem>
                    <Section upperContainerProps={{hidden: true}}
                             content={
                                 <Block display="grid" gridRowGap={["24px", null, "64px"]}>
                                     <SectionTitle.V2 category="Umbrella" title="comparison of all ranges"
                                                      content="Westshade provide five umbrella ranges to meet your special needs. Check out the comparison to find the one that meets your need best."/>
                                     <Block position="relative" display="grid" gridTemplateColumns={["1fr 1fr", "1fr 2fr", "1fr 5fr"]}>
                                         <Block ref={ref} backgroundColor="white" paddingTop="24px" font="MinXParagraph14" color="MinXSecondaryText">
                                             <Block maxWidth="110px" minHeight="134px" marginBottom="40px" font="MinXHeading20" color="MinXPrimaryText">UMBRELLA SERIES</Block>
                                             <Block minHeight="22px" marginBottom="32px">OPEN SYSTEM</Block>
                                             <Block minHeight="110px" marginBottom="32px">SIZE</Block>
                                             <Block minHeight="44px" marginBottom="32px">FRAME</Block>
                                             <Block minHeight="44px" marginBottom="32px">FABRIC</Block>
                                             <Block minHeight="22px" marginBottom="32px">TILT</Block>
                                         </Block>
                                         <Block className="text-center" display="flex" flexDirection="row" overflow={["scrollX", "scrollX", "hidden"]}>
                                             {UMBRELLA.display.map(({title, picUrl, alt, buyUrl}, index) => {
                                                 return (
                                                     <Block key={index} width="100%" minWidth={compareColumnWidth + "px"} display="flex" flexDirection="column" alignItems="center" paddingTop="24px" paddingRight="10px" paddingLeft="10px"
                                                            backgroundColor={index % 2 ? "white" : "MinXBackground"}>
                                                         <Block display="grid" gridRowGap="16px" width="100%" minHeight="134px" marginBottom="40px" font="MinXParagraph16" color="MinXPrimaryText">
                                                             <Block position="relative" width="64px" height="54px" marginRight="auto" marginLeft="auto">
                                                                 <Image src={picUrl} alt={alt} layout="fill" objectFit="contain"/>
                                                             </Block>
                                                             <Block>{title}</Block>
                                                             <Button height="24px" font="MinXLabel14" text='Buy' bundle="primary" buttonStyle={{paddingRight: "20px", paddingLeft: "20px"}} onClick={() => router.push(buyUrl)}/>
                                                         </Block>
                                                         <Block minHeight="22px" marginBottom="32px" font="MinXLabel14" color="MinXPrimaryText">
                                                             {UMBRELLA.open_system[index].map((os, i) => <Block key={i}>{os}</Block>)}
                                                         </Block>
                                                         <Block minHeight="110px" marginBottom="32px" font="MinXLabel14" color="MinXPrimaryText">
                                                             {UMBRELLA.size[index].map((s, i) => <Block key={i}>{s}</Block>)}
                                                         </Block>
                                                         <Block minHeight="44px" marginBottom="32px" font="MinXLabel14" color="MinXPrimaryText">
                                                             {UMBRELLA.frame[index].map((f, i) => <Block key={i}>{f}</Block>)}
                                                         </Block>
                                                         <Block minHeight="44px" marginBottom="32px" font="MinXLabel14" color="MinXPrimaryText">
                                                             {UMBRELLA.fabric[index].map((f, i) => <Block key={i}>{f}</Block>)}
                                                         </Block>
                                                         <Block minHeight="22px" marginBottom="32px">
                                                             <Block width="22px" height="22px">
                                                                 {UMBRELLA.tilt[index] ? (
                                                                     <Image src="/images/umbrella/related.webp" alt="related" layout="responsive" objectFit="contain" width={24} height={24}/>
                                                                 ) : (
                                                                     <Image src="/images/umbrella/unrelated.webp" alt="unrelated" layout="responsive" objectFit="contain" width={24} height={24}/>
                                                                 )}
                                                             </Block>
                                                         </Block>
                                                     </Block>
                                                 )
                                             })}
                                         </Block>
                                         {signDisplay && size.width < 673 ? (
                                             <Block position="absolute" width="100%" height="100%" onClick={() => setSignDisplay(false)}>
                                                 <Block position="absolute" width="132px" height="84px" backgroundColor="rgba(0,0,0,0.6)" top={0} right={0} bottom={0} left={0} display="flex" justifyContent="center" alignItems="center"
                                                        margin="auto"
                                                        overrides={{
                                                            Block: {
                                                                style: {
                                                                    borderTopRightRadius: "8px",
                                                                    borderBottomRightRadius: "8px",
                                                                    borderBottomLeftRadius: "8px",
                                                                    borderTopLeftRadius: "8px",
                                                                    ":hover": {cursor: 'pointer'}
                                                                },
                                                            },
                                                        }}
                                                 >
                                                     <Block position="relative" width="50px" height="50px">
                                                         <Image src="/images/umbrella/slide.webp" alt="Slide Sign" layout="fill" objectFit="contain"/>
                                                     </Block>
                                                 </Block>
                                             </Block>
                                         ) : null}
                                     </Block>
                                 </Block>
                             }
                    />
                </FlexGridItem>
                <FlexGridItem>
                    <SectionBlock title="Open Systems" content="There are three types of open systems you can choose from - push up, pulley lift, and crank lift depending on the umbrella range."
                                  displayList={[
                                      {
                                          url: "/images/umbrella/open-push-up.webp",
                                          alt: "open push up",
                                          title: "Push up",
                                          content: "Simply pushing the umbrella upwards and open from the hub. Effortlessly open your umbrella in 15 seconds."
                                      },
                                      {
                                          url: "/images/umbrella/open-pulley.webp",
                                          alt: "open pulley",
                                          title: "Pulley lift",
                                          content: "Easier than push up system and raise your umbrella in a few seconds with this heavy duty pulley lift system with ease."
                                      },
                                      {
                                          url: "/images/umbrella/open-crank.webp",
                                          alt: "open crank",
                                          title: "Crank lift",
                                          content: "Rotate the crank to open the umbrella and continue when it is open to tilt the umbrella (tilt umbrella only)."
                                      }
                                  ]}
                    />
                </FlexGridItem>
                <FlexGridItem>
                    <SectionBlock title="Frames" content="There are two types of frames you can choose from - fiberglass and aluminum when available."
                                  displayList={[
                                      {
                                          url: "/images/umbrella/frame-aluminum.webp",
                                          alt: "frame aluminum",
                                          title: "Aluminum",
                                          content: "The lightweight, durable, corrosion resistance aluminum frame comes with an excellent finish. It is strong and will not break in high winds."
                                      },
                                      {
                                          url: "/images/umbrella/frame-fiberglass.webp",
                                          alt: "frame fiberglass",
                                          title: "Fiberglass",
                                          content: "The lightweight, flexible, and strong fiberglass allows the frame to bend without breaking, even in the most severe storms."
                                      }
                                  ]}
                    />
                </FlexGridItem>
                <FlexGridItem>
                    <SectionBlock title="Fabric" content="There are two brands of fabric you can choose from - SDP and AGORA when available."
                                  displayList={[
                                      {
                                          url: "/images/umbrella/fabric-sdp.webp",
                                          alt: "fabric sdp",
                                          title: "SDP",
                                          content: "The SDP fabric is made of solution dyed polyester with a UPF 50+ protection. It is water repellent, stain resistant."
                                      },
                                      {
                                          url: "/images/umbrella/fabric-agora.webp",
                                          alt: "fabric agora",
                                          title: "AGORA",
                                          content: "The AGORA fabric is made of solution dyed acrylic with a UPF 50+ protection. AGORA has a longer lifespan than SDP.",
                                          titleImageUrl: "/images/icon/icon-agora.png"
                                      }
                                  ]}
                    />
                </FlexGridItem>
                <FlexGridItem>
                    <Section upperContainerProps={{hidden: true}}
                             content={
                                 <BannerDisplay title="CUSTOM PRINTING" subtitle="Make your umbrellas special for your activity." url="/images/umbrella/series-custom-printing.webp" alt="custom printing"
                                                containerHeight={["250px", "360px", "500px"]} containerMarginBottom={["12px", "20px"]} containerBackground="transparent" containerBackgroundPosition="bottom"
                                                textColor={"#262626"} subTextColor={"#8C8C8C"}
                                                renderButton={
                                                    <Button bundle="primary" height={["36px", null, "40px"]} font={["MinXLabel14", "MinXLabel16"]} text='Learn More'
                                                            endEnhancer={() => <ChevronRight size={24}/>} onClick={() => router.push("/custom-printing/umbrella")}
                                                    />
                                                }
                                 />
                             }
                    />
                </FlexGridItem>
            </FlexGrid>
        </ThemeProvider.V1>
    )
}

export default withRouter(Umbrella);
