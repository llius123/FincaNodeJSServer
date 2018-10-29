module.exports.get = function(table, data) {
    return `SELECT * from ${table} WHERE id=${data.id}`;
}