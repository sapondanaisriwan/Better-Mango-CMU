function Container({ classes, children }) {
  return (
    <div
      className={`min-w-[300px] w-[350px] mx-auto border-1 border-content4 ${
        classes ? classes : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
