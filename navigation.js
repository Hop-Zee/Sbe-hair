/**
 * Navigation & Auth Utility Module
 * Handles page navigation and authentication state
 */

export class NavigationManager {
  /**
   * Navigate to a page
   * @param {string} page - Page name (index, login, admin)
   */
  static navigateTo(page) {
    const pages = {
      index: '/',
      booking: '/',
      login: '/login.html',
      admin: '/admin.html'
    };

    if (pages[page]) {
      window.location.href = pages[page];
    }
  }

  /**
   * Check if user is authenticated (has session)
   * @returns {boolean}
   */
  static isAuthenticated() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
  }

  /**
   * Get the logged-in admin email
   * @returns {string|null}
   */
  static getAdminEmail() {
    return sessionStorage.getItem('adminEmail');
  }

  /**
   * Set admin session after successful login
   * @param {string} email - Admin email
   */
  static setAdminSession(email) {
    sessionStorage.setItem('adminLoggedIn', 'true');
    sessionStorage.setItem('adminEmail', email);
  }

  /**
   * Clear admin session on logout
   */
  static clearAdminSession() {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminEmail');
  }

  /**
   * Redirect to login if not authenticated
   * Used on protected pages like admin.html
   */
  static requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = '/login.html';
    }
  }

  /**
   * Redirect to admin if already authenticated
   * Used on login.html to prevent re-login
   */
  static redirectIfAuthenticated() {
    if (this.isAuthenticated()) {
      window.location.href = '/admin.html';
    }
  }
}

export default NavigationManager;
