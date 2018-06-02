describe('Content', () => {
  it('should have control buttons', async () => {
    await expect(element(by.id('urlButton'))).toBeVisible();
    await expect(element(by.id('base64Button'))).toBeVisible();
    await expect(element(by.id('errorButton'))).toBeVisible();
    await expect(element(by.id('resetButton'))).toBeVisible();
    await expect(element(by.id('noContent'))).toBeVisible();
  });

  it('should render pdf using url', async () => {
    await element(by.id('urlButton')).tap();
    await expect(element(by.id('pdfContent'))).toBeVisible();
  });

  it('should render pdf using base64', async () => {
    await element(by.id('base64Button')).tap();
    await expect(element(by.id('pdfContent'))).toBeVisible();
  });
})
