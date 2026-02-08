from playwright.sync_api import sync_playwright
import time

def verify_ux():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a high-res mobile device for one test, and desktop for another
        # Let's do desktop first
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # Navigate to the local server (assuming it's running on 3000)
        page.goto("http://localhost:3000")

        # 1. Intro Screen
        page.wait_for_selector("#intro-overlay")
        # Wait a bit for the slow zoom to start showing
        time.sleep(2)
        page.screenshot(path="verification/1_intro.png")
        print("Screenshot 1: Intro captured.")

        # 2. Start Journey
        page.click("#start-btn")
        # Wait for cinematic fly-in
        time.sleep(3)
        page.screenshot(path="verification/2_map_view.png")
        print("Screenshot 2: Map view captured.")

        # 3. Click a marker
        # We need to find a marker. The markers are Leaflet markers, which are DOM elements.
        # They have class 'marker-pin'.
        # Wait for markers to pop in (staggered)
        page.wait_for_selector(".marker-pin", state="visible")
        time.sleep(2) # Wait for all to pop in

        markers = page.locator(".marker-pin")
        count = markers.count()
        print(f"Found {count} markers.")

        if count > 0:
            # Click the first one
            markers.first.click()
            # Wait for panel to open
            page.wait_for_selector("#info-panel.visible")
            time.sleep(1.5) # Wait for animations
            page.screenshot(path="verification/3_info_panel.png")
            print("Screenshot 3: Info panel captured.")

        browser.close()

if __name__ == "__main__":
    verify_ux()
