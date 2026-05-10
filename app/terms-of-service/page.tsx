import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#4D44B7] to-[#221E51] pt-40 pb-20">
        <div className="relative max-w-[1440px] mx-auto w-full text-white flex flex-col items-center text-center z-10 px-5">
          <Badge className="px-4 mb-6 bg-white/10 text-white border-white/20">
            Legal Information
          </Badge>
          <h1
            className="text-5xl lg:text-7xl font-medium mb-6 leading-tight"
            data-aos="fade-up"
          >
            Terms of Service
          </h1>
          <p
            className="text-lg opacity-75 max-w-4xl mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            By accessing or using our website, token utilities, or related
            services, you agree to these Terms of Service.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 w-full mx-auto max-w-[1440px] px-5 sm:px-10 2xl:px-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Use of Services */}
          <Card className="p-8 border-[#e3d6ea] bg-white" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Use of Services
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  You must comply with all applicable laws and regulations in
                  your jurisdiction.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  You are solely responsible for your wallet security and
                  private keys.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  HCOLA does not provide investment advice; participation
                  in token utilities is at your own risk.
                </p>
              </div>
            </div>
          </Card>

          {/* Token Utilities */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Token Utilities
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Benefits such as staking, rewards, discounts, and access to
                  premium products are subject to availability and may change
                  over time.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  We reserve the right to suspend or modify utilities for
                  maintenance, security, or legal compliance.
                </p>
              </div>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Intellectual Property
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  All HCOLA branding, content, and materials are owned or
                  licensed by HCOLA.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  You may not copy, modify, or distribute our content without
                  prior written consent.
                </p>
              </div>
            </div>
          </Card>

          {/* Limitation of Liability */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Limitation of Liability
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  HCOLA is not responsible for losses due to market
                  volatility, smart contract bugs, or third-party integrations.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Our services are provided "as is" without warranties of any
                  kind.
                </p>
              </div>
            </div>
          </Card>

          {/* Privacy */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">Privacy</h2>
            </div>
            <p className="text-muted-foreground">
              Our{" "}
              <a
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>{" "}
              applies to any personal information we collect.
            </p>
          </Card>

          {/* Changes to Terms */}
          <Card
            className="p-8 border-[#e3d6ea] bg-gradient-to-br from-[#4D44B7] to-[#221E51] text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-white/30 rounded-full"></div>
              <h2 className="text-3xl font-semibold">Changes to Terms</h2>
            </div>
            <p className="text-white/90">
              We may update these Terms from time to time. Continued use of our
              services indicates acceptance of the latest version.
            </p>
          </Card>

          {/* Contact Section */}
          <div
            className="text-center pt-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-muted-foreground text-lg">
              For questions about these Terms of Service, please reach out to us
              through our support channels.
            </p>
            <p className="text-muted-foreground mt-6">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
