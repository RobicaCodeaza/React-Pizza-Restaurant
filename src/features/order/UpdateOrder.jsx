import { useFetcher, useActionData } from "react-router-dom";
import Button from "../../ui/Button";
import { getOrder, updateOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  const formErrors = useActionData();
  console.log(formErrors);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priorirty</Button>
      {/* <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Phone number</label>
        <div className="grow">
          <input type="tel" name="phone" required className="input w-full" />
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </div>
      </div> */}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  // console.log("update");
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  // const formData = await request.formData();
  // const input = Object.fromEntries(formData);
  // const errors = {};

  // if (!isValidPhone(input.phone))
  //   errors.phone = "Please give us your correct phone number";

  // console.log(errors);
  // if (Object.keys(errors).length > 0) return errors;
  // return "smth";
  return null;
}
