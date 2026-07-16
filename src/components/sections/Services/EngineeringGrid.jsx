import GeneralCard from "./../../ui/GeneralCard";
export default function EngineeringGrid({ items = [] }) {
  return (
    <div className="w-full max-w-295 mx-auto mt-5 grid md:grid-cols-3 gap-px bg-gsa-gray-2 border border-dashed border-gsa-gray-2 overflow-hidden max-[860px]:grid-cols-1">
      {items.map((item) => (
        <div key={item.id}>
          <GeneralCard data={item} icon={item.icon} animated />
        </div>
      ))}
    </div>
  );
}
