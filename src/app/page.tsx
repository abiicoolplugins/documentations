'use client';

import { ExternalLink } from 'lucide-react';

interface Plugin {
  name: string;
  details: string;
  docs?: string;
}

export default function Home() {
  const plugins: Plugin[] = [
    {
      name: "Automatic Translate Addon for Loco Translate",
      details: "https://coolplugins.net/product/automatic-translate-addon-for-loco-translate-pro/",
      docs: "https://locoaddon.com/docs/"
    },
    {
      name: "AI Content Generator For Elementor",
      details: "https://wordpress.org/plugins/ai-auto-content-generator-for-elementor/"
    },
    {
      name: "AI Translation for TranslatePress",
      details: "https://coolplugins.net/product/automatic-translate-addon-for-translatepress-pro/",
      docs: "https://docs.coolplugins.net/docs/automatic-translate-addon-for-translatepress-pro/"
    },
    {
      name: "Coins MarketCap",
      details: "https://coolplugins.net/product/coins-marketcap/",
      docs: "https://docs.coolplugins.net/docs/coin-market-cap-prices/"
    },
    {
      name: "Conditional Fields for Elementor Form Pro",
      details: "https://coolplugins.net/product/conditional-fields-for-elementor-form/",
      docs: "https://docs.coolplugins.net/docs/conditional-fields-for-elementor-pro-forms/"
    },
    {
      name: "Cool Flipbox - Shortcode & Gutenberg Block",
      details: "https://wordpress.org/plugins/flip-boxes/"
    },
    {
      name: "Cool FormKit For Elementor Forms",
      details: "https://coolplugins.net/cool-formkit-for-elementor-forms/",
      docs: "https://docs.coolplugins.net/docs/cool-formkit/"
    },
    {
      name: "Cool FormKit Lite - Elementor Form Builder",
      details: "https://wordpress.org/plugins/extensions-for-elementor-form/"
    },
    {
      name: "Cool Timeline Pro",
      details: "https://coolplugins.net/product/cool-timeline-pro/",
      docs: "https://cooltimeline.com/docs/cool-timeline-pro/"
    },
    {
      name: "Country Code For Elementor Form Telephone Field",
      details: "https://wordpress.org/plugins/country-code-field-for-elementor-form/"
    },
    {
      name: "Cryptocurrency Exchanges List PRO",
      details: "https://coolplugins.net/product/cryptocurrency-exchanges-list-pro/",
      docs: "https://docs.coolplugins.net/docs/cryptocurrency-exchanges-list-pro/"
    },
    {
      name: "Cryptocurrency Search Addon",
      details: "https://coolplugins.net/product/cryptocurrency-search-addon/",
      docs: "https://docs.coolplugins.net/docs/cryptocurrency-search-addon/"
    },
    {
      name: "Cryptocurrency Widgets For Elementor",
      details: "https://wordpress.org/plugins/cryptocurrency-widgets-for-elementor/",
      docs: "https://docs.coolplugins.net/docs/cryptocurrency-widgets/"
    },
    {
      name: "Cryptocurrency Widgets PRO",
      details: "https://coolplugins.net/product/cryptocurrency-widgets-pro/",
      docs: "https://docs.coolplugins.net/docs/cryptocurrency-widgets-pro/"
    },
    {
      name: "Event Single Page Builder Pro",
      details: "https://coolplugins.net/product/event-single-page-pro-templates-addon-for-the-events-calendar/",
      docs: "https://eventscalendaraddons.com/docs/events-single-page-builder-pro/"
    },
    {
      name: "Events Calendar Modules for Divi",
      details: "https://wordpress.org/plugins/events-calendar-modules-for-divi/",
      docs: "https://eventscalendaraddons.com/docs/events-calendar-module-for-divi-pro/"
    },
    {
      name: "Events Search For The Events Calendar",
      details: "https://coolplugins.net/product/events-search-addon-for-the-events-calendar/"
    },
    {
      name: "Events Shortcodes Pro",
      details: "https://coolplugins.net/product/events-shortcodes-pro-the-events-calendar-addon/",
      docs: "https://eventscalendaraddons.com/docs/events-shortcodes-pro/"
    },
    {
      name: "Events Speakers and Sponsors",
      details: "https://eventscalendaraddons.com/plugin/events-speakers-and-sponsors/",
      docs: "https://eventscalendaraddons.com/docs/events-speakers-and-sponsors/"
    },
    {
      name: "Events Widgets Pro for Elementor",
      details: "https://coolplugins.net/product/events-widgets-for-elementor-the-events-calendar/",
      docs: "https://eventscalendaraddons.com/docs/events-widgets-pro/"
    },
    {
      name: "Floating Chat Buttons",
      details: "https://wordpress.org/plugins/floating-contact-buttons/"
    },
    {
      name: "Form Input Masks For Elementor Form",
      details: "https://wordpress.org/plugins/form-masks-for-elementor/"
    },
    {
      name: "Input Mask Elementor Form Fields",
      details: "https://wordpress.org/plugins/mask-form-elementor/"
    },
    {
      name: "Pay With MetaMask For WooCommerce Pro",
      details: "https://paywithcryptocurrency.net/wordpress-plugin/pay-with-metamask-for-woocommerce-pro/",
      docs: "https://docs.coolplugins.net/docs/pay-with-metamask-for-woo-commerce-pro/"
    },
    {
      name: "Polylang Duplicate Content Addon",
      details: "https://wordpress.org/plugins/duplicate-content-addon-for-polylang/"
    },
    {
      name: "The Events Calendar Countdown Addon",
      details: "https://wordpress.org/plugins/countdown-for-the-events-calendar/"
    },
    {
      name: "Timeline Block Pro",
      details: "https://coolplugins.net/product/gutenberg-timeline-block-pro/",
      docs: "https://cooltimeline.com/docs/timeline-block-pro/"
    },
    {
      name: "Timeline Builder Pro",
      details: "https://coolplugins.net/product/timeline-builder-pro/",
      docs: "https://cooltimeline.com/docs/timeline-builder-pro/"
    },
    {
      name: "Timeline Module for Divi",
      details: "https://coolplugins.net/product/timeline-module-for-divi/",
      docs: "https://cooltimeline.com/docs/timeline-module-pro-for-divi/"
    },
    {
      name: "Timeline Widget Pro",
      details: "https://coolplugins.net/product/elementor-timeline-widget-pro/",
      docs: "https://cooltimeline.com/docs/timeline-widget-pro-addon-for-elementor/"
    },
    {
      name: "Web Stories Widgets For Elementor",
      details: "https://wordpress.org/plugins/shortcodes-for-amp-web-stories-and-elementor-widget/"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">WordPress Plugins Directory</h1>
        <div className="grid gap-6">
          {plugins.map((plugin, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{plugin.name}</h2>
              <div className="space-y-2">
                <a 
                  href={plugin.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </a>
                {plugin.docs && (
                  <a 
                    href={plugin.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}