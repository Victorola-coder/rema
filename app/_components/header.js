
export default function Header({text, children}) {
  return (
    <header className="flex justify-start items-center py-4">
      <div className="flex justify-between items-center gap-6">
        <div className="bg-[#D9D9D9] animate-[ping_1.5s_infinite] rounded-full  p-[6px] ml-2 duration-200"></div>
        <span className="uppercase  font-bold py-2"> {text}</span>
        {children}
      </div>
    </header>
  );
}
