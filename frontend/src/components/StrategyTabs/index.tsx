import { Box, Fieldset, Grid, GridCol, Paper, Select, Tabs } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import CustomLineChart from "../Charts/index";
import { useState } from "react";

export default function StrategyTabs() {
    const [activeTab, setActiveTab] = useState("funding_carry");

    const coinOptions = ["BTCUSDT", "SOLUSDT", "ETHUSDT"];

    return (
        <Box
            style={{ maxWidth: "1600px", margin: "auto" }}
        >
            <Tabs
            value={activeTab}
            >
                <Tabs.List>
                    <Tabs.Tab
                        value="funding_carry"
                        onClick={() => setActiveTab("funding_carry")}
                    >
                        Funding Carry
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="funding_carry_leveraged"
                        onClick={() => setActiveTab("funding_carry_leveraged")}
                    >
                        Funding Carry Leveraged
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel
                    value="funding_carry"
                >
                    <Paper
                        p="md"
                        shadow="sm"
                    >
                        <Grid>
                            <GridCol span={2.5}>
                                <Fieldset legend="Chart Settings" mt="xl">
                                    <Select
                                        label="Select Coin"
                                        placeholder="Select Coin"
                                        data={coinOptions}
                                    />
                                </Fieldset>
                            </GridCol>
                            <GridCol span={9.5}>
                                <Carousel>
                                    <Carousel.Slide>
                                        <Paper
                                            p="md"
                                            shadow="sm"
                                        >
                                            <CustomLineChart/>
                                        </Paper>
                                    </Carousel.Slide>
                                    <Carousel.Slide>
                                        <Paper
                                            p="md"
                                            shadow="sm"
                                        >
                                            <CustomLineChart/>
                                        </Paper>
                                    </Carousel.Slide>
                                </Carousel>
                            </GridCol>
                        </Grid>
                    </Paper>
                </Tabs.Panel>

                <Tabs.Panel
                    value="funding_carry_leveraged"
                >
                    <Paper
                        p="md"
                        shadow="sm"
                    >
                    <Grid>
                        <GridCol span={2.5}>
                            <Fieldset legend="Chart Settings" mt="xl">
                                <Select
                                    label="Select Coin"
                                    placeholder="Select Coin"
                                    data={coinOptions}
                                />
                            </Fieldset>
                        </GridCol>
                        <GridCol span={9.5}>
                            <Carousel>
                                <Carousel.Slide>
                                    <Paper
                                        p="md"
                                        shadow="sm"
                                    >
                                        <CustomLineChart/>
                                    </Paper>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Paper
                                        p="md"
                                        shadow="sm"
                                    >
                                        <CustomLineChart/>
                                    </Paper>
                                </Carousel.Slide>
                            </Carousel>
                        </GridCol>
                    </Grid>
                    </Paper>
                </Tabs.Panel>
            </Tabs>
        </Box>
    );
}