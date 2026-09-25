import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>;
}
export function ArrowLeft(props: IconProps) {
  return <svg {...base} {...props}><path d="m15 18-6-6 6-6"/></svg>;
}
export function ArrowRight(props: IconProps) {
  return <svg {...base} {...props}><path d="m9 18 6-6-6-6"/></svg>;
}
export function Menu(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}
export function X(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
export function Check(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>;
}
export function ExternalLink(props: IconProps) {
  return <svg {...base} {...props}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>;
}
export function Code(props: IconProps) {
  return <svg {...base} {...props}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>;
}
export function Shield(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>;
}
export function Box(props: IconProps) {
  return <svg {...base} {...props}><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
}
export function Chart(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></svg>;
}
export function Phone(props: IconProps) {
  return <svg {...base} {...props}><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.17 12.8 19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9Z"/></svg>;
}
export function Facebook(props: IconProps) {
  return <svg {...base} {...props}><path d="M14 8h3V4.5C16.5 4.2 15.6 4 14.5 4 12.3 4 11 5.3 11 7.8V10H8v4h3v7h4v-7h3l.5-4H15V8.8c0-.5.2-.8 1-.8Z"/></svg>;
}
export function Store(props: IconProps) {
  return <svg {...base} {...props}><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>;
}
export function Inventory(props: IconProps) {
  return <svg {...base} {...props}><path d="M20 8v13H4V8"/><path d="M2 5h20v3H2z"/><path d="M10 12h4"/></svg>;
}
export function Payment(props: IconProps) {
  return <svg {...base} {...props}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
}
export function Deploy(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2"/><path d="m9.2 22 3-7 3 7"/><path d="m12.7 17-2-1 .5-3"/></svg>;
}
export function Cart(props: IconProps) {
  return <svg {...base} {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
}
export function Warehouse(props: IconProps) {
  return <svg {...base} {...props}><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10h12"/></svg>;
}
export function Tag(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>;
}
export function Order(props: IconProps) {
  return <svg {...base} {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>;
}
export function Category(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
}
export function Analytics(props: IconProps) {
  return <svg {...base} {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;
}
export function Star(props: IconProps) {
  return <svg {...base} {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}
export function Dashboard(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>;
}
export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
