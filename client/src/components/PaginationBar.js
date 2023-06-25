import Link from 'next/link';

function PaginationBar({ page, totalPages }) {
  const generatePageLinks = () => {
    const links = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === page;

      links.push(
        <Link href={`/products?page=${i}`} key={i}>
          <a className={isActive ? 'active' : ''}>{i}</a>
        </Link>
      );
    }

    return links;
  };

  return <div className="pagination-bar">{generatePageLinks()}</div>;
}

export default PaginationBar;
