"use server";

import * as cheerio from "cheerio";

export const fetchProductMetadata = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Accept-Language": "sv-SE,sv;q=0.9",
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    let title = $('meta[property="og:title"]').attr("content") || $("title").text() || "";

    let imageUrl = $('meta[property="og:image"]').attr("content") || "";

    let description = $('meta[property="og:description"]').attr("content") || "";

    let price = $('meta[property="product:price:amount"]').attr("content") || "";

    //Försök läsa JSON-LD
    if (!price) {
      $('script[type="application/ld+json"]').each((_, element) => {
        try {
          const json = JSON.parse($(element).html() || "");

          if (json["@type"] === "Product") {
            title = title || json.name;
            imageUrl = imageUrl || json.image;

            if (json.offers?.price) {
              price = json.offers.price;
            }
          }
        } catch (error) {
          console.error(error);
        }
      });
    }

    return {
      success: true,
      title,
      imageUrl,
      description,
      price,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      title: "",
      imageUrl: "",
      description: "",
      price: "",
    };
  }
};
