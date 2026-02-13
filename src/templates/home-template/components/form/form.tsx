import { MailIcon, UploadCloudIcon, UserIcon } from "lucide-react";

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
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
              <UserIcon className="h-8 w-8 text-violet-500" />
            </div>

            <label
              htmlFor="file-photo"
              className="group hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-colors duration-200 hover:border-violet-200 hover:text-violet-500"
            >
              <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 transition-colors duration-200 group-hover:border-violet-50 group-hover:bg-violet-100">
                <UploadCloudIcon className="h-5 w-5 text-zinc-600 transition-colors duration-200 group-hover:text-violet-600" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-sm">
                  <strong className="font-semibold text-violet-700">
                    Click to upload
                  </strong>{" "}
                  or drag and drop
                </span>
                <span className="text-sm">
                  SVG, PNG, JPG, or GIF (max. 800x400px)
                </span>
              </div>
            </label>
            <input type="file" className="sr-only" id="file-photo" />
          </div>
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
