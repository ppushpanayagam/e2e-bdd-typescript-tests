import {Given, Then, When} from "@cucumber/cucumber"
import {ScenarioWorld} from "./setup/world";
import {navigateToPage} from "../support/navigation-behavior";
import {ElementKey, PageId} from "../env/global";
import{currentPathMatchesPageId} from "../support/navigation-behavior";
import {waitFor, waitForSelector} from "../support/wait-for-behavior";
import {clickElement, scrollElementIntoView} from "../support/html-behavior";
import {getElementLocator} from "../support/web-element-helper";

Given (/^I am on the "([^"]*)" page$/,
     async function(this: ScenarioWorld, pageId: PageId) {

        const {
            screen: {driver},
            globalConfig
         } = this

         await navigateToPage(driver, pageId, globalConfig)
         await waitFor(()=> currentPathMatchesPageId(driver, pageId, globalConfig))

     })

When(
    /^I click the "([^"]*)" (?:button|link)$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { driver },
            globalConfig,
        } = this

        console.log(`I click the ${elementKey} button|link`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async () => {

            const elementStable = await waitForSelector(driver, elementIdentifier)

            if (elementStable) {
                await clickElement(driver, elementIdentifier)
            }

            return elementStable

        })
    }
)

When(
    /^I click the "([^"]*)" screen$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { driver },
            globalConfig,
        } = this

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async () => {

            const elementStable = await waitForSelector(driver, elementIdentifier)

            if (elementStable) {
                await clickElement(driver, elementIdentifier)
            }

            return elementStable

        })
    }
)

When(
    /^I am directed to "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { driver },
            globalConfig,
        } = this

        console.log(`I click the ${pageId} button|link`)

        await waitFor(()=> currentPathMatchesPageId(driver, pageId, globalConfig))

    }
)
Then(
    /^I scroll to the "([^"]*)" (?:.*?)$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { driver },
            globalConfig
        } = this

        console.log(`I scroll to the ${elementKey}`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async () => {
            const elementStable = await waitForSelector(driver, elementIdentifier)

            if (elementStable) {
                await scrollElementIntoView(driver, elementIdentifier)
            }

            return elementStable
        })
    }
)


Then(
    /^the "([^"]*)" played automatically$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { driver },
            globalConfig
        } = this

        console.log(`I scroll to the ${elementKey}`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async () => {
            const elementStable = await waitForSelector(driver, elementIdentifier)
            return elementStable
        })
    }
)


