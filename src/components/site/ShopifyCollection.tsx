"use client";

import { useEffect, useRef } from "react";

export function ShopifyCollection() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    const SHOPIFY_DOMAIN = "big-machine-label-group-store.myshopify.com";
    const STOREFRONT_TOKEN = "391f5f5b244f5e6b3cbe22bf2431a8d5";
    const COLLECTION_ID = "336570089661";

    function shopifyBuyInit() {
      const ShopifyBuy = (window as any).ShopifyBuy;
      if (!ShopifyBuy) return;

      console.log("[Shopify Buy Button] Config:", {
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: STOREFRONT_TOKEN,
        collectionId: COLLECTION_ID,
        componentType: "collection",
        nodeFound: !!document.getElementById("shopify-collection-component"),
      });

      const client = ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: STOREFRONT_TOKEN,
      });

      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        console.log("[Shopify Buy Button] UI ready, creating 'collection' component with id:", COLLECTION_ID);
        ui.createComponent("collection", {
          id: COLLECTION_ID,
          node: document.getElementById("shopify-collection-component"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    width: "calc(25% - 20px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                title: {
                  "font-family": "'Clarendon', serif",
                  "font-weight": "normal",
                  "font-size": "15px",
                  color: "#BCB2A5",
                },
                button: {
                  "font-family": "'Clarendon', serif",
                  "font-size": "0.75rem",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  "letter-spacing": "0.12em",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  "border-radius": "0",
                  ":hover": { "background-color": "#993229" },
                  "background-color": "#b63d35",
                  ":focus": { "background-color": "#993229" },
                  color: "#FFFFFF",
                  "padding-left": "12px",
                  "padding-right": "12px",
                },
                quantityInput: {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                },
                price: {
                  "font-family": "'Clarendon', serif",
                  color: "#BCB2A5",
                },
                compareAt: {
                  "font-family": "'Clarendon', serif",
                  color: "#BCB2A5",
                },
                unitPrice: {
                  "font-family": "'Clarendon', serif",
                  color: "#BCB2A5",
                },
              },
              buttonDestination: "modal",
              contents: { options: false },
              text: { button: "View Product" },
              googleFonts: ["PT Serif"],
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": { "margin-left": "-20px" },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "PT Serif, serif",
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  ":hover": { "background-color": "#a43730" },
                  "background-color": "#b63d35",
                  ":focus": { "background-color": "#a43730" },
                  "padding-left": "12px",
                  "padding-right": "12px",
                },
                quantityInput: {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                },
                title: {
                  "font-family": "PT Serif, serif",
                  "font-weight": "normal",
                  "font-size": "26px",
                  color: "#4c4c4c",
                },
                price: {
                  "font-family": "PT Serif, serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#4c4c4c",
                },
                compareAt: {
                  "font-family": "PT Serif, serif",
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  color: "#4c4c4c",
                },
                unitPrice: {
                  "font-family": "PT Serif, serif",
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  color: "#4c4c4c",
                },
              },
              googleFonts: ["PT Serif"],
              text: { button: "Add to cart" },
            },
            option: {
              styles: {
                label: { "font-family": "PT Serif, serif" },
                select: { "font-family": "PT Serif, serif" },
              },
              googleFonts: ["PT Serif"],
            },
            cart: {
              styles: {
                button: {
                  "font-family": "PT Serif, serif",
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  ":hover": { "background-color": "#a43730" },
                  "background-color": "#b63d35",
                  ":focus": { "background-color": "#a43730" },
                },
                title: { color: "#000000" },
                header: { color: "#000000" },
                lineItems: { color: "#000000" },
                subtotalText: { color: "#000000" },
                subtotal: { color: "#000000" },
                notice: { color: "#000000" },
                currency: { color: "#000000" },
                close: {
                  color: "#000000",
                  ":hover": { color: "#000000" },
                },
                empty: { color: "#000000" },
                noteDescription: { color: "#000000" },
                discountText: { color: "#000000" },
                discountIcon: { fill: "#000000" },
                discountAmount: { color: "#000000" },
              },
              text: { total: "Subtotal", button: "Checkout" },
              googleFonts: ["PT Serif"],
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "PT Serif, serif",
                  "background-color": "#b63d35",
                  ":hover": { "background-color": "#a43730" },
                  ":focus": { "background-color": "#a43730" },
                },
                count: { "font-size": "13px" },
              },
              googleFonts: ["PT Serif"],
            },
            lineItem: {
              styles: {
                variantTitle: { color: "#000000" },
                title: { color: "#000000" },
                price: { color: "#000000" },
                fullPrice: { color: "#000000" },
                discount: { color: "#000000" },
                discountIcon: { fill: "#000000" },
                quantity: { color: "#000000" },
                quantityIncrement: {
                  color: "#000000",
                  "border-color": "#000000",
                },
                quantityDecrement: {
                  color: "#000000",
                  "border-color": "#000000",
                },
                quantityInput: {
                  color: "#000000",
                  "border-color": "#000000",
                },
              },
            },
          },
        });
      });
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = shopifyBuyInit;
      document.head.appendChild(script);
    }

    const ShopifyBuy = (window as any).ShopifyBuy;
    if (ShopifyBuy?.UI) {
      shopifyBuyInit();
    } else {
      loadScript();
    }
  }, []);

  return <div id="shopify-collection-component" />;
}
