import { Card, StyledBody} from "baseui/card";
import { useStyletron } from "baseui";
import { Block } from "baseui/block"
import { Button, KIND, SHAPE } from "baseui/button";
import { Notification } from "baseui/notification";

import Head from "next/head"
import Image from "next/image";
import Accordion from "../components/accordion";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { useState } from "react";
import { FormControl } from "baseui/form-control";
import { Checkbox } from "baseui/checkbox";
import { SIZE, Textarea } from "baseui/textarea";
import { Input } from "baseui/input";
import Utils from "../utils/utils";

const utils = new Utils();

const QA = [
    {
        title: "Where can I use my WestShade pop-up canopy?",
        content: "Our canopies stand securely on grass, dirt, or pavement without ropes or poles. In windy conditions, However, we recommend using our Weight Bags to anchor and prevent your canopy from tipping over."
    },
    {title: "Can I buy a replacement canopy covering?", content: "Yes, we offer many replacement cover options. Please call customer service at 877-702-1872 or contact us online."},
    {title: "Do you have any accessories available?", content: "Yes, our full line of accessories includes sidewalls, half sidewalls, sidewalls with roll up doors, sidewalls with windows and sand bags."},
    {title: "What fire ratings do your fabric items have?", content: " Our fabric meets CPAI-84, NFPA-71 and the California Administrative Code Title 19 fire resistant requirements."},
    {
        title: "What are your shipping costs?",
        content: <>We provide free shipping and handling costs for any orders over $149 within the U.S., with the exception of AK, HI and PR.<br/><br/>Shipping costs for customers located in those 3 states will be provided after further order
            estimates.</>
    },
];

const CustomCard = ({children, CTA}) => {
    const [css] = useStyletron();

    return (
        <Block width={["100%","180px", "180px", "180px"]}>
            <Card
                overrides={{
                    Root : {style: {backgroundColor: "transparent", outline: "transparent", borderTopWidth: "0",borderBottomWidth: "0",borderLeftWidth: "0",borderRightWidth: "0", width: "100%"}},
                    Contents: {style: {marginTop: "0px", marginBottom: "0px", marginLeft: "0px", marginRight: "0px"}}
                }}
            >
            <StyledBody className={css({display:"flex", flexDirection:"column", alignItems:"center"})}>
                {children}
            </StyledBody>
            </Card>
        </Block>
    )
}

const CustomLabel = ({children}) => {
return    (
    <Block marginBottom={["20px", "24px"]} font={["MinXSubtitle20", "MinXSubtitle24"]}>
        {children}
    </Block>
)}

const CustomCheckbox = ({children, checked, onChange}) => {
    const [css] = useStyletron();

    return(
        <Checkbox
            checked={checked}
            onChange={onChange}
            className={css({width:"100%"})}
            overrides={{
                root: {style: {width: "100%"} },
                Checkmark: { style: { display: "none" } } ,
                Label: { style: {width: "100%"}}
            }}
        >
            {children}
        </Checkbox>
    )
}

const CustomCheckboxLabel = ({children, active}) => {
    const [css] = useStyletron();
    return (
        <Block 
            backgroundColor="#ffffff" 
            className={css({ 
                width: "100%", 
                paddingTop: "12px", 
                paddingBottom: "12px", 
                borderTopLeftRadius: "44px",
                borderTopRightRadius: "44px",
                borderBottomLeftRadius: "44px",
                borderBottomRightRadius: "44px", 
                borderTopWidth: active ? "2px" : "1px", 
                borderBottomWidth: active ? "2px" : "1px", 
                borderLeftWidth: active ? "2px" : "1px", 
                borderRightWidth: active ? "2px" : "1px", 
                borderStyle: "solid", 
                borderColor: active ? "#23A4AD": "#b2b2b2", 
                backgroundColor: "#ffffff", 
                color: "#2c2c2c", 
                fontSize: "16px", 
                fontWeight: active ? "500": "400", 
                textAlign: "center"
                })
            } 
            kind={KIND.tertiary} 
            shape={SHAPE.pill}
        >   
            {children} 
        </Block>
        )
    }

