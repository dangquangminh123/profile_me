"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ADDRESS,
  commitments,
  FACEBOOK_URL,
  features,
  heroSlides,
  LIVE_PROJECT_URL,
  MAPS_URL,
  navItems,
  PHONE_URL,
  pricingPlans,
  services,
  stats,
  workflowHighlights,
  ZALO_URL,
} from "@/data/portfolio";
import {
  Analytics,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Cart,
  Category,
  Chart,
  Check,
  Dashboard,
  Deploy,
  ExternalLink,
  Facebook,
  Inventory,
  MapPin,
  Menu,
  Order,
  Payment,
  Phone,
  Shield,
  Star,
  Store,
  Tag,
  Warehouse,
  X,
} from "./Icons";

/* ────────── ICON MAP ────────── */
const featureIconMap: Record<string, React.ReactNode> = {
  cart: <Cart />,
  box: <Box />,
  warehouse: <Warehouse />,
  tag: <Tag />,
  order: <Order />,
  shield: <Shield />,
  category: <Category />,
  analytics: <Analytics />,
};

const serviceIconMap: Record<string, React.ReactNode> = {
  store: <Store />,
  dashboard: <Dashboard />,
  inventory: <Inventory />,
  chart: <Chart />,
  payment: <Payment />,
  deploy: <Deploy />,
};

/* ────────── HEADER ────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <a className="logo" href="#top" aria-label="Về đầu trang">
          <span className="logo__icon">QM</span>
          <span className="logo__text">.dev</span>
        </a>

        <nav className="nav-desktop" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--sm header__cta"
          href={LIVE_PROJECT_URL}
          target="_blank"
          rel="noreferrer"
        >
          Xem dự án thật <ExternalLink />
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="nav-mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="btn btn--primary"
              href={LIVE_PROJECT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Xem dự án thật <ExternalLink />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ────────── HERO SLIDER ────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setCurrent(index);
    startAutoplay();
  };

  const slide = heroSlides[current];

  return (
    <section id="top" className="hero">
      {/* Background gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__container">
        <div className="hero__content" key={slide.id}>
          <span className="hero__badge">{slide.subtitle}</span>
          <h1 className="hero__title">
            {slide.title}{" "}
            <span className="hero__highlight">{slide.highlight}</span>
          </h1>
          <p className="hero__desc">{slide.description}</p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={slide.ctaLink}>
              {slide.cta} <ArrowRight />
            </a>
            <a className="btn btn--outline btn--lg" href="#contact">
              Liên hệ tư vấn
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <Image
              src="/hero-dashboard.jpg"
              alt="Dashboard thương mại điện tử"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero__image"
            />
            <div className="hero__image-overlay" />
          </div>

          {/* Floating badges */}
          <div className="floating-badge floating-badge--1">
            <Store />
            <span>E-Commerce</span>
          </div>
          <div className="floating-badge floating-badge--2">
            <Shield />
            <span>Bảo mật</span>
          </div>
          <div className="floating-badge floating-badge--3">
            <Chart />
            <span>Analytics</span>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="hero__controls">
        <div className="hero__dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? "hero__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hero__arrows">
          <button
            onClick={() =>
              goTo((current - 1 + heroSlides.length) % heroSlides.length)
            }
            aria-label="Slide trước"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => goTo((current + 1) % heroSlides.length)}
            aria-label="Slide sau"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────── STATS BAR ────────── */
