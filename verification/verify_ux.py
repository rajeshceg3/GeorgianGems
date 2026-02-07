from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        print("Starting Desktop UX Verification...")
        # Desktop Scenario
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto("http://localhost:8000")

        # Handle Intro Overlay
        try:
            print("Checking for intro overlay...")
            if page.is_visible("#intro-overlay"):
                print("Intro found. Clicking Start Journey.")
                page.click("#start-btn")
                # Wait for overlay to hide
                page.wait_for_selector("#intro-overlay.hidden", state="attached")
                # Wait for fly-in animation
                print("Waiting for fly-in animation...")
                page.wait_for_timeout(3000)
        except Exception as e:
            print(f"Intro handling exception: {e}")

        # Wait for markers to load (Leaflet markers are in DOM)
        print("Waiting for markers...")
        page.wait_for_selector(".custom-marker", state="visible")

        # Click the first marker (Mtskheta)
        # Markers are added in order, so first one should be Mtskheta
        markers = page.locator(".custom-marker")
        if markers.count() > 0:
            print(f"Found {markers.count()} markers. Clicking first.")
            # Ensure marker is clickable (might need to wait for map to settle)
            page.wait_for_timeout(1000)
            markers.first.click(force=True) # Force click in case of slight overlap or map movement

            # Wait for panel to appear
            print("Waiting for info panel...")
            page.wait_for_selector("#info-panel.visible", state="visible")

            # Wait a bit for animations
            page.wait_for_timeout(2000)

            page.screenshot(path="verification/desktop_ux.png")
            print("Desktop screenshot taken: verification/desktop_ux.png")
        else:
            print("No markers found!")

        print("Starting Mobile UX Verification...")
        # Mobile Scenario
        page_mobile = browser.new_page(viewport={'width': 375, 'height': 812}, is_mobile=True)
        page_mobile.goto("http://localhost:8000")

        # Handle Intro Overlay Mobile
        try:
            if page_mobile.is_visible("#intro-overlay"):
                page_mobile.click("#start-btn")
                page_mobile.wait_for_selector("#intro-overlay.hidden", state="attached")
                page_mobile.wait_for_timeout(3000)
        except Exception as e:
            print(f"Mobile intro handling exception: {e}")

        page_mobile.wait_for_selector(".custom-marker", state="visible")

        markers_mobile = page_mobile.locator(".custom-marker")
        if markers_mobile.count() > 1:
            print("Clicking second marker on mobile.")
            page_mobile.wait_for_timeout(1000)
            markers_mobile.nth(1).click(force=True)

            page_mobile.wait_for_selector("#info-panel.visible", state="visible")
            page_mobile.wait_for_timeout(2000)

            page_mobile.screenshot(path="verification/mobile_ux.png")
            print("Mobile screenshot taken: verification/mobile_ux.png")

        browser.close()

if __name__ == "__main__":
    run()
