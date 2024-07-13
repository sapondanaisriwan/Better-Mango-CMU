import {
  keyFillCircleColor,
  KeyHideGradedStudent,
  KeyPopupFullHeight,
  KeyPopupSize,
  keyShowOrderStudents,
} from "../../data/storage-key";
import SliderControl from "../ui/SliderControl";
import SwitchControl from "../ui/SwitchControl";

export default function Main() {
  return (
    <div className="flex flex-col p-3 bg-content2 dark:bg-background">
      <div className="bg-content1 rounded-lg overflow-hidden">
        <SwitchControl
          label="Fill Circle Colors"
          storageKey={keyFillCircleColor}
        />
        <SwitchControl
          label="Show Order of Students"
          storageKey={keyShowOrderStudents}
        />
        <SwitchControl
          label="Hide Graded Students"
          storageKey={KeyHideGradedStudent}
        />
        <SwitchControl
          label="Full Popup Height"
          storageKey={KeyPopupFullHeight}
        />
        <SliderControl
          label="Popup Size (px)"
          storageKey={KeyPopupSize}
          minValue={300}
          step={50}
          maxValue={500}
        />
      </div>
    </div>
  );
}
