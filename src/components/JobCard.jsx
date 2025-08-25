export default function JobCard({ title, company, location, salary, tags }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-blue-600 font-medium mt-1">{salary}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
