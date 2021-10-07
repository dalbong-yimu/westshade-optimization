import React from "react";

import Image from "next/image";

import {Block} from "baseui/block";
import {Button, SHAPE} from "baseui/button";
import ChevronRight from "baseui/icon/chevron-right";
import ArrowRight from 'baseui/icon/arrow-right'
import ArrowDown from 'baseui/icon/arrow-down'

const banner = ({
                    refD,
                    title,
                    subtitle,
                    containerHeight,
                    containerMarginBottom,
                    url,
                    router,
                    destination,
                    showScrollDown,
                    onClickScrollDown,
                    home,
                    arrowButton,
                    textButton,
                    textColor,
                    buttonBackgroundColor,
                    buttonHoverColor,
                    buttonActiveColor,
                    renderButton
                }) => {
    return (
        <Block ref={refD} position="relative" justifyContent="flex-end" alignItems="flex-start"
               width="100%"
               height={containerHeight ? containerHeight : ["480px", "660px", "100vh"]}
               marginTop={home ? ["-48px", "-48px", "-96px"] : null}
               marginBottom={containerMarginBottom ? containerMarginBottom : ["16px", "16px", "0px"]}
               paddingBottom={["40px", "60px", "70px"]}
               paddingLeft={["24px", "40px", "calc((100% + 24px)/12)"]}
               backgroundColor="rgba(0,0,0,0.2)"
               overrides={{
                   Block: {
                       props: {
                           className: home ? "container-display-home scroll-section" : containerMarginBottom ? "container-display-no-margin-bottom" : "container-display"
                       },
                       style: {":not(:first-child)": {marginTop: "0px"}, ":last-child": {marginBottom: "0px"}}
                   },
               }}
        >
            <div className="background-image">
                <Image src={url} alt="home-page-display" layout="fill" objectFit="cover" quality={100}/>
            </div>
            <Block maxWidth={["213px", "298px"]} marginBottom={["8px", "12px", "16px"]} font={["MinXTitle32", "MinXTitle44", "MinXTitle64"]}
                   color={textColor ? textColor : "MinXPrimaryTextAlt"}
                   overrides={{
                       Block: {
                           props: {
                               style: {lineHeight: "0.85em"}
                           }
                       },
                   }}
            >
                {title}
            </Block>
            <Block maxWidth={["260px", "320px", "400px"]} marginBottom={["12px", "16px"]}
                   font={["MinXSubtitle16", "MinXSubtitle16", 'MinXSubtitle20']}
                   color={textColor ? textColor : "MinXPrimaryTextAlt"}
            >
                {subtitle}
            </Block>
            {renderButton ? renderButton : (
                <>
                    <Block display={arrowButton ? "block" : textButton ? "none" : ["block", "block", "block", "none"]} width="88px" height="46px">
                        <Button shape={SHAPE.pill}
                                overrides={{
                                    BaseButton: {
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            fontSize: "inherit",
                                            fontWeight: "inherit",
                                            lineHeight: "inherit",
                                            color: "inherit",
                                            borderTopWidth: "1px",
                                            borderRightWidth: "1px",
                                            borderBottomWidth: "1px",
                                            borderLeftWidth: "1px",
                                            borderTopStyle: "solid",
                                            borderRightStyle: "solid",
                                            borderBottomStyle: "solid",
                                            borderLeftStyle: "solid",
                                            borderTopColor: textColor ? textColor : "white",
                                            borderRightColor: textColor ? textColor : "white",
                                            borderBottomColor: textColor ? textColor : "white",
                                            borderLeftColor: textColor ? textColor : "white",
                                            backgroundColor: buttonBackgroundColor ? buttonBackgroundColor : "transparent",
                                            ":hover": {backgroundColor: buttonHoverColor ? buttonHoverColor : 'rgba(255,255,255,0.5)'},
                                            ":active": {backgroundColor: buttonActiveColor ? buttonActiveColor : 'rgba(255,255,255,0.8)'},
                                        },
                                    },
                                    EndEnhancer: {
                                        style: {marginLeft: "0px"}
                                    }
                                }}
                                endEnhancer={() => <ArrowRight size={36} color={textColor ? textColor : "white"}/>}
                                onClick={() => router.push(destination)}
                        />
                    </Block>
                    <Block display={arrowButton ? "none" : textButton ? "block" : ["none", "none", "none", "block"]} width="240px" height="56px" font="MinXLabel20"
                           color={textColor ? textColor : "MinXPrimaryTextAlt"}>
                        <Button shape={SHAPE.pill}
                                overrides={{
                                    BaseButton: {
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            fontSize: "inherit",
                                            fontWeight: "inherit",
                                            lineHeight: "inherit",
                                            color: "inherit",
                                            borderTopWidth: "1px",
                                            borderRightWidth: "1px",
                                            borderBottomWidth: "1px",
                                            borderLeftWidth: "1px",
                                            borderTopStyle: "solid",
                                            borderRightStyle: "solid",
                                            borderBottomStyle: "solid",
                                            borderLeftStyle: "solid",
                                            borderTopColor: textColor ? textColor : "white",
                                            borderRightColor: textColor ? textColor : "white",
                                            borderBottomColor: textColor ? textColor : "white",
                                            borderLeftColor: textColor ? textColor : "white",
                                            backgroundColor: buttonBackgroundColor ? buttonBackgroundColor : "transparent",
                                            ":hover": {backgroundColor: buttonHoverColor ? buttonHoverColor : 'rgba(255,255,255,0.5)'},
                                            ":active": {backgroundColor: buttonActiveColor ? buttonActiveColor : 'rgba(255,255,255,0.8)'},
                                        },
                                    },
                                }}
                                endEnhancer={() => <ChevronRight size={24} color={textColor ? textColor : "white"}/>}
                                onClick={() => router.push(destination)}
                        >
                            Learn More
                        </Button>
                    </Block>
                </>
            )}
            {/*TODO: 滚轮下滑和button点击下滑不兼容, 未找到解决办法*/}
            {/*<Block display={["none", "none", "none", showScrollDown ? "block" : "none"]} position="absolute" right="0px" bottom="70px" left="0px" width="48px" height="56px"*/}
            {/*       margin="auto" font="MinXLabel20"*/}
            {/*>*/}
            {/*    <Button shape={SHAPE.pill}*/}
            {/*            overrides={{*/}
            {/*                BaseButton: {*/}
            {/*                    style: {*/}
            {/*                        width: "100%",*/}
            {/*                        height: "100%",*/}
            {/*                        fontSize: "inherit",*/}
            {/*                        fontWeight: "inherit",*/}
            {/*                        lineHeight: "inherit",*/}
            {/*                        borderTopWidth: "1px",*/}
            {/*                        borderRightWidth: "1px",*/}
            {/*                        borderBottomWidth: "1px",*/}
            {/*                        borderLeftWidth: "1px",*/}
            {/*                        borderTopStyle: "solid",*/}
            {/*                        borderRightStyle: "solid",*/}
            {/*                        borderBottomStyle: "solid",*/}
            {/*                        borderLeftStyle: "solid",*/}
            {/*                        borderTopColor: "white",*/}
            {/*                        borderRightColor: "white",*/}
            {/*                        borderBottomColor: "white",*/}
            {/*                        borderLeftColor: "white",*/}
            {/*                        backgroundColor: "transparent",*/}
            {/*                        ":hover": {backgroundColor: 'rgba(255,255,255,0.5)'},*/}
            {/*                        ":active": {backgroundColor: 'rgba(255,255,255,0.8)'},*/}
            {/*                    },*/}
            {/*                },*/}
            {/*                EndEnhancer: {*/}
            {/*                    style: {marginLeft: "0px"}*/}
            {/*                }*/}
            {/*            }}*/}
            {/*            endEnhancer={() => <ArrowDown size={36}/>}*/}
            {/*            onClick={() => onClickScrollDown()}*/}
            {/*    />*/}
            {/*</Block>*/}
        </Block>
    )
}

export default banner;