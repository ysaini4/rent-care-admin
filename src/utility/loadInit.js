export const loadInit = () => {
  const $ = global.$;
  $(function() {
    $("#example1").DataTable();
    /*$("#example2").DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: false,
      autoWidth: true
    });*/
  });
};
