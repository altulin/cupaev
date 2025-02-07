/* eslint-disable no-useless-escape */
import { ICard } from "@/components/home/promo/types";
import { checkObj } from "@/service/checkObj";
import { fieldDatePicker } from "@/UI/form_hook/utils/options/datepicker";
import { fieldTextArea } from "@/UI/form_hook/utils/options/textarea";
import { ITextInput } from "@/UI/form_hook/utils/types";
import { required } from "@/UI/form_hook/utils/validation/errText";

const getLabel = (key: string) => {
  let label;

  switch (key) {
    case "title":
      label = "название";
      break;
    case "description":
      label = "описание";
      break;
    case "date":
      label = "дата";
      break;
    case "time":
      label = "время";
      break;
    case "photo":
      label = "фото";
      break;
    default:
      label = "";
      break;
  }

  return label;
};

export const formData = (change: Omit<ICard, "id">): ITextInput[] | null => {
  if (!change || !checkObj(change)) return null;
  const keys = Object.keys(change);
  const regMatch =
    /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

  const areaList = ["description", "title"];
  const dateList = ["date", "time"];

  return keys.map((key) => {
    if (areaList.includes(key)) {
      return fieldTextArea({
        label_text: getLabel(key),
        name: key,
        minRows: 1,
      });
    }

    if (dateList.includes(key)) {
      return fieldDatePicker({
        label_text: getLabel(key),
        name: key,
        modifier: key,
      });
    }

    if (key === "photo") {
      return {
        name: key,
        label_text: getLabel(key),
        validation_type: "string",
        validations: [
          {
            type: "matches",
            params: [regMatch, "Введите корректную ссылку"],
          },
          {
            type: "required",
            params: [required],
          },
        ],
      };
    }

    return {
      name: key,
      label_text: getLabel(key),
      validation_type: "string",
      validations: [
        {
          type: "required",
          params: [required],
        },
      ],
    };
  });
};
