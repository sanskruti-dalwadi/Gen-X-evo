import {test,expect} from '@playwright/test'

// test ('Test Text input', async ({page}) =>{
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-text-inputs")
//     await page.getByPlaceholder('Enter your name').fill('Sanskruti')
//     await page.getByPlaceholder('Enter your email').fill('san@gmail.com')
//     await page.getByPlaceholder('Enter your address').fill('Ahmedabad')
//     await page.locator('//button[@id="btn-submit-text-inputs"]').click()
//     await page.locator('#btn-reset-text-inputs').click()

//     // await page.context().storageState({ path: '.auth/userData.json' });

// })

// test('Test Radio button', async ({page}) => {
//    await page.goto("https://www.playwrightautomation.com/practice.html#section-radios")
//    const maleRadio =  page.locator('input[type="radio"][value="male"]');

//    await maleRadio.check()

//    await page.mouse.wheel(0, 60);   // down 500px

//    await page.locator("#day-select-all").check()
//    await page.getByText("Monday").uncheck()

//    await page.locator('#toggle-notifications').check()
//    await page.locator('//input[@name="toggle-email-alerts"]').uncheck()
//    const toggle = page.locator('#toggle-autosave')
//    await toggle.check()
//    await toggle.uncheck()

//    await page.mouse.wheel(0, 500);   // down 500px

//    const multiSelect = page.locator("#colors")
//    await multiSelect.selectOption(['puma','nike','uniqlo'])
// //   await multiSelect.selectOption([{ index: 0 }, { index: 2 }])
//   //await expect(multiSelect).toHaveValues(['puma','nike','uniqlo']);
//   //error

//     await page.locator('#tooltip-trigger').hover()
//     const checkVisibility = page.locator("#tooltip-state")
//     await expect(checkVisibility).toHaveText("visible")
    
   
// })

test("show/hide element",async ({page})=>{
    await page.goto("https://www.playwrightautomation.com/practice.html#section-showhide")
    const visibleButton = page.locator("#btn-show-element")
    await visibleButton.click()
    const status = page.locator("#showhide-state")
    await expect(status).toHaveText("visible")

    const hiddenButton = page.locator("#btn-hide-element")
    await hiddenButton.click()
    await expect(status).toHaveText("hidden")
})


