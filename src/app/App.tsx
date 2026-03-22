import Desktop from '../imports/Desktop-11-388';
import Mobile from '../imports/Mobile-11-618';

export default function App() {
  return (
    <div className="size-full">
      {/* Desktop version - shown on screens >= 1024px */}
      <div className="hidden lg:block size-full">
        <Desktop />
      </div>
      
      {/* Mobile version - shown on screens < 1024px */}
      <div className="block lg:hidden size-full">
        <Mobile />
      </div>
    </div>
  );
}