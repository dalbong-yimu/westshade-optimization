import React from "react";

import {Block} from "baseui/block";

import Sandwich from "../../Sandwich";

const Benefit = (props) => {
    return (
        <Block display="grid" width="100%" maxWidth={process.env.maxWidth + "px"} backgroundColor="#F7F7F7" gridTemplateColumns={["1fr", null, "repeat(3, 1fr)"]}
               alignItems="center" gridColumnGap="20px" gridRowGap="32px" margin="auto" padding={["32px 16px", null, "96px 20px"]} {...props}
        >
            <Sandwich src="/images/icon/icon-free-shipping-v2.png" alt="Free Shipping" title="Free Shipping" content="Free US nationwide shipping on orders over $149*."
                      containerImageProps={{width: ["56px", null, "80px"], marginBottom: ["-4px", null, "12px"]}}
                      containerTextProps={{maxWidth: "250px", gridRowGap: ["8px", null, "16px"]}}
                      titleColor="MinXPrimaryText" contentColor="MinXSecondaryText"
                      titleProps={{font: "MinXLabel16"}} titleStyle={{lineHeight: "1 !important"}}
                      contentProps={{font: "MinXParagraph16"}} contentStyle={{lineHeight: "20px !important", "@media screen and (min-width: 672px)": {lineHeight: "24px !important"}}}
            />
            <Sandwich src="/images/icon/icon-free-mockup-v2.png" alt="Free Mockup" title="Professional designs" content="Free mockup upon your request or after you place orders."
                      containerImageProps={{width: ["56px", null, "80px"], marginBottom: ["-4px", null, "12px"]}}
                      containerTextProps={{maxWidth: "250px", gridRowGap: ["8px", null, "16px"]}}
                      titleColor="MinXPrimaryText" contentColor="MinXSecondaryText"
                      titleProps={{font: "MinXLabel16"}} titleStyle={{lineHeight: "1 !important"}}
                      contentProps={{font: "MinXParagraph16"}} contentStyle={{lineHeight: "20px !important", "@media screen and (min-width: 672px)": {lineHeight: "24px !important"}}}
            />
            <Sandwich src="/images/icon/icon-customer-service-v2.png" alt="Customer Service" title="Customer Service" content="Professional shade experts are here to answer your questions."
                      containerImageProps={{width: ["56px", null, "80px"], marginBottom: ["-4px", null, "12px"]}}
                      containerTextProps={{maxWidth: "250px", gridRowGap: ["8px", null, "16px"]}}
                      titleColor="MinXPrimaryText" contentColor="MinXSecondaryText"
                      titleProps={{font: "MinXLabel16"}} titleStyle={{lineHeight: "1 !important"}}
                      contentProps={{font: "MinXParagraph16"}} contentStyle={{lineHeight: "20px !important", "@media screen and (min-width: 672px)": {lineHeight: "24px !important"}}}
            />
        </Block>
    );
};

export default Benefit;
