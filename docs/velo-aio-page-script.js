/**
 * Velo page code for the All-In-One Camera page in Wix Studio.
 *
 * Same pattern as docs/velo-obd-page-script.js (confirmed working 2026-11-11
 * for the OBD II Tracker). Copy this onto the camera's own Wix page.
 *
 * HOW TO USE:
 * 1. In Wix Studio Editor, open the page that embeds accugps_aio_camera.html
 *    as an HTML Component (same approach as the OBD page, not a fresh
 *    native rebuild in the Product Page module, see docs/decisions.md).
 * 2. Click the {} Dev Mode toggle to open the Velo code panel.
 * 3. Open that page's own "Page Code" tab (not a site-level file).
 * 4. Paste this file in. The HTML Component on the page must have element
 *    ID "html1" (set it in the Properties panel if different).
 * 5. Save and Preview. Confirm "Added to cart successfully" in the Dev
 *    Console and that the mini-cart opens with the All-In-One Camera.
 *
 * All-In-One Camera product ID: 04f6bd52-a9ca-1d5e-8144-5a39b4ff74ae
 * (from Wix Stores Catalog V1, confirmed via ExecuteWixAPI query-products, 2026-11-12)
 */

import { cart } from 'wix-stores-frontend';
import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

const AIO_CAMERA_PRODUCT_ID = '04f6bd52-a9ca-1d5e-8144-5a39b4ff74ae';

$w.onReady(function () {
  $w('#html1').onMessage(async (event) => {
    const data = event.data;

    if (data.action === 'addToCart') {
      try {
        await cart.addProducts([{ productId: AIO_CAMERA_PRODUCT_ID, quantity: data.quantity || 1 }]);
        console.log('Added to cart successfully');
        wixWindow.trackEvent('AddToCart', { id: AIO_CAMERA_PRODUCT_ID, name: 'AccuGPS All-In-One Camera', price: '220', currency: 'USD', quantity: data.quantity || 1 });
        cart.showMiniCart();
      } catch (err) {
        console.error('Add to cart failed:', err);
      }
    }

    if (data.action === 'buyNow') {
      try {
        await cart.addProducts([{ productId: AIO_CAMERA_PRODUCT_ID, quantity: data.quantity || 1 }]);
        wixLocation.to('/checkout');
      } catch (err) {
        console.error('Buy now failed:', err);
        cart.showMiniCart();
      }
    }

    if (data.action === 'scrollTo') {
      try {
        wixWindow.scrollTo(0, data.top);
      } catch (err) {
        console.error('scrollTo failed:', err);
      }
    }

    if (data.action === 'setHeight') {
      $w('#html1').height = data.height;
    }
  });
});
