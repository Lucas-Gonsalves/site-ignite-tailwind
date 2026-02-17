import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from "lucide-react";

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
          <Input id="first-name" defaultValue="Lucas" />
          <Input id="last-name" defaultValue="Gonçalves" />
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
        <Input id="role" defaultValue="CTO" />
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
          Country
        </label>

        <InputSelect placeholder="Select a country...">
          <InputSelectItem value="brazil" text="Brazil" />
          <InputSelectItem value="united-states" text="United States" />
        </InputSelect>
      </div>

      <div className="grid-cols-settings-form grid gap-3 pb-5">
        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
          Timezone
        </label>

        <InputSelect placeholder="Select a timezone...">
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
            <InputSelect defaultValue="normal-text">
              <InputSelectItem
                defaultChecked
                value="normal-text"
                text="Normal Text"
              />
            </InputSelect>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
              >
                <BoldIcon className="h-4 w-4" strokeWidth={3} />
              </button>

              <button
                type="button"
                className="cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
              >
                <ItalicIcon className="h-4 w-4" strokeWidth={3} />
              </button>

              <button
                type="button"
                className="cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
              >
                <LinkIcon className="h-4 w-4" strokeWidth={3} />
              </button>

              <button
                type="button"
                className="cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
              >
                <ListIcon className="h-4 w-4" strokeWidth={3} />
              </button>

              <button
                type="button"
                className="cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
              >
                <ListOrderedIcon className="h-4 w-4" strokeWidth={3} />
              </button>
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
