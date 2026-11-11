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
 * - On "scrollTo": scrolls the Wix page to match a section clicked in the iframe
 * - On "setHeight": resizes the HTML Component to match the page content height
 *
 * VERIFIED WORKING (2026-11-11):
 * - import { cart } from 'wix-stores-frontend' gives a cart object with:
 *   applyCoupon, removeCoupon, updateLineItemQuantity, addProducts,
 *   showMiniCart, hideMiniCart, getCurrentCart, onChange, removeProduct, reload
 * - The correct method is cart.addProducts([{ productId, quantity }])
 * - DO NOT use cart.addToCart() — it does not exist on this export
 * - DO NOT use the default import — wixStoreFrontend.addToCart() also does not exist
 */

import { cart } from 'wix-stores-frontend';

const OBD_PRODUCT_ID = 'd473bb1f-ab95-0657-082f-f0226f7b3fe5';

$w.onReady(function () {
  $w('#html1').onMessage(async (event) => {
    const data = event.data;

    if (data.action === 'addToCart') {
      try {
        await cart.addProducts([{ productId: OBD_PRODUCT_ID, quantity: data.quantity || 1 }]);
        console.log('Added to cart successfully');
        cart.showMiniCart();
      } catch (err) {
        console.error('Add to cart failed:', err);
      }
    }

    if (data.action === 'scrollTo') {
      try {
        const iframePos = $w('#html1').getPosition();
        window.scrollTo({ top: iframePos.y + data.top, behavior: 'smooth' });
      } catch (err) {
        console.error('scrollTo failed:', err);
      }
    }

    if (data.action === 'setHeight') {
      $w('#html1').height = data.height;
    }
  });
});
