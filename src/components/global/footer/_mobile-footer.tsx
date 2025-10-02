import { Copyright } from "./_copyright";
import { FooterHeader } from "./_footer-header";
import { GetInTouch } from "./_get-in-touch";
import { MenuNavItems } from "./_menu-nav-items";
import { SeeForYourself } from "./_see-for-yourself";

export function MobileFooter() {
  return (
    <div className="altra-container py-8 flex flex-col gap-10">
      <FooterHeader logoWidth={164} logoHeight={28} />

      <GetInTouch />

      <MenuNavItems />

      <SeeForYourself />

      <section className="pt-9 shadow-linear-t">
        <Copyright />
      </section>
    </div>
  );
}
