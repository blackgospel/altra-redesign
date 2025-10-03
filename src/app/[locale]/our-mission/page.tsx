import { Divider } from "@/components/global/divider";
import {
  OurMissionHero,
  OurStory,
  Team,
  Values,
} from "@/components/sections/our-mission";

export default function OurMissionPage() {
  return (
    <main>
      <OurMissionHero className="bg-light-blue-60" />

      <OurStory className="pt-24" />

      <Divider className="altra-container mt-24" />

      <Values className="py-24" />

      <Team />
    </main>
  );
}
