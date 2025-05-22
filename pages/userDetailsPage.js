export class UserDetailsPage {
  constructor(page) {
    this.page = page;
    this.detailsText = page.locator('#user-details');
  }

  async isLoaded() {
    return this.detailsText.isVisible();
  }
}
