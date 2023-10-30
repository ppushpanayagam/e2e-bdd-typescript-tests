import {Then} from '@cucumber/cucumber'
import {expect} from 'chai'
import {By} from 'selenium-webdriver'
import {ScenarioWorld} from "../setup/world";
import {getElementLocator} from "../../support/web-element-helper";
import {ElementKey, ExpectedElementText} from "../../env/global";
import {waitFor} from "../../support/wait-for-behavior";
import {elementDisplayed} from "../../support/html-behavior";


Then(/^the "([^"]*)" header should contain the text "([^"]*)"$/,
    async function(this:ScenarioWorld, elementKey: ElementKey, expectedElementText: ExpectedElementText) {

        const {
            screen: {driver},
            globalConfig
        } = this

        console.log("Contact header should contain the text Contact")

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        const element  =  await driver.findElement(By.css(elementIdentifier))
        const elementText = await element.getAttribute("innerText")

        await waitFor(async ()=>{
            const isElementVisible= await elementDisplayed(driver, elementIdentifier)
            return isElementVisible
        })
        expect(elementText).to.contain(expectedElementText)
    }

)
