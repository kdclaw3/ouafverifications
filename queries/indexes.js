module.exports = {
  print: false,
  queries: {
    CISADM: `select table_name, count(*) cnt from all_indexes where status != 'VALID' and owner = 'CISADM' and table_name like 'W1%' group by table_name;`,
    STGADM: `select table_name, count(*) cnt from all_indexes where status != 'VALID' and owner = 'STGADM' and table_name like 'W1%' group by table_name;`
  }
};