const CustomInput = ({startEnhancer, endEnhancer, type, value, onChange, error, required, placeholder, pattern}) => {
    
    return(
        <Input
            placeholder={placeholder}
            type={type} 
            value={value}
            onChange={onChange}
            error={error}
            required={required}
            startEnhancer={startEnhancer}
            endEnhancer={endEnhancer}
            pattern={pattern}
            overrides={{
                Root: {style: {width: "100%", borderLeftWidth: "0px", borderRightWidth:"0px", borderTopWidth:"0px", borderBottomWidth: "0px", outlineLeftWidth: "0px", outlineRightWidth:"0px", outlineTopWidth:"0px", outlineBottomWidth: "0px", outlineWidth: "0px", backgroundColor: "transparent"}},
                Input: {style: ($isFocused) => ({backgroundColor: "transparent", borderRadius: "8px", ":focus": {border: "1px solid #23A4AD"}})},
                InputContainer: { style: {backgroundColor: "#ffffff", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", borderBottomLeftRadius: "8px", borderBottomRightRadius:"8px"}}
            }}
        />
    )
}

const Contact_Us = () => {
    const [css] = useStyletron();
    const [copied, copyEmail] = useCopyToClipboard("support@westshade.com");
    const [formState, setFormState] = useState({
        interests: [],
        message: "",
        firstname: "",
        lastname: "",
        companyName: "",
        phone: "",
        email: ""
    })
    const [formError, setFormError] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const handleInterest = (interest) => {
        console.log(formState.interests.includes(interest))
        if (!formState.interests.includes(interest)) setFormState({...formState, interests: [...formState.interests, interest]})
        else {
            let idx = formState.interests.indexOf(interest);
            let newInterests = [...formState.interests];
            setFormState({...formState, interests: newInterests.splice(idx, 1)})
        }
    }

    const handleContactForm = async (e) => {
        e.preventDefault();
        setFormLoading(true)
        const {interests, firstname, lastname, message, companyName, email, phone} = formState;
        if(interests.length > 0 || !!firstname || !!lastname || !!message || !!companyName || !!email || !!phone){
            let result = await utils.contact({
                form_id: "4",
                status: "active",
                10: interests.join(","),
                4: message,
                6.3: firstname,
                6.6: lastname,
                7: companyName,
                8: phone,
                9: email,
            });
            setFormLoading(false);
            setFormState({
                interests: [],
                message: "",
                firstname: "",
                lastname: "",
                companyName: "",
                phone: "",
                email: ""
            });
            return;

        }
        else {
            setFormError(true);
            setFormLoading(false)
            return;
        }
    }
    return (
        <>
        <Head>
            <title>Contact Us - WESTSHADE</title>
            <meta name="description" content="Frequently asked question about Westshade's canopy, umbrella and accessories."/>
        </Head>
        <Block width="100%" display="grid" placeItems="center" backgroundColor="#DFF2EF">
            <Block maxWidth="1183px" padding={["40px 16px", "100px 16px", "100px 32px"]}>
                <Block marginBottom={["16px", "24px", "24px"]} font={["MinXHeading20", "MinXHeading36"]} color="MinXPrimaryText"><h1 className={css({textAlign: "center", fontWeight: 500})}>Contact us</h1></Block>
                <Block maxWidth="535px" margin="0 auto" className={css({textAlign: "center"})} color="MinXPrimaryText" font={["MinXParagraph16", "MinXParagraph20"]}>
                    We are here to help you from 8:30 AM - 5:30 PM PST, Monday to Friday (except holidays and weekends).
                </Block>
                <Block display="flex" justifyContent="center" gap="30px" flexWrap={["wrap", "nowrap", "nowrap", "nowrap"]} marginTop={["24px", "64px"]} className={css({gap: "31px"})}>
                    <CustomCard>
                        <Image src="images/contact-us/call-us.png" alt="call us" layout="fixed" width="40px" height="40px" objectFit="contain"/>
                        <Block className={css({textAlign: "center", textTransform: "uppercase"})} color="MinXPrimaryText" as="p" font="MinXParagraph14" marginTop="16px">Call us</Block>
                        <Block marginBottom="5px" className={css({textAlign: "center"})} color="MinXPrimaryText" as="p" font="MinXHeading14">877-702-1872</Block>
                        <Button 
                            onClick={() => {}} 
                            startEnhancer={() => <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M15.4999 10.8833L11.1083 10.375L9.00825 12.475C6.64992 11.275 4.71659 9.35 3.51659 6.98333L5.62492 4.875L5.11659 0.5H0.524919C0.0415854 8.98333 7.01659 15.9583 15.4999 15.475V10.8833Z" fill="#FAFAFA"/></svg></i>}   
                            shape={SHAPE.pill}
                            $as="a"
                            href = "tel:877-702-1872"
                            overrides={{
                                BaseButton: {
                                    style:($theme) => ({
                                    paddingTop: "4.5px",
                                    paddingBottom: "4.5px",
                                    paddingLeft: " 24px",
                                    paddingRight: " 24px",
                                    color: "#ffffff !important",
                                    backgroundColor: "#23A4AD",
                                    ":hover": {backgroundColor: "#5FBDBE"}
                                })
                                },
                            }}
                        >
                            Call us
                        </Button>
                    </CustomCard>
                    <CustomCard>
                        <Image src="images/contact-us/email-us.png" alt="email us" layout="fixed" width="40px" height="40px" objectFit="contain"/>
                        <Block className={css({textAlign: "center", textTransform: "uppercase"})} color="MinXPrimaryText" as="p" font="MinXParagraph14" marginTop="16px">Email us</Block>
                        <Block marginBottom="5px" className={css({textAlign: "center"})} color="MinXPrimaryText" as="p" font="MinXHeading14" >support@westshade.com</Block>
                        <Button
                            onClick={copyEmail} 
                            startEnhancer={() => <i><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none"><path d="M8.99992 0.667969H1.66659C0.933252 0.667969 0.333252 1.26797 0.333252 2.0013V10.668C0.333252 11.0346 0.633252 11.3346 0.999919 11.3346C1.36659 11.3346 1.66659 11.0346 1.66659 10.668V2.66797C1.66659 2.3013 1.96659 2.0013 2.33325 2.0013H8.99992C9.36659 2.0013 9.66659 1.7013 9.66659 1.33464C9.66659 0.967969 9.36659 0.667969 8.99992 0.667969ZM11.6666 3.33464H4.33325C3.59992 3.33464 2.99992 3.93464 2.99992 4.66797V14.0013C2.99992 14.7346 3.59992 15.3346 4.33325 15.3346H11.6666C12.3999 15.3346 12.9999 14.7346 12.9999 14.0013V4.66797C12.9999 3.93464 12.3999 3.33464 11.6666 3.33464ZM10.9999 14.0013H4.99992C4.63325 14.0013 4.33325 13.7013 4.33325 13.3346V5.33464C4.33325 4.96797 4.63325 4.66797 4.99992 4.66797H10.9999C11.3666 4.66797 11.6666 4.96797 11.6666 5.33464V13.3346C11.6666 13.7013 11.3666 14.0013 10.9999 14.0013Z" fill="#8C8C8C"/></svg></i>}   
                            kind={KIND.minimal}
                            
                            overrides={{
                                BaseButton: {
                                    style:($theme) => ({
                                    paddingTop: "4.5px",
                                    paddingBottom: "4.5px",
                                    paddingLeft: " 24px",
                                    paddingRight: " 24px",
                                    color: "#8c8c8c !important",
                                    backgroundColor: "transparent",
                                    ":hover": {backgroundColor: "none"},
                                })
                                },
                            }}
                        >
                            Copy
                        </Button>
                        {
                            copied &&

                            <Notification 
                                kind={KIND.positive} 
                                autoHideDuration={2000}
                                overrides={{
                                    Body: {style: {width: 'auto'}},
                                    InnerContainer: {style: {textAlign: "center"}}
                                  }}
                            >
                                {
                                    () => "Copied!"
                                }
                            </Notification>
                        }
                    </CustomCard>
                    <CustomCard>
                        <Image src="images/contact-us/online-chat.png" alt="chat with us" layout="fixed" width="40px" height="40px" objectFit="contain"/>
                        <Block className={css({textAlign: "center", textTransform: "uppercase"})} color="MinXPrimaryText" as="p" font="MinXParagraph14" marginTop="16px">Online chat</Block>
                        <Block marginBottom="5px" className={css({textAlign: "center"})} color="MinXPrimaryText" as="p" font="MinXHeading14">Talk to a shade specalist</Block>
                        <Button 
                            onClick={() => {
                                document.querySelector(".mobile-chat-container").click();
                            }} 
                            startEnhancer={() => <i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13.4264 4.28751C13.0759 3.45083 12.5659 2.69035 11.9249 2.04845C11.2858 1.40543 10.5266 0.894194 9.69051 0.543764C8.83397 0.183032 7.91366 -0.00187867 6.98426 1.43896e-05H6.95301C6.0077 0.00470188 5.09364 0.192202 4.2327 0.560951C3.40375 0.914974 2.65172 1.42712 2.01864 2.06876C1.38385 2.70922 0.879694 3.46704 0.534269 4.30001C0.175699 5.1662 -0.00598994 6.09536 -0.000105654 7.03282C0.00458184 8.11719 0.263957 9.19376 0.748331 10.1563V12.5313C0.748331 12.9281 1.07021 13.25 1.46552 13.25H3.83739C4.80438 13.7379 5.87146 13.9947 6.95458 14H6.98739C7.92176 14 8.82645 13.8188 9.67957 13.4641C10.5115 13.1178 11.2678 12.6125 11.9061 11.9766C12.5499 11.3375 13.0561 10.5906 13.4108 9.75782C13.778 8.89532 13.9655 7.97813 13.9702 7.03126C13.9733 6.0797 13.7889 5.15626 13.4264 4.28751ZM3.86552 7.75001C3.45302 7.75001 3.11708 7.41407 3.11708 7.00001C3.11708 6.58595 3.45302 6.25001 3.86552 6.25001C4.27802 6.25001 4.61395 6.58595 4.61395 7.00001C4.61395 7.41407 4.27958 7.75001 3.86552 7.75001ZM6.98426 7.75001C6.57176 7.75001 6.23583 7.41407 6.23583 7.00001C6.23583 6.58595 6.57176 6.25001 6.98426 6.25001C7.39676 6.25001 7.7327 6.58595 7.7327 7.00001C7.7327 7.41407 7.39676 7.75001 6.98426 7.75001ZM10.103 7.75001C9.69051 7.75001 9.35457 7.41407 9.35457 7.00001C9.35457 6.58595 9.69051 6.25001 10.103 6.25001C10.5155 6.25001 10.8514 6.58595 10.8514 7.00001C10.8514 7.41407 10.5155 7.75001 10.103 7.75001Z" fill="white"/></svg></i>}   
                            shape={SHAPE.pill}
                            overrides={{
                                BaseButton: {
                                    style:($theme) => ({
                                    paddingTop: "4.5px",
                                    paddingBottom: "4.5px",
                                    paddingLeft: " 24px",
                                    paddingRight: " 24px", 
                                    backgroundColor: "#23A4AD",
                                    ":hover": {backgroundColor: "#5FBDBE"}
                                })
                                },
                            }}
                        >
                            Chat us
                        </Button>
                    </CustomCard>
                </Block>
            </Block>
        </Block>

        {/* Contact Form Section */}
        <Block width="100%" backgroundColor="#f7f7f7">
            <Block width="100%" maxWidth="600px" display="flex" flex={1} flexDirection="column" alignItems="center" margin="0 auto" padding={["40px 16px", "100px 16px"]}>
                <Block marginBottom={["16px", "24px", "24px"]} font={["MinXHeading20", "MinXHeading36"]} color="MinXPrimaryText"><h2 className={css({textAlign: "center", fontWeight: 500})}>Have us contact you</h2></Block>
                <Block as="form" marginTop={["32px", "40px"]} className={css({width: "100%"})} onSubmit={handleContactForm}>
                    <>
                        <FormControl
                            label = {() => "Interested in"}
                            overrides={{
                                Label: {
                                    component : () => <CustomLabel> {"Interested in"} </CustomLabel>
                                },
                                ControlContainer: { style: {display: "flex", flexWrap: "wrap", marginBottom: "24px"}}
                            }}
                        >
                            <>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("custom-print-tent")}
                                    onChange={() => handleInterest("custom-print-tent")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("custom-print-tent")}>
                                        Custom Print Tent     
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("canopy-tent")}
                                    onChange={() => handleInterest("canopy-tent")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("canopy-tent")}>
                                        Canopy Tent     
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("custom-printed-umbrella")}
                                    onChange={() => handleInterest("custom-printed-umbrella")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("custom-printed-umbrella")}>
                                        Custom printed umbrella    
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("umbrella")}
                                    onChange={() => handleInterest("umbrella")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("umbrella")}>
                                        Umbrella     
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("custom-printed-table-cover")}
                                    onChange={() => handleInterest("custom-printed-table-cover")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("custom-printed-table-cover")}>
                                        Custom printed table cover     
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            <Block width={["100%", "48%"]} marginBottom="16px">
                                <CustomCheckbox
                                    checked={formState.interests.includes("other")}
                                    onChange={() => handleInterest("other")}
                                >
                                    <CustomCheckboxLabel active={formState.interests.includes("other")}>
                                        Other     
                                    </CustomCheckboxLabel>
                                </CustomCheckbox>
                            </Block>
                            </>
                            
                        </FormControl>
                        <FormControl
                            label = {() => "How can we help?"}
                            overrides={{
                                Label: {
                                    component : () => <CustomLabel> {"How can we help?"} </CustomLabel>
                                }
                            }}
                        >
                            <Textarea
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                size={SIZE.large}
                                clearOnEscape
                                required
                                className={css({borderTopColor:"transparent",borderBottomColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent"})}
                                overrides={{
                                    Root: {style: { borderTopWidth: "0px", borderLeftWidth: "0px", borderBottomWidth: "0px", borderRightWidth: "0px"}},
                                    Input: { style: ($isFocused) => ({height: "180px", backgroundColor: "#ffffff", outline: "none", borderRadius: "4px", resize: "both", ":focus": {border: "1px solid #23A4AD"}})},
                                    InputContainer: { style: {outline: "none", ":focus": {border: "1px solid #23A4AD"}}}
                                }}
                            />
                        </FormControl>
                        <FormControl
                            label = {() => "Contact infomation"}
                            overrides={{
                                Label: {
                                    component : () => <CustomLabel> {"Contact infomation"} </CustomLabel>
                                },
                                ControlContainer: { style : { marginTop: "40px"}}
                            }}
                            className={css({marginTop: "40px"})}
                        >
                            <>
                                <Block display="flex" flexWrap="wrap" justifyContent="space-between">
                                    <Block width={["100%", "48%"]} marginBottom="16px">
                                        <CustomInput 
                                            type="text" 
                                            value={formState.firstname} 
                                            onChange={(e) => setFormState({...formState, firstname: e.target.value})} 
                                            error={formError && !!formState.firstname}
                                            required
                                            placeholder="First name"
                                        />
                                    </Block>
                                    <Block width={["100%", "48%"]} marginBottom="16px">
                                        <CustomInput 
                                            type="text" 
                                            value={formState.lastname} 
                                            onChange={(e) => setFormState({...formState, lastname: e.target.value})} 
                                            error={formError && !!formState.lastname}
                                            required
                                            placeholder="Last name"
                                        />
                                    </Block>
                                </Block>
                                <Block width="100%" marginBottom="16px">
                                    <CustomInput 
                                        type="text" 
                                        value={formState.companyName} 
                                        onChange={(e) => setFormState({...formState, companyName: e.target.value})} 
                                        error={formError && !!formState.companyName}
                                        required
                                        placeholder="Company name"
                                    />
                                </Block>
                                <Block width="100%" marginBottom="16px">
                                    <CustomInput 
                                        type="tel" 
                                        value={formState.phone} 
                                        onChange={(e) => setFormState({...formState, phone: e.target.value})} 
                                        error={formError && !!formState.phone}
                                        required
                                        placeholder="Phone  (000-000-0000)"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    />
                                </Block>
                                <Block width="100%" marginBottom="16px">
                                    <CustomInput 
                                        type="email" 
                                        value={formState.email} 
                                        onChange={(e) => setFormState({...formState, email: e.target.value})} 
                                        error={formError && !!formState.email}
                                        required
                                        placeholder="Email"
                                    />
                                </Block>
                            </>
                        </FormControl>
                        <Block width="100%" marginTop="40px">
                            <Button 
                                shape={SHAPE.pill}
                                isLoading={formLoading}
                                overrides={{
                                    BaseButton: { style: {width: "100%", backgroundColor:"#23A4AD",":hover": {backgroundColor: "#5FBDBE"},
                                    ":active": {backgroundColor: "#43878C"},}}
                                }}
                            >
                                Submit
                            </Button>
                        </Block>
                    </>
                </Block>
            </Block>
        </Block>
        {/* End of Contact Form Section */}
        {/* FAQs Section */}
        <Block width="100%" maxWidth="660px" display="flex" flex={1} flexDirection="column" alignItems="center" margin="0 auto" padding={["40px 16px", "100px 16px"]}>
            <Block marginBottom={["16px", "24px", "24px"]} font={["MinXHeading20", "MinXHeading36"]} color="MinXPrimaryText"><h2 className={css({textAlign: "center", fontWeight: 500})}>FAQs</h2></Block>
            <Accordion list={QA}/>
        </Block>
        {/* End of FAQs Section */}
        </>
    )
}

export default Contact_Us;
