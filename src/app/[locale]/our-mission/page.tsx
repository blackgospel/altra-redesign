import { Divider } from "@/components/global/divider";
import {
  OurMissionHero,
  OurStory,
  Team,
  Values,
} from "@/components/sections/our-mission";

export default function OurMissionPage() {
  return (
    <>
      <OurMissionHero className="bg-light-blue-60" />

      <OurStory className="pt-24" />

      <Divider className="altra-container m t-24" />

      <Values className="py-24" />

      <Team />
    </>
  );
}
