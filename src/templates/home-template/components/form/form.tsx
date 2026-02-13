import { Mail } from "lucide-react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export const Form = () => {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-small text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" title="Cancel" variant="empty" />
          <Button id="settings" type="submit" title="Save" />
        </div>
      </div>

      <form
        action=""
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
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
            icon={Mail}
          />
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label
            htmlFor="your-photo"
            className="text-sm font-medium text-zinc-700"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <div></div>
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input id="role" defaultValue="CTO" />
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <div></div>
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label
            htmlFor="time-zone"
            className="text-sm font-medium text-zinc-700"
          >
            Time zone
          </label>
          <div></div>
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div></div>
        </div>

        <div className="grid-cols-settings-form grid gap-3 pb-5">
          <label
            htmlFor="portfolio-projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              share a few snippets of your work.
            </span>
          </label>
          <div></div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button type="button" title="Cancel" variant="empty" />
          <Button type="submit" title="Save" />
        </div>
      </form>
    </div>
  );
};
