import { Slider } from "@nextui-org/react";
import { useStorageState } from "../../hooks/useStorage";

function SliderControl({ label, storageKey, step, maxValue, minValue }) {
  const [value, setValue, isLoaded] = useStorageState(storageKey);

  return (
    <>
      {isLoaded && (
        <>
          <Slider
            defaultValue={value}
            onChangeEnd={setValue}
            label={label}
            step={step ?? 1}
            maxValue={maxValue}
            minValue={minValue ?? 1}
            color="secondary"
            classNames={{
              base: "max-w-md bg-content1 p-3",
              thumb: "w-5 h-5 shadow shadow-gray-500 after:bg-white",
            }}
          />
        </>
      )}
    </>
  );
}

export default SliderControl;
