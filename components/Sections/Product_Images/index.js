import React, {useEffect, useState} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import clsx from "clsx";

import Script from "next/script";

import {Block} from "baseui/block";
import {FILL, Tab, Tabs} from "baseui/tabs-motion";
import {Button, KIND, SHAPE} from "baseui/button";
import {ChevronLeft, ChevronRight} from "baseui/icon";

import styles from "./images.module.scss";
import ReactPlayer from "react-player";

const Gallery = ({gallery = [], video = "", modal = ""}) => {
    const [tabActiveKey, setTabActiveKey] = useState(0);
    const [numberOfTabs, setNumberOfTabs] = useState(0);

    useEffect(() => {
        let num = 0;

        if (gallery.length > 0) num += 1;
        if (video) num += 1;
        if (modal) num += 1;

        setNumberOfTabs(num);
    }, []);

    return (
        <>
            <Script id="model-viewer" type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"/>
            <Tabs activeKey={tabActiveKey} fill={FILL.intrinsic} onChange={({activeKey}) => setTabActiveKey(parseInt(activeKey + ""))}
                  overrides={{
                      Root: {
                          props: {
                              className: styles["container-tab"]
                          }
                      },
                      TabList: {
                          props: {
                              className: clsx([styles["container-list-tabs"], "hideScrollBar"])
                          },
                          style: {
                              gridTemplateColumns: "repeat(" + numberOfTabs + ", auto)"
                          }
                      },
                      TabBorder: {
                          props: {
                              hidden: true
                          }
                      },
                      TabHighlight: {
                          props: {
                              hidden: true
                          }
                      },
                  }}
            >
                {gallery.length > 0 ? (
                    <Tab title="Photo"
                         overrides={{
                             TabPanel: {
                                 props: {
                                     className: clsx([styles["container-tab-panel"], "product", "images"])
                                 }
                             },
                             Tab: {
                                 props: {
                                     className: styles["tab"]
                                 },
                                 style: ({$isActive}) => ({
                                     background: $isActive ? "black" : "transparent",
                                     color: $isActive ? "white" : "black",
                                     ":hover": {background: $isActive ? "rgba(0,0,0,0.5)" : "transparent"},
                                 }),
                             },
                         }}
                    >
                        <ImageGallery items={gallery} showNav={true} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}
                                      renderLeftNav={(onClick, disabled) => (
                                          <Button shape={SHAPE.circle} kind={KIND.secondary}
                                                  onClick={onClick}
                                                  overrides={{
                                                      BaseButton: {
                                                          props: {
                                                              className: "cursor react-image-gallery-arrow left",
                                                          },
                                                      },
                                                  }}
                                                  disabled={disabled}
                                          >
                                              <ChevronLeft size={28} color={"white"}/>
                                          </Button>
                                      )}
                                      renderRightNav={(onClick, disabled) => (
                                          <Button shape={SHAPE.circle} kind={KIND.secondary}
                                                  onClick={onClick}
                                                  overrides={{
                                                      BaseButton: {
                                                          props: {
                                                              className: "cursor react-image-gallery-arrow right",
                                                          },
                                                      },
                                                  }}
                                                  disabled={disabled}
                                          >
                                              <ChevronRight size={28} color={"white"}/>
                                          </Button>
                                      )}
                        />
                    </Tab>
                ) : null}
                {video ? (
                    <Tab title="Video"
                         overrides={{
                             TabPanel: {
                                 props: {
                                     className: clsx([styles["container-tab-panel"], "product", "video"])
                                 }
                             },
                             Tab: {
                                 props: {
                                     className: styles["tab"]
                                 },
                                 style: ({$isActive}) => ({
                                     background: $isActive ? "black" : "transparent",
                                     color: $isActive ? "white" : "black",
                                     ":hover": {background: $isActive ? "rgba(0,0,0,0.5)" : "transparent"},
                                 }),
                             },
                         }}>
                        <Block width="100%" height="100%" display="flex" alignItems="center" maxHeight="500px" margin="auto" padding="0 0 20px">
                            <ReactPlayer className="react-player" url={video} playsinline loop
                                         config={{
                                             file: {
                                                 attributes: {
                                                     controlsList: "nofullscreen",
                                                 },
                                             },
                                         }}
                            />
                        </Block>
                    </Tab>
                ) : null}
                {modal ? (
                    <Tab title="3D"
                         overrides={{
                             TabPanel: {
                                 props: {
                                     className: clsx([styles["container-tab-panel"], "product", "modal"])
                                 }
                             },
                             Tab: {
                                 props: {
                                     className: styles["tab"]
                                 },
                                 style: ({$isActive}) => ({
                                     background: $isActive ? "black" : "transparent",
                                     color: $isActive ? "white" : "black",
                                     ":hover": {background: $isActive ? "rgba(0,0,0,0.5)" : "transparent"},
                                 }),
                             },
                         }}
                    >
                        <Block width="100%" height="100%" maxHeight="500px" margin="auto" padding="0 0 20px" $style={{aspectRatio: 1}}>
                            <model-viewer camera-orbit="120deg 75deg 100%" alt="3D model" minimumRenderScale={1} shadow-intensity="1" camera-controls
                                          style={{width: "inherit", height: "inherit", margin: "auto"}}
                                          src={modal}
                            />
                        </Block>
                    </Tab>
                ) : null}
            </Tabs>
        </>
    )
}

export default Gallery;
