import { Copyright } from "./_copyright";
import { FooterHeader } from "./_footer-header";
import { GetInTouch } from "./_get-in-touch";
import { MenuNavItems } from "./_menu-nav-items";
import { SeeForYourself } from "./_see-for-yourself";

export function DesktopFooter() {
  return (
    <div className="altra-container pt-12 pb-8 flex flex-col gap-12">
      <FooterHeader logoWidth={164} logoHeight={28} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <SeeForYourself />
        </section>

        <section className="flex gap-16">
          <div className="flex-1">
            <GetInTouch />
          </div>

          <div className="flex-1">
            <MenuNavItems />
          </div>
        </section>
      </div>

      <section className="pt-9 shadow-linear-t">
        <Copyright />
      </section>
    </div>
  );
}
