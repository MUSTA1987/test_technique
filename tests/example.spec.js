/* after visiting[www.welcometothejungle.com / fr / me / settings / account] webpage, clicking on[Se connecter]button, filling[Email, Mot de passe]inputs, clicking on[Se connecter]button, uploading a[Photo de profil] file and clicking on[Enregistrer] button

Les credentials d'authentification sont les suivants :
login: inqom.qaautomationapplicant@gmail.com
password: o5N, d5ZR@R7^ */

// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('uploading profile picture', async () => {
  test('Log and change profile picture', async ({ page }) => {
    await page.goto('https://www.welcometothejungle.com/fr/signin');
    await page.getByTestId('login-field-email').fill('inqom.qaautomationapplicant@gmail.com');
    await page.getByTestId('login-field-password').fill('o5N,d5ZR@R7^');
    await page.getByTestId('login-button-submit').click();
    await expect(page).toHaveURL('https://www.welcometothejungle.com/fr/')
    await page.goto('https://www.welcometothejungle.com/fr/me/settings/account');
    await page.getByRole('button', { name: "Importer une image" });
    await page.setInputFiles("input[type='file']", 'inqom.PNG');
    await page.getByTestId('account-edit-button-submit').click();
    await expect(page.getByText("Mise à jour réussie !")).toBeVisible();
    await page.close();
  });
});
