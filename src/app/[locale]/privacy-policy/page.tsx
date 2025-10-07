import {
  PrivacyPolicyContent,
  PrivacyPolicyHero,
} from "@/components/sections/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyHero className="bg-light-blue-60" />

      <PrivacyPolicyContent />
    </main>
  );
}
