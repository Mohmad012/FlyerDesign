import FacebookIcon from "@/components/icons/social/FacebookIcon"
import InstagramIcon from "@/components/icons/social/InstagramIcon"
import LinkedinIcon from "@/components/icons/social/LinkedinIcon"
import SnapchatIcon from "@/components/icons/social/SnapchatIcon"
import TwitterIcon from "@/components/icons/social/TwitterIcon"


export const footerLinks = {
  "about voucherek": [
    { title: 'info about voucherek', href: '/' },
    { title: 'call us', href: '/' },
  ],
  "my account": [
    { title: 'sign in & register', href: '/' },
    { title: 'my orders', href: '/' },
    { title: 'my addresses', href: '/' },
    { title: 'wishlist', href: '/' },
    { title: 'my profile', href: '/' },
    { title: 'my cart', href: '/' },
  ],
  "shop with voucherek": [
    { title: 'frequently asked', href: '/' },
    { title: 'terms', href: '/' },
    { title: 'privacy policy', href: '/' },
  ]
}

export const socialLinks = [
  { icon: <InstagramIcon height={28} />, href: '/#' },
  { icon: <TwitterIcon height={28} />, href: '/#' },
  { icon: <FacebookIcon height={28} />, href: '/#' },
  { icon: <LinkedinIcon height={28} />, href: '/#' },
  { icon: <SnapchatIcon height={28} />, href: '/#' },
]