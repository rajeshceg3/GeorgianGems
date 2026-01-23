from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop Scenario
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto("http://localhost:8000")

        # Wait for markers to load (Leaflet markers are in DOM)
        page.wait_for_selector(".custom-marker", state="visible")

        # Click the first marker (Mtskheta)
        # Markers are added in order, so first one should be Mtskheta
        markers = page.locator(".custom-marker")
        markers.first.click()

        # Wait for panel to appear
        page.wait_for_selector("#info-panel.visible", state="visible")

        # Wait a bit for animations
        page.wait_for_timeout(2000)

        page.screenshot(path="verification/desktop_ux.png")
        print("Desktop screenshot taken.")

        # Mobile Scenario
        page_mobile = browser.new_page(viewport={'width': 375, 'height': 812}, is_mobile=True)
        page_mobile.goto("http://localhost:8000")

        page_mobile.wait_for_selector(".custom-marker", state="visible")

        markers_mobile = page_mobile.locator(".custom-marker")
        markers_mobile.nth(1).click() # Click second marker for variety

        page_mobile.wait_for_selector("#info-panel.visible", state="visible")
        page_mobile.wait_for_timeout(2000)

        page_mobile.screenshot(path="verification/mobile_ux.png")
        print("Mobile screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
