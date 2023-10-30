// import {
//     Builder,
//     WebDriver
// } from 'selenium-webdriver'
//
// import {
//     World,
//     IWorldOptions,
//     setWorldConstructor, supportCodeLibraryBuilder
// } from "@cucumber/cucumber"
// import firefox from 'selenium-webdriver/firefox'
// import{ Options } from 'selenium-webdriver/chrome'
// import { env } from '../../env/parseEnv'
// import {stringIsOfOptions} from "../../support/optionsHelper";
// import {GlobalConfig} from "../../env/global";
//
// export type Screen = {
//     driver:WebDriver
// }
//
// export class ScenarioWorld extends World{
//     constructor(options: IWorldOptions) {
//         super(options)
//
//         this.globalConfig = options.parameters as GlobalConfig
//
//     }
//
//     globalConfig: GlobalConfig
//
//     screen!: Screen
//
//     async init(): Promise<Screen>{
//         const browser = await this.newBrowser()
//         const browserBuilder = await this.browserBuilder(browser)
//         const driver = browserBuilder.build()
//         await driver.manage().window().maximize()
//
//         this.screen ={ driver }
//         return this.screen
//     }
//
//     private newBrowser = async(): Promise<string> => {
//
//         const automationBrowser = env('UI_AUTOMATION_BROWSER')
//         const automationBrowsers = ['chrome', 'firefox', 'edge', 'safari']
//         const validAutomationBrowser = stringIsOfOptions(automationBrowser, automationBrowsers)
//         return validAutomationBrowser
//     }
//
//     private browserBuilder = async (browser: string): Promise<Builder> =>{
//         console.log(`💻 Executing on ${browser} browser 💻`)
//         const builder = new Builder()
//
//         switch (browser){
//             case 'chrome':{
//                 const chromeBrowserOptions = (
//                     new Options()
//                 )
//                 chromeBrowserOptions.addArguments('--disable-notifications')
//                 chromeBrowserOptions.addArguments('profile.default_content_setting_values.cookies", 2')
//                 chromeBrowserOptions.addArguments(
//                     env('BROWSER_ARGUMENTS')
//                 )
//                 return builder.forBrowser(browser).withCapabilities(chromeBrowserOptions)
//                 break
//             }
//
//             case 'firefox':{
//                 const firefoxBrowserOptions = new firefox.Options()
//                 firefoxBrowserOptions.addArguments(
//                     env('BROWSER_ARGUMENTS')
//                 )
//                 firefoxBrowserOptions.set("acceptInsecureCerts", true)
//                 return builder.forBrowser(browser).setFirefoxOptions(firefoxBrowserOptions)
//                 break
//             }
//             default:{
//                 return builder.forBrowser(browser)
//                 break
//             }
//
//         }
//     }
// }
// setWorldConstructor(ScenarioWorld)





import {
    Builder,
    WebDriver
} from 'selenium-webdriver'
import {
    World,
    IWorldOptions,
    setWorldConstructor
} from "@cucumber/cucumber"
import { env } from '../../env/parseEnv'
import { stringIsOfOptions } from '../../support/options-helper'
import {GlobalConfig, GlobalVariables} from "../../env/global";
import firefox from 'selenium-webdriver/firefox'
import { Options } from 'selenium-webdriver/chrome'

export type Screen = {
    driver: WebDriver
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions) {
        super(options)

        this.globalConfig = options.parameters as GlobalConfig
    }

    screen!: Screen

    globalConfig: GlobalConfig

    async init(): Promise<Screen> {

        const browser = await this.newBrowser()
        const browserBuilder = await this.browserBuilder(browser)
        const driver = browserBuilder.build()
        await driver.manage().window().maximize()

        this.screen = { driver }

        return this.screen
    }

    private newBrowser = async(): Promise<string> => {
        const automationBrowser = env('UI_AUTOMATION_BROWSER')
        const automationBrowsers = ['chrome', 'firefox', 'safari']
        const validAutomationBrowser = stringIsOfOptions(automationBrowser, automationBrowsers)
        return validAutomationBrowser
    }

    private browserBuilder = async(browser: string): Promise<Builder> => {
        console.log(`🖥 Executing on ${browser} browser 🖥`)

        const builder = new Builder()

        switch(browser) {
            case "chrome": {
                const chromeBrowserOptions = (
                    new Options())
                chromeBrowserOptions.addArguments('--disable-notifications')
                chromeBrowserOptions.addArguments('profile.default_content_setting_values.cookies", 2')
                chromeBrowserOptions.addArguments(
                    env('BROWSER_ARGUMENTS')
                )
                return builder.forBrowser(browser).withCapabilities(chromeBrowserOptions)
                break
            }
            case "firefox": {
                const firefoxBrowserOptions = new firefox.Options()
                firefoxBrowserOptions.addArguments(
                    env('BROWSER_ARGUMENTS')
                )
                firefoxBrowserOptions.set("acceptInsecureCerts", true)

                return builder.forBrowser(browser).setFirefoxOptions(firefoxBrowserOptions)
                break
            }
            default: {
                return builder.forBrowser(browser)
                break
            }
        }
    }

}

setWorldConstructor(ScenarioWorld)
