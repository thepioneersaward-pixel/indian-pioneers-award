import { Pioneer } from "@/types/pioneer";
import PioneerHero from "./PioneerHero";
import PioneerNote from "./PioneerNote";
import PioneerSection from "./PioneerSection";
import RecognitionMetadata from "./RecognitionMetadata";
import VerificationPlaceholder from "./VerificationPlaceholder";
import ShareProfile from "./ShareProfile";
import ProfileNavigation from "./ProfileNavigation";

interface PioneerProfileProps {
  pioneer: Pioneer;
}

export default function PioneerProfile({ pioneer }: PioneerProfileProps) {
  return (
    <article className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Breadcrumb */}
        <ProfileNavigation direction="back" />
        
        {/* Hero Section */}
        <PioneerHero pioneer={pioneer} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-16 lg:mt-24">
          
          {/* Main Editorial Content (Left/Center) */}
          <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24">
            
            {pioneer.pioneerNote && (
              <PioneerNote content={pioneer.pioneerNote} />
            )}
            
            {pioneer.about && (
              <PioneerSection title="ABOUT" content={pioneer.about} />
            )}
            
            {pioneer.whatTheyDo && (
              <PioneerSection title="WHAT SHE DOES" content={pioneer.whatTheyDo} />
            )}
            
            {pioneer.theirWork && (
              <PioneerSection title="HER WORK" content={pioneer.theirWork} />
            )}
            
            {pioneer.whyRecognised && (
              <PioneerSection title="WHY SHE IS RECOGNISED" content={pioneer.whyRecognised} />
            )}
            
          </div>
          
          {/* Metadata Sidebar (Right) */}
          <aside className="lg:col-span-4 flex flex-col gap-10">
            <RecognitionMetadata pioneer={pioneer} />
            <VerificationPlaceholder />
            <ShareProfile name={pioneer.name} recognitionTitle={pioneer.recognitionTitle} />
          </aside>
          
        </div>

        {/* Closing CTA and Navigation */}
        <div className="mt-32 pt-16 border-t border-gold/20">
          <ProfileNavigation direction="forward" />
        </div>
      </div>
    </article>
  );
}
