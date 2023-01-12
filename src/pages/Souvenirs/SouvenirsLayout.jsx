import React, { useEffect } from "react";

export const SouvenirsLayout = () => {
  useEffect(() => {
    (function () {
      let scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: "eb0e3e.myshopify.com",
          storefrontAccessToken: "c1fdef40f7920e0595b689632a5ce50f",
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent("collection", {
            id: "426276127034",
            node: document.getElementById("collection-component-1666992470842"),
            moneyFormat: "%24%7B%7Bamount_with_comma_separator%7D%7D",
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
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "bold",
                    "font-size": "17px",
                    "padding-top": "16.5px",
                    "padding-bottom": "16.5px",
                    color: "#1ef448",
                    ":hover": {
                      color: "#1ef448",
                      "background-color": "#3d42ff",
                    },
                    "background-color": "#2427b1",
                    ":focus": {
                      "background-color": "#3d42ff",
                    },
                    "border-radius": "10px",
                    "padding-left": "45px",
                    "padding-right": "45px",
                  },
                  quantityInput: {
                    "font-size": "17px",
                    "padding-top": "16.5px",
                    "padding-bottom": "16.5px",
                  },
                },
                buttonDestination: "modal",
                contents: {
                  options: false,
                },
                text: {
                  button: "View product",
                },
                googleFonts: ["Montserrat"],
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
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "bold",
                    "font-size": "17px",
                    "padding-top": "16.5px",
                    "padding-bottom": "16.5px",
                    color: "#1ef448",
                    ":hover": {
                      color: "#1ef448",
                      "background-color": "#3d42ff",
                    },
                    "background-color": "#2427b1",
                    ":focus": {
                      "background-color": "#3d42ff",
                    },
                    "border-radius": "10px",
                    "padding-left": "45px",
                    "padding-right": "45px",
                  },
                  quantityInput: {
                    "font-size": "17px",
                    "padding-top": "16.5px",
                    "padding-bottom": "16.5px",
                  },
                },
                googleFonts: ["Montserrat"],
                text: {
                  button: "Add to cart",
                },
              },
              option: {},
              cart: {
                styles: {
                  button: {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "bold",
                    "font-size": "17px",
                    "padding-top": "16.5px",
                    "padding-bottom": "16.5px",
                    color: "#1ef448",
                    ":hover": {
                      color: "#1ef448",
                      "background-color": "#3d42ff",
                    },
                    "background-color": "#2427b1",
                    ":focus": {
                      "background-color": "#3d42ff",
                    },
                    "border-radius": "10px",
                  },
                },
                text: {
                  total: "Subtotal",
                  button: "Checkout",
                },
                googleFonts: ["Montserrat"],
              },
              toggle: {
                styles: {
                  toggle: {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "bold",
                    "background-color": "#2427b1",
                    ":hover": {
                      "background-color": "#3d42ff",
                    },
                    ":focus": {
                      "background-color": "#3d42ff",
                    },
                  },
                  count: {
                    "font-size": "17px",
                    color: "#1ef448",
                    ":hover": {
                      color: "#1ef448",
                    },
                  },
                  iconPath: {
                    fill: "#1ef448",
                  },
                },
                googleFonts: ["Montserrat"],
              },
            },
          });
        });
      }
    })();
  }, []);

  return (
    <section>
      <div id="collection-component-1666992470842"></div>
    </section>
  );
};
