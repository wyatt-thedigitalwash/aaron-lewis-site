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

    // Shared brand styles
    const FONT = "'Clarendon', serif";
    const BG = "#0E0E0E";
    const INK = "#BCB2A5";
    const INK_MUTED = "#8A8075";
    const ACCENT = "#b63d35";
    const ACCENT_HOVER = "#993229";
    const RULE = "#2A2622";

    const btnStyles = {
      "font-family": FONT,
      "font-size": "0.75rem",
      "font-weight": "700",
      "text-transform": "uppercase",
      "letter-spacing": "0.12em",
      "border-radius": "0",
      "border": "none",
      "width": "100%",
      "padding": "12px",
      "background-color": ACCENT,
      "color": "#FFFFFF",
      "cursor": "pointer",
      ":hover": { "background-color": ACCENT_HOVER },
      ":focus": { "background-color": ACCENT_HOVER },
    };

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
                  "background-color": "transparent",
                  "border": "none",
                  "border-radius": "0",
                  "padding": "0",
                  "overflow": "hidden",
                  "@media (min-width: 601px)": {
                    "max-width": "calc(33.333% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "30px",
                    "width": "calc(33.333% - 20px)",
                    "min-width": "calc(33.333% - 20px)",
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
                  "font-family": FONT,
                  "font-weight": "300",
                  "font-size": "1.1rem",
                  "color": "#FFFFFF",
                  "padding": "1rem 1.25rem 0.25rem",
                  "margin": "0",
                },
                button: btnStyles,
                quantityInput: {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                },
                price: {
                  "font-family": FONT,
                  "font-size": "0.85rem",
                  "color": INK_MUTED,
                  "padding": "0 1.25rem",
                  "margin": "0",
                },
                compareAt: {
                  "font-family": FONT,
                  "color": INK_MUTED,
                },
                unitPrice: {
                  "font-family": FONT,
                  "color": INK_MUTED,
                },
              },
              buttonDestination: "modal",
              contents: { options: false },
              text: { button: "View Product" },
              googleFonts: [],
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
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
                button: btnStyles,
                quantityInput: {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                },
                title: {
                  "font-family": FONT,
                  "font-weight": "300",
                  "font-size": "26px",
                  "color": "#FFFFFF",
                },
                price: {
                  "font-family": FONT,
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": INK_MUTED,
                },
                compareAt: {
                  "font-family": FONT,
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  "color": INK_MUTED,
                },
                unitPrice: {
                  "font-family": FONT,
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  "color": INK_MUTED,
                },
              },
              googleFonts: [],
              text: { button: "Add to cart" },
            },
            option: {
              styles: {
                label: { "font-family": FONT, "color": INK },
                select: { "font-family": FONT, "color": INK },
              },
              googleFonts: [],
            },
            cart: {
              styles: {
                button: btnStyles,
                title: { color: INK },
                header: { color: INK },
                lineItems: { color: INK },
                subtotalText: { color: INK },
                subtotal: { color: INK },
                notice: { color: INK },
                currency: { color: INK },
                close: {
                  color: INK,
                  ":hover": { color: "#FFFFFF" },
                },
                empty: { color: INK },
                noteDescription: { color: INK },
                discountText: { color: INK },
                discountIcon: { fill: INK },
                discountAmount: { color: INK },
                cart: {
                  "background-color": BG,
                  "color": INK,
                },
              },
              text: { total: "Subtotal", button: "Checkout" },
              googleFonts: [],
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": FONT,
                  "background-color": ACCENT,
                  ":hover": { "background-color": ACCENT_HOVER },
                  ":focus": { "background-color": ACCENT_HOVER },
                },
                count: { "font-size": "13px" },
              },
              googleFonts: [],
            },
            lineItem: {
              styles: {
                variantTitle: { color: INK },
                title: { color: INK },
                price: { color: INK },
                fullPrice: { color: INK },
                discount: { color: INK },
                discountIcon: { fill: INK },
                quantity: { color: INK },
                quantityIncrement: { color: INK, "border-color": RULE },
                quantityDecrement: { color: INK, "border-color": RULE },
                quantityInput: { color: INK, "border-color": RULE },
              },
            },
          },
        });

        // MutationObserver backup for any non-iframe elements
        const container = document.getElementById("shopify-collection-component");
        if (container) {
          const observer = new MutationObserver(() => {
            container.querySelectorAll<HTMLElement>(".shopify-buy__product").forEach((el) => {
              el.style.backgroundColor = "transparent";
              el.style.border = "none";
              el.style.borderRadius = "0";
              el.style.overflow = "hidden";
            });
            container.querySelectorAll<HTMLElement>(".shopify-buy__product__title").forEach((el) => {
              el.style.color = "#FFFFFF";
              el.style.fontFamily = FONT;
            });
            container.querySelectorAll<HTMLElement>(".shopify-buy__product__actual-price").forEach((el) => {
              el.style.color = INK_MUTED;
            });
            container.querySelectorAll<HTMLElement>(".shopify-buy__btn").forEach((el) => {
              el.style.backgroundColor = ACCENT;
              el.style.color = "#FFFFFF";
              el.style.fontFamily = FONT;
              el.style.textTransform = "uppercase";
              el.style.letterSpacing = "0.12em";
              el.style.fontSize = "0.75rem";
              el.style.fontWeight = "700";
              el.style.borderRadius = "0";
              el.style.border = "none";
              el.style.width = "100%";
            });
          });
          observer.observe(container, { childList: true, subtree: true });
        }
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
