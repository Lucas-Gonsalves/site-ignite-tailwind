import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { InputFile } from "@/components/input-file";
import { InputSelect } from "@/components/input-select";
import { InputSelectItem } from "@/components/input-select/components";
import { Textarea } from "@/components/textarea";

export const FormBody = () => {
  return (
    <>
      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label
          htmlFor="first-name"
          className="text-sm font-medium text-zinc-700"
        >
          Name
        </label>
        <div className="grid grid-cols-2 gap-6">
          <Input
            id="first-name"
            defaultValue="Lucas"
            autoComplete="family-name"
          />
          <Input
            id="last-name"
            defaultValue="Gonçalves"
            autoComplete="additional-name"
          />
        </div>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          defaultValue="lucaseluz@gmail.com"
          icon={MailIcon}
          autoComplete="email"
        />
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label
          htmlFor="file-photo"
          className="text-sm font-medium text-zinc-700"
        >
          Your photo
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            This will be displayed on your profile.
          </span>
        </label>
        <InputFile.Root className="flex items-start gap-5">
          <InputFile.ImagePreview />
          <InputFile.Trigger htmlFor="file-photo" />
          <InputFile.Controll id="file-photo" />
        </InputFile.Root>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label htmlFor="role" className="text-sm font-medium text-zinc-700">
          Role
        </label>
        <Input id="role" defaultValue="CTO" autoComplete="organization" />
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <div className="text-sm font-medium text-zinc-700">Country</div>

        <InputSelect id="country" placeholder="Select a country...">
          <InputSelectItem value="brazil" text="Brazil" />
          <InputSelectItem value="united-states" text="United States" />
        </InputSelect>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <div className="text-sm font-medium text-zinc-700">Timezone</div>

        <InputSelect id="timezone" placeholder="Select a timezone...">
          <InputSelectItem
            value="pacific"
            text="Pacific Standard Time (UTC-03:00)"
          />
          <InputSelectItem
            value="american"
            text="American São Paulo (UTC-03:00)"
          />
        </InputSelect>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
          Bio
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Write a short introduction.
          </span>
        </label>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <InputSelect id="bio" defaultValue="normal-text">
              <InputSelectItem
                defaultChecked
                value="normal-text"
                text="Normal Text"
              />
            </InputSelect>
            <div className="flex items-center gap-1">
              <Button type="button" variant="ghost">
                <BoldIcon className="h-4 w-4" strokeWidth={3} />
              </Button>

              <Button type="button" variant="ghost">
                <ItalicIcon className="h-4 w-4" strokeWidth={3} />
              </Button>

              <Button type="button" variant="ghost">
                <LinkIcon className="h-4 w-4" strokeWidth={3} />
              </Button>

              <Button type="button" variant="ghost">
                <ListIcon className="h-4 w-4" strokeWidth={3} />
              </Button>

              <Button type="button" variant="ghost">
                <ListOrderedIcon className="h-4 w-4" strokeWidth={3} />
              </Button>
            </div>
          </div>
          <Textarea
            id="bio"
            defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
          />
        </div>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label
          htmlFor="project-file"
          className="text-sm font-medium text-zinc-700"
        >
          Portfolio projects
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Share a few snippets of your work.
          </span>
        </label>
        <InputFile.Root className="flex flex-col gap-3">
          <InputFile.Trigger htmlFor="project-file" />
          <InputFile.FileList />
          <InputFile.Controll id="project-file" multiple />
        </InputFile.Root>
      </div>
    </>
  );
};
