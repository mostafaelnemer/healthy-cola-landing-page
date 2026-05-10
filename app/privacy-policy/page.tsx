import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p
            className="text-xl lg:text-2xl font-light opacity-90 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Privacy, Our Priority
          </p>
          <p
            className="text-lg opacity-75 max-w-4xl mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We respect your privacy and are committed to safeguarding your
            personal information while you interact with the HCOLA
            ecosystem.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 w-full mx-auto max-w-[1440px] px-5 sm:px-10 2xl:px-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Information We Collect */}
          <Card className="p-8 border-[#e3d6ea] bg-white" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Limited account details required to access staking, loyalty,
                  or purchase-to-earn utilities.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Voluntary data you provide for referrals, community
                  governance, or premium product access.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Technical data such as wallet addresses, device info, or
                  transaction hashes — only for security, compliance, and reward
                  fulfillment purposes.
                </p>
              </div>
            </div>
          </Card>

          {/* How We Use Your Information */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  To enable token utilities such as staking, discounts,
                  referrals, and product rewards.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  To improve user experience and optimize app integrations
                  (e.g., wellness challenges, gamified brand activities).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  To comply with applicable laws and prevent fraud or misuse of
                  the platform.
                </p>
              </div>
            </div>
          </Card>

          {/* How We Protect Your Data */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                How We Protect Your Data
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>We do not sell your personal data to third parties.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  All sensitive data is encrypted and stored in secure
                  environments.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  We minimize data collection to only what is necessary for
                  token utility delivery.
                </p>
              </div>
            </div>
          </Card>

          {/* Your Choices */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Your Choices
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  You may opt out of non-essential communications at any time.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  You can request deletion of your personal data (subject to
                  regulatory retention requirements).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Wallet addresses remain pseudonymous and under your control.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookies & Analytics */}
          <Card
            className="p-8 border-[#e3d6ea] bg-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-[#4D44B7] to-[#221E51] rounded-full"></div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Cookies & Analytics
              </h2>
            </div>
            <p className="text-muted-foreground">
              We may use cookies or equivalent technologies to understand
              website performance and improve your experience.
            </p>
          </Card>

          {/* Policy Updates */}
          <Card
            className="p-8 border-[#e3d6ea] bg-gradient-to-br from-[#4D44B7] to-[#221E51] text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-8 bg-white/30 rounded-full"></div>
              <h2 className="text-3xl font-semibold">Policy Updates</h2>
            </div>
            <p className="text-white/90">
              This privacy policy will evolve alongside new token utilities or
              regulations. We'll post changes clearly on this website, and your
              continued use of our services signifies acceptance.
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
              For questions about these Privacy Policy, please reach out to us
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
