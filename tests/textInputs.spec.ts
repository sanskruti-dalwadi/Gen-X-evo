import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

const URL = 'https://www.playwrightautomation.com/practice.html#section-text-inputs';

test('Text inputs section accepts values', async ({ page }) => {
  // Labels that group and describe the test in the report
  await allure.epic('Practice Site');
  await allure.feature('Text Inputs');
  await allure.story('User can type into text fields');
  await allure.severity('normal');
  await allure.owner('Sanskruti');
  await allure.link("https://www.playwrightautomation.com/practice.html#section-text-inputs", 'Practice page');

  await allure.step('Open the text inputs section', async () => {
    await page.goto("https://www.playwrightautomation.com/practice.html#section-text-inputs");
  });

  await allure.step('Fill the text fields', async () => {
    await page.locator('#name').fill('Sanskruti');      // replace with real selector
    await page.locator('#email').fill('test@example.com'); // replace with real selector
  });

  await allure.step('Verify the entered values', async () => {
    await expect(page.locator('#name')).toHaveValue('Sanskruti');
    await expect(page.locator('#email')).toHaveValue('test@example.com');
  });

  // Attach a screenshot to the report even when the test passes
  await allure.attachment('Text inputs filled', await page.screenshot(), 'image/png');
});