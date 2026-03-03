/**
 * Terms of Service – static legal page.
 * Server component — no interactivity required.
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service – Citadel Digital Signage",
  description:
    "Read the Citadel Digital Signage Terms of Service, including the Royalty-Free License Agreement governing use of the platform and content library.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    locale: "en_US",
    title: "Terms of Service – Citadel Digital Signage",
    description:
      "Read the Citadel Digital Signage Terms of Service and Royalty-Free License Agreement.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service – Citadel Digital Signage",
    description:
      "Read the Citadel Digital Signage Terms of Service and Royalty-Free License Agreement.",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 bg-white">

        {/* Header */}
        <div className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-sm">
              Effective Date: 5/30/16 &nbsp;·&nbsp; Last Updated: 9/1/25
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

            {/* Preamble */}
            <section>
              <p className="font-bold text-slate-900 uppercase text-xs tracking-wide mb-4">
                Please Read This Terms of Use Agreement Carefully
              </p>
              <p className="mb-4">
                IT CONTAINS VERY IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS, AS WELL AS LIMITATIONS AND
                EXCLUSIONS THAT MAY APPLY TO YOU. AMONG OTHER PROVISIONS, THIS DOCUMENT CONTAINS A BINDING ARBITRATION
                AGREEMENT THAT WAIVES YOUR RIGHT TO A JURY TRIAL AND A CLASS ACTION WAIVER.
              </p>
              <p className="mb-4">
                BY ACCESSING OR USING CITADELDIGITALSIGNAGE.COM OR ANY OTHER WEBSITES OF CITADEL, ITS AFFILIATES OR
                AGENTS (&ldquo;CITADEL&rdquo;) WITH LINKS TO THESE TERMS OF USE (COLLECTIVELY, THE &ldquo;WEBSITE&rdquo;) IN ANY WAY,
                INCLUDING USING THE SERVICES AND RESOURCES AVAILABLE OR ENABLED VIA THE WEBSITE (EACH A
                &ldquo;SERVICE&rdquo; AND COLLECTIVELY, THE &ldquo;SERVICES&rdquo;) BY CITADEL OR USERS OF THE SITE (&ldquo;USERS&rdquo;),
                COMPLETING THE REGISTRATION PROCESS TO SET UP AN ACCOUNT, AND/OR MERELY BROWSING THE WEBSITE, YOU
                REPRESENT THAT (1) YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THESE TERMS OF USE, (2) YOU
                ARE OF LEGAL AGE TO FORM A BINDING CONTRACT WITH CITADEL, AND (3) YOU HAVE THE AUTHORITY TO ENTER
                INTO THESE TERMS OF USE PERSONALLY OR ON BEHALF OF THE ENTITY YOU HAVE NAMED AS THE MEMBER, AND TO
                BIND THAT ENTITY TO THESE TERMS. THE TERM &ldquo;YOU&rdquo; REFERS TO THE INDIVIDUAL OR LEGAL ENTITY, AS
                APPLICABLE, IDENTIFIED AS THE MEMBER WHEN YOU PURCHASED VIDEOS ON THE WEBSITE. IF YOU DO NOT AGREE
                TO BE BOUND BY THESE TERMS OF USE, YOU MAY NOT ACCESS OR USE THIS WEBSITE OR THE SERVICES.
              </p>
              <p className="mb-4">
                Your use of, and participation in, certain Services may be subject to additional terms
                (&ldquo;Supplemental Terms&rdquo;) and such Supplemental Terms will either be listed in these Terms of Use or
                will be presented to you for your acceptance when you sign up to use the supplemental Service. If these
                Terms of Use are inconsistent with such Supplemental Terms, the Supplemental Terms shall control with
                respect to such Service. For example, if you download and/or use graphics, video clips, and other media
                content (&ldquo;Videos&rdquo;) from the Citadel Platform, your downloading and use of those Videos will be governed
                by the separate license agreement located on the Website (&ldquo;Royalty Free License Agreement&rdquo;). These Terms
                of Use and any applicable Supplemental Terms are referred to herein as the &ldquo;Terms.&rdquo;
              </p>
              <p className="mb-4">
                However, these Terms will not apply when you license any Videos to Citadel Digital Signage; any such
                license and relationship will be covered in a separate agreement between you and Citadel Digital Signage
                and any Videos or related material that you license to Citadel Digital Signage will not be considered
                Your Content under these Terms.
              </p>
              <p>
                PLEASE NOTE THAT the Terms are subject to change by Citadel Digital Signage in its sole discretion at
                any time. When changes are made, Citadel Digital Signage will make a new copy of the Terms of Use
                available at the Website and any new Supplemental Terms will be made available from within, or through,
                the affected Service on the Website. We will also update the &ldquo;Last Updated&rdquo; date at the top of these
                Terms of Use. If we make any material changes, and you have registered to use the Services, we will also
                send an e-mail to you at the last e-mail address you provided to us pursuant to these Terms. Any changes
                to these Terms will be effective immediately for new Users of the Website or Services and will be
                effective thirty (30) days after posting of notice of such changes on the Website for existing Users,
                provided that any material changes shall be effective for Users who have a registered account on the
                Website (each, a &ldquo;Registered User&rdquo;) upon the earlier of thirty (30) days after posting of notice of
                such changes on the Website or thirty (30) days after dispatch of an e-mail notice of such changes to
                Registered Users. Citadel Digital Signage may require you to provide consent to the updated Terms in a
                specified manner before further use of the Website or the Services is permitted. If you do not agree to
                any change(s) after receiving a notice of such change(s), you shall stop using the Website and/or the
                Services. Otherwise, your continued use of the Website and/or Services constitutes your acceptance of
                such change(s). PLEASE REGULARLY CHECK THE WEBSITE TO VIEW THE THEN CURRENT TERMS.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Use of Services */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Use of the Services and Citadel Digital Signage Materials
              </h2>
              <p className="mb-4">
                The information and content available on the Website and in the Services, other than Videos
                (collectively, the &ldquo;Citadel Digital Signage Materials&rdquo;) and the Videos are protected by copyright laws
                throughout the world. Subject to these Terms, Citadel Digital Signage grants you a limited license to
                reproduce portions of the Citadel Digital Signage Materials for the sole purpose of using the Services
                for your personal or non-commercial purposes. Unless otherwise specified by Citadel Digital Signage in a
                separate license, your right to use any Citadel Digital Signage Materials or Videos that you access or
                download through the Website or the Services is subject to the Terms. Any use of the Videos will be
                governed by the Supplemental Terms in the Royalty Free License Agreement.
              </p>
              <p className="mb-4">
                <strong>Updates.</strong> You understand that the Website and the Services are evolving. As a result,
                Citadel Digital Signage may require you to accept updates to the Website or the Services that you have
                installed on your computer or mobile device. You acknowledge and agree that Citadel Digital Signage may
                update the Website, and/or the Services with or without notifying you. You may need to update third
                party software from time to time in order to receive the Services or use the Website.
              </p>
              <p>
                <strong>Certain Restrictions.</strong> Except to the extent expressly permitted in any Supplemental
                Terms, the rights granted to you in these Terms are subject to the following restrictions: (a) you shall
                not license, sell, rent, lease, transfer, assign, reproduce, distribute, host or otherwise commercially
                exploit the Website or any portion of the Website, including any Citadel Digital Signage Materials; (b)
                you shall not frame or utilize framing techniques to enclose any trademark, logo, or other Citadel
                Digital Signage Materials; (c) you shall not use any metatags or other &ldquo;hidden text&rdquo; using Citadel
                Digital Signage&rsquo;s name or trademarks; (d) you shall not modify, translate, adapt, merge, make derivative
                works of, disassemble, decompile, reverse compile, or reverse engineer any part of the Citadel Digital
                Signage Materials except to the extent the foregoing restrictions are expressly prohibited by applicable
                law; (e) you shall not use any manual or automated software, devices or other processes to &ldquo;scrape&rdquo; or
                download data from any web pages contained in the Website; (f) access the Citadel Digital Signage
                Materials in order to build a similar or competitive website or service; (g) except as expressly stated
                herein, no part of the Citadel Digital Signage Materials may be copied, reproduced, distributed,
                republished, downloaded, displayed, posted, or transmitted in any form or by any means; and (h) you
                shall not remove or destroy any copyright notices or other proprietary markings contained on or in the
                Citadel Digital Signage Materials. Any future release, update or other addition to the Citadel Digital
                Signage Materials shall be subject to these Terms. Citadel Digital Signage, its suppliers and service
                providers reserve all rights not granted in the Terms. Any unauthorized use of the Website or the
                Services terminates the licenses granted by Citadel Digital Signage pursuant to the Terms.
              </p>
              <p className="mt-4">
                <strong>Third Party Materials.</strong> As a part of the Citadel Digital Signage Materials, you may
                have access to materials that are hosted by another party. You agree that it is impossible for Citadel
                Digital Signage to monitor such materials and that you access these materials at your own risk.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Registration */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Registration</h2>
              <p className="mb-4">
                <strong>Registering your Account.</strong> In order to access certain features of the Website and the
                Services you may be required to become a Registered User. For purposes of these Terms, a
                &ldquo;Registered User&rdquo; is a User who has registered an account on the Website (&ldquo;Account&rdquo;).
              </p>
              <p className="mb-4">
                <strong>Registration Data.</strong> In registering for the Services, you agree to (1) provide true,
                accurate, current and complete information about yourself as prompted by the Services&rsquo; registration form
                (the &ldquo;Registration Data&rdquo;); and (2) maintain and promptly update the Registration Data to keep it true,
                accurate, current and complete. You represent that you are (1) at least eighteen (18) years old; (2) of
                legal age to form a binding contract; and (3) not a person barred from using the Services under the laws
                of the United States, your place of residence or any other applicable jurisdiction. You agree that you
                shall monitor your Account to restrict use by minors, and you will accept full responsibility for any
                unauthorized use of the Citadel Digital Signage Materials or the Services by minors. If you provide any
                information that is untrue, inaccurate, not current or incomplete, Citadel Digital Signage has the right
                to suspend or terminate your Account and refuse any and all current or future use of the Citadel Digital
                Signage Materials and/or the Services. You agree not to create an Account using a false identity or
                information, or on behalf of someone other than yourself. Citadel Digital Signage reserves the right to
                remove or reclaim any usernames at any time and for any reason. You agree not to create an Account or
                use the Citadel Digital Signage Materials and/or the Services if you have been previously removed by
                Citadel Digital Signage, or if you have been previously banned from the Services.
              </p>
              <p className="mb-4">
                <strong>Activities.</strong> You are responsible for all activities that occur under your Account. You
                may not share your Account or password with anyone, and you agree to (1) notify Citadel Digital Signage
                immediately of any unauthorized use of your password or any other breach of security; and (2) exit from
                your Account at the end of each session.
              </p>
              <p>
                <strong>Necessary Equipment and Software.</strong> You must provide all equipment and software
                necessary to connect to the Citadel Digital Signage Materials and the Services, including but not
                limited to, a mobile device that is suitable to connect with and use the Citadel Digital Signage
                Materials and the Services, in cases where the Services offer a mobile component. You are solely
                responsible for any fees, including Internet connection or mobile fees, that you incur when accessing
                the Citadel Digital Signage Materials and the Services.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Responsibility for Content */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Responsibility for Content</h2>
              <p>
                <strong>Storage.</strong> Unless expressly agreed to by Citadel Digital Signage in writing elsewhere,
                Citadel Digital Signage has no obligation to store any of Your Content that you Make Available on the
                Website or via the Services. Citadel Digital Signage has no responsibility or liability for the deletion
                or accuracy of any Content; the failure to store, transmit, or receive transmission of Content; or the
                security, privacy, storage, or transmission of other communications originating with or involving use of
                the Services. You agree that Citadel Digital Signage retains the right to create reasonable limits on
                Citadel Digital Signage&rsquo;s use and storage of the Content, such as limits on file size, storage space,
                processing capacity, and similar limits described in the web pages accompanying the Services and as
                otherwise determined by Citadel Digital Signage in its sole discretion.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Ownership */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Ownership</h2>
              <p className="mb-4">
                <strong>Citadel Digital Signage Materials.</strong> You agree that Citadel Digital Signage and its
                suppliers own all rights, title, and interest in the Website, the Services, the Videos and the Citadel
                Digital Signage Materials. You will not remove, alter, or obscure any copyright, trademark, service
                mark, or other proprietary rights notices incorporated in or accompanying the Website, the Services, or
                the Citadel Digital Signage Materials.
              </p>
              <p>
                <strong>Trademarks.</strong> Citadel Digital Signage and other related graphics, logos, service marks,
                and trade names used on the Website, in the Citadel Digital Signage Materials or in connection with the
                Services are the trademarks of Citadel Digital Signage and may not be used without permission in
                connection with any third party products or services. Other trademarks, service marks and trade names
                that may appear on the Website, in the Citadel Digital Signage Materials or in connection with the
                Services are the property of their respective owners.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* User Conduct */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">User Conduct</h2>
              <p className="mb-3">
                <strong>Commercial Activities.</strong> You agree that you will not, under any circumstances (except to
                the extent expressly authorized by these Terms):
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reproduce, duplicate, copy, sell, trade, resell, or exploit for any commercial purpose any portion of the Website, Services, or Citadel Digital Signage Materials;</li>
                <li>Upload, post, e-mail, transmit, or otherwise make available any unsolicited or unauthorized advertising, promotional materials, &ldquo;junk mail,&rdquo; &ldquo;spam,&rdquo; &ldquo;chain letters,&rdquo; &ldquo;pyramid schemes,&rdquo; or any other form of solicitation;</li>
                <li>Use the Website, Services, or Citadel Digital Signage Materials for any commercial purpose including communicating or facilitating any commercial advertisement or solicitation;</li>
                <li>Engage in any chain letters, contests, junk email, pyramid schemes, spamming, surveys, or other duplicative or unsolicited messages; or</li>
                <li>Market any goods or services for any business purposes.</li>
              </ul>
              <p className="mb-3">
                <strong>Unauthorized Use or Access.</strong> You agree that you will not, under any circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Interfere or attempt to interfere with the proper functioning of the Website, Services, or Citadel Digital Signage Materials;</li>
                <li>Systematically retrieve data or other content from our Website or Services to create or compile a collection, compilation, database, or directory, whether by manual methods, through the use of bots, crawlers, or spiders, or otherwise; or</li>
                <li>Use, display, mirror, or frame the Website, Services, or Citadel Digital Signage Materials without Citadel Digital Signage&rsquo;s express written consent.</li>
              </ul>
              <p className="mb-3">
                <strong>General.</strong> In connection with your use of the Website, Services, and Citadel Digital
                Signage Materials, you shall not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make Available any Content that is unlawful, tortious, defamatory, vulgar, obscene, libelous, or racially, ethnically, or otherwise objectionable;</li>
                <li>Harm minors in any way;</li>
                <li>Impersonate any person or entity, including Citadel Digital Signage personnel;</li>
                <li>Make Available any Content that infringes the rights of any person or entity, including any patent, trademark, trade secret, copyright, privacy, publicity or other proprietary or contractual rights;</li>
                <li>Intentionally or unintentionally violate any applicable local, state, national or international law or regulation;</li>
                <li>Register for more than one Account or register for an Account on behalf of an individual other than yourself;</li>
                <li>Stalk or otherwise harass any other user; or</li>
                <li>Advocate, encourage or assist any third party in doing any of the foregoing activities.</li>
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* Investigations */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Investigations</h2>
              <p>
                If Citadel Digital Signage becomes aware of any possible violations by you of any provision of the
                Terms, Citadel Digital Signage reserves the right to investigate such violations, and Citadel Digital
                Signage may, at its sole discretion, immediately terminate your license to use the Website, Services, or
                Citadel Digital Signage Materials.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Fees and Purchase Terms */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Fees and Purchase Terms</h2>
              <p className="mb-4">
                <strong>Payment.</strong> You agree to pay all fees or charges to your Account in accordance with the
                fees, charges, and billing terms in effect at the time a fee or charge is due and payable. You must
                provide Citadel Digital Signage with valid credit card or other payment account information as a
                condition to signing up for the Services. By providing Citadel Digital Signage with your credit card
                number or other payment account and associated payment information, you agree that Citadel Digital
                Signage is authorized to immediately invoice your Account for all fees and charges due and payable.
                Citadel Digital Signage reserves the right at any time to change its prices and billing methods, either
                immediately upon posting on the Website or by e-mail delivery to you.
              </p>
              <p className="mb-4">
                <strong>Service Subscription Fees.</strong> You will be responsible for payment of the applicable fee
                for any Services (each, a &ldquo;Service Subscription Fee&rdquo;) at the time you create your Account and select
                your annual package (each, a &ldquo;Service Commencement Date&rdquo;). Except as set forth in these Terms, all fees
                for the Services are non-refundable. No contract will exist between you and Citadel Digital Signage for
                the Services until Citadel Digital Signage accepts your order by a confirmatory e-mail or other
                appropriate means of communication.
              </p>
              <p>
                <strong>Taxes.</strong> Citadel Digital Signage&rsquo;s fees are net of any applicable Sales Tax. If any
                Services, or payments for any goods or services, under this Agreement are subject to Sales Tax in any
                jurisdiction, you will be responsible for payment of such Sales Tax, and any related penalties or
                interest, and will indemnify Citadel Digital Signage for any liability or expense Citadel Digital
                Signage may incur in connection with such Sales Taxes.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Indemnification */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold Citadel Digital Signage Parties harmless from any losses, costs,
                liabilities, and expenses (including reasonable attorneys&rsquo; fees) relating to or arising out of: (a) your
                use of, or inability to use, the Website or the Services; (b) your violation of the Terms; (c) your
                violation of any rights of another party; or (d) your violation of any applicable laws, rules, or
                regulations. Citadel Digital Signage reserves the right, at its own cost, to assume the exclusive
                defense and control of any matter otherwise subject to indemnification by you, in which event you will
                fully cooperate with Citadel Digital Signage in asserting any available defenses. You agree that the
                provisions in this section will survive any termination of your Account or the Services.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
              <p className="mb-4">
                AS IS. YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE
                OF THE WEBSITE AND THE SERVICES IS AT YOUR SOLE RISK, AND THE WEBSITE AND THE SERVICES ARE PROVIDED
                ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITH ALL FAULTS. CITADEL PARTIES EXPRESSLY DISCLAIM ALL
                WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
                NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE AND NON-INFRINGEMENT.
              </p>
              <p className="mb-4">
                THE CITADEL PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) THE WEBSITE OR THE
                SERVICES WILL MEET YOUR REQUIREMENTS; (2) THE WEBSITE OR THE SERVICES WILL BE UNINTERRUPTED, TIMELY,
                SECURE OR ERROR-FREE; (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE WEBSITE OR SERVICES WILL
                BE ACCURATE OR RELIABLE; OR (4) ANY ERRORS IN THE WEBSITE OR THE SERVICES WILL BE CORRECTED.
              </p>
              <p className="mb-4">
                ANY CONTENT OR CITADEL MATERIALS PURCHASED FROM OR OTHERWISE ACCESSED THROUGH THE WEBSITE OR THE
                SERVICES IS ACCESSED AT YOUR OWN RISK, AND YOU SHALL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR
                PROPERTY OR PERSON, INCLUDING YOUR COMPUTER SYSTEM AND ANY DEVICE YOU USE TO ACCESS THE WEBSITE OR
                THE SERVICES, OR ANY OTHER LOSS THAT RESULTS FROM ACCESSING SUCH CONTENT.
              </p>
              <p className="mb-4">
                THE SERVICES MAY BE SUBJECT TO DELAYS, CANCELLATIONS AND OTHER DISRUPTIONS. CITADEL MAKES NO
                WARRANTY, REPRESENTATION, OR CONDITION WITH RESPECT TO SERVICES, INCLUDING BUT NOT LIMITED TO, THE
                QUALITY, EFFECTIVENESS, REPUTATION, AND OTHER CHARACTERISTICS OF SERVICES. NO ADVICE OR INFORMATION,
                WHETHER ORAL OR WRITTEN, OBTAINED FROM CITADEL OR THROUGH THE WEBSITE OR THE CITADEL MATERIALS WILL
                CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
              </p>
              <p className="mb-4">
                From time to time, Citadel Digital Signage may offer new &ldquo;beta&rdquo; features or tools with which its users
                may experiment. Such features or tools are offered solely for experimental purposes and without any
                warranty of any kind, and may be modified or discontinued at Citadel Digital Signage&rsquo;s sole discretion.
              </p>
              <p>
                NO LIABILITY FOR CONDUCT OF THIRD PARTIES. YOU ACKNOWLEDGE AND AGREE THAT THE CITADEL PARTIES ARE NOT
                LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD THE CITADEL PARTIES LIABLE, FOR THE CONDUCT OF THIRD
                PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND THAT THE RISK OF INJURY FROM SUCH THIRD PARTIES
                RESTS ENTIRELY WITH YOU. CITADEL MAKES NO WARRANTY THAT THE GOODS OR SERVICES PROVIDED BY THIRD
                PARTIES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                DISCLAIMER OF CERTAIN DAMAGES. YOU UNDERSTAND AND AGREE THAT IN NO EVENT SHALL THE CITADEL PARTIES BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN
                CONNECTION WITH THE WEBSITE, THE SERVICES OR THE SITE CONTENT, INCLUDING, WITHOUT LIMITATION, ANY
                DAMAGES RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER OR NOT CITADEL HAS BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS
                ARISING OUT OF OR IN CONNECTION WITH THESE TERMS, ON ANY THEORY OF LIABILITY, RESULTING FROM: (1) THE
                USE OR INABILITY TO USE THE WEBSITE OR THE SERVICES; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS
                OR SERVICES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (4) STATEMENTS
                OR CONDUCT OF ANY THIRD PARTY ON THE WEBSITE OR THE SERVICES; OR (5) ANY OTHER MATTER RELATED TO THE
                WEBSITE OR THE SERVICES.
              </p>
              <p className="mb-4">
                CAP ON LIABILITY. UNDER NO CIRCUMSTANCES WILL THE CITADEL PARTIES BE LIABLE TO YOU FOR MORE THAN THE
                AMOUNT RECEIVED BY CITADEL AS A RESULT OF YOUR USE OF THE WEBSITE AND THE SERVICES.
              </p>
              <p className="mb-4">
                CONTENT. THE CITADEL PARTIES ASSUME NO RESPONSIBILITY FOR THE TIMELINESS, DELETION, MIS-DELIVERY, OR
                FAILURE TO STORE ANY CONTENT, USER COMMUNICATIONS OR PERSONALIZATION SETTINGS.
              </p>
              <p className="mb-4">
                Information Verification. Citadel Digital Signage Parties may use various ways of verifying information
                that Users have provided. However, none of those ways are perfect, and you agree that Citadel Digital
                Signage and its suppliers will have no liability to you arising from any incorrectly verified
                information.
              </p>
              <p>
                BASIS OF THE BARGAIN. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS
                OF THE BARGAIN BETWEEN CITADEL AND YOU. CERTAIN JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION
                OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE EXCLUSIONS OR LIMITATIONS MAY
                NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Term and Termination */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Term and Termination</h2>
              <p className="mb-4">
                <strong>Term.</strong> These Terms commence on the date when you accept them and remain in full force
                and effect while you use the Website or any Services, unless terminated earlier in accordance with these
                Terms.
              </p>
              <p className="mb-4">
                <strong>Prior Use.</strong> Notwithstanding the foregoing, if you used the Website or any Services
                prior to the date you accepted these Terms, you hereby acknowledge and agree that these Terms commenced
                on the date you first used the Website or the Services (whichever is earlier).
              </p>
              <p>
                <strong>Termination of Services by Citadel Digital Signage.</strong> Citadel Digital Signage has the
                right to modify, suspend, or terminate any Services provided to you at any time with or without reason.
                You agree that all terminations for cause shall be made in Citadel Digital Signage&rsquo;s sole discretion.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Remedies */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Remedies</h2>
              <p className="mb-4">
                <strong>Violations.</strong> If Citadel Digital Signage becomes aware of any possible violations by you
                of the Terms, Citadel Digital Signage reserves the right to investigate such violations. Citadel
                Digital Signage is entitled, except to the extent prohibited by applicable law, to disclose any
                information or materials on the Website or in the Services in connection with your use of the Website or
                the Services, to (1) comply with applicable laws, legal process or governmental request; (2) enforce the
                Terms; (3) respond to your requests for customer service; or (4) protect the rights, property or
                personal safety of Citadel Digital Signage, its Users or the public.
              </p>
              <p className="mb-4">
                <strong>Breach.</strong> In the event that Citadel Digital Signage determines, in its sole discretion,
                that you have breached any portion of these Terms, or have otherwise demonstrated conduct inappropriate
                for the Website or the Services, Citadel Digital Signage reserves the right to warn you via e-mail,
                notify and/or fully cooperate with the proper law enforcement authorities for further action, and/or
                pursue any other action which Citadel Digital Signage deems to be appropriate.
              </p>
              <p>
                <strong>No Subsequent Registration.</strong> If your registration with or ability to access the Website
                or the Services is discontinued by Citadel Digital Signage due to your violation of any portion of
                these Terms, then you agree that you shall not attempt to re-register with or access the Website or the
                Services through use of a different member name or otherwise, and you acknowledge that you will not be
                entitled to receive a refund for fees related to those Services to which your access has been
                terminated.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* International Users */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">International Users</h2>
              <p>
                This Website can be accessed from countries around the world and may contain references to services and
                Content that are not available in your country. The Website and Services are controlled and offered by
                Citadel Digital Signage from its facilities in the United States of America. Citadel Digital Signage
                makes no representations that the Website or the Services are appropriate or available for use in other
                locations. Those who access or use the Website or the Services from other jurisdictions do so at their
                own volition and are responsible for compliance with local law.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* General Provisions */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">General Provisions</h2>
              <p className="mb-4">
                <strong>Electronic Communications.</strong> The communications between you and Citadel Digital Signage
                use electronic means. For contractual purposes, you (1) consent to receive communications from Citadel
                Digital Signage in an electronic form; and (2) agree that all terms and conditions, agreements, notices,
                disclosures, and other communications that Citadel Digital Signage provides to you electronically
                satisfy any legal requirement that such communications would satisfy if it were to be in writing.
              </p>
              <p className="mb-4">
                <strong>Release.</strong> You hereby release the Citadel Digital Signage Parties and their successors
                from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal
                injuries, death, and property damage, that is either directly or indirectly related to or arises from
                any interactions with or conduct of other Users or third party websites of any kind arising in
                connection with or as a result of these Terms or your use of the Website or the Services. If you are a
                California resident, you hereby waive California Civil Code Section 1542.
              </p>
              <p className="mb-4">
                <strong>Assignment.</strong> These Terms, and your rights and obligations hereunder, may not be
                assigned, subcontracted, delegated, or otherwise transferred by you without Citadel Digital Signage&rsquo;s
                prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation
                of the foregoing will be null and void.
              </p>
              <p className="mb-4">
                <strong>Force Majeure.</strong> Citadel Digital Signage shall not be liable for any delay or failure to
                perform resulting from causes outside its reasonable control, including, but not limited to, acts of
                God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents,
                strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
              <p className="mb-4">
                <strong>Dispute Resolution.</strong> If you believe that Citadel Digital Signage has not adhered to
                these Terms, please contact Citadel Digital Signage by emailing us at{" "}
                <a href="mailto:communications@citadelsignage.net" className="text-blue-600 hover:underline">
                  communications@citadelsignage.net
                </a>
                . We will do our best to address your concerns.
              </p>
              <p className="mb-4">
                <strong>Choice of Law and Venue.</strong> This Agreement and any action related thereto will be
                governed and interpreted by and under the laws of the State of Texas, without giving effect to any
                conflict of laws principles that require the application of the law of a different state, consistent
                with the Federal Arbitration Act.
              </p>
              <p className="mb-4">
                <strong>Limitations Period.</strong> YOU AND CITADEL AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR
                RELATED TO THESE TERMS, THE WEBSITE, THE SERVICES OR THE CONTENT MUST COMMENCE WITHIN ONE (1) YEAR
                AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
              </p>
              <p className="mb-4">
                <strong>Notice.</strong> You may give notice to Citadel Digital Signage at the following address:
                Citadel Digital Signage, PO Box 1072, Dripping Springs, TX 78620 USA.
              </p>
              <p className="mb-4">
                <strong>Waiver.</strong> Any waiver or failure to enforce any provision of this Agreement on one
                occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.
              </p>
              <p className="mb-4">
                <strong>Severability.</strong> If any provision of these Terms is, for any reason, held to be invalid
                or unenforceable, the other provisions of these Terms will remain enforceable, and the invalid or
                unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum
                extent permitted by law.
              </p>
              <p className="mb-4">
                <strong>Export Control.</strong> You may not use, export, import, or transfer the Citadel Digital
                Signage Materials except as authorized by U.S. law, the laws of the jurisdiction in which you obtained
                the Citadel Digital Signage Materials, and any other applicable laws.
              </p>
              <p>
                <strong>Entire Agreement.</strong> These Terms are the final, complete and exclusive agreement of the
                parties with respect to the subject matter hereof and supersedes and merges all prior discussions
                between the parties with respect to such subject matter.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Arbitration */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Arbitration Agreement</h2>
              <p className="mb-4">
                Please read this Section carefully. It is part of your contract with Citadel Digital Signage and
                affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
              </p>
              <p className="mb-4">
                <strong>Applicability.</strong> All claims and disputes in connection with these Terms or the use of
                any product or service provided by Citadel Digital Signage that cannot be resolved informally or in
                small claims court shall be resolved by binding arbitration on an individual basis under the terms of
                this Arbitration Agreement.
              </p>
              <p className="mb-4">
                <strong>Arbitration Rules.</strong> The Federal Arbitration Act governs the interpretation and
                enforcement of this dispute resolution provision. Arbitration shall be initiated through the American
                Arbitration Association (&ldquo;AAA&rdquo;). The AAA Consumer Arbitration Rules governing the arbitration are
                available online at{" "}
                <a
                  href="https://www.adr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.adr.org
                </a>{" "}
                or by calling the AAA at 1-800-778-7879. The arbitration shall be conducted by a single, neutral
                arbitrator. Any claims or disputes where the total amount of the award sought is less than Ten Thousand
                U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the
                option of the party seeking relief.
              </p>
              <p className="mb-4">
                <strong>Waiver of Jury Trial.</strong> THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY
                RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims
                and disputes shall be resolved by arbitration under this Arbitration Agreement.
              </p>
              <p className="mb-4">
                <strong>Waiver of Class or Consolidated Actions.</strong> ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF
                THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS
                BASIS, AND CLAIMS OF MORE THAN ONE CONTRIBUTOR CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR
                CONSOLIDATED WITH THOSE OF ANY OTHER CONTRIBUTOR.
              </p>
              <p>
                <strong>Small Claims Court.</strong> Notwithstanding the foregoing, either you or Citadel Digital
                Signage may bring an individual action in small claims court. In any circumstances where the foregoing
                Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to
                the personal jurisdiction of the courts located in Hays County, Texas.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Royalty-Free License Agreement */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Citadel Digital Signage Content Library
              </h2>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Royalty-Free License Agreement</h3>
              <p className="mb-4">
                This Royalty-Free License Agreement (&ldquo;Agreement&rdquo;) is a legal agreement between the subscribing client
                (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Citadel Digital Signage (&ldquo;Citadel,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="mb-4">
                This Agreement governs your use of any video, image, graphic, animation, or other media asset
                (&ldquo;Content&rdquo;) that you download from or access through any content library made available as part of your
                subscription to the Citadel Digital Signage software (&ldquo;Software&rdquo;).
              </p>
              <p className="mb-6">
                By downloading, copying, or otherwise using the Content, you agree to be bound by the terms and
                conditions of this Agreement.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">1. License Grant</h4>
              <p className="mb-4">
                Subject to your compliance with the terms of this Agreement and your maintenance of an active, paid
                subscription to the Software, Citadel grants you a non-exclusive, non-transferable, worldwide,
                royalty-free license to use, copy, modify (e.g., cropping, resizing, overlaying text), and publicly
                display the Content solely for the following purpose:
              </p>
              <p className="mb-6 pl-4 border-l-2 border-slate-200">
                <strong>Permitted Use:</strong> The incorporation and public display of the Content on digital signage
                screens, monitors, or other display networks (&ldquo;Digital Signage Displays&rdquo;) that are directly managed and
                controlled by you through your active Software subscription.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">2. License Restrictions</h4>
              <p className="mb-3">
                The license granted in Section 1 is conditioned on your compliance with the following restrictions. You
                may NOT:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Standalone Use:</strong> Use, display, or distribute the Content in any way that is separate or &ldquo;un-tethered&rdquo; from the Software.</li>
                <li><strong>Resale or Sublicensing:</strong> Sell, re-license, sublicense, rent, lease, or otherwise distribute the Content as a standalone file or as part of any other product or service.</li>
                <li><strong>Website or Print Use:</strong> Use the Content on a website, in a mobile application (other than the Software), in print media, or in any other medium that is not a Digital Signage Display managed by the Software.</li>
                <li><strong>Trademark or Logo Use:</strong> Use any Content (in whole or in part) as a trademark, service mark, logo, or other indication of origin.</li>
                <li><strong>Unlawful or Defamatory Use:</strong> Use the Content in any way that is pornographic, defamatory, libelous, obscene, fraudulent, or otherwise unlawful.</li>
                <li><strong>Sensitive Use:</strong> Use Content featuring models or identifiable individuals in a manner that is offensive or implies their endorsement of a political party, or suggests they suffer from a physical or mental ailment or engage in immoral or criminal activity, without a separate written license.</li>
                <li><strong>False Representation:</strong> Use the Content in a manner that falsely implies an endorsement, sponsorship, or association between a person or entity depicted in the Content and your product or service.</li>
              </ul>

              <h4 className="font-bold text-slate-900 mb-2">3. Term and Termination</h4>
              <p className="mb-3">
                This license is effective for as long as you have an active, paid subscription to the Software. This
                Agreement and the license granted herein shall terminate automatically and immediately, without notice
                from Citadel, if:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Your subscription to the Software expires, is cancelled, or is terminated for any reason; or</li>
                <li>You fail to comply with any term or restriction in this Agreement.</li>
              </ul>
              <p className="mb-6">
                Upon termination, you must immediately cease all use of the Content, delete or destroy all copies of
                the Content from all your systems, servers, and Digital Signage Displays, and remove the Content from
                any active signage playlists or schedules within the Software.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">4. Intellectual Property</h4>
              <p className="mb-6">
                No ownership or copyright in any Content is transferred to you by this Agreement. All Content is and
                shall remain the exclusive property of Citadel and its third-party licensors, protected by copyright
                and other intellectual property laws. Citadel reserves all rights not expressly granted to you in this
                Agreement.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">5. Warranties and Disclaimers</h4>
              <p className="mb-4">
                Citadel warrants that it has the right to grant the license set forth in this Agreement.
              </p>
              <p className="mb-6">
                EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE CONTENT IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT ANY WARRANTY OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CITADEL DOES NOT WARRANT THAT THE CONTENT WILL
                MEET YOUR REQUIREMENTS OR THAT ITS USE WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">6. Limitation of Liability</h4>
              <p className="mb-6">
                IN NO EVENT SHALL CITADEL OR ITS LICENSORS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES,
                INCLUDING ANY LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE
                DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE CONTENT, EVEN IF CITADEL HAS BEEN ADVISED OF
                THE POSSIBILITY OF SUCH DAMAGES. CITADEL&rsquo;S TOTAL AGGREGATE LIABILITY UNDER THIS AGREEMENT SHALL BE
                LIMITED TO THE AMOUNT PAID BY YOU FOR THE SOFTWARE SUBSCRIPTION FOR THE ONE (1) MONTH PRECEDING THE
                CLAIM.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">7. Indemnification</h4>
              <p className="mb-6">
                You agree to indemnify, defend, and hold harmless Citadel, its affiliates, officers, employees, and
                licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses
                (including reasonable attorneys&rsquo; fees) arising from: (a) your use of the Content in violation of this
                Agreement; (b) any breach by you of the terms of this Agreement; or (c) any claim that your use of the
                Content infringes upon any third party&rsquo;s rights.
              </p>

              <h4 className="font-bold text-slate-900 mb-2">8. General Provisions</h4>
              <p className="mb-4">
                <strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with
                the laws of the State of Texas, without regard to its conflict of law principles.
              </p>
              <p className="mb-4">
                <strong>Entire Agreement:</strong> This Agreement constitutes the entire agreement between you and
                Citadel regarding its subject matter and supersedes all prior proposals, agreements, or communications.
              </p>
              <p>
                <strong>Severability:</strong> If any provision of this Agreement is held to be invalid or
                unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
