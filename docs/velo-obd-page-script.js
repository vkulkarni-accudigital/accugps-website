/**
 * Velo page code for the OBD II test page in Wix Studio.
 *
 * HOW TO USE:
 * 1. In Wix Studio Editor, open the test page you created.
 * 2. Click the {} Dev Mode toggle (top right) to open the Velo code panel.
 * 3. Make sure you are in the page's own code tab (e.g. "Page Code"), not a site-level file.
 * 4. Paste this entire file into that tab.
 * 5. The HTML Component on the page must have the element ID: html1
 *    (click the component, go to Properties panel, set ID to "html1" if different)
 * 6. Save and Preview.
 *
 * OBD II Smart Tracker product ID: d473bb1f-ab95-0657-082f-f0226f7b3fe5
 *
 * WHAT THIS DOES:
 * - Receives postMessage events from the GitHub Pages iframe (accugps_obd_tracker.html)
 * - On "addToCart": adds the OBD II tracker to the Wix cart and shows the mini-cart
 * - On "setHeight": resizes the HTML Component to match the page content height
 */

import { currentCart } from 'wix-ecom';

const OBD_PRODUCT_ID = 'd473bb1f-ab95-0657-082f-f0226f7b3fe5';

$w.onReady(function () {
  $w('#html1').onMessage(async (event) => {
    const data = event.data;

    if (data.action === 'addToCart') {
      try {
        await currentCart.addToCurrentCart({
          lineItems: [{
            catalogReference: {
              catalogItemId: OBD_PRODUCT_ID,
              appId: '1380b703-ce81-ff05-f115-39571d94dfcd' // Wix Stores app ID
            },
            quantity: data.quantity || 1
          }]
        });
        // Open the mini-cart so the user sees the item was added
        $w('#cartIcon1').openSideCart();
      } catch (err) {
        console.error('Add to cart failed:', err);
      }
    }

    if (data.action === 'setHeight') {
      $w('#html1').style.height = data.height + 'px';
    }
  });
});

/*
 * TROUBLESHOOTING NOTES:
 *
 * If addToCurrentCart is not recognised:
 *   Try the older API instead:
 *     import wixStores from 'wix-stores';
 *     wixStores.cart.addToCart(OBD_PRODUCT_ID, data.quantity || 1, {});
 *
 * If $w('#cartIcon1').openSideCart() errors:
 *   The cart icon element ID may be different on this page.
 *   Click the cart icon widget in the Editor, check its element ID in the Properties panel,
 *   and update the ID here.
 *
 * If the HTML Component height is not updating:
 *   The HTML component element ID must match '#html1' exactly.
 *   Update the ID in the Editor's Properties panel or change it in this script.
 *
 * The Wix Stores app ID (1380b703-ce81-ff05-f115-39571d94dfcd) is the standard
 * appId for Wix Stores catalog items. This should not need to change.
 */
