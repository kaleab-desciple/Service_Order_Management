function parsePagination(query) {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const offset = (page - 1) * limit;
  const validSortFields = ['customer_id', 'name', 'email', 'phone', 'company', 'created_at'];
  const sortBy = validSortFields.includes(query.sortBy) ? query.sortBy : 'customer_id';
  const sortOrder = query.sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  return {
    page,
    limit,
    offset,
    sortBy,
    sortOrder,
  };
}

module.exports = { parsePagination };