function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar__grid">
          {stats.map((stat) => (
            <div className="stats-bar__item reveal" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── SECTION TITLE ────────── */
function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-title reveal ${light ? "section-title--light" : ""}`}>
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2 className="section-title__heading">{title}</h2>
      {description && (
        <p className="section-title__desc">{description}</p>
      )}
    </div>
  );
}

/* ────────── SERVICES ────────── */
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="DỊCH VỤ CỦA CHÚNG TÔI"
          title="Giải pháp Website & Thương mại điện tử toàn diện"
          description="Từ thiết kế giao diện đến xây dựng hệ thống nghiệp vụ phức tạp — tất cả được phát triển với tiêu chí: đẹp, đúng và đáng tin cậy."
        />
        <div className="services__grid">
          {services.map((service, i) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-card__icon">
                {serviceIconMap[service.icon]}
              </div>
              <span className="service-card__number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── FEATURES ────────── */
function Features() {
  return (
    <section id="features" className="section section--dark">
      <div className="container">
        <SectionTitle
          eyebrow="TÍNH NĂNG VƯỢT TRỘI"
          title="Không chỉ bán hàng — mà quản lý toàn bộ nghiệp vụ"
          description="Hơn 27 tình huống nghiệp vụ được xử lý chi tiết, từ nhập hàng, tồn kho, pricing đến đơn hàng, hoàn trả và báo cáo."
          light
        />
        <div className="features__grid">
          {features.map((feature) => (
            <article className="feature-card reveal" key={feature.title}>
              <div className="feature-card__icon">
                {featureIconMap[feature.icon]}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── PROJECT SHOWCASE ────────── */
function ProjectShowcase() {
  return (
    <section id="project" className="section">
      <div className="container">
        <div className="project__grid">
          <div className="project__image-col reveal">
            <div className="project__image-wrap">
              <Image
                src="/project-showcase.jpg"
                alt="Dự án Lina Commerce"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project__image"
              />
            </div>
          </div>
          <div className="project__content-col reveal">
            <span className="section-title__eyebrow">DỰ ÁN THỰC TẾ</span>
            <h2 className="section-title__heading">
              Lina Commerce — Website đang vận hành thật
            </h2>
            <p className="project__desc">
              Một hệ thống thương mại điện tử hoàn chỉnh đã được triển khai lên
              VPS và đang phục vụ khách hàng thực tại{" "}
              <strong>cuahanglina.com</strong>. Từ giao diện mua hàng đến admin
              quản trị, từ nhập kho đến thống kê lợi nhuận.
            </p>

            <div className="project__highlights">
              <h4>Luồng nghiệp vụ end-to-end:</h4>
              <ul>
                {workflowHighlights.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              className="btn btn--primary"
              href={LIVE_PROJECT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Xem chi tiết dự án <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────── PRICING ────────── */
function Pricing() {
  return (
    <section id="pricing" className="section section--soft">
      <div className="container">
        <SectionTitle
          eyebrow="BẢNG GIÁ DỊCH VỤ"
          title="Chọn gói phù hợp với nhu cầu của bạn"
          description="Gói cho thuê toàn bộ tính năng e-commerce sẵn sàng vận hành chỉ với 2.700.000đ, hoặc gói nâng cao tùy chỉnh theo nhu cầu riêng."
        />
        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card reveal ${plan.popular ? "pricing-card--popular" : ""}`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="pricing-card__badge">
                  <Star /> Lựa chọn tối ưu — Phổ biến nhất
                </div>
              )}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span>{plan.price}</span>
                {plan.period && (
                  <small className="pricing-card__period">/{plan.period}</small>
                )}
              </div>
              <p className="pricing-card__desc">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check /> {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${plan.popular ? "btn--primary" : "btn--outline"} pricing-card__cta`}
                href="#contact"
              >
                {plan.popular ? "Thuê toàn bộ tính năng ngay" : "Liên hệ tư vấn nâng cao"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── COMMITMENTS ────────── */
function Commitments() {
  return (
    <section id="commitment" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="CAM KẾT CHẤT LƯỢNG"
          title="Không chỉ giao sản phẩm — mà giao niềm tin"
          description="Những cam kết thực sự trong suốt quá trình hợp tác, từ khi bắt đầu trao đổi đến khi bàn giao và sau đó."
        />
        <div className="commitment__list">
          {commitments.map((item) => (
            <div className="commitment-row reveal" key={item.number}>
              <span className="commitment-row__number">{item.number}</span>
              <div className="commitment-row__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="commitment-row__check">
                <Check />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── CONTACT ────────── */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__content">
            <span className="section-title__eyebrow">LIÊN HỆ NGAY</span>
            <h2>Bạn có dự án cần thực hiện?</h2>
            <p>
              Hãy liên hệ để trao đổi về ý tưởng, nhu cầu và giải pháp phù
              hợp. Tôi sẵn sàng hỗ trợ từ tư vấn đến triển khai hoàn chỉnh.
            </p>
          </div>
          <div className="contact__links">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <MapPin />
              </span>
              <div>
                <small>Khu vực làm việc / Địa chỉ</small>
                <strong>{ADDRESS}</strong>
              </div>
              <ArrowUpRight />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <Facebook />
              </span>
              <div>
                <small>Facebook</small>
                <strong>Quang Minh</strong>
              </div>
              <ArrowUpRight />
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon contact__link-icon--zalo">
                Z
              </span>
              <div>
                <small>Zalo</small>
                <strong>0898 479 840</strong>
              </div>
              <ArrowUpRight />
            </a>
            <a href={PHONE_URL} className="contact__link">
              <span className="contact__link-icon">
                <Phone />
              </span>
              <div>
                <small>Điện thoại</small>
                <strong>0898 479 840</strong>
              </div>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────── FOOTER ────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1: Brand + Social */}
          <div className="footer__brand">
            <a className="logo" href="#top">
              <span className="logo__icon">QM</span>
              <span className="logo__text">.dev</span>
            </a>
            <p className="footer__brand-desc">
              Chuyên thiết kế và cho thuê website bán hàng thương mại điện tử
              với hệ thống quản trị nghiệp vụ toàn diện. Đồng hành cùng bạn
              từ ý tưởng đến vận hành thực tế.
            </p>
            <div className="footer__social">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Zalo"
              >
                <span className="footer__social-zalo">Z</span>
              </a>
              <a href={PHONE_URL} aria-label="Điện thoại">
                <Phone />
              </a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="footer__col-title">Danh mục</h4>
            <div className="footer__col-links">
              <a href="#top">Trang chủ</a>
              <a href="#services">Dịch vụ</a>
              <a href="#features">Tính năng</a>
              <a href="#pricing">Bảng giá</a>
              <a href="#project">Dự án mẫu</a>
              <a href="#contact">Liên hệ</a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer__col-title">Dịch vụ</h4>
            <div className="footer__col-links">
              <a href="#services">Website bán hàng</a>
              <a href="#services">Hệ thống quản trị</a>
              <a href="#services">Quản lý tồn kho</a>
              <a href="#services">Dashboard báo cáo</a>
              <a href="#services">Triển khai VPS</a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="footer__col-title">Liên hệ</h4>
            <div className="footer__contact-item">
              <MapPin />
              <span>
                <a href={MAPS_URL} target="_blank" rel="noreferrer">
                  {ADDRESS}
                </a>
              </span>
            </div>
            <div className="footer__contact-item">
              <Phone />
              <span>
                <a href={PHONE_URL}>0898 479 840</a>
              </span>
            </div>
            <div className="footer__contact-item">
              <Facebook />
              <span>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                  facebook.com/angquangminh
                </a>
              </span>
            </div>
            <div className="footer__contact-item">
              <ArrowUpRight />
              <span>
                <a href={LIVE_PROJECT_URL} target="_blank" rel="noreferrer">
                  cuahanglina.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Quang Minh Dev — Thiết kế website
            thương mại điện tử chuyên nghiệp.
          </p>
          <div className="footer__bottom-links">
            <a href="#top">Về đầu trang</a>
            <a href={LIVE_PROJECT_URL} target="_blank" rel="noreferrer">
              Xem dự án mẫu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────── MAIN COMPONENT ────────── */
export default function PortfolioLanding() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Header />
      <HeroSlider />
      <StatsBar />
      <Services />
      <Features />
      <ProjectShowcase />
      <Pricing />
      <Commitments />
      <Contact />
      <Footer />
    </main>
  );
}
