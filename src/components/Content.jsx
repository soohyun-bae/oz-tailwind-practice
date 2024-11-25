export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className="w-[300px] rounded-[10px] mb-[3px]" src={content.img} alt={content.title} />
      <span className="text-sm-[12px] text-[#d7fa00] border border-[#d7fa00] p-[4px 5px] rounded-[3px]">모집중</span>
      <div className="text-sm-[18px] font-semibold">{content.title}</div>
      <p className="text-sm-[12px] text-gray-200">{content.subtitle}</p>
    </div>
  );
}
