import React, { useState } from "react";

// Generate 50+ mock applications
const companies = [
	"Acme Corp",
	"Globex Inc",
	"Initech",
	"Umbrella Co",
	"Wayne Enterprises",
	"Stark Industries",
	"Oscorp",
	"Wonka Industries",
	"Cyberdyne Systems",
	"Hooli",
	"Massive Dynamic",
	"Soylent Corp",
	"Tyrell Corp",
	"Virtucon",
	"Gringotts",
	"Pied Piper",
	"Monsters Inc",
	"Aperture Science",
	"Black Mesa",
	"Dunder Mifflin",
	"Babel Fish",
	"Oceanic Airlines",
	"Gekko & Co",
	"Duff Beer",
	"Good Burger",
	"Prestige Worldwide",
	"Vandelay Industries",
	"Bluth Company",
	"Paper Street Soap",
	"Sterling Cooper",
	"Los Pollos Hermanos",
	"Central Perk",
	"Cheers",
	"Moe's Tavern",
	"The Krusty Krab",
	"Pizza Planet",
	"Freddy Fazbear's",
	"Shady Oaks",
	"Cloud 9",
	"The Nakatomi Corp",
	"The Daily Planet",
	"The Magic Box",
	"The Leaky Cauldron",
	"The Three Broomsticks",
	"The Prancing Pony",
	"The Green Dragon",
	"The Garrison",
	"The Winchester",
	"The Bronze",
	"The Peach Pit",
	"The Max",
];
const positions = [
	"Software Engineer",
	"Frontend Developer",
	"Backend Developer",
	"QA Analyst",
	"Product Manager",
	"Data Scientist",
	"UX Designer",
	"DevOps Engineer",
	"Support Specialist",
	"Business Analyst",
];
const statuses = ["Application Sent", "Interview", "Rejected", "Second Stage"];

function randomDate(start, end) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	)
		.toISOString()
		.slice(0, 10);
}

const mockData = Array.from({ length: 50 }, (_, i) => ({
	company: companies[i % companies.length],
	position: positions[i % positions.length],
	date: randomDate(new Date(2024, 0, 1), new Date()),
	status: statuses[Math.floor(Math.random() * statuses.length)],
}));

const columns = [
	{ key: "company", label: "Company Name" },
	{ key: "position", label: "Position" },
	{ key: "status", label: "Status" },
	{ key: "date", label: "Date Applied" },
];

const PAGE_SIZE = 10;

function Applications() {
	const [search, setSearch] = useState("");
	const [sortKey, setSortKey] = useState("date");
	const [sortDir, setSortDir] = useState("desc");
	const [page, setPage] = useState(1);

	// Filter and sort
	let filtered = mockData.filter((row) =>
		columns.some((col) =>
			row[col.key].toLowerCase().includes(search.toLowerCase())
		)
	);
	filtered = filtered.sort((a, b) => {
		if (a[sortKey] < b[sortKey]) return sortDir === "asc" ? -1 : 1;
		if (a[sortKey] > b[sortKey]) return sortDir === "asc" ? 1 : -1;
		return 0;
	});

	// Pagination
	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
	const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	const handleSort = (key) => {
		if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
		else {
			setSortKey(key);
			setSortDir("asc");
		}
	};

	// Status badge color
	const statusClass = (status) => {
		switch (status) {
			case "Application Sent":
				return "badge bg-primary";
			case "Interview":
				return "badge bg-info text-dark";
			case "Second Stage":
				return "badge bg-success";
			case "Rejected":
				return "badge bg-danger";
			default:
				return "badge bg-secondary";
		}
	};

	return (
		<div className="card border-0 shadow-sm">
			<div className="card-body">
				<h2 className="mb-4">My Applications</h2>
				<div className="d-flex mb-3 align-items-center">
					<input
						type="text"
						className="form-control w-auto me-2"
						placeholder="Search applications..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							setPage(1);
						}}
					/>
					<span className="ms-auto">Total: {filtered.length}</span>
				</div>
				<div className="table-responsive">
					<table className="table table-hover align-middle table-borderless shadow-sm rounded bg-white">
						<thead className="table-light">
							<tr>
								{columns.map((col) => (
									<th
										key={col.key}
										style={{
											cursor: "pointer",
											whiteSpace: "nowrap",
											fontWeight: 700,
											letterSpacing: 1,
											padding: "1rem 1.5rem",
										}}
										className="text-dark text-uppercase small border-bottom bg-light"
										onClick={() => handleSort(col.key)}
									>
										{col.label}
										{sortKey === col.key && (
											<span> {sortDir === "asc" ? "▲" : "▼"}</span>
										)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{paged.length === 0 ? (
								<tr>
									<td colSpan={columns.length} className="text-center">
										No applications found.
									</td>
								</tr>
							) : (
								paged.map((row, idx) => (
									<tr key={idx} className="align-middle">
										<td className="fw-semibold text-dark">{row.company}</td>
										<td>{row.position}</td>
										<td>
											<span className={statusClass(row.status)}>
												{row.status}
											</span>
										</td>
										<td>{row.date}</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
				<div className="d-flex justify-content-between align-items-center mt-3">
					<div>
						Page {page} of {totalPages}
					</div>
					<div>
						<button
							className="btn btn-sm btn-outline-primary me-2"
							disabled={page === 1}
							onClick={() => setPage(page - 1)}
						>
							Previous
						</button>
						<button
							className="btn btn-sm btn-outline-primary"
							disabled={page === totalPages}
							onClick={() => setPage(page + 1)}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Applications;
