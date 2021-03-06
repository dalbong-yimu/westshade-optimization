import React from "react";

import Link from "next/link";

import {Block} from "baseui/block";

const Title = ({
                   upperContainerDirection = ["column", "column", "row"],
                   upperContainerProps = {marginBottom: ["32px", "32px", "40px"]},
                   upperContainerClassName,
                   upperContainerStyles,
                   title = "",
                   titleFont = ["MinXHeading32", "MinXHeading44", "MinXHeading64"],
                   titleProps,
                   titleClassName,
                   titleStyles,
                   subtitle,
                   subtitleFont = ["MinXParagraph14", "MinXParagraph16"],
                   subtitleProps,
                   subtitleClassName,
                   subtitleStyles,
                   subtitleMoreText = "",
                   subtitleMoreDestination = {pathname: "/"},
                   subtitleButton,
               }) => {
    
    return (
        <Block display="flex" flexDirection={upperContainerDirection} justifyContent="space-between" {...upperContainerProps}
               overrides={{
                   Block: {
                       props: {
                           className: upperContainerClassName
                       },
                       style: upperContainerStyles
                   },
               }}
        >
            {title ? (
                <Block marginBottom="12px" font={titleFont} color="MinXPrimaryText"  {...titleProps}
                       overrides={{
                           Block: {
                               props: {
                                   className: titleClassName
                               },
                               style: {lineHeight: "0.8 !important", ...titleStyles}
                           },
                       }}
                >
                    {title}
                </Block>
            ) : null}
            <Block maxWidth="320px" font={subtitleFont} color="MinXSecondaryText" {...subtitleProps}
                   overrides={{
                       Block: {
                           props: {
                               className: subtitleClassName
                           },
                           style: subtitleStyles
                       },
                   }}
            >
                {subtitle}
                {subtitleMoreText ? (
                    <Block marginTop={["4px", "6px", "8px"]} color="MinXPrimaryText">
                        <Link color="inherit" href={subtitleMoreDestination}>{subtitleMoreText}</Link>
                    </Block>
                ) : null}
                {subtitleButton}
            </Block>
        </Block>
    )
}

export default Title;
