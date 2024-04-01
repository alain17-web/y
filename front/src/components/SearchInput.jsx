
 const SearchInput = () => {
    return (
        <div style={{ position: 'relative' }}>
            <input
                type="search"
                placeholder="Search"
                className="bg-[#EFF3F4] py-4 px-12 pr-16 rounded-3xl text-xl"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    marginLeft: '10px'
                }}
            >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>

        </div>
    );
};

export default SearchInput