function HeaderItem({ name, Icon, isForm, handleSubmit, fields, openModal }) {
  if (isForm) {
    return (
      <button
        onClick={() => openModal({ handleSubmit, fields, name })}
        className="text-white flex items-center gap-3
        text-[15px] font-semibold cursor-pointer hover:underline
        underline-offset-8 mb-2 bg-transparent border-none"
      >
        <Icon />
        <h2 className="">{name}</h2>
      </button>
    );
  }

  return (
    <button
      className="text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2 bg-transparent border-none"
    >
      <Icon />
      <h2 className="">{name}</h2>
    </button>
  );
}

export default HeaderItem;
