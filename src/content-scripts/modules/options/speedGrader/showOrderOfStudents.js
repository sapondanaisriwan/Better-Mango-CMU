import { keyShowOrderStudents } from "../../../../data/storage-key";
import { injectStyle } from "../../utils/injectStyle";
import { removeElementById } from "../../utils/removeElement";

let isOrderOptionEnabled = false;

const editText = (ele, text = "") => {
  if (!ele) return;

  if (!isOrderOptionEnabled) {
    ele.textContent = text;
    return;
  }

  ele.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
      node.nodeValue = text;
    }
  });
};

const removeOrderStudent = async () => {
  const orderElements = document.getElementsByClassName("numberCircle");
  [...orderElements].forEach((ele) => ele.remove());
};

const addOrderToStudent = async (studentStatusClass, ele, index) => {
  if (!studentStatusClass) return;

  const iconSpanElement = ele.querySelector("span.speedgrader-selectmenu-icon");
  if (!iconSpanElement) return;

  // remove before inserting
  if (studentStatusClass === "statusOrange") {
    editText(iconSpanElement);
  }

  await removeOrderStudent();
  iconSpanElement.innerHTML += `
      <span class="numberCircle ${studentStatusClass}"><span>${
    index + 1
  }</span></span>
  `;
};

const determineStatusClass = (ele) => {
  if (ele.classList.contains("graded")) return "statusGreen";
  if (
    ele.classList.contains("not_graded") ||
    ele.classList.contains("resubmitted")
  )
    return "statusOrange";
  return "";
};

const processStudentList = (studentList) => {
  [...studentList].forEach((ele, index) => {
    const studentStatusClass = determineStatusClass(ele);
    addOrderToStudent(studentStatusClass, ele, index);
  });
};

const main = () => {
  const studentList = document.querySelectorAll(
    "#students_selectmenu-menu > li"
  );
  studentList.length > 0 && processStudentList(studentList);
};

const handleFocusIn = ({ target }) => {
  if (!isOrderOptionEnabled) return;

  if (target.closest("#students_selectmenu-menu")) {
    main();
  }
};

export const optionShowOrderOfStudents = async (status) => {
  isOrderOptionEnabled = status;

  if (!status) {
    // remove before inserting
    await removeOrderStudent();
    removeElementById(keyShowOrderStudents);
    document
      .querySelectorAll(
        "#students_selectmenu-menu > li.not_graded, #students_selectmenu-menu > li.resubmitted"
      )
      .forEach((ele) => {
        editText(ele.querySelector("span.speedgrader-selectmenu-icon"), "●");
      });
    return;
  }
  injectStyle(
    keyShowOrderStudents,
    `
    .graded .ui-selectmenu-item-icon.speedgrader-selectmenu-icon i {
      display: none !important;
    }
    .ui-selectmenu-item-icon.speedgrader-selectmenu-icon {
      font-size: 0.875rem !important;
    }
    `
  );
  main();
  document.addEventListener("focusin", handleFocusIn);
};
