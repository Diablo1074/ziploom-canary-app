// DELIBERATE TEST FILE (2026-11-09): a known-unsafe query, added to prove ZipLoom's
// "Fix It For Me" opens a fix pull request end to end. Nothing imports or runs this
// module; server.js does not reference it. Merge ZipLoom's fix PR, then delete this file.
function findUser(db, req) {
  const sql = "SELECT * FROM users WHERE id = " + req.query.id;
  return db.query(sql);
}

module.exports = { findUser };
