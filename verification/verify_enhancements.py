from playwright.sync_api import sync_playwright
import time

def verify_enhancements():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto("http://localhost:3000")

        print("1. Checking Progress Tracker...")
        # Check if tracker exists
        tracker = page.locator("#progress-tracker")
        if tracker.count() > 0:
            print("   Progress tracker found.")
            text = page.locator("#progress-text").text_content()
            print(f"   Initial progress: {text}")
            # Note: might not be 0/12 if local storage persisted from previous manual tests,
            # but usually fresh browser context is clean unless we persist context.
        else:
            print("   ERROR: Progress tracker not found.")
            exit(1)

        print("2. Checking Tooltips...")
        # Skip intro if needed, or click start
        if page.locator("#start-btn").is_visible():
            page.click("#start-btn")

        # Wait for map and markers
        page.wait_for_selector(".marker-pin", state="visible")
        time.sleep(2) # Wait for all markers

        # Hover over the first marker
        marker = page.locator(".marker-pin").first
        marker.hover()

        # Check for tooltip
        # Leaflet tooltips have class .leaflet-tooltip
        try:
            page.wait_for_selector(".leaflet-tooltip", state="visible", timeout=5000)
            # Use .first to handle potential multiple tooltips in DOM
            tooltip = page.locator(".custom-tooltip").first
            if tooltip.count() > 0:
                print("   Custom tooltip found.")
                title = tooltip.locator(".tooltip-title").text_content()
                print(f"   Tooltip Title: {title}")
            else:
                print("   ERROR: Custom tooltip not found.")
                exit(1)
        except Exception as e:
            print(f"   ERROR: Tooltip did not appear. {e}")
            exit(1)

        print("3. Checking Legends...")
        # Click the marker to open panel
        marker.click()
        try:
            page.wait_for_selector("#info-panel.visible")
            time.sleep(1)

            # Check for legend box
            legend = page.locator(".legend-box")
            if legend.count() > 0:
                print("   Legend box found.")
                title = legend.locator(".legend-title").text_content()
                text = legend.locator(".legend-text").text_content()
                print(f"   Legend Title: {title}")
                print(f"   Legend Text: {text}")
            else:
                print("   ERROR: Legend box not found.")
                # Don't exit, maybe this specific site doesn't have one?
                # But all sites should have one now.
                exit(1)
        except Exception as e:
             print(f"   ERROR: Panel did not open or legend missing. {e}")
             exit(1)

        print("4. Checking Progress Update...")
        # Progress should now be updated
        new_text = page.locator("#progress-text").text_content()
        print(f"   New progress: {new_text}")
        count = int(new_text.split('/')[0])
        if count >= 1:
            print("   Progress updated successfully.")
        else:
            print("   ERROR: Progress did not update.")
            exit(1)

        browser.close()
        print("Verification Successful!")

if __name__ == "__main__":
    verify_enhancements()
