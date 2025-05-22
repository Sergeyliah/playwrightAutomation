export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminPanelText = page.locator('#admin-panel');
  }

  async isLoaded() {
    return this.adminPanelText.isVisible();
  }
}
