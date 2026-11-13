import { Mail, MapPin, PhoneCall, Clock4, Compass, Siren } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { WhatsAppIcon } from "../components/WhatsAppFloat";
import { InstagramIcon, TikTokIcon } from "../components/Footer";
import { company } from "../data/company";
import { socials } from "../data/socials";

const socialIcon = (icon) => {
  switch (icon) {
    case "instagram":
      return <InstagramIcon size={18} />;
    case "whatsapp":
      return <WhatsAppIcon size={18} />;
    case "maps":
      return <MapPin size={18} />;
    case "tiktok":
      return <TikTokIcon size={18} />;
    default:
      return null;
  }
};

const contactChannels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: company.whatsapp,
    href: company.whatsappLink,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: PhoneCall,
    label: "Telepon",
    value: company.phone,
    href: `tel:${company.phoneHref}`,
  },
];

const officeFacts = [
  { icon: MapPin, label: "Lokasi", value: company.address },
  { icon: Compass, label: "Area layanan", value: company.serviceArea },
  { icon: Clock4, label: "Jam kerja", value: company.businessHours },
  { icon: Siren, label: "Layanan darurat", value: company.emergencyService },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Kontak Sejukin"
        title="Butuh teknisi AC? Hubungi kami sekarang."
        description="Respons cepat, jadwal fleksibel, dan harga transparan — ceritakan kebutuhan Anda, sisanya biar kami yang urus."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-brand-primary/85">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
                </span>
                {company.status}
              </div>

              <div className="mt-8 space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="focus-ring glass group flex items-center gap-4 rounded-[28px] p-5 transition-all hover:border-brand-accent/40 hover:shadow-soft"
                  >
                    <span className="bg-primary-gradient grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md shadow-brand-accent/30">
                      <channel.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block display-card transition-colors group-hover:text-brand-accent">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="glass mt-4 rounded-[28px] p-6">
                <dl className="space-y-4">
                  {officeFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3.5">
                      <fact.icon size={17} className="mt-0.5 shrink-0 text-brand-accent" />
                      <div>
                        <dt className="text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                          {fact.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-semibold text-brand-primary">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                  Ikuti kami
                </span>
                <div className="h-px flex-1 bg-hairline" />
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="focus-ring glass grid h-11 w-11 place-items-center rounded-full text-brand-primary/80 transition-all hover:scale-105 hover:border-brand-accent/40 hover:text-brand-accent"
                  >
                    {socialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
