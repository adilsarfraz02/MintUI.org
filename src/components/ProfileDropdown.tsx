import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  Avatar,
  User,
} from "@nextui-org/react";

export default function ProfileDropdown() {
  return (
    <Dropdown
      radius="sm"
      classNames={{
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Avatar
          size="md"
          className="cursor-pointer active:ring-default-800 focus:ring-default-800 focus-within:ring-2 active:ring-2 border-2 border-transparent "
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
            <User
            name="Adil Sarfraz"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description={`adilsarfr00@gmail.com`}
              avatarProps={{
                size: "sm",
                
              }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
