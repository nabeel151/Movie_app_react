export default function Pagination({ page, setPage, totalPages }) {
  const totalPagesToShow = 2;

  const start = Math.max(page - totalPagesToShow, 1);
  const end = Math.min(page + totalPagesToShow, totalPages);

  const pages = [];

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 py-8">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className="px-4 h-10 border border-gray-700 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Left dots */}
      {start > 1 && <span className="px-2 text-gray-400">...</span>}

      {/* Pages */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-10 h-10 rounded border ${
            page === p
              ? "bg-[#6ac045] text-white"
              : "border-gray-700 text-white"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Right dots */}
      {end < totalPages && (
        <span className="px-2 text-gray-400">...</span>
      )}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        className="px-4 h-10 border border-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}