import {
    Then,
    DataTable
} from '@cucumber/cucumber'
import { ScenarioWorld } from '../setup/world'
import {
    ElementKey,
    Negate,
} from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import {
    waitFor,
    waitForSelector
} from "../../support/wait-for-behavior";
import { getTableData } from "../../support/html-behavior";
import {Console} from "inspector";

Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: Negate, dataTable: DataTable) {
        const {
            screen: { driver },
            globalConfig,
        } = this

        console.log(`the ${elementKey} table should ${negate?'not ':''}equal the following:`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async() => {

            const elementStable = await waitForSelector(driver, elementIdentifier)

            if (elementStable) {

                const tableData = await getTableData(driver, elementIdentifier)

                const table: string[] = []
                let table1: string []  = tableData.split(",")
                let webTable: string [] = []

                dataTable.raw().map((data)=>{
                    return table.push(data.toString());
                })

                let str: string = ""
                let resultTable: string[] = []

                for(let i = 0; i < table.length; i++) {
                    str = table[i]
                    resultTable.push(str.replaceAll(",", " "))
                }
                for(let i = 0; i < resultTable.length; i++) {
                    for(let j = 0; j < table1.length; j++) {

                        if(resultTable[i] == table1[j]){

                            webTable.push(table1[j])
                        }
                    }
                }
                return webTable.toString().trim() === resultTable.toString().trim() === !negate
            }

        })

    }
)
