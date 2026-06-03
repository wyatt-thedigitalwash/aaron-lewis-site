import type { Metadata } from "next";
import { breadcrumbSchema, BASE } from "@/lib/schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: BASE },
  { name: "Privacy Policy", url: `${BASE}/privacy` },
]);

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for aaronlewismusic.com. Learn how we collect, use, and share your personal data.",
  alternates: { canonical: "https://aaronlewismusic.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Aaron Lewis",
    description:
      "Privacy policy for aaronlewismusic.com. Learn how we collect, use, and share your personal data.",
    url: "https://aaronlewismusic.com/privacy",
    siteName: "Aaron Lewis",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Aaron Lewis",
    description:
      "Privacy policy for aaronlewismusic.com. Learn how we collect, use, and share your personal data.",
    images: ["/og-image.png"],
  },
};

function PageHeader() {
  return (
    <section className="bg-bg px-6 pb-12 pt-24 md:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-6xl font-normal leading-none text-ink lg:text-7xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-ink-muted">Last modified: May 26, 2026</p>
      </div>
    </section>
  );
}

function PolicyContent() {
  return (
    <section className="bg-bg px-6 pb-20 md:px-8 lg:pb-32">
      <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-ink-muted">
        <p>
          This policy explains how and why we collect, use and share your
          personal data. As used herein, &quot;we,&quot; &quot;us,&quot;
          &quot;our,&quot; and/or &quot;Label&quot; shall collectively refer to:
          (1) Nashville Harbor Records &amp; Entertainment, LLC; (2) Borchetta
          Entertainment Group, LLC; (3) Big Machine Racing Productions, LLC; and
          (4) all current or future affiliates of any of the foregoing.
        </p>

        <p>
          It describes our privacy practices in relation to our online, digital
          or mobile services for which this policy is posted or linked (the
          &quot;services&quot;). Those include each of our label-related or
          artist-related websites, apps, data integration tools and software, as
          well as any of our other products, services, content, adverts or
          activities for which this policy is posted or linked.
        </p>

        <p>
          It covers all the related data collection activities (online and
          offline) of the relevant Label group companies, as explained in
          section 1 below.
        </p>

        <p>
          Our relevant site(s) for the services are referred to below,
          collectively and individually, as the &quot;site&quot;.
        </p>

        {/* Table of Contents */}
        <nav aria-label="Table of contents">
          <h2 className="font-display text-2xl text-ink">Contents</h2>
          <ol className="mt-4 list-decimal space-y-1 pl-6">
            <li><a href="#section-1" className="underline hover:text-ink">Collection and processing of data</a></li>
            <li><a href="#section-2" className="underline hover:text-ink">Use of your personal data</a></li>
            <li><a href="#section-3" className="underline hover:text-ink">Newsletter</a></li>
            <li><a href="#section-4" className="underline hover:text-ink">Sharing with third parties</a></li>
            <li><a href="#section-5" className="underline hover:text-ink">Data transfers outside US</a></li>
            <li><a href="#section-6" className="underline hover:text-ink">Cookies</a></li>
            <li><a href="#section-7" className="underline hover:text-ink">Third-party links</a></li>
            <li><a href="#section-8" className="underline hover:text-ink">Data security</a></li>
            <li><a href="#section-9" className="underline hover:text-ink">Data retention</a></li>
            <li>
              <a href="#section-10" className="underline hover:text-ink">Your legal rights</a>
              <ol className="mt-1 list-decimal space-y-1 pl-6 text-sm">
                <li><a href="#section-10-1" className="underline hover:text-ink">For European residents</a></li>
                <li><a href="#section-10-2" className="underline hover:text-ink">For California residents</a></li>
                <li><a href="#section-10-3" className="underline hover:text-ink">Sensitive Personal Information</a></li>
                <li><a href="#section-10-4" className="underline hover:text-ink">For other residents</a></li>
              </ol>
            </li>
            <li><a href="#section-11" className="underline hover:text-ink">Children</a></li>
            <li><a href="#section-12" className="underline hover:text-ink">Changes to this policy</a></li>
            <li><a href="#section-13" className="underline hover:text-ink">Compliance with Applicable Law</a></li>
            <li><a href="#section-14" className="underline hover:text-ink">Contact us</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <article id="section-1" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">1. Collection and processing of data</h2>
          <p>
            For services provided from the USA and elsewhere, each of the
            services are run by a Label group company (as applicable), which
            collects personal data in connection with that service and acts as
            the data controller for such data, and such Label&apos;s principal
            place of business is 1221 16th Ave. South, Nashville, TN, 37212.
          </p>
          <p>
            Just to be clear, this policy does not, however, apply to any Label
            group sites for which a different privacy policy is posted or linked
            from time to time.
          </p>
          <p>
            For the services to which this policy does apply, we, as well as our
            affiliated Label companies, artists and/or writers and/or our or
            their third-party suppliers, technology partners and/or marketing
            partners (all of the foregoing together, our
            &quot;partners&quot;), may collect and process certain personal data
            relating to you, i.e. information that identifies (or makes it
            possible to identify) you as a natural person (e.g. your name,
            postal address, email address, telephone number, date of birth, age,
            country of residence and/or IP address). We and/or our partners may
            collect such information when you take part in various opportunities
            and services provided via the site or a partner site, such as when
            you participate in an artist- or label-related marketing campaign
            via the site or a partner site or otherwise engage with our content,
            or when you purchase products, services or digital content through a
            store that is associated with the site (if any, the
            &quot;store&quot;, which may be hosted by a third-party supplier).
          </p>
          <p>
            Processing means any operation that is performed on personal data,
            such as collection, recording, organisation, structuring, storage,
            adaptation, retrieval, any kind of disclosure, erasure or
            destruction or other use. For example, we process personal data when
            you:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>actively communicate with us;</li>
            <li>subscribe to services (e.g. newsletters, artist information bulletins or other communications) that we may provide through the site;</li>
            <li>make a purchase via the store;</li>
            <li>take part in a contest, promotion, survey or other type of promotion through the site, the store or any linked social media;</li>
            <li>contribute to a blog or forum; or</li>
            <li>link any of your accounts relating to media consumption (e.g. Spotify or Apple) or social media to Label services, including those operated by a third party on our behalf, or otherwise engage with our content.</li>
          </ul>
          <p>
            On each of your visits to the site, we also collect the following
            technical data, as transmitted by your browser or device to the
            site:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>your type of browser and type of operating system;</li>
            <li>the internet protocol (IP) address allocated to your internet access when you visited the site;</li>
            <li>the URL of the internet page from which you arrived at the site;</li>
            <li>the date and time when you accessed, clicked through and left the site;</li>
            <li>the amount of data transmitted; and/or</li>
            <li>the searches you made and the pages you accessed on the site.</li>
          </ul>
          <p>
            We may also receive certain activity data from our partners (e.g.
            our third-party technology partners), such as data on your
            interests, purchase history or listening or viewing activity.
          </p>
        </article>

        {/* Section 2 */}
        <article id="section-2" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">2. Use of your personal data</h2>
          <p>We and our partners may use your personal data for the following purposes:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>to provide access to the site and other services;</li>
            <li>to respond to your enquiries and to fulfil your requests (e.g. to send you newsletters or to provide you with information about our products, services and content);</li>
            <li>to monitor customer traffic patterns and site usage to help us and our partners enhance your enjoyment during the online experience (and for further information on the use of data for web analytics and marketing purposes, please refer to our Cookies Policy);</li>
            <li>to provide assessment and analysis (e.g. customer, audience, promotional and market analysis) to enable us: (a) to review, develop and improve the services, products and content that we and/or our partners offer; and (b) to use the results of such analysis (e.g. based on segmentation by location, interests, purchase history and/or other characteristics) to build a user profile for use in connection with customised online advertising (where permitted);</li>
            <li>to show you customised online advertising (where permitted), which may be based on our analytical data and/or data relating to your engagements with us on other sites or platforms that you are using (which could include partner sites, social media and/or search engines);</li>
            <li>to provide you (or to permit selected third parties to provide you) directly with information about products, services and/or content that we believe may interest you (including but not limited to content and/or materials relating to any Label artist or any artist signed to affiliates thereof);</li>
            <li>to notify you about changes to site terms and policies;</li>
            <li>to allow you to take part in competitions and similar promotions and to administer those activities (which may contain additional requirements and information about how we or our partners may use your personal information); and/or</li>
            <li>any other use permitted by applicable law.</li>
          </ul>
          <p>
            These processing activities are necessary for the purposes of our,
            our partner&apos;s, and any such third parties&apos; legitimate
            interests to improve your site and/or store experience and to
            improve our and/or their products, services and/or content and/or to
            use the site and/or store for informational and general marketing
            purposes. For any direct marketing purposes, we process such
            communications on the basis of your consent, where (and for as long
            as) you have given it. It is also in your and our mutual legitimate
            interest to respond to your enquiries and requests.
          </p>
          <p>
            We do not seek to collect any special categories of personal data
            about you or anyone associated with you: such information would
            include information about a person&apos;s racial or ethnic origin,
            political opinions, religious or philosophical beliefs, trade union
            membership, genetic or biometric data (where used for identification
            purposes), health, sex life or sexual orientation. Nor do we seek to
            collect any information about criminal convictions and offenses. If,
            however, you in fact provide us with any such special or
            crime-related information (e.g. when using any interactive feature
            of the site), then by submitting it, you consent to the use of such
            information by us and/or our partners for (a) the purpose for which
            you have voluntarily provided it and (b) any purpose that is
            reasonably compatible with such purpose. You may withdraw that
            consent at any time by contacting us in the manner herein described
            below.
          </p>
          <p>
            We also process your personal data where and to the extent
            necessary: (a) for any purposes required or permitted under any
            relevant laws or regulations of any relevant jurisdiction; (b) to
            enforce or apply the site&apos;s terms of use or other contracts
            with you; and/or (c) to protect our, our users&apos; or any other
            third parties&apos; rights, property or safety.
          </p>
        </article>

        {/* Section 3 */}
        <article id="section-3" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">3. Newsletter</h2>
          <p>
            This section 3 only applies if we offer a newsletter via the site or
            the store (from us or from any of our partners).
          </p>
          <p>
            When you subscribe to the newsletter, we will only send it to you by
            email if you confirm your email address (e.g. by clicking on a link
            via the site or in a notification email). In that case, we will
            store and use your relevant personal data (including your email
            address), the time of registration, the IP address used for
            registration and the location from which you registered. Your
            subscription to any newsletter relating to any particular Label
            artist shall be deemed your consent to receive similar newsletters
            from any other Label artist and/or any artist signed to current or
            future affiliates thereof.
          </p>
          <p>
            The purposes of such processing are (a) to send you editions of the
            newsletter, (b) to confirm your registration and (c) to gather data
            to help us analyse how to improve the newsletter and/or to inform
            our analysis for customised online advertising (where permitted).
            The legal basis of the processing is your consent (as far as given)
            or otherwise our legitimate interest in undertaking such
            confirmation and analysis.
          </p>
          <p>
            If, when subscribing to the newsletter, you also consent to receive
            information about our and/or selected third parties&apos; products,
            services or content, the provision of that information is based on
            that consent.
          </p>
          <p>
            You can unsubscribe from the newsletter at any time by clicking on
            the link provided in each of our newsletters or sending us an email
            at{" "}
            <a href="mailto:info@big-machine-records.com" className="text-ink-muted underline hover:text-ink">
              info@big-machine-records.com
            </a>
            . If unsubscribing, please state the name (such as the relevant
            label or artist name) of the mailing list that you wish to be
            removed from. You can also, at any time, withdraw your consent to
            receive such direct marketing communications by sending us an email
            to that effect at{" "}
            <a href="mailto:info@big-machine-records.com" className="text-ink-muted underline hover:text-ink">
              info@big-machine-records.com
            </a>
            . In either case, such request will only be effective going forward.
          </p>
          <p>
            We may still continue to process certain related data where
            permitted (e.g. to give effect to your preference), unless you have
            any relevant rights to restrict or prevent such processing and
            exercise those rights (as further explained hereinbelow).
          </p>
          <p>
            For our newsletters we may also use commercially established
            technologies that enable us to measure interactions with the
            newsletter (e.g. emails opened and links clicked). If applicable, we
            use such data for general statistical evaluations, as well as for
            the optimisation and further development of our content and customer
            communication and/or to inform our analysis for customized online
            advertising (where permitted). That information is collected using
            small graphics embedded in the newsletter (known as
            &quot;pixels&quot;), which can also collect technical data about the
            device you use. The legal basis for this is your consent (as far as
            given) or otherwise our legitimate interest in understanding how
            users interact with the newsletter and in improving our content and
            customer communication and/or the relevance of customised online
            advertising (where permitted).
          </p>
          <p>
            Through our newsletter we want to share content that is as relevant
            as possible for our customers and to gain a better understanding of
            what readers are actually interested in. If you do not wish to be
            involved in the analysis of such usage behaviour, you can
            unsubscribe from our newsletter or deactivate graphics in your email
            program by default.
          </p>
        </article>

        {/* Section 4 */}
        <article id="section-4" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">4. Sharing with third parties</h2>
          <p>We may share your personal information for the above purposes from time to time with the following third parties:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>any member of Label&apos;s group of companies (which means our subsidiaries and our ultimate holding company and its subsidiaries) so that such third party may process and use your personal information in any way in which we may process and use your personal information under this policy;</li>
            <li>our third-party suppliers that provide us with site-related services (such as hosting, data analysis (including webtracking services), search engines, payment processing, order fulfilment, IT services, email delivery, customised online advertising, auditing and other similar services) to enable them to provide such services and/or to assist us in improving and optimising the site (and, in the interests of compliance with applicable data-protection and privacy laws, each of those third-party suppliers is bound by a data processing agreement or some other appropriate safeguard will be in place);</li>
            <li>any artist connected at any time with the site (including individual band members, if relevant) and such artist&apos;s representatives and third-party suppliers, so that they may: (a) process your personal information in any way in which we may process your personal information under this policy; and (b) if you have consented to their doing so, use such information to send you communications (including marketing communications) that they believe may be of interest to you;</li>
            <li>any third party that sponsors or provides (in whole or in part) a competition or similar promotion through the site for all purposes in connection with such contest or promotion;</li>
            <li>any third party with whom you communicate on or via the site (e.g. via message boards, chats, profile pages, blogs and other services to which you are able to post information and materials), but only to the extent that your personal information is included by you in such communication; and/or</li>
            <li>any other third-party partner, so that such third party may process your personal information in any way in which we may process your personal information under this policy.</li>
          </ul>
          <p>Any such sharing of personal data is based on our legitimate interests as specified in section 2 above or (where given) your consent.</p>
          <p>
            We may share your personal information with any person where
            necessary: (a) for any purposes required by or permitted for such
            person under any relevant laws or regulations of any relevant
            jurisdiction; (b) to enforce or apply the site&apos;s or the
            store&apos;s terms of use or other contracts; and/or (c) to protect
            our, our users&apos; or any other third parties&apos; rights,
            property or safety.
          </p>
          <p>
            We also anonymise your personal data, as it is in our legitimate
            interest to use aggregated, non-personal information to analyse our
            target audience and web traffic. We may publish, or share with
            partners (including but not limited to any current or future
            affiliates of Label), aggregated non-personal data, which will not
            identify you individually.
          </p>
        </article>

        {/* Section 5 */}
        <article id="section-5" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">5. Data transfers outside US</h2>
          <p>
            The information we collect from you may be transferred to, processed
            and stored at a destination outside the US, e.g. when we transfer
            data to members of Label&apos;s group of companies or to our other
            partners.
          </p>
        </article>

        {/* Section 6 */}
        <article id="section-6" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">6. Cookies</h2>
          <p>
            A &quot;cookie&quot; is a small text file deposited on your
            device&apos;s hard drive when you access a website. We may use
            cookies to monitor your use of the site and to customise your
            experience of it. For further details, please refer to our Cookies
            Policy.
          </p>
        </article>

        {/* Section 7 */}
        <article id="section-7" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">7. Third-party links</h2>
          <p>
            The site may contain links to other sites not owned or controlled by
            us. We are not responsible for the content of any such site, the
            site operator&apos;s privacy or cookies policies or how the site
            operator treats information (personal or otherwise) obtained from
            users of the site. We advise you to check that site&apos;s privacy
            and cookies policies to satisfy yourself as to how the site operator
            will treat any such information.
          </p>
        </article>

        {/* Section 8 */}
        <article id="section-8" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">8. Data security</h2>
          <p>
            We take reasonable precautions to protect against the loss, misuse
            or alteration of your personal information and to ensure that it
            will be processed in accordance with this policy.
          </p>
          <p>
            Unfortunately, the transmission of information via online or mobile
            networks is not completely secure. You acknowledge and accept that
            others may intercept personal information you provide to us, and
            that any such transmission is at your own risk. Once we have
            received your information, we use set procedures and security
            features to try to prevent unauthorised access.
          </p>
        </article>

        {/* Section 9 */}
        <article id="section-9" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">9. Data retention</h2>
          <p>
            We strive to keep our processing activities in relation to your
            personal data as limited as possible. Personal, non-technical data
            provided by you when using our services and activity data received
            from our partners will be retained only for as long as we and/or our
            relevant partner(s) need it to fulfil the purpose for which such
            data were collected, or for as long as required by statutory
            retention requirements.
          </p>
          <p>
            Technical data will be retained only as long as it is necessary to
            provide access to the site or to fulfil other purpose(s) of
            processing described in this policy. Your IP address will be
            retained as long as required to enable us to engage in effective
            defence against attacks on our site, such as distributed denial of
            service (DDoS) attacks. We and/or our partners may retain technical
            data as long as certain marketing purposes require. We and/or our
            partners may also retain your technical data longer than might
            otherwise be required where storage of data is required by statutory
            retention obligations, as may be the case regarding information that
            is relevant for obligations under tax and commercial law.
          </p>
        </article>

        {/* Section 10 */}
        <article id="section-10" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">10. Your legal rights</h2>

          {/* 10.1 */}
          <section id="section-10-1" className="scroll-mt-24 space-y-4">
            <h3 className="font-display text-xl text-ink">10.1 For European residents</h3>
            <p>
              In certain circumstances, you have the following legal rights in
              relation to your personal information (to the extent consisting of
              &quot;personal data&quot; in the UK, the EEA and any other
              European countries with equivalent data protection laws). We may
              ask you for additional information, so that we take reasonable
              steps to check that we only provide personal data to the person to
              whom the data relate.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-ink">Right of access</strong> to your personal data (also known as a &quot;data subject access request&quot;). This enables you to receive a copy of the personal data that we hold about you and to check that we are lawfully processing such data.</li>
              <li><strong className="text-ink">Right of rectification</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, although we may need to verify the accuracy of the new data that you provide to us.</li>
              <li><strong className="text-ink">Right to erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data in certain circumstances. Please note, however, that we may retain your data in certain circumstances in accordance with law, which will be notified to you, if applicable, at the time of your request.</li>
              <li><strong className="text-ink">Right to restriction of processing</strong> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you would like us to establish the accuracy of such data; (b) where our use of the data is unlawful, but you do not want us to erase the data; (c) where you need us to hold the data even if we no longer require the data as you need the data to establish, exercise or defend legal claims; or (d) you have objected to our use of your data, but we need to verify whether we have overriding legitimate grounds to use the data.</li>
              <li><strong className="text-ink">Right to portability</strong> of your personal data to you or to a third party. If you so request, we shall provide you, or a third party that you have chosen, with a copy of your personal data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information that you initially provided consent for us to use or where we used the information to perform our contract with you.</li>
              <li><strong className="text-ink">Right to object</strong> to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation that makes you want to object to processing on this ground, in which case we will consider whether we have compelling reasons to continue to process your data.</li>
              <li><strong className="text-ink">Right to object to direct marketing.</strong> You also have the right to object where we are processing your personal data for purposes of direct marketing. Please see the details above on how to exercise the right.</li>
              <li><strong className="text-ink">Right to withdraw consent</strong> at any time where we are relying on consent to process your personal data. If you withdraw your consent, we may not be able to provide certain products, services or content to you. The withdrawal of consent does not affect the legality of the processing carried out based on the consent until the withdrawal.</li>
              <li><strong className="text-ink">Right to complain.</strong> If you would like to complain, please contact us using the details below. This does not override your right to complain to the relevant supervisory authority at any time.</li>
            </ul>
          </section>

          {/* 10.2 */}
          <section id="section-10-2" className="scroll-mt-24 space-y-4">
            <h3 className="font-display text-xl text-ink">10.2 For California residents</h3>
            <p>
              Under California law, residents of California are entitled, among
              other things, to access, delete, and opt out of the sale of
              certain personal information.
            </p>
            <p>
              Accordingly, this section addresses the obligations and rights
              under the California Consumer Privacy Act (the &quot;CCPA&quot;).
              Those apply to businesses operating in California and to
              California residents, and they concern information that identifies,
              relates to, describes, is reasonably capable of being associated
              with or could reasonably be linked (directly or indirectly) with
              California consumers or households (&quot;California
              information&quot;).
            </p>
            <p>Our California privacy practices are as follows:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-ink">Sources of collection:</strong> The sources from which we may obtain California information may include: (a) direct from you, including technical and usage information when using the site; (b) linked sites, such as social media and third-party platforms; (c) our group companies, joint venturers and strategic and promotional partners; (d) information providers; (e) distributors and other sellers; (f) marketing mailing lists; (g) other users submitting California information about you, e.g. to invite you to take part in an offering, to make a recommendation or to share content; (h) publicly available sources; and/or (i) any other source described in section 1 above.</li>
              <li><strong className="text-ink">California information collected:</strong> The types of California information that may be collected by or for us may include: name, postal address, email address, payment details or other similar identifiers; IP address, device ID or other similar online identifiers; characteristics of protected classifications (such as ethnicity or sexual orientation); purchase history, consumption tendency or other commercial information; browsing or search history, views or other online interaction with the service or with service content; professional or educational information; biometric information; video, audio, photographic or calendar content; location information; inferences drawn from such information, e.g. individual profiles, preferences, characteristics or behaviours; and/or any other types of information described in section 1 above.</li>
              <li><strong className="text-ink">Purposes of collecting California information:</strong> The purposes for which California information may be collected by or for us may include: performing services in connection with our operations, e.g. customer service, processing or fulfilling orders or requests, processing payments or providing content recommendations; auditing customer transactions; prevention of fraud or crime; fixing system errors; marketing or advertising; internal research, analytics or development; developing, maintaining, supporting or upgrading networks, products, services, content or devices; and/or any other purpose described in section 2 above.</li>
              <li><strong className="text-ink">Sharing of California information:</strong> The California information collected may be shared by or for us: for operational purposes with our partners; and/or for any other purpose described in section 4 above. We note that the CCPA defines &quot;sale&quot; widely, including the sharing of California information in exchange for anything of value. Yet it is not our practice to make any such sale of California information, and we have not done so in the 12 months before issuing this policy. Incidentally, third-party advertising cookies may be set via the site with your prior consent (and for further details, please see our Cookies Policy), and any associated disclosure from you to the third party may, for CCPA purposes, constitute a &quot;sale&quot;, which will also be covered by the third party&apos;s own privacy and/or cookies policy.</li>
              <li><strong className="text-ink">Right to request disclosure of California information:</strong> If you are a resident of California, you may: (a) request information on our practices relating to the disclosure of your personal information by certain members of the Label group of companies to certain third parties for their direct marketing purposes; and/or (b) request certain information about our practices relating to California information over the 12-month period preceding your request, including (i) the categories and specific pieces of such information that we have collected, (ii) the categories of sources of such information, (iii) the business or commercial purposes for our collection, sale or sharing of such information, (iv) the categories of third parties to whom we disclose such information and (v) categories of such information that we share with suppliers of services to us.</li>
              <li><strong className="text-ink">Right to request deletion of California information:</strong> At your request, we shall delete California information we have collected about you, unless we need that information so that we can: (a) provide you with a product, service or content requested by you; (b) perform a contract between you and us; (c) maintain the functionality or security of our systems; (d) comply with or exercise rights provided by law; or (e) use the information internally in ways that are compatible with the context in which you provided the information to us, or that are reasonably aligned with your expectations based on your relationship with us.</li>
              <li><strong className="text-ink">How to request disclosure or deletion of California information:</strong> Please send us your request by email or letter, using the contact details set out in section 14 below. When doing so, please provide your full name and email/postal address, stating &quot;California privacy request&quot; in the heading or subject line. We may from time to time facilitate alternative methods of submitting such requests, in which case we shall confirm such methods on request and/or update this policy accordingly.</li>
              <li><strong className="text-ink">CCPA metrics:</strong> CCPA regulations require certain businesses to disclose metrics for the previous calendar year for California residents&apos; requests, reporting on the number of access, deletion, and &quot;do not sell&quot; requests made, the number fulfilled (in whole or part) and the number denied. If that applies to us in due course, we shall provide a CCPA metrics reporting page on or via the site.</li>
              <li><strong className="text-ink">Do not track:</strong> Currently, we do not take any action to respond to &quot;do not track&quot; signals or similar signals, since a uniform technological standard has not yet been developed. We keep new technologies under review, and we might adopt a standard in due course.</li>
              <li><strong className="text-ink">Under-16s:</strong> CCPA has specific rules on the use of California information from consumers under 16 years old. Accordingly, if we knowingly collect California information of an under-16 consumer, we will not sell the information without affirmative permission to do so. If the consumer is between 13 and 16 years old, the consumer may provide such permission. If the consumer is under 13, the consumer&apos;s parent or guardian must provide the permission. If you would like further information on how we handle California information from under-16 consumers, please contact us using the details set out in section 14 below.</li>
              <li><strong className="text-ink">Our support for exercising your CCPA rights:</strong> We are committed to providing you with appropriate control over your California information. If you exercise any of the rights described in this section 10.2, we will not disadvantage you. In particular, you will not be denied access to our products, services or content, nor will you be charged differently for those or provided with a different level or quality.</li>
            </ul>
          </section>

          {/* 10.3 */}
          <section id="section-10-3" className="scroll-mt-24 space-y-4">
            <h3 className="font-display text-xl text-ink">10.3 Sensitive Personal Information</h3>
            <p>
              We generally do not seek data that may be considered
              &quot;special&quot; or &quot;sensitive&quot; personal data (e.g.,
              government-issued identification numbers or information related to
              an individual&apos;s racial or ethnic origin, political opinions,
              religious or other beliefs, health, criminal background, or trade
              union membership) from visitors of this site, and we ask that you
              do not provide such data. If we specifically require
              &quot;special&quot; or &quot;sensitive&quot; personal data in
              connection with one or more of the uses described below, we will
              request your consent to use the data in accordance with this
              policy and/or in the ways described at the point where you were
              asked to disclose the data. If you voluntarily share with us or
              post/upload any &quot;special&quot; or &quot;sensitive&quot;
              personal data to this site for any other reason, you consent that
              we may use such data in accordance with applicable law and this
              policy.
            </p>
          </section>

          {/* 10.4 */}
          <section id="section-10-4" className="scroll-mt-24 space-y-4">
            <h3 className="font-display text-xl text-ink">10.4 For other residents</h3>
            <p>
              Under laws of certain other jurisdictions from time to time,
              including without limitation Nevada and Virginia residents may be
              entitled to similar rights relating to the access to, deletion of
              and/or other forms of control over processing of personal data.
              Nothing in this policy affects those legal rights, and we shall
              endeavour to give effect to any relevant rights at your request.
            </p>
          </section>
        </article>

        {/* Section 11 */}
        <article id="section-11" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">11. Children</h2>
          <p>
            This site is not directed toward children (as defined by local law)
            nor do we knowingly or intentionally collect information from
            children (as defined by local law) without parental consent except
            where in compliance with applicable laws. If we are made aware of
            any information provided by any children on our site, we will take
            additional steps to protect children&apos;s privacy, including:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Notifying parents about our information practices with regard to children, including the types of personal information collected from children, the uses to which we may put that information, and whether and with whom we may share that information;</li>
            <li>In accordance with applicable law, and our practices, obtaining consent from parents for the collection of personal information from their children, or for sending information about our products and services directly to their children;</li>
            <li>Limiting our collection of personal information from children to no more than is reasonably necessary to participate in an online activity; and</li>
            <li>Giving parents access or the ability to request access to personal information we have collected from their children and the ability to request that the personal information be changed or deleted.</li>
          </ul>
        </article>

        {/* Section 12 */}
        <article id="section-12" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">12. Changes to this policy</h2>
          <p>
            Any changes we make to this policy will be posted on the site and,
            where we consider it appropriate, notified to you by email. Please
            check back frequently to see any changes to our privacy policy.
          </p>
        </article>

        {/* Section 13 */}
        <article id="section-13" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">13. Compliance with Applicable Law</h2>
          <p>
            This Privacy Policy is intended to comply with all applicable
            federal, state, and local laws, rules, and regulations having
            jurisdiction over same. Nothing in this Privacy Policy shall be
            construed to contravene applicable law, and wherever there is a
            conflict between any provision of this Privacy Policy and any
            statute, law, ordinance, order or regulation to the contrary to
            which the parties hereto have no legal right to contract, such
            statute, law, ordinance, order or regulation shall prevail. In such
            event, or if any provision of this Privacy Policy is held to be
            void, voidable, invalid or unenforceable, (i) the provision of this
            Privacy Policy so affected shall be limited only to the extent
            necessary to permit the compliance with minimum legal requirements
            and/or the order of any court or tribunal of competent jurisdiction,
            (ii) no other provision of this Privacy Policy shall be affected
            thereby, and (iii) all such other provisions of this Privacy Policy
            shall remain in full force and effect.
          </p>
        </article>

        {/* Section 14 */}
        <article id="section-14" className="scroll-mt-24 space-y-4">
          <h2 className="font-display text-2xl text-ink">14. Contact us</h2>
          <p>
            Any questions, comments or requests about this policy are welcome
            and should be addressed to our data protection team or directly to
            our data protection officer, at the address or email as provided
            hereinbelow:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@big-machine-records.com" className="text-ink-muted underline hover:text-ink">
              info@big-machine-records.com
            </a>
            <br />
            Address: 1221 16th Ave. South, Nashville, TN, 37212.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHeader />
      <PolicyContent />
    </>
  );
}
