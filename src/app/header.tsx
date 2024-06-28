import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <div className="border-b py-4 bg-gray-50 flex justify-between items-center">
      <div className="container mx-auto">FileDrive</div>
      <div className="mr-4 flex gap-2">
        <OrganizationSwitcher />
        <UserButton />
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
