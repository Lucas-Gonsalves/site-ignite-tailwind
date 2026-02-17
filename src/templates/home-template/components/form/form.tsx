import { FormBody } from "../form-body";
import { FormFooter } from "../form-footer";
import { FormHeader } from "../form-header";

export const Form = () => {
  return (
    <div className="mt-6 flex flex-col">
      <form
        name="settings"
        action=""
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <FormHeader />
        <FormBody />
        <FormFooter />
      </form>
    </div>
  );
};
