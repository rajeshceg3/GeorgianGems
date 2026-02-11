from playwright.sync_api import sync_playwright
import time

def visual_check():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto("http://localhost:3000")

        # 1. Screenshot Progress Tracker
        print("Capturing Progress Tracker...")
        try:
            tracker = page.locator("#progress-tracker")
            tracker.screenshot(path="verification/progress_tracker.png")
        except Exception as e:
            print(f"Failed to capture tracker: {e}")

        # 2. Screenshot Tooltip
        print("Capturing Tooltip...")
        if page.locator("#start-btn").is_visible():
            page.click("#start-btn")

        page.wait_for_selector(".marker-pin", state="visible")
        time.sleep(2)

        # Hover Mtskheta (assuming first)
        marker = page.locator(".marker-pin").first
        marker.hover()

        try:
            page.wait_for_selector(".leaflet-tooltip", state="visible", timeout=5000)
            # Take screenshot of the map area where tooltip is likely to be
            page.screenshot(path="verification/tooltip_view.png")
        except:
            print("Tooltip not visible for screenshot")

        # 3. Screenshot Legend
        print("Capturing Legend...")
        marker.click()
        page.wait_for_selector("#info-panel.visible")
        time.sleep(1)

        # Scroll to legend
        legend = page.locator(".legend-box")
        if legend.is_visible():
            legend.scroll_into_view_if_needed()
            time.sleep(0.5)
            # Screenshot the info panel
            page.locator("#info-panel").screenshot(path="verification/info_panel_legend.png")

        browser.close()

if __name__ == "__main__":
    visual_check()
