"use client";
/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            PROCARMA Insurance Services is committed to protecting your privacy
            and ensuring the security of your personal information in accordance
            with industry standards and regulations.
          </p>
        </div>

        <Card className="mb-12 border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Table of Contents
            </h2>
            <nav className="grid md:grid-cols-2 gap-3">
              <a
                href="#contract-terms"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                1. Contract Terms & Parties
              </a>
              <a
                href="#service-plan"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                2. Service Plan Coverage
              </a>
              <a
                href="#liability"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                3. Limits of Liability
              </a>
              <a
                href="#responsibilities"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                4. Your Responsibilities
              </a>
              <a
                href="#cancellation"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                5. Cancellation Policy
              </a>
              <a
                href="#transfer"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                6. Transfer Policy
              </a>
              <a
                href="#data-collection"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                7. Data Collection & Privacy
              </a>
              <a
                href="#sms-policy"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                8. SMS Opt-In/Opt-Out
              </a>
              <a
                href="#contact"
                className="block text-accent-foreground hover:text-foreground transition-colors py-2 px-3 rounded hover:bg-secondary"
              >
                9. Contact Information
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Contract Terms Section */}
        <section id="contract-terms" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contract Terms & Parties
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                This Contract is between the Customer (YOU) and the Selling
                Dealer. This is not an insurance policy, a warranty, or a
                guarantee. The Selling Dealer has appointed Preferred Customer
                Program of California LLC dba PROCARMA Insurance Service -
                Coverage ("PCP") as the authorized administrator of this
                Contract.
              </p>
              <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  Contract Period
                </h3>
                <p className="text-foreground leading-relaxed">
                  Coverage under this Contract begins on the "Sold Date" shown
                  on the front of this Contract and expires according to the
                  term or mileage of the Service Plan selected, whichever
                  matures first. Plan expiration is as noted in the Service Plan
                  Information on the front of this Contract.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Plan Section */}
        <section id="service-plan" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Service Plan Coverage
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                Coverage will be provided according to the Service Plan selected
                by YOU on the front of this Contract. All services are fully
                detailed in YOUR PROCARMA smart phone app or on your customer
                account page @ procama.info.
              </p>
              <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  How to Access Services
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Coverage is obtained by returning to the Selling Dealer and
                  presenting your PROCARMA smart phone app, or any of the
                  following identification items:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>Your contract</li>
                  <li>Your contract number</li>
                  <li>Your VIN number</li>
                  <li>Your first and last name</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Liability Section */}
        <section id="liability" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Limits of Liability
              </h2>
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed text-lg">
                  YOU will not be reimbursed for mechanical breakdown repairs,
                  whether associated with or not associated with a Preferred
                  Customer Program. YOU are responsible for any state or local
                  taxes relating to the performance of any Preferred Customer
                  Program services.
                </p>
                <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Important Notice
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    PCP neither has nor assumes any other obligation or
                    responsibility with regard to this Contract and/or YOUR
                    vehicle. The Selling Dealer has sole responsibility for
                    redeeming any Customer services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Responsibilities Section */}
        <section id="responsibilities" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Your Responsibilities
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                YOU must return to the Selling Dealer and present your PROCARMA
                smart phone app, or any of the following identification items
                (your contract, your contract number, your VIN number, or your
                first and last name) to the service department for available
                services.
              </p>
              <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r">
                <h3 className="font-bold text-destructive mb-3 text-lg">
                  Important Warning
                </h3>
                <p className="text-foreground leading-relaxed">
                  IF YOU DO NOT PRESENT any of the above listed items PRIOR TO
                  PERFORMANCE OF PREFERRED CUSTOMER PROGRAM SERVICES OR IF YOU
                  DO NOT RETURN YOUR VEHICLE TO THE SELLING DEALER FOR
                  PERFORMANCE OF PREFERRED CUSTOMER PROGRAM SERVICES, THE
                  SELLING DEALER WILL NOT BE OBLIGATED TO REIMBURSE YOU FOR THE
                  COST OF ANY SERVICES.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cancellation Section */}
        <section id="cancellation" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Cancellation Policy
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                YOU may cancel this Contract at any time. To cancel, YOU must
                either:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-foreground text-lg ml-4">
                <li>
                  Return to the Selling Dealer and deliver written notice of
                  cancellation of this Contract and all unredeemed Customer
                  services, or
                </li>
                <li>
                  For a prepaid one month plan, cancel as provided on your
                  PROCARMA smart phone app or your customer account page @
                  procama.info.
                </li>
              </ol>
              <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  Refund Policy
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Except for contracts with a term of less than sixty (60) days:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li>First 60 days: 100% refund minus redeemed services</li>
                  <li>
                    After 60 days: Pro-rata refund minus $40 cancellation fee
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transfer Section */}
        <section id="transfer" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transfer Policy
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                YOU may transfer the Preferred Customer Program Plan to another
                owner but not to another vehicle. To transfer the Contract, YOU
                must call PCP at 1-251-990-3131 for a return envelope and mail
                the following three (3) items to PCP thirty (30) days after the
                transfer of vehicle ownership:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-foreground text-lg ml-4">
                <li>
                  A letter containing the name and address of the new owner and
                  YOUR authorization to transfer
                </li>
                <li>A legible copy of the front page of this Contract</li>
                <li>
                  A check in the amount of $40 payable to PCP in payment of the
                  transfer fee
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Data Collection Section */}
        <section id="data-collection" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Data Collection & Privacy
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    User Data Collection
                  </h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Our mobile app collects customer information provided during
                    contract creation, including name, phone number, zip code,
                    state, and country. Users can update this information within
                    the app. Additionally, users may upload images from their
                    mobile device to their profile or share images via chat with
                    Dealership customer support.
                  </p>
                </div>

                <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                  <h3 className="font-bold text-foreground mb-3 text-xl">
                    Personal and Sensitive User Data
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    We prioritize user privacy and do not share personal data,
                    such as names, phone numbers, or email addresses, with third
                    parties. We adhere strictly to this principle to safeguard
                    your personal information.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    Location Services
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4 text-lg">
                    Our app requests permission to access your device&apos;s
                    location services, including background location, to enhance
                    your experience. Specifically, we use location data to:
                  </p>
                  <ul className="list-disc list-inside text-foreground space-y-2 text-lg ml-4">
                    <li>
                      Send special alerts and promotions when you are in the
                      vicinity of a participating dealership
                    </li>
                    <li>
                      Location data is collected only with your explicit consent
                    </li>
                    <li>
                      We do not share your location data with third parties
                    </li>
                    <li>
                      You can manage or disable location access at any time
                      through your device settings
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    3rd Party SDK
                  </h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    PROCARMA website and mobile apps utilize the 3rd party SDK
                    of Facebook to share links on Facebook wall. We use Facebook
                    SDK Share Post Now (Friends) refers to sharing on your own
                    Timeline. &quot;Share...&quot; gives you options to share on
                    a friend&apos;s Timeline, in a group, or on a Page you
                    manage. But no user&apos;s data is collected in this process
                    nor given to Facebook.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SMS Policy Section */}
        <section id="sms-policy" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                SMS Opt-In and Opt-Out Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    Opt-In Process
                  </h3>
                  <ul className="text-foreground space-y-3 leading-relaxed">
                    <li>
                      • Upon becoming a customer, you will receive an opt-in
                      message: "Please send 'Start' to opt-in to SMS messaging."
                    </li>
                    <li>• To consent, simply respond with 'Start&apos;</li>
                    <li>
                      • Once opted in, you&apos;ll receive important updates,
                      promotions, and notifications
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary border-l-4 border-primary p-6 rounded-r">
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    Opt-Out Process
                  </h3>
                  <ul className="text-foreground space-y-3 leading-relaxed">
                    <li>
                      • Every SMS includes an opt-out message: "To unsubscribe,
                      type 'Yes'"
                    </li>
                    <li>• Reply with 'Yes' or &apos;UNSUB&apos; to any SMS</li>
                    <li>• You'll immediately stop receiving SMS messages</li>
                    <li>
                      • We may still contact you through other permitted
                      channels
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                If you have any questions or concerns regarding our privacy
                practices, please contact our support team.
              </p>
              <div className="space-y-4 text-lg">
                <h1 className="font-bold text-foreground underline hover:text-blue-500 cursor-pointer duration-300 transition-all">
                  <Link href="/#evolve-retention">CONTACT</Link>
                </h1>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-muted-foreground mt-16 py-8 border-t">
          <p className="text-lg font-medium">
            © 2025 PROCARMA Insurance Services. All rights reserved.
          </p>
          <p className="mt-4 text-base max-w-2xl mx-auto">
            Your privacy is of utmost importance to us, and we are committed to
            ensuring a transparent and secure experience for our customers.
          </p>
        </footer>
      </div>
    </div>
  );
}